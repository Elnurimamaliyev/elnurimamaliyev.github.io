import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Header */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold text-black dark:text-white"
            >
              Elnur Imamaliyev
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/cv"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                CV
              </Link>
              <Link
                href="/projects"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Projects
              </Link>
              <Link
                href="/talks"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Talks
              </Link>
              <Link
                href="/timeline"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Timeline
              </Link>
              <Link
                href="/teaching"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Teaching
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Bio Section - Profile Chip */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start md:flex-row">
            <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 relative rounded-3xl overflow-hidden border-[6px] border-white dark:border-gray-950 shadow-lg bg-gray-200">
              <Image
                src="/images/profile.png"
                alt="Elnur Imamaliyev"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1 w-full text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                Elnur Imamaliyev{" "}
                <span className="text-lg md:text-xl font-normal text-gray-500 whitespace-nowrap">
                  (He/Him)
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-medium">
                Pre-Doctoral Fellow · MPI for Human Cognitive and Brain Sciences
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                HCI and NeuroAI researcher with an MSc in Computational
                Neuroscience, currently a Pre-Doctoral Fellow at the Max Planck
                Institute for Human Cognitive and Brain Sciences. His research
                spans HCI, XR, and ML, with a focus on human augmentation and
                intelligent systems.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold text-sm py-2.5 px-6 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>

        {/* Research Interest Section */}
        <section className="mb-12 px-2 md:px-4">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Research Interest
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Elnur is an HCI researcher with an MSc in Computational
              Neuroscience, skilled in Python, MATLAB, and C#. His background
              spans BCI and XR systems, with a current focus on applying
              cognitive systems and physiological sensing to human augmentation
              across HCI and AI/ML.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              He co-authored an ACM CHI 2026 main conference paper based on an
              extension of his master&apos;s thesis prototype —{" "}
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                NeurodaptiXR
              </Link>{" "}
              — using physiological responses (eye-tracker + EEG) to mitigate
              the Midas Touch problem in Mixed Reality via &quot;neural
              clicking&quot; based on slow anticipatory cortical potentials (SPNs).
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              His earlier cognitive modeling work includes the{" "}
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                AMBI4NS
              </Link>{" "}
              project (poster at Munich Brain Day 2025) and the{" "}
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                COUPLECCINO
              </Link>{" "}
              project (poster at Interdisciplinary College (IK), 2025).
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All projects and open-source code for replication are available on his{" "}
              <a
                href="https://github.com/Elnurimamaliyev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </section>

        {/* Contact & Social Links */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:imamaliyevelnur@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
            <a
              href="https://calendly.com/imamaliyevelnur/public-availability-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Calendar
            </a>
            <a
              href="https://linkedin.com/in/elnurimamaliyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Elnurimamaliyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=19zrLnIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google Scholar
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}