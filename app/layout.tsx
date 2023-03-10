import './globals.css';

import ReduxProvider from '@/src/providers/ReduxProvider';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
