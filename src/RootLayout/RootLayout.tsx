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
          
          <Navbar />
          <div className="flex-grow">
          {children}
          </div>
          <Footer/>
          
        </ThemeProvider>
      
  );
}
