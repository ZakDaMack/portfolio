import { ReactNode } from "react";

import "../app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
  headerClassName
}: Readonly<{
  children: ReactNode;
  headerClassName?: string;
}>) {
  return (
    <html lang="en">
      <body>
        <Header className={headerClassName} />
        <main className="w-screen max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
