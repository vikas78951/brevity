import type { Metadata } from 'next';
import { inter } from '@/lib/fonts/inter';
import './globals.css';
import { Header } from '@/components/common';
import { ThemeProvider } from '@/components/common';

export const metadata: Metadata = {
  title: 'Brevity',
  description: 'Voice sync',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
