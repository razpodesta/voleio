import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes'; // Asumimos que crearás este componente
import { cn } from '@/lib/utils'; // Asumimos que crearás esta utilidad

import './global.css';

// --- CARGA OPTIMIZADA DE FUENTES ---
// Coloca tus archivos de fuente en `apps/voleio-app/public/fonts/`
const fontSans = localFont({
  src: '../../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = localFont({
  src: '../../../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-display',
  display: 'swap',
});

// --- METADATA PARA SEO ---
export const metadata: Metadata = {
  title: {
    default: 'Voleio - La Comunidad de Tenis de Playa',
    template: '%s | Voleio',
  },
  description: 'Conecta, juega y compite. La plataforma definitiva para encontrar partidos y jugadores de tenis de playa en tiempo real.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Aquí irán el Header, el Footer y otros providers globales */}
          <div className="relative flex min-h-screen flex-col">
            {/* <SiteHeader /> */}
            <main className="flex-1">{children}</main>
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
