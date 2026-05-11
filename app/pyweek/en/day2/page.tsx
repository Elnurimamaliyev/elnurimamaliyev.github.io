"use client";
import Link from "next/link";

export default function Day2En() {
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
              <Link href="/pyweek/az/day2" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
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
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">
                Day 2
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Day 2
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Assignment Analysis & AI-Powered Prototyping
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              May 8, 2026 · 2–3 hours
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Review homework solutions from Day 1. Learn rapid prototyping with AI tools — ChatGPT, Claude, and Copilot. Master prompt engineering techniques and live demos of effective coding workflows.
              </p>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">First Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Homework Review Session</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🔍</span>
                  <span>Review solutions from domain-specific challenges (Bioinformatics, Neuroscience)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🔍</span>
                  <span>Discuss common pitfalls and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🔍</span>
                  <span>Q&A session and code optimization tips</span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Second Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">AI-Powered Prototyping</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🤖</span>
                  <span><strong>ChatGPT & Claude:</strong> Using AI for code generation and debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🤖</span>
                  <span><strong>GitHub Copilot:</strong> Real-time AI suggestions in your IDE</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🤖</span>
                  <span><strong>Prompt Engineering:</strong> Writing effective prompts for better results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🤖</span>
                  <span><strong>Live Demo:</strong> Building a prototype from scratch with AI assistance</span>
                </li>
              </ul>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Topics Covered</h2>
              <div className="flex flex-wrap gap-3">
                {["Code Review", "AI Tools", "Prompt Engineering", "Prototyping", "ChatGPT", "Claude", "Copilot"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Slides */}
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">🎬 Slides</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                View or download the Day 2 presentation slides below:
              </p>
              <div className="mb-6 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700" style={{ height: "600px" }}>
                <iframe
                  src="/slides/PyWeek_AZ_Gun_2.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="PyWeek Day 2 Slides"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/slides/PyWeek_AZ_Gun_2.pdf"
                  download
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  ⬇️ Download Slides (PDF)
                </a>
              </div>
            </section>

            {/* Recordings */}
            <section className="bg-gradient-to-r from-pink-50 to-fuchsia-50 dark:from-pink-900/20 dark:to-fuchsia-900/20 border border-pink-200 dark:border-pink-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">🎥 Recordings</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Access the video recording from Day 2:
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://drive.google.com/file/d/1d7OoHfpc2j7F5C7hZy-pVQ17vDromxb2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition inline-flex items-center gap-2 w-fit"
                >
                  ▶️ Watch Video Recording
                </a>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/en/day1"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← Day 1
              </Link>
              <Link
                href="/pyweek/en/day3"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Day 3 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
