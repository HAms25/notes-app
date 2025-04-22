import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <div>

            <h2 className="text-2xl font-bold mb-4">Anot</h2>
            <p className="text-sm">Hola Usuario</p>
            <nav>
                <Link
                href={"/notes"}
                className="block py-2 px-4 rounded hover:bg-gray-700"
                > 
                Notas
                </Link>
                <Link
                href={"/notes"}
                className="block py-2 px-4 rounded hover:bg-gray-700"
                > 
                Notas
                </Link>
                <button>
                    Cerrar Sesión
                </button>
            </nav>
            </div>
        </aside>
    )
};
