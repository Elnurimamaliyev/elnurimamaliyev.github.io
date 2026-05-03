"use client";
import Link from "next/link";
import { useState } from "react";

export default function Talks() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Past", "Upcoming"];

  const talks = [
    {
      title: "Beyond Univariate Envelope Brain Modeling: Increasing EEG response accuracy with the multivariate Amplitude-Binned TRF model",
      event: "Munich Brain Day 2025",
      type: "Poster",
      status: "Past",
      date: "May 2025",
      authors: "Imamaliyev, E., Bleichner, M.",
      doi: "10.13140/RG.2.2.31742.65602",
      link: "https://github.com/Elnurimamaliyev/AMBI4NS",
      linkText: "View Repository",
      description: "Presented research on multivariate amplitude-binned envelope techniques for improved neural response prediction using temporal response functions (TRF) with EEG data.",
      image: "/images/talks/amb4ns_talk.png"
    },
    {
      title: "The Coupleccino Model - Computational Modeling of the Effects of Caffeine on Electrically Coupled Retzius Cells using Hodgkin-Huxley Neuron model",
      event: "Interdisciplinary College (IK) 2025",
      type: "Poster",
      status: "Past",
      date: "July 2024",
      authors: "Imamaliyev, E., Duken, M.",
      doi: "10.13140/RG.2.2.11609.99687",
      link: "https://github.com/Elnurimamaliyev/Coupleccino-HH-Model",
      linkText: "View Repository",
      description: "Showcased computational neuroscience work modeling caffeine's effects on gap-junction conductance in coupled neurons and its impact on neural alertness and spike features.",
      image: "/images/talks/coupleccino_talk.png"
    },
    {
      title: "German Pre-CHI 2026 - Lab Tour",
      event: "German Pre-CHI 2026",
      type: "Lab Demo",
      status: "Past",
      date: "2026",
      link: "https://www.hcilab.org/event/german-pre-chi-2026/",
      linkText: "Event Website",
      description: "Lab tour for the German Pre-CHI 2026 conference.",
      image: "/images/talks/pre_chi_talk.png"
    },
    {
      title: "Asan Academy - Closing Speech",
      event: "Asan Academy",
      type: "Talk",
      status: "Past",
      date: "2022",
      description: "Closing speech at Asan Academy.",
      image: "/images/talks/asan-academy.jpg"
    }
  ];

  const experiences = [
    {
      title: "Chairman of Student Scientific Society",
      description: "Built a new team, wrote projects and provided trainings for founding a sustainable student self-development community focused on science and technology.",
      date: "Nov 2022 - Mar 2023",
      institution: "Baku State University · Baku, Azerbaijan",
      tags: ["Leadership", "Community Building", "Science", "Project Management"],
      type: "Lab Visit"
    },
    {
      title: "Summer Internship - Visiting Student",
      description: "Visiting student internship program focused on science and technology research at the university's research facilities.",
      date: "Aug 2022 - Oct 2022",
      institution: "Boğaziçi University · Istanbul, Turkey",
      tags: ["Research", "Visiting Student", "Science"],
      type: "Lab Visit",
      image: "/images/talks/bogazici-internship.jpg"
    },
    {
      title: "Summer Internship - Visiting Student",
      description: "Volunteer internship at the Faculty of Medicine, Department of Pharmacology. Conducted research and laboratory work during summer months.",
      date: "Jul 2022 - Aug 2022",
      institution: "Uludağ Üniversitesi · Bursa, Turkey",
      tags: ["Pharmacology", "Medicine", "Research", "Volunteering"],
      type: "Lab Visit",
      image: "/images/talks/uludag-internship.jpg"
    },
    {
      title: "Medical Laboratory Assistant",
      description: "Assisted in medical laboratory operations and genetic analysis work at a leading genetics research center.",
      date: "Jun 2021 - Nov 2021",
      institution: "Fetal Mərkəz NS Genetics · Baku, Azerbaijan",
      tags: ["Medical Laboratory", "Genetics", "Analysis"],
      type: "Lab Visit",
      image: "/images/talks/fetal-genetics.jpg"
    },
    {
      title: "Tech Co-Founder",
      description: "Co-founded a non-profit organization focused on science endorsement in Azerbaijan. Organized sessions, workshops and built a sustainable volunteer community.",
      date: "Apr 2020 - Aug 2022",
      institution: "Azərbaycan Elm və İnnovasiya Könüllüləri · Baku, Azerbaijan",
      tags: ["Entrepreneurship", "Science", "Community", "Non-profit", "Co-founder"],
      type: "Research",
      image: "/images/talks/science-volunteers-team.jpg"
    }
  ];

  const filteredTalks = talks.filter((talk) => {
    if (filter === "All") return true;
    return talk.status === filter;
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
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                Talks
              </Link>
              <Link href="/teaching" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Teaching
              </Link>
              <Link href="/pyweek/en" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
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
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Talks & Presentations</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Posters and presentations at academic conferences and workshops.
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
          {filteredTalks.map((talk, index) => (
            <article key={index} className="flex flex-col bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-6">
              {talk.image && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0" style={{ maxHeight: "200px" }}>
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="w-full h-full object-contain max-h-[200px]"
                  />
                </div>
              )}
              
              <div className="flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    {talk.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">{talk.date}</span>
                </div>

                <div className="mb-3">
                  <h2 className="text-lg font-bold text-black dark:text-white leading-snug cursor-default">
                    {talk.title}
                  </h2>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">{talk.event}</p>
                  {talk.authors && <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{talk.authors}</p>}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                  {talk.description}
                </p>

                <div className="mt-auto space-y-2">
                  {talk.doi && (
                    <div>
                      <a
                        href={`https://doi.org/${talk.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                      >
                        DOI: {talk.doi} →
                      </a>
                    </div>
                  )}
                  {talk.link && (
                    <div>
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                      >
                        {talk.linkText} →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lab Visits & Research Experiences */}
        {experiences.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Lab Visits & Research Experiences</h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 flex gap-8">
                  {exp.image && (
                    <div className="shrink-0 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center w-48 h-48">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.date}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {exp.institution}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 whitespace-nowrap ml-4">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-[11px] font-medium rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
