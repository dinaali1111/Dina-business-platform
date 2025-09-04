# 🏢 Dina Business Platform

<div align="center">
  
  ![Business Platform](https://img.shields.io/badge/Business-Platform-blue?style=for-the-badge)
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)

  **Modern Business Platform with Advanced Admin Dashboard**
  
  [Live Demo](https://dina-business-platform.vercel.app) · [Documentation](#documentation) · [Report Bug](https://github.com/dinaali1111/dina-business-platform/issues)

</div>

---

## ✨ Features

### 🔐 Authentication & Authorization
- **Secure Login System** with JWT tokens
- **Role-based Access Control** (Admin/User)
- **Protected Routes** with middleware
- **Session Management** with auto-logout

### 🎛️ Admin Dashboard
- **Comprehensive Admin Panel** with modern UI
- **User Management** - View, edit, delete users
- **Content Management** - Services, FAQs, Messages
- **Analytics Dashboard** with real-time stats
- **System Settings** configuration

### 👤 User Experience
- **Responsive Design** - Works on all devices
- **User Profile Management** - Update personal info
- **Service Browsing** - Explore available services
- **Contact Forms** - Direct communication
- **FAQ System** - Self-service support

### 🛠️ Technical Features
- **Server-Side Rendering (SSR)** with Next.js 14
- **Database Integration** with Prisma ORM
- **API Routes** for backend functionality
- **Modern UI Components** with Tailwind CSS
- **TypeScript** for type safety
- **SEO Optimized** with metadata

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ 
npm or yarn
Git
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dinaali1111/dina-business-platform.git
   cd dina-business-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL="your_database_url"
   JWT_SECRET="your_jwt_secret"
   NEXTAUTH_SECRET="your_nextauth_secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📱 Screenshots

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Modern+Business+Homepage)

### 🎛️ Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400/059669/FFFFFF?text=Advanced+Admin+Dashboard)

### 📊 Analytics
![Analytics](https://via.placeholder.com/800x400/DC2626/FFFFFF?text=Real-time+Analytics)

---

## 🏗️ Project Structure

```
dina-business-platform/
├── 📁 src/
│   ├── 📁 app/                    # Next.js 14 App Router
│   │   ├── 📁 (dashboard)/        # Dashboard routes group
│   │   │   └── 📁 admin/          # Admin panel pages
│   │   ├── 📁 api/                # API routes
│   │   ├── 📁 auth/               # Authentication pages
│   │   └── 📄 layout.tsx          # Root layout
│   ├── 📁 components/             # Reusable components
│   │   ├── 📁 admin/              # Admin-specific components
│   │   ├── 📁 auth/               # Authentication components
│   │   ├── 📁 sections/           # Page sections
│   │   └── 📁 ui/                 # UI components
│   ├── 📁 contexts/               # React contexts
│   ├── 📁 lib/                    # Utility libraries
│   └── 📁 utils/                  # Helper functions
├── 📁 prisma/                     # Database schema & migrations
├── 📁 public/                     # Static assets
└── 📁 .github/workflows/          # CI/CD workflows
```

---

## 🛠️ Built With

| Technology | Description | Version |
|------------|-------------|---------|
| **Next.js** | React framework for production | 14.0.0 |
| **TypeScript** | Static type checking | 5.0+ |
| **Tailwind CSS** | Utility-first CSS framework | 3.3+ |
| **Prisma** | Next-generation ORM | 5.0+ |
| **React** | JavaScript library for UI | 18.2+ |
| **JWT** | JSON Web Tokens for auth | Latest |

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ performance
- 🎯 **Core Web Vitals**: All metrics in green
- 📱 **Mobile Optimized**: Perfect responsive design
- 🔍 **SEO Friendly**: Meta tags and structured data
- ♿ **Accessibility**: WCAG 2.1 AA compliant

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript checks |

---

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dinaali1111/dina-business-platform)

### Manual Deployment
```bash
npm run build
npm run start
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Prisma** for the modern database toolkit

---

## 📞 Contact & Support

<div align="center">

**Dina Ali** - Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://dinaali-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dinaali1111)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dinaali1111)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dinaali1111@gmail.com)

**Project Link**: [https://github.com/dinaali1111/dina-business-platform](https://github.com/dinaali1111/dina-business-platform)

**Live Demo**: [https://dina-business-platform.vercel.app](https://dina-business-platform.vercel.app)

</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Dina Ali](https://github.com/dinaali1111)

</div>
