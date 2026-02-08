import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Muhammad Nassar - Full Stack Developer & Agentic AI Specialist',
  description: 'Professional portfolio showcasing Full Stack Development, Agentic AI systems, and SaaS platforms built with modern technologies.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, Python, AI, SaaS, Portfolio',
  authors: [{ name: 'Muhammad Nassar' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Muhammad Nassar - Full Stack Developer & Agentic AI Specialist',
    description: 'Professional portfolio showcasing Full Stack Development, Agentic AI systems, and SaaS platforms.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-primary via-secondary to-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
