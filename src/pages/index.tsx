

import Hero from '@/components/Hero';
import Footer from "@/components/footer";
import Category from "@/components/category";
import Footer from "@/components/footer";

import { Navbar } from "@/component/navbar";

export default function Home() {
  return (
    <div>

      <Navbar />

      <Hero />
      <Category />
      <Footer />

    </div>
  );
}
