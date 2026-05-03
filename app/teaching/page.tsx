"use client";
import Link from "next/link";
import { useState } from "react";

export default function Teaching() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Workshop"];

  const teachingItems = [
    {
      title: "PyWeek — Scientific Programming & Data Analysis",
      description: "A comprehensive 3-day workshop introducing scientific programming with Python, NumPy, Pandas, Matplotlib, and SciPy. Hands-on projects with AI-powered prototyping and domain-specific challenges.",
      tags: ["Python", "Data Analysis", "NumPy", "Pandas", "Matplotlib", "SciPy"],
      category: "Workshop",
      level: "Beginner",
      date: "4-8 May, 2026 ",
      institution: "Khazar University"
    },
    {
      title: "Multimodal AI in HCI: Hands-On Workshop",
      description: "Practical workshop on integrating multimodal sensors (eye-tracking, EEG) with machine learning for interactive systems.",
      tags: ["Machine Learning", "HCI", "Multimodal", "Eye-Tracking", "EEG"],
      category: "Workshop",
      level: "Intermediate",
      date: "September, 2025",
      institution: "Baku State University"
    }
  ];

  const filteredItems = teachingItems.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

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
              <Link href="/cv" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                CV
              </Link>
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Talks
              </Link>
              <Link href="/teaching" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                Teaching
              </Link>
              <Link href="/pyweek/az" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                PyWeek
              </Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Teaching</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Courses, workshops, and mentoring in HCI, neuroscience, and machine learning.
          </p>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === option
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <article key={index} className="flex flex-col bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-6">
              <div className="flex flex-col flex-1">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-black dark:text-white leading-snug cursor-default">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{item.date}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                  {item.institution}
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-[11px] font-medium rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2 flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {item.level}
                  </span>
                  {item.title.includes("PyWeek") && (
                    <Link
                      href="/pyweek/en"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                    >
                      Course page →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
