import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { NavBar } from "@/components/menu/header/NavBar";
import { FooterComponent } from "@/components/menu/footer/footer";

const inter = Inter({ subsets: ["greek"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (

    <SessionProvider session={session}>
      <html lang="en">
        <body className="font-mono ">
          <NavBar />
          {children}
          <FooterComponent />
        </body>
      </html>
    </SessionProvider>
  );
}
