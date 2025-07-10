'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from '@/components/query-provider';
// import { useLanguageStore } from '@/store/language-store';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  // const { language } = useLanguageStore();
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone="UTC"
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
} 