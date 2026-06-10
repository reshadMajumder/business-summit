
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Business Summit',
  description: 'The pinnacle of corporate leadership and innovation.',
  icons: {
    icon: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
    shortcut: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
    apple: 'https://res.cloudinary.com/dzgs1uhn0/image/upload/v1780388039/bsl_aex2m3.png',
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
