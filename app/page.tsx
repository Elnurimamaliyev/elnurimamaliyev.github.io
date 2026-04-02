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
                Postgrad. HCI and NeuroAI Researcher
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                I am a postgraduate researcher currently looking for a PhD to
                continue my research. My prior research covers HCI, XR, and ML
                fields, with a focus on human augmentation and intelligent
                systems. Feel free to DM me.
              </p>
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
              I am an HCI researcher with an MSc degree in Computational
              Neuroscience and am highly skilled in programming with Python,
              MATLAB, and C#, which gives me a unique research edge. I
              previously focused intensely on BCI, XR systems, and now, I am
              transitioning to the broader HCI, AI/ML fields to apply my
              knowledge of cognitive systems and physiological sensing to human
              augmentation.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I co-authored an ACM CHI 2026 main conference paper based on an
              extension of my master&apos;s thesis prototype —{" "}
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                NeurodaptiXR
              </Link>{" "}
              — using physiological responses (eye-tracker + EEG) designed to
              mitigate the Midas touch problem in Mixed Reality with &quot;neural
              clicking&quot; using slow anticipatory cortical potentials (SPNs).
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are interested in my earlier cognitive modeling work,
              please check out the{" "}
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
              You can find all my projects on my{" "}
              <a
                href="https://github.com/Elnurimamaliyev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                GitHub
              </a>{" "}
              along with the open-source code for replication.
            </p>
          </div>
        </section>

        {/* Contact & Social Links */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:imamaliyevelnur@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
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
