// app/layout.jsx
import "./globals.css";
import Provider from "./providers";
import { Metadata } from 'next';


export const metadata = {
  title: 'Satyam Baranwal | Portfolio',
  description: 'Portfolio of Satyam Baranwal, a Full-Stack Developer specializing in modern web technologies like Next.js, React, and Node.js.',
  keywords: 'Satyam Baranwal, Portfolio, Next.js Developer, Full Stack Developer, React, Web Developer',
  authors: [{ name: 'Satyam Baranwal' }],
  openGraph: {
    title: 'Satyam Baranwal | Portfolio',
    description: 'Check out my work, projects, and experience as a Next.js Developer.',
    url: 'https://satyam-portfolio.com',
    siteName: 'Satyam Portfolio',
    images: [
      {
        url: 'https://satyam-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Satyam Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satyam Baranwal | Portfolio',
    description: 'Portfolio of Satyam Baranwal, a Next.js Full-Stack Developer.',
    images: ['https://satyam-portfolio.com/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-black text-white font-sans antialiased">
        <Provider>{children}</Provider>

         {/* ✅ Add Schema Markup */}
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Satyam Baranwal',
              url: 'https://satyam-portfolio.com',
              sameAs: [
                'https://github.com/Satyam998413',
                'https://linkedin.com/in/yourusername',
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
