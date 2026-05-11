"use client";
import Link from "next/link";

export default function ResourcesEn() {
  const notebooks = [
    {
      title: "Day 1: Python Fundamentals",
      description: "Variables, loops, functions, dictionaries, file operations, NumPy, Pandas, Matplotlib",
      file: "/notebooks/Day1.ipynb",
      size: "~2 MB",
      topics: ["Python", "NumPy", "Pandas", "Matplotlib", "CSV"],
    },
  ];

  const materials = [
    {
      title: "🎥 Step-by-step Video Tutorial",
      description: "Python & VS Code Setup - Complete guide for beginners",
      link: "https://www.youtube.com/watch?v=1_c1JsRfaFs",
      type: "External Link",
    },
    {
      title: "🐍 Official Python Website",
      description: "Download and install Python",
      link: "https://python.org",
      type: "External Link",
    },
    {
      title: "💻 Visual Studio Code",
      description: "Download the VS Code editor",
      link: "https://code.visualstudio.com",
      type: "External Link",
    },
    {
      title: "📊 Google Colab",
      description: "Run Python without installing anything locally",
      link: "https://colab.research.google.com",
      type: "External Link",
    },
  ];

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
              <Link href="/pyweek/az/resources" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
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
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                PyWeek Workshop
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                Resources
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Resources
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium">
              All Notebooks & Materials for Download
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Videos Section */}
            <section className="bg-gradient-to-r from-pink-50 to-fuchsia-50 dark:from-pink-900/20 dark:to-fuchsia-900/20 border border-pink-200 dark:border-pink-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">🎥 Video Recordings</h2>
              <div className="grid gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1LkqAQGBx6-KKnBgPu7zZNaNBuaWZjPQf?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-pink-400 dark:hover:border-pink-600 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition mb-2">
                        ▶️ Day 1 Recording
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Python Basics & Scientific Programming Intro
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                      Video →
                    </span>
                  </div>
                </a>
                <a
                  href="https://drive.google.com/file/d/1d7OoHfpc2j7F5C7hZy-pVQ17vDromxb2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-pink-400 dark:hover:border-pink-600 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition mb-2">
                        ▶️ Day 2 Recording
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Assignment Analysis & AI-Powered Prototyping
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                      Video →
                    </span>
                  </div>
                </a>
              </div>
            </section>

            {/* Notebooks Section */}
            <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">📓 Jupyter Notebooks</h2>
              <div className="space-y-6">
                {notebooks.map((notebook, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                          {notebook.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {notebook.description}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {notebook.size}
                      </span>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {notebook.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Download Button */}
                    <a
                      href={notebook.file}
                      download
                      className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                ))}
              </div>
            </section>
                        {/* Materials Section */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">🔗 Additional Resources & Links</h2>
              <div className="grid gap-4">
                {materials.map((material, idx) => (
                  <a
                    key={idx}
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition mb-2">
                          {material.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {material.description}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                        {material.type} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Info Box */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                💡 Helpful Tips
              </h3>
              <ul className="text-yellow-800 dark:text-yellow-300 space-y-2">
                <li>✓ Notebooks can be used in Google Colab (no Python installation needed)</li>
                <li>✓ To use locally, install Jupyter: <code className="bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded">pip install jupyter</code></li>
                <li>✓ Open notebook with: <code className="bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded">jupyter notebook Day1.ipynb</code></li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/en"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← PyWeek
              </Link>
              <Link
                href="/pyweek/en/day1"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Day 1 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
