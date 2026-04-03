import Link from "next/link";

export default function Talks() {
  const talks = [
    {
      title: "Beyond Univariate Envelope Modeling: EEG Response Prediction with the Multivariate Amplitude-Binned TRF Model",
      event: "Munich Brain Day 2025",
      type: "Poster",
      date: "2025",
      authors: "Imamaliyev, E., Bleichner, M.",
      doi: "10.13140/RG.2.2.31742.65602",
      description: "Presented research on multivariate amplitude-binned envelope techniques for improved neural response prediction using temporal response functions (TRF) with EEG data.",
      image: "/images/talks/amb4ns_talk.png"
    },
    {
      title: "The Coupleccino Model - Computational Modeling of the Effects of Caffeine on Electrically Coupled Neurons",
      event: "Interdisciplinary College (IK) 2025",
      type: "Poster",
      date: "2025",
      authors: "Imamaliyev, E., Duken, M.",
      doi: "10.13140/RG.2.2.11609.99687",
      description: "Showcased computational neuroscience work modeling caffeine's effects on gap-junction conductance in coupled neurons and its impact on neural alertness and spike features.",
      image: "/images/talks/coupleccino_talk.png"
    },
    {
      title: "German Pre-CHI 2026 - Lab Tour",
      event: "German Pre-CHI 2026",
      type: "Lab Demo",
      date: "2026",
      description: "Lab tour for the German Pre-CHI 2026 conference.",
      image: "/images/talks/pre_chi_talk.png"
    }
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
              <Link href="/cv" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                CV
              </Link>
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                Talks
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
          <p className="text-gray-600 dark:text-gray-400">
            Posters and presentations at academic conferences and workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talks.map((talk, index) => (
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

                {talk.doi && (
                  <div className="mt-auto">
                    <a
                      href={`https://doi.org/${talk.doi.replace('10.13140/', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                    >
                      DOI: {talk.doi} →
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
