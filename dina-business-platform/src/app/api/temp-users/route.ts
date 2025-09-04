import { NextResponse } from 'next/server';

// نظام إدارة المستخدمين المؤقت باستخدام Map للحفظ في الذاكرة
const tempUsersStore = new Map<string, {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}>();

export async function GET() {
  const users = Array.from(tempUsersStore.values()).map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  }));
  
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const { action, email, userData } = await request.json();
  
  switch (action) {
    case 'save':
      tempUsersStore.set(email, userData);
      return NextResponse.json({ success: true, message: 'User saved' });
      
    case 'find':
      const user = tempUsersStore.get(email);
      return NextResponse.json({ user: user || null });
      
    case 'clear':
      tempUsersStore.clear();
      return NextResponse.json({ success: true, message: 'All users cleared' });
      
    default:
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }
}
