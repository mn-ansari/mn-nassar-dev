# 🎨 Customization Guide

Detailed guide to customize every aspect of your portfolio website.

## Table of Contents
1. [Hero Section](#hero-section)
2. [About Section](#about-section)
3. [Skills Section](#skills-section)
4. [Projects Section](#projects-section)
5. [Testimonials Section](#testimonials-section)
6. [Contact Section](#contact-section)
7. [Colors & Styling](#colors--styling)
8. [Fonts & Typography](#fonts--typography)

---

## Hero Section

**File**: `components/sections/Hero.tsx`

### Change Your Name
```typescript
// Line ~60
<span className="gradient-text">Nassar Khan</span>
```
Change to your name.

### Update Introduction Text
```typescript
// Line ~70
Full Stack Developer building AI-powered business systems and scalable SaaS platforms. 
Specialized in modern web technologies and intelligent automation.
```

### Update Skills Display
```typescript
// Line ~80
React • Next.js • Node.js • Python • FastAPI • LangChain
```

### Update Social Links
```typescript
// Line ~100 (Social Links array)
{ icon: FiMail, href: 'mailto:nassar@example.com', label: 'Email' },
{ icon: FiGithub, href: 'https://github.com/nassar', label: 'GitHub' },
{ icon: FiLinkedin, href: 'https://linkedin.com/in/nassar', label: 'LinkedIn' },
```

Replace with your actual links.

### Add Profile Image
Replace the emoji placeholder with an actual image:
```typescript
// Instead of
<div className="text-6xl mb-4">🚀</div>

// Use
<Image 
  src="/profile.jpg" 
  alt="Profile" 
  width={400} 
  height={400}
  className="rounded-2xl"
/>
```

(Add `import Image from 'next/image';` at top)

---

## About Section

**File**: `components/sections/About.tsx`

### Update Bio
```typescript
// Line ~50
I'm a passionate Full Stack Developer specializing in building intelligent business systems 
and scalable SaaS platforms. Based on my Final Year Project on Agentic AI, I create 
automation-driven solutions that solve real-world problems.
```

### Update Experience Cards
```typescript
// Line ~100 (Experience array)
{
  title: 'Education',
  details: 'BUITEMS - Computer Science Student',
  description: 'Strong foundation in software development...',
},
```

Add or modify 4 items as needed.

### Update Stats
```typescript
// Line ~80 (Stats array)
{ icon: FiBriefcase, label: 'Projects Completed', value: '15+' },
```

Change values to your actual numbers.

---

## Skills Section

**File**: `components/sections/Skills.tsx`

### Add/Remove Skill Categories
```typescript
// Line ~15 (skillCategories array)
{
  category: 'Frontend',
  skills: ['React.js', 'Next.js', 'TypeScript', ...],
  color: 'from-blue-600 to-cyan-600',
},
```

### Update Skills in Category
```typescript
skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Your Skill']
```

### Update Proficiency Levels
```typescript
// Line ~95 (Proficiency array)
{ skill: 'React & Next.js', level: 90 },
{ skill: 'Your Skill', level: 85 },
```

---

## Projects Section

**File**: `components/sections/Projects.tsx`

### Add a New Project
```typescript
const projects = [
  {
    id: 7,
    title: 'Your Project Title',
    description: 'Brief description of what it does',
    image: '💡', // Emoji or emoji name
    tech: ['React', 'Node.js', 'MongoDB'],
    problem: 'What problem does it solve?',
    solution: 'How did you solve it?',
    github: 'https://github.com/yourusername/project',
    live: 'https://yourdomain.com/project',
    featured: true, // true to show in featured section
  },
];
```

### Project Object Fields

| Field | Type | Description |
|-------|------|-------------|
| id | number | Unique identifier |
| title | string | Project name |
| description | string | Brief description |
| image | string | Emoji or emoji code |
| tech | array | Technologies used |
| problem | string | Problem statement |
| solution | string | How you solved it |
| github | string | GitHub repository URL |
| live | string | Live demo URL |
| featured | boolean | Show in featured section |

### Featured vs Other Projects
- `featured: true` → Shows in featured section with detailed view
- `featured: false` → Shows in grid with compact view

---

## Testimonials Section

**File**: `components/sections/Testimonials.tsx`

### Add a Testimonial
```typescript
// Line ~15 (testimonials array)
{
  name: 'Person Name',
  role: 'Their Role',
  company: 'Their Company',
  content: 'What they say about you...',
  rating: 5,
  avatar: '👨‍💼', // Emoji representing them
},
```

### Modify Testimonial Stats
```typescript
// Line ~80 (Stats array)
{ label: 'Happy Clients', value: '10+' },
{ label: 'Projects Shipped', value: '15+' },
```

---

## Contact Section

**File**: `components/sections/Contact.tsx`

### Update Contact Methods
```typescript
// Line ~25 (contactMethods array)
{
  icon: FiMail,
  label: 'Email',
  value: 'nassar@example.com',
  href: 'mailto:nassar@example.com',
},
```

### Update Social Links
```typescript
// Line ~35 (socialLinks array)
{ 
  icon: FiMail, 
  href: 'mailto:your-email@gmail.com', 
  label: 'Email' 
},
```

### Handle Form Submission

Default form just logs to console. For real email, integrate:

**Option 1: EmailJS (Recommended)**
```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
  setSubmitted(true);
};
```

**Option 2: Backend API**
```typescript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  if (response.ok) setSubmitted(true);
};
```

---

## Colors & Styling

### Primary Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#0f172a',      // Dark background (change hex code)
  secondary: '#1e293b',    // Secondary background
  accent: '#3b82f6',       // Main accent color (blue)
  light: '#f8fafc',        // Light text
}
```

### Use Custom Colors in Components
```typescript
// Use predefined colors
className="bg-primary text-light"

// Or use gradient
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Or direct colors
className="bg-gradient-to-r from-your-color-600 to-your-color-900"
```

### Common Color Combinations

**Blue & Purple** (Current)
```
from-blue-600 to-purple-600
```

**Green & Emerald**
```
from-green-600 to-emerald-600
```

**Orange & Red**
```
from-orange-600 to-red-600
```

**Pink & Rose**
```
from-pink-600 to-rose-600
```

---

## Fonts & Typography

**File**: `app/globals.css`

### Change Font Family
```css
/* In globals.css */
body {
  font-family: 'Your Font Name', sans-serif;
}
```

### Or use Google Fonts
**File**: `app/layout.tsx`

```typescript
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

Then in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', '-apple-system', 'sans-serif'],
}
```

---

## Navigation

**File**: `components/Navbar.tsx`

### Update Menu Items
```typescript
// Line ~45 (menuItems array)
const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, // New item
  { label: 'Blog', href: '/blog' }, // External route
];
```

### Update Logo
```typescript
// Line ~58
<motion.div className="text-2xl font-bold gradient-text">
  N  {/* Change to your initial or logo */}
</motion.div>
```

---

## Adding New Sections

### Create New Section
1. Create file: `components/sections/NewSection.tsx`

```typescript
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const NewSection: React.FC = () => {
  return (
    <section id="new-section" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2>Your Section Title</h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. Import in `app/page.tsx`:
```typescript
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <NewSection />
      {/* ... other sections */}
    </div>
  );
}
```

3. Add link in Navbar:
```typescript
{ label: 'New', href: '#new-section' }
```

---

## Dark/Light Mode (Optional)

To add theme toggle, implement using `next-themes`:

```bash
npm install next-themes
```

Then add theme switching logic to Navbar.

---

## Tips for Best Results

✅ **Do:**
- Keep it professional and clean
- Use consistent spacing (py-24 for sections)
- Test on mobile before deploying
- Keep file names descriptive
- Use meaningful variable names

❌ **Avoid:**
- Too many colors (stick to 3-4)
- Too much animation (can be distracting)
- Outdated project screenshots
- Broken links
- Placeholder text in production

---

## Need More Help?

Refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Happy customizing! 🎨**
