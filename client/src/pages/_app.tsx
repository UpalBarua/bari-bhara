import { ThemeProvider } from '@/components/theme-provider';
import { AuthContextProvider } from '@/context/auth-context';
import RootLayout from '@/layouts/root-layout';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RootLayout>
            <Component {...pageProps} />
            <Toaster richColors />
          </RootLayout>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
