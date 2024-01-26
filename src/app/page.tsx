import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-4 border-2">
<Header/>
<MainContent/>
<Footer/>
    </main>
  );
}
