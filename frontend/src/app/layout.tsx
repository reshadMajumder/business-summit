
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Business Summit | Global Expansion & Funding Architecture',
    template: '%s | Business Summit'
  },
  description: 'The pinnacle of corporate leadership and innovation. Business Summit connects global investors with high-impact projects, facilitating G2G, G2B, and B2B collaborations across 150+ countries.',
  keywords: ['Business Summit', 'Investment', 'Global Expansion', 'Funding Architecture', 'Networking', 'Executive Coaching', 'G2G Relations', 'B2B Partnerships', 'Dr. Haider Uzzaman'],
  metadataBase: new URL('https://businesssummit.net'),
  openGraph: {
    title: 'Business Summit | Global Expansion & Funding Architecture',
    description: 'Connecting global investors with high-impact projects. The premier venue for cross-border collaboration.',
    url: 'https://businesssummit.net',
    siteName: 'Business Summit',
    images: [
      {
        url: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
        width: 1200,
        height: 630,
        alt: 'Business Summit Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Summit | Global Expansion & Funding Architecture',
    description: 'Connecting global investors with high-impact projects.',
    images: ['https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
    shortcut: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
    apple: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
