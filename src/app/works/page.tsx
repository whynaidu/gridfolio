import { BannerText } from '@/components/BannerText';
import { MainContent } from '@/components/MainContent';
import { Works } from '@/components/Works';

export default function resume() {
  return (
    <main className="flex min-h-screen flex-col px-72">
      <BannerText title="All Works" />
      <Works />
    </main>
  );
}
