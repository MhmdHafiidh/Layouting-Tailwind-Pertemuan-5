import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Esai',
    description: 'Kumpulan esai dan tulisan saya.',
};

export default function Essays() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-8">
            <header className="text-center">
                <h1 className="font-bold text-5xl">Esai</h1>
                <p className="mt-2 text-lg text-gray-700">Kumpulan pemikiran dan tulisan saya</p>
            </header>
            <div className="mt-8 max-w-2xl text-gray-600">
                <ul className="list-disc list-inside">
                    <li className="mt-2">Esai 1: Perkembangan Teknologi di Era Digital</li>
                    <li className="mt-2">Esai 2: Tantangan dan Peluang di Dunia Web Development</li>
                    <li className="mt-2">Esai 3: Membangun Karir di Bidang Teknologi</li>
                </ul>
            </div>
        </div>
    );
}
