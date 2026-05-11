"use client";
import Link from "next/link";

export default function Day1En() {
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
              <Link href="/pyweek/az/day1" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                🌐 Azərbaycanca
              </Link>
              <Link href="/pyweek/en" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Day Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                PyWeek Workshop
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                Day 1
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Day 1
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Python Basics & Scientific Programming Intro
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              May 4, 2026 · 2–3 hours
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Learn Python fundamentals — variables, data types, loops, conditionals, functions, dictionaries, and file I/O with CSV. Introduction to NumPy, Pandas, Matplotlib, and SciPy with practical challenges.
              </p>
            </section>

            {/* Recordings */}
            <section className="bg-gradient-to-r from-pink-50 to-fuchsia-50 dark:from-pink-900/20 dark:to-fuchsia-900/20 border border-pink-200 dark:border-pink-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">🎥 Recordings</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Access the video recording and files from Day 1:
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://drive.google.com/file/d/1D68-uOT4V-wu93dq0PCIzkBqXhiqDu5F/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition inline-flex items-center gap-2 w-fit"
                >
                  ▶️ Watch Video Recording
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1LkqAQGBx6-KKnBgPu7zZNaNBuaWZjPQf?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-700 transition inline-flex items-center gap-2 w-fit"
                >
                  📁 Access File Collection
                </a>
              </div>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">First Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Python Fundamentals</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Variables and data types (int, float, string, list, dict, tuple)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Control flow: conditionals (if/elif/else) and loops (for/while)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Functions: definition, parameters, return values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>File I/O and CSV operations with practical examples</span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Second Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Scientific Libraries Introduction</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>NumPy:</strong> Numerical computing and arrays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Pandas:</strong> Data manipulation and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Matplotlib:</strong> Data visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>SciPy:</strong> Scientific computing</span>
                </li>
              </ul>
            </section>

            {/* Resources */}
            <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">📥 Resources & Downloads</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                All practical examples and code are available in the Jupyter Notebook below:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/notebooks/Day1.ipynb"
                  download
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
                >
                  ⬇️ Download Notebook (Day 1)
                </a>
                <Link
                  href="/pyweek/en/resources"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  🔗 All Resources →
                </Link>
              </div>
            </section>

            {/* Slides */}
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">🎬 Slides</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                View or download the Day 1 presentation slides below:
              </p>
              <div className="mb-6 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700" style={{ height: "600px" }}>
                <iframe
                  src="/slides/PyWeek_AZ_Gun_1.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="PyWeek Day 1 Slides"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/slides/PyWeek_AZ_Gun_1.pdf"
                  download
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  ⬇️ Download Slides (PDF)
                </a>
              </div>
            </section>

            {/* Homework */}
            <section className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">📝 Homework</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Complete the homework to reinforce Day 1 material:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Homework/homework/PyWeek_Homework.ipynb"
                  download
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  ⬇️ Download Homework
                </a>
              </div>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Topics Covered</h2>
              <div className="flex flex-wrap gap-3">
                {["Python Basics", "Data Types", "Functions", "File I/O", "NumPy", "Pandas", "Matplotlib"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/en/day0"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← Day 0
              </Link>
              <Link
                href="/pyweek/en/day2"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Day 2 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
