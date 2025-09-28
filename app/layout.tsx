import { Inter } from 'next/font/google'
import { AppProvider } from './contexts/AppContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}



import './globals.css'

export const metadata = {
      generator: 'v0.app'
    };
