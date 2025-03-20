import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Aplikasi 1",
        image: "/images/project1.png",
        link: "#",
    },
    {
        id: 2,
        title: "Aplikasi 2",
        image: "/images/project2.png",
        link: "#",
    },
];

export default function ProjectsPage() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-900">Proyek Saya</h1>
            <p className="text-gray-600 mt-2">
                Berikut adalah beberapa proyek yang telah saya kerjakan.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-gray-800">Aplikasi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition text-center"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={150}
                            height={150}
                            className="mx-auto rounded-lg"
                        />
                        <h3 className="text-lg font-medium mt-4">{project.title}</h3>
                        <a
                            href={project.link}
                            className="mt-2 inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900"
                        >
                            Lihat Proyek
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}