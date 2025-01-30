import React from 'react';
import { DataProvider } from './context/DataContext';
// import { Providers } from "./providers";
import '../globals.css';


<<<<<<< HEAD
export const metadata = {
  title: 'Maria Lou Diaz',
  description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
}
=======
// export const metadata = {
//   title: 'Maria Lou Diaz',
//   description: 'Art director (graphic designer and web developper) specialized in branding. From web development to print design, I help independent workers build their visual identity and launch their project.',
// }
export const metadata = {
  title: "Maria Lou Diaz",
  description: "Graphic designer specialized in branding and visual identity.",
  openGraph: {
    title: "Maria Lou Diaz",
    description: "Graphic designer specialized in branding and visual identity.",
    url: "https://www.marialoudiaz.fr",
    siteName: "Maria Lou Diaz",
    // images: [
    //   {
    //     url: "https://www.votresite.com/image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "Texte alternatif pour l'image",
    //   },
    // ],
    locale: "en_EN",
    type: "website",
  },
};

>>>>>>> new git repo
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
