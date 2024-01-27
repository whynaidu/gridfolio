import { About } from '@/components/About';
import { BannerText } from '@/components/BannerText';
import { MainContent } from '@/components/MainContent';

export default function resume() {
  return (
    <main className="flex min-h-screen flex-col px-72">
      <BannerText title="About Me" />

      <About />
    </main>
  );
}
