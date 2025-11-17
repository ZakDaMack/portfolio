import { ReactNode } from "react";

import "../app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="w-screen max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
