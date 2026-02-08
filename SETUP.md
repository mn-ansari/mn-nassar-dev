# 🚀 Quick Setup Guide

Welcome! Here's how to get your portfolio website running in minutes.

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

## Step-by-Step Setup

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. You should see your portfolio!

### 3️⃣ Customize Your Content

#### Update Hero Section
**File**: `components/sections/Hero.tsx`
- Change your name: "Hi, I am **Nassar Khan**"
- Update your bio and skills
- Update social media links

#### Update About Section
**File**: `components/sections/About.tsx`
- Add your education details
- Update your background story
- Modify experience items

#### Update Skills Section
**File**: `components/sections/Skills.tsx`
- Edit skill categories
- Add/remove technologies
- Update proficiency percentages

#### Add Your Projects
**File**: `components/sections/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'What it does',
    image: '🎨', // Change emoji or add image
    tech: ['React', 'Node.js'],
    problem: 'What problem it solves',
    solution: 'How it was solved',
    github: 'https://github.com/yourusername/project',
    live: 'https://project-demo.com',
    featured: true, // true for featured section
  },
];
```

#### Update Contact Information
**File**: `components/sections/Contact.tsx`
- Update email: `nassar@example.com` → your email
- Update phone number
- Update location

**File**: `components/Footer.tsx`
- Update social media links
- Update company links

### 4️⃣ Build for Production
```bash
npm run build
```

### 5️⃣ Deploy

#### Option A: Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in seconds!

#### Option B: Netlify
1. Push to GitHub
2. Visit netlify.com
3. Connect your repository
4. Deploy automatically

#### Option C: Self-Host
```bash
npm run build
npm run start
```

## 🎨 Customization Tips

### Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: '#0f172a',    // Dark background
  secondary: '#1e293b',  // Secondary
  accent: '#3b82f6',     // Main color (blue)
}
```

### Update Branding
- Logo: Update "N" in `Navbar.tsx` to your initial
- Favicon: Add `favicon.ico` to `public/` folder
- Site title: Edit `layout.tsx` metadata

### Add Images
Place images in `public/` folder and import:
```typescript
import Image from 'next/image';
<Image src="/your-image.jpg" alt="description" width={400} height={400} />
```

## 🔗 Important Links

Update these links with your actual URLs:

**In Hero Section** (`components/sections/Hero.tsx`):
- Email: `mailto:your-email@example.com`
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-profile`

**In Contact Section** (`components/sections/Contact.tsx`):
- Email: `nassar@example.com` → `your-email@example.com`
- Phone: Update phone number
- Location: Update location

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Module not found errors?**
```bash
rm -r node_modules package-lock.json
npm install
```

**Build fails?**
Check all file paths are correct and all imports exist.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Icons Library](https://react-icons.github.io/react-icons/)

## ✅ Before Going Live

- [ ] Update all personal information
- [ ] Add your projects with correct links
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Check form submission works
- [ ] Verify all links are correct
- [ ] Update meta tags in `layout.tsx`
- [ ] Add favicon to `public/`
- [ ] Run build test: `npm run build`

## 🎉 You're Ready!

Your professional portfolio is now ready. Deploy it and start showcasing your work!

## 📞 Need Help?

Refer to the main [README.md](./README.md) for more information.

---

**Happy coding! 🚀**
