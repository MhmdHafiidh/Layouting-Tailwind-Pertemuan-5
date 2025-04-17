import Image from 'next/image';
import type { Metadata } from 'next';
import { defaultMetadata } from '../utils/metadata';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman Tentang Saya.',
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home({metadata}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-8">
      <header className="text-center">
        <h1 className="font-bold text-5xl">Muhamad Hafiidh Afandi</h1>
        <p className="mt-2 text-lg text-gray-700">Web Developer & Tech Enthusiast</p>
      </header>
      <div className="mt-8 flex flex-col items-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300">
          <Image src="/images/profill.jpg" alt="Foto Saya" layout="fill" objectFit="cover" />
        </div>
        <p className="mt-6 text-center max-w-lg text-gray-600">
          Halo! Saya seorang pengembang web yang bersemangat dalam membangun aplikasi modern dan inovatif.
          Saya suka bekerja dengan teknologi terbaru dan selalu mencari tantangan baru dalam dunia digital.
        </p>
      </div>
    </div>
  );
}