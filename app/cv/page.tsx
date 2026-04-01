import Link from "next/link";

export default function CV() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black overflow-hidden relative">
      {/* Navigation Header */}
      <nav className="border-b border-gray-200 dark:border-gray-800 flex-none bg-white dark:bg-black z-10 w-full relative">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-black dark:text-white">
              Elnur Imamaliyev
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/cv" className="hover:text-gray-600 dark:hover:text-gray-400 transition" aria-current="page">
                CV
              </Link>
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Talks
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - PDF Viewer */}
      <main className="flex-1 w-full bg-gray-100 dark:bg-gray-900 border-none m-0 p-0 relative">
        <object
          data="/files/cv.pdf"
          type="application/pdf"
          className="absolute inset-0 w-full h-full"
          aria-label="Elnur Imamaliyev CV"
        >
          <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center text-gray-700 dark:text-gray-300 bg-white dark:bg-black">
            <p className="mb-4">It appears your browser does not support embedded PDFs.</p>
            <a 
              href="/files/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Download PDF Instead
            </a>
          </div>
        </object>
      </main>
    </div>
  );
}