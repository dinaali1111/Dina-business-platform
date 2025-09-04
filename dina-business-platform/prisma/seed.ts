import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  await prisma.contact.deleteMany();
  await prisma.fAQ.deleteMany();
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@dina.com',
      role: 'ADMIN',
      password: 'admin123' // In real app, this should be hashed
    }
  });

  // Create services
  const services = [
    {
      title: 'Business Consulting',
      titleAr: 'استشارات الأعمال',
      description: 'Strategic business consulting to help your company grow and succeed in competitive markets.',
      descriptionAr: 'استشارات استراتيجية للأعمال لمساعدة شركتك على النمو والنجاح في الأسواق التنافسية.',
      icon: 'fa-chart-line',
      price: 999.99,
      order: 1,
      isActive: true
    },
    {
      title: 'Digital Marketing',
      titleAr: 'التسويق الرقمي',
      description: 'Comprehensive digital marketing solutions to boost your online presence and reach.',
      descriptionAr: 'حلول تسويق رقمي شاملة لتعزيز حضورك وانتشارك عبر الإنترنت.',
      icon: 'fa-bullhorn',
      price: 599.99,
      order: 2,
      isActive: true
    },
    {
      title: 'Web Development',
      titleAr: 'تطوير المواقع الإلكترونية',
      description: 'Custom web development services using modern technologies and best practices.',
      descriptionAr: 'خدمات تطوير مواقع مخصصة باستخدام التقنيات الحديثة وأفضل الممارسات.',
      icon: 'fa-code',
      price: 1999.99,
      order: 3,
      isActive: true
    },
    {
      title: 'Mobile App Development',
      titleAr: 'تطوير التطبيقات المحمولة',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      descriptionAr: 'تطوير تطبيقات محمولة أصلية ومتعددة المنصات لأنظمة iOS و Android.',
      icon: 'fa-mobile-alt',
      price: 2999.99,
      order: 4,
      isActive: true
    },
    {
      title: 'SEO Optimization',
      titleAr: 'تحسين محركات البحث',
      description: 'Search engine optimization to improve your website visibility and ranking.',
      descriptionAr: 'تحسين محركات البحث لتحسين رؤية موقعك وترتيبه في نتائج البحث.',
      icon: 'fa-search',
      price: 399.99,
      order: 5,
      isActive: false
    }
  ];

  for (const serviceData of services) {
    await prisma.service.create({ data: serviceData });
  }

  // Create FAQs
  const faqs = [
    {
      question: 'What services does Dina Business Solutions offer?',
      questionAr: 'ما هي الخدمات التي تقدمها دينا لحلول الأعمال؟',
      answer: 'We offer a comprehensive range of business services including consulting, digital marketing, web development, mobile app development, and SEO optimization.',
      answerAr: 'نقدم مجموعة شاملة من الخدمات التجارية بما في ذلك الاستشارات والتسويق الرقمي وتطوير المواقع وتطوير التطبيقات المحمولة وتحسين محركات البحث.',
      category: 'general',
      order: 1,
      isActive: true
    },
    {
      question: 'How long does a typical project take?',
      questionAr: 'كم من الوقت يستغرق المشروع العادي؟',
      answer: 'Project timelines vary depending on scope and complexity. Web development projects typically take 4-8 weeks, while mobile apps may take 8-16 weeks.',
      answerAr: 'تختلف الجداول الزمنية للمشاريع حسب النطاق والتعقيد. عادة ما تستغرق مشاريع تطوير المواقع 4-8 أسابيع، بينما قد تستغرق التطبيقات المحمولة 8-16 أسبوعاً.',
      category: 'general',
      order: 2,
      isActive: true
    },
    {
      question: 'What are your pricing models?',
      questionAr: 'ما هي نماذج التسعير الخاصة بكم؟',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements based on your specific needs.',
      answerAr: 'نقدم نماذج تسعير مرنة بما في ذلك المشاريع ذات السعر الثابت والأسعار بالساعة واتفاقيات الاحتفاظ بناءً على احتياجاتك المحددة.',
      category: 'pricing',
      order: 3,
      isActive: true
    },
    {
      question: 'Do you provide ongoing support?',
      questionAr: 'هل تقدمون دعماً مستمراً؟',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solutions remain up-to-date and performing optimally.',
      answerAr: 'نعم، نقدم حزم دعم وصيانة مستمرة شاملة لضمان بقاء حلولك محدثة وتعمل بشكل مثالي.',
      category: 'support',
      order: 4,
      isActive: true
    },
    {
      question: 'What technologies do you use?',
      questionAr: 'ما هي التقنيات التي تستخدمونها؟',
      answer: 'We use cutting-edge technologies including React, Next.js, Node.js, Python, React Native, and cloud platforms like AWS and Azure.',
      answerAr: 'نستخدم تقنيات متطورة بما في ذلك React و Next.js و Node.js و Python و React Native ومنصات الحوسبة السحابية مثل AWS و Azure.',
      category: 'technical',
      order: 5,
      isActive: true
    }
  ];

  for (const faqData of faqs) {
    await prisma.fAQ.create({ data: faqData });
  }

  // Create sample contact messages
  const contacts = [
    {
      name: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '+1234567890',
      subject: 'Website Development Inquiry',
      message: 'Hi, I\'m interested in developing a new website for my business. Can you provide more information about your web development services?',
      status: 'PENDING'
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+0987654321',
      subject: 'Mobile App Development',
      message: 'I need a mobile app for my restaurant business. What\'s the typical timeline and cost for such a project?',
      status: 'READ'
    },
    {
      name: 'Mohammed Hassan',
      email: 'mohammed@example.com',
      subject: 'Digital Marketing Services',
      message: 'Our company is looking to improve our online presence. We\'d like to discuss your digital marketing services.',
      status: 'REPLIED'
    },
    {
      name: 'Lisa Chen',
      email: 'lisa@example.com',
      phone: '+1122334455',
      subject: 'Business Consulting',
      message: 'We\'re a startup looking for business consulting services to help us scale our operations. Can we schedule a consultation?',
      status: 'RESOLVED'
    }
  ];

  for (const contactData of contacts) {
    await prisma.contact.create({ data: contactData });
  }

  console.log('✅ Database seeded successfully!');
  console.log(`📊 Created:`);
  console.log(`  - 1 admin user`);
  console.log(`  - ${services.length} services`);
  console.log(`  - ${faqs.length} FAQs`);
  console.log(`  - ${contacts.length} contact messages`);
}

seed()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
