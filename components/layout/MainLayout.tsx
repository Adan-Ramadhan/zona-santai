import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
