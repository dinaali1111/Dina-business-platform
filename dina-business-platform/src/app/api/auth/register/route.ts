import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import prisma from '../../../../lib/prisma';
import { TempUserService } from '../../../../lib/tempUserService';

export async function POST(request: Request) {
  try {
    const { email, password, name, phone } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: 'الاسم والبريد الإلكتروني وكلمة المرور مطلوبة' },
        { status: 400 }
      );
    }

    // التحقق من طول كلمة المرور
    if (password.length < 6) {
      return NextResponse.json(
        { message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' },
        { status: 400 }
      );
    }

    try {
      // التحقق من وجود المستخدم
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        return NextResponse.json(
          { message: 'البريد الإلكتروني مستخدم بالفعل' },
          { status: 409 }
        );
      }

      // تشفير كلمة المرور
      const hashedPassword = await hash(password, 12);

      // إنشاء المستخدم الجديد
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'USER'
        }
      });

      return NextResponse.json({
        success: true,
        message: 'تم إنشاء الحساب بنجاح',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });

    } catch (prismaError) {
      console.error('خطأ في قاعدة البيانات، استخدام النظام المؤقت:', prismaError);
      
      // التحقق من وجود المستخدم في النظام المؤقت
      const existingUser = TempUserService.findByEmail(email);
      
      if (existingUser) {
        return NextResponse.json(
          { message: 'البريد الإلكتروني مستخدم بالفعل' },
          { status: 409 }
        );
      }
      
      // تشفير كلمة المرور
      const hashedPassword = await hash(password, 12);
      
      // حفظ المستخدم مؤقتاً
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password: hashedPassword,
        createdAt: new Date()
      };
      
      TempUserService.save(newUser);
      
      return NextResponse.json({
        success: true,
        message: 'تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email
        },
        demo: true
      });
    }

    // الكود التالي للتطبيق الحقيقي مع قاعدة البيانات:
    /*
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'البريد الإلكتروني مستخدم بالفعل' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone: phone || null,
        role: 'USER'
      },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true
      }
    });

    return NextResponse.json({
      message: 'تم إنشاء الحساب بنجاح', 
      user 
    }, { status: 201 });
    */

  } catch (error) {
    console.error('خطأ في إنشاء الحساب:', error);
    return NextResponse.json(
      { message: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
