import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "NeurodaptiXR - MSc Thesis (CHI'26)",
      description: "Designed and conducted user studies in Unity-3D; developed DL-based classifiers for neural intention detection to improve gaze-based interactions. Accepted to the ACM CHI 2026 main conference.",
      tags: ["C#", "Unity 3D", "Eye-Tracking", "Deep Learning", "XR"],
      date: "Nov. 2024 – Aug. 2025",
      github: "https://github.com/Elnurimamaliyev/NeurodaptiXR",
      image: "/images/neuroadaptixr.png"
    },
    {
      title: "NeuroScreen - Health Monitoring and BCI Control for Paralyzed Patients",
      description: "Designed multimodal BCI for paralyzed patients to control IoT devices, robotic hand prototype via integrating real-time signals, EEG and eye-tracking, with AI-enhanced health monitoring. Won first place at TEKNOFEST 2025.",
      tags: ["Python", "Eye-Tracking", "PyTorch", "EEG", "AI", "IoT"],
      date: "Nov. 2022 – Sep. 2025",
      github: "https://github.com/Elnurimamaliyev/NeuroScreen",
      image: "/images/neuroscreen.png"
    },
    {
      title: "SentryLlama - RAG-based Local LLM Augmentation",
      description: "Evaluated local LLM performance via comparative RAG and hardware-aware pipelines, integrating the security-tuned Llama-3.1 reasoning model with MinerU for computer vision-based multimodal context extraction.",
      tags: ["Python", "Llama-3.1", "MinerU", "RAG", "LLM", "GenAI"],
      date: "Jan. 2026 – Feb. 2026",
      github: "https://github.com/Elnurimamaliyev/SentryLlama",
      image: "/images/sentryllama.png"
    },
    {
      title: "NoApplAI - Application Automatization",
      description: "Developed full-stack application portal with Flask REST API, React frontend, PostgreSQL database, and LLM-integrated matching/chatbot systems.",
      tags: ["PyTorch", "React", "PostgreSQL", "Flask", "LLM", "Full-Stack"],
      date: "Aug. 2024 – Dec. 2025",
      github: "https://github.com/Elnurimamaliyev/NoApplAI",
      image: "/images/noapplai.png"
    },
    {
      title: "GenAI Image Enhancement with Physiological RAG feedback",
      description: "Developed GAN-generated images for human-in-the-loop experiment, integrated physiological data (ERP and Gaze) with perceptual and attentional metrics, precise stimulus timing, and ERP-compatible event logging.",
      tags: ["GenAI", "GAN", "PsychoPy", "EEG", "Gaze", "Human-in-the-loop"],
      date: "Jan. 2025 – May. 2025",
      github: "https://github.com/Elnurimamaliyev/GenAI-Image-Enhancement",
      image: "/images/genai_hitl.png"
    },
    {
      title: "AMBI4NS - Multivariate Amplitude-Binned TRF",
      description: "Showed that applying multivariate amplitude-binned envelope to regression based TRF modeling increases neural response prediction. Currently extending the work with YAMnet sound classification to detect causal effects between speech and non-speech sounds.",
      tags: ["TensorFlow", "EEGLAB", "mTRF", "Signal Processing", "Neuroscience"],
      date: "Jun. 2024 – Oct. 2024",
      github: "https://github.com/Elnurimamaliyev/AMBI4NS",
      image: "/images/amb4ns.png"
    },
    {
      title: "Coupleccino - Coupled Neurons under Effect of Caffeine",
      description: "Modeling caffeine effects of gap-junction conductance on electrically coupled neurons. Found causal effects on alertness and spike features at the single-cell level.",
      tags: ["MATLAB", "Computational Modeling", "Neuroscience", "Biophysics"],
      date: "May. 2024 – Jun. 2024",
      github: "https://github.com/Elnurimamaliyev/Coupleccino",
      image: "/images/coupleccino.png"
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
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Talks
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">
            A selection of research and development projects spanning HCI, wearable computing, and cognitive neuroscience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-6">
              {project.image && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0" style={{ maxHeight: "250px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain max-h-[250px]"
                  />
                </div>
              )}
              
              <div className="flex flex-col flex-1">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-black dark:text-white leading-snug cursor-default">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{project.date}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-[11px] font-medium rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                    >
                      GitHub →
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
