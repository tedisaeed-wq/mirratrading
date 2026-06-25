import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Mirra Export Trading PLC | Premium Ethiopian Chilled Meat Exporter',
  description: 'Mirra Export Trading PLC is a leading Ethiopian meat export company specializing in premium chilled meat (cattle, goats, sheep) maintained under strict cold chains.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-white text-slate-800 antialiased min-h-screen selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
