import React from 'react';
import { DataProvider } from './context/DataContext';
// import { Providers } from "./providers";
import '../globals.css';


export const metadata = {
  title: 'Maria Lou Diaz',
  description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              <main>
              <DataProvider>
                {children}
              </DataProvider>   
              </main>          
      </body>
    </html>
  )
}
