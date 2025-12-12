
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RootLayoutClient from "./components/RootLayoutClient";
import "./globals.css";


export const metadata = {
  title: "My App",
  description: "My Next.js 13 App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />  
      </head>
      
      <body style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // full viewport height
        }}>
         <Navbar/>
           <RootLayoutClient>{children}</RootLayoutClient>
           
         <Footer/>
   
      </body>
      </html>
  );
}
