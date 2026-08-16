import { ReactNode } from "react";

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
    <>
      <Header className={headerClassName} />
      <main className="w-screen max-w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
