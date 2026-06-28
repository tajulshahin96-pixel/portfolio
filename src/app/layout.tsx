import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <title>TAJUL SHAHIN | Digital Marketer & Web Expert</title>
        <meta name="description" content="Scaling Businesses With Data-Driven Marketing That Delivers Results" />
      </head>
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} bg-background text-on-background antialiased overflow-x-hidden font-plus-jakarta`}>
        {children}
      </body>
    </html>
  );
}
