import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Demo authentication - replace with real authentication later
    if (email === 'admin@dina.com' && password === 'admin123') {
      const token = 'demo-token-' + Date.now();
      
      return NextResponse.json({
        message: 'Login successful',
        token,
        user: {
          id: '1',
          email: 'admin@dina.com',
          name: 'Admin User',
          role: 'admin',
          createdAt: new Date().toISOString()
        }
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
