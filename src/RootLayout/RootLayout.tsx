"use client"
import { ThemeProvider } from "next-themes";
import { Navbar,Footer } from "@/components";



export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
   
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="flex flex-col min-h-screen h-auto">
          <Navbar />
          
          {children}
         
          <Footer/>
          </div>
        </ThemeProvider>
      
  );
}
