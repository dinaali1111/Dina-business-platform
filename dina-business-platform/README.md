# Dina Business Platform 🚀

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

موقع أعمال متكامل مبني بأحدث التقنيات مع لوحة تحكم وقاعدة بيانات.

![Project Screenshot](./public/screenshot.png)

## 🌟 **Live Demo**

🌐 **Live URL**: [https://dina-business.vercel.app](https://dina-business.vercel.app)

### 👤 Test Accounts
```
Admin Account:
Email: admin@dina.com
Password: admin123

User Account:  
Email: user@dina.com
Password: user123
```

## ✨ **المميزات**

- 🎨 **تصميم حديث ومتجاوب** - واجهة مستخدم عصرية تعمل على جميع الأجهزة
- 🔐 **نظام مصادقة متكامل** - تسجيل دخول آمن مع JWT
- 📊 **لوحة تحكم للإدارة** - إدارة شاملة للمحتوى والمستخدمين
- 🌐 **دعم اللغتين العربية والإنجليزية** - واجهة متعددة اللغات
- 📧 **نظام إشعارات بالبريد الإلكتروني** - تنبيهات تلقائية
- 📝 **نظام إدارة المحتوى** - إضافة وتعديل المقالات والصفحات
- 🔍 **محسّن لمحركات البحث (SEO)** - أداء ممتاز في البحث
- 🚀 **أداء عالي** - تحسينات متقدمة للسرعة
- 📱 **Progressive Web App (PWA)** - يعمل كتطبيق جوال

## 🛠️ **التقنيات المستخدمة**

### Frontend
- **Next.js 14** - React Framework مع App Router
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **Lucide React** - Modern Icons

### Backend & Database
- **Next.js API Routes** - Server-side Logic
- **Prisma ORM** - Database Toolkit
- **PostgreSQL** - Relational Database
- **JWT** - Authentication Tokens
- **bcryptjs** - Password Hashing

### Development & Testing
- **Jest** - Unit Testing
- **Playwright** - E2E Testing
- **ESLint** - Code Linting
- **Prettier** - Code Formatting

### Deployment & DevOps
- **Vercel** - Hosting Platform
- **Railway** - Database Hosting
- **GitHub Actions** - CI/CD

## 📋 **المتطلبات**

- Node.js 18+ 
- PostgreSQL (أو أي قاعدة بيانات مدعومة من Prisma)
- npm أو yarn أو pnpm

## 🚀 **التثبيت والتشغيل**

### 1. استنساخ المشروع
```bash
git clone https://github.com/dinaali1111/dina-business-platform.git
cd dina-business-platform
```

### 2. تثبيت المكتبات
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

### 3. إعداد متغيرات البيئة
```bash
cp .env.example .env
```
ثم قم بتعديل ملف `.env` بالقيم الصحيحة:
- أضف رابط قاعدة البيانات في `DATABASE_URL`
- أنشئ `NEXTAUTH_SECRET` عشوائي
- أضف `JWT_SECRET` للمصادقة

### 4. إعداد قاعدة البيانات
```bash
# توليد Prisma Client
npx prisma generate

# تشغيل الـ migrations
npx prisma migrate dev --name init

# إضافة بيانات تجريبية (اختياري)
npm run db:seed
```

### 5. تشغيل المشروع
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح

## 📱 **الصفحات المتاحة**

### للمستخدمين العامة
- `/` - الصفحة الرئيسية
- `/about` - من نحن
- `/services` - خدماتنا
- `/contact` - تواصل معنا
- `/login` - تسجيل الدخول
- `/register` - إنشاء حساب جديد

### للمستخدمين المسجلين
- `/dashboard` - لوحة تحكم المستخدم
- `/profile` - الملف الشخصي
- `/settings` - إعدادات الحساب

### للإدارة (Admins)
- `/admin` - لوحة التحكم الرئيسية
- `/admin/users` - إدارة المستخدمين
- `/admin/settings` - إعدادات الموقع
- `/admin/blogs` - إدارة المقالات
- `/admin/analytics` - إحصائيات الموقع

## 🔧 **الأوامر المتاحة**

```bash
npm run dev          # تشغيل بيئة التطوير
npm run build        # بناء المشروع للإنتاج
npm run start        # تشغيل الإصدار الإنتاجي
npm run lint         # فحص الأكواد
npm run test         # تشغيل الاختبارات
npm run test:e2e     # تشغيل اختبارات E2E
npm run db:studio    # فتح Prisma Studio
npm run db:seed      # إضافة بيانات تجريبية
npm run db:reset     # إعادة تعيين قاعدة البيانات
npm run deploy       # نشر المشروع
```

## 📁 **هيكل المشروع**

```
dina-business-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── admin/          # Admin pages
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   └── globals.css     # Global styles
│   ├── components/         # React Components
│   │   ├── ui/            # Reusable UI components
│   │   ├── sections/      # Page sections
│   │   └── layout/        # Layout components
│   ├── lib/               # Utility functions
│   │   ├── auth.ts        # Authentication logic
│   │   ├── db.ts          # Database connection
│   │   └── utils.ts       # Helper functions
│   ├── contexts/          # React contexts
│   └── types/            # TypeScript types
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── migrations/       # Database migrations
│   └── seed.js          # Seed data
├── public/               # Static files
│   ├── images/          # Image assets
│   └── icons/           # Icon files
├── tests/               # Test files
├── docs/                # Documentation
└── package.json         # Dependencies
```

## 🚀 **النشر (Deployment)**

### النشر على Vercel (مُوصى به)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dinaali1111/dina-business-platform)

```bash
# أو يدوياً
npm install -g vercel
vercel login
vercel --prod
```

### النشر على Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/dinaali1111/dina-business-platform)

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### النشر على Netlify
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## 🔒 **الأمان**

- 🛡️ **مصادقة JWT آمنة** - رموز مشفرة للمصادقة
- 🔐 **تشفير كلمات المرور** - باستخدام bcrypt
- 🚫 **حماية من CSRF** - رموز أمان للنماذج
- 🌐 **HTTPS فقط** - تشفير جميع الاتصالات
- 📝 **تسجيل العمليات** - مراقبة النشاطات المشبوهة

## 🤝 **المساهمة**

نرحب بالمساهمات! الرجاء اتباع الخطوات التالية:

1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/AmazingFeature`)
3. قم بالتعديلات (`git commit -m 'Add some AmazingFeature'`)
4. ارفع التغييرات (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

انظر [CONTRIBUTING.md](CONTRIBUTING.md) للمزيد من التفاصيل.

## 🐛 **الإبلاغ عن الأخطاء**

إذا وجدت خطأ، يرجى فتح [issue](https://github.com/dinaali1111/dina-business-platform/issues) مع:
- وصف واضح للمشكلة
- خطوات إعادة إنتاج الخطأ
- لقطة شاشة إذا أمكن

## 📊 **الإحصائيات**

- ⭐ **GitHub Stars**: قيد التحديث
- 🍴 **Forks**: قيد التحديث
- 🐛 **Issues**: قيد التحديث
- 📈 **Contributors**: قيد التحديث

## 📄 **الرخصة**

MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل

## 📞 **التواصل**

- 🌐 **Website**: [dina-business.com](https://dina-business.com)
- 📧 **Email**: dinaali1111@gmail.com
- 💼 **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/dina-ali)
- 🐱 **GitHub**: [GitHub Profile](https://github.com/dinaali1111)

## 🙏 **شكر خاص**

شكراً لكل من ساهم في هذا المشروع! والشكر موصول لـ:
- [Next.js Team](https://nextjs.org/) للفريمورك الرائع
- [Vercel](https://vercel.com/) للاستضافة المجانية
- [Prisma](https://prisma.io/) لأداة قاعدة البيانات الممتازة
- [Tailwind CSS](https://tailwindcss.com/) للتصميم السريع

## 🗺️ **Roadmap**

- [ ] إضافة نظام دفع متكامل
- [ ] تطبيق الجوال مع React Native
- [ ] دعم المزيد من اللغات
- [ ] تحسينات الأداء المتقدمة
- [ ] إضافة AI Chatbot
- [ ] تكامل مع منصات التواصل الاجتماعي

---

<div align="center">

**صُنع بـ ❤️ بواسطة [Dina Ali](https://github.com/dinaali1111)**

⭐ أعطِ نجمة للمشروع إذا أعجبك!

[🌟 Star](https://github.com/dinaali1111/dina-business-platform) | [🐛 Report Bug](https://github.com/dinaali1111/dina-business-platform/issues) | [✨ Request Feature](https://github.com/dinaali1111/dina-business-platform/issues)

</div>
