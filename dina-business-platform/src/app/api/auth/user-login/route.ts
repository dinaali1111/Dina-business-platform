import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { TempUserService } from '../../../../lib/tempUserService';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'البريد الإلكتروني وكلمة المرور مطلوبان' },
        { status: 400 }
      );
    }

    try {
      // البحث عن المستخدم في قاعدة البيانات
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (user && user.password) {
        // التحقق من كلمة المرور
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (isPasswordValid) {
          // إنشاء JWT token
          const token = jwt.sign(
            { 
              userId: user.id, 
              email: user.email,
              role: user.role.toLowerCase() 
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
          );

          return NextResponse.json({
            success: true,
            message: 'تم تسجيل الدخول بنجاح',
            token,
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role.toLowerCase()
            }
          });
        }
      }

    } catch (prismaError) {
      console.error('خطأ في قاعدة البيانات، استخدام النظام المؤقت:', prismaError);
      
      // البحث في النظام المؤقت
      const tempUser = TempUserService.findByEmail(email);
      
      if (tempUser && tempUser.password) {
        // التحقق من كلمة المرور
        const isPasswordValid = await bcrypt.compare(password, tempUser.password);
        
        if (isPasswordValid) {
          const token = jwt.sign(
            { 
              userId: tempUser.id, 
              email: tempUser.email,
              role: 'user' 
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
          );

          return NextResponse.json({
            success: true,
            message: 'تم تسجيل الدخول بنجاح',
            token,
            user: {
              id: tempUser.id,
              email: tempUser.email,
              name: tempUser.name,
              role: 'user'
            }
          });
        }
      }
      
      // المستخدم التجريبي الافتراضي
      const demoUser = {
        id: 1,
        email: 'user@dina.com',
        password: 'user123',
        name: 'Demo User',
        role: 'user'
      };

      if (email === demoUser.email && password === demoUser.password) {
        const token = jwt.sign(
          { 
            userId: demoUser.id, 
            email: demoUser.email,
            role: demoUser.role 
          },
          process.env.JWT_SECRET || 'your-secret-key',
          { expiresIn: '7d' }
        );

        return NextResponse.json({
          success: true,
          message: 'تم تسجيل الدخول بنجاح (المستخدم التجريبي)',
          token,
          user: {
            id: demoUser.id,
            email: demoUser.email,
            name: demoUser.name,
            role: demoUser.role
          }
        });
      }
    }

    // في حالة فشل المصادقة
    return NextResponse.json(
      { message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
      { status: 401 }
    );

  } catch (error) {
    console.error('خطأ في تسجيل الدخول:', error);
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
