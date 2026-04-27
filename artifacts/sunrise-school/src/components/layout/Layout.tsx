import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
