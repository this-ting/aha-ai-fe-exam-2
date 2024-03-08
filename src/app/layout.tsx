import type { Metadata } from 'next';
import { ubuntu } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aha AI Front-End Exam 2',
  description: 'Aha AI Front-End Exam 2 by Ting Chang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
