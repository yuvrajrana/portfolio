
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RootLayoutClient from "./components/RootLayoutClient";
import "./globals.css";


export const metadata = {
  title: "Yuvraj Singh | React & Next.js Developer",
  description: "Portfolio and projects of Yuvraj Singh, a React, Next.js, and TypeScript enthusiast building modern web applications.",
  keywords: ["Yuvraj Singh", "React", "Next.js", "TypeScript", "Frontend Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Yuvraj Singh" }],
  
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
