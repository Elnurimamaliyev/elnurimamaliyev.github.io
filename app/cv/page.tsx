import Link from "next/link";

export default function CV() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Header */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
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
              <Link href="/timeline" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Timeline
              </Link>
              <Link href="/teaching" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Teaching
              </Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Curriculum Vitae</h1>
            <p className="text-gray-600 dark:text-gray-400">
              My academic and professional background.
            </p>
          </div>
          <a
            href="/files/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-full text-sm font-medium transition shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[800px] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900/50">
          <iframe
            src="/files/cv.pdf"
            className="w-full h-full border-none"
            title="Elnur Imamaliyev CV"
          />
        </div>
      </main>
    </div>
  );
}