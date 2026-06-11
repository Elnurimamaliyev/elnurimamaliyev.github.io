"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const timelineEntries = [
  {
    date: "May 2026 - Present",
    title: "Pre-Doctoral Fellow",
    institution: "Max Planck Institute for Human Cognitive and Brain Sciences · Berlin, Germany",
    description:
      "",
    image: "/images/MPI_Berlin.png",
    imageAlt: "Max Planck Institute",
    href: "/projects",
  },
  {
    date: "Apr 2026 - Present",
    title: "Human-AI Research Advisor",
    institution: "Gabb Global · Los Angeles, CA, USA",
    description:
      "Designing adaptive signal architecture for Gabb's K-12 language learning platform in XR environments. Research focus: struggle detection, spatial memory, attention and cognitive load detection, neuroadaptive interaction.",
    image: "/images/Gabb_SS.png",
    imageAlt: "Gabb Global platform",
    href: "/projects",
  },
  {
    date: "May 2026",
    title: "PyWeek Scientific Programming Workshop",
    institution: "Khazar University · Baku, Azerbaijan",
    description:
      "Led a comprehensive 3-day workshop on scientific programming with Python, covering NumPy, Pandas, Matplotlib, SciPy, and hands-on AI prototyping for 30+ students.",
    image: "/images/teaching/pyweek-poster.jpg",
    imageAlt: "PyWeek workshop poster",
    href: "/teaching",
  },
  {
    date: "April, 2026",
    title: "ACM CHI 2026 Main Conference Paper",
    institution: "Research publication",
    description:
      "Co-authored a main conference paper at ACM CHI 2026, extending NeurodaptiXR thesis work with focus on physiological sensing and neural intention detection for improved XR interaction.",
    image: "/images/CHI_26_PeerReviewed.png",
    imageAlt: "NeurodaptiXR research prototype",
    href: "/projects",
  },
    {
    date: "Sep 2025",
    title: "NeuroScreen - TEKNOFEST Winner",
    institution: "Startup/Tech Competition",
    description:
      "Designed multimodal BCI system for paralyzed patients to control IoT devices and robotic hand via EEG and eye-tracking. Won first place at TEKNOFEST 2025 innovation competition.",
    image: "/images/neuroscreen.png",
    imageAlt: "NeuroScreen BCI system",
    href: "/projects",
  },
    {
    date: "Aug 2025",
    title: "Graduated: Master of Science - Computational Neuroscience",
    institution: "University of Oldenburg · Oldenburg, Germany",
    description:
      "Graduate studies in Computational Neuroscience with focus on Machine Learning, XR, and Human-Computer Interaction. Grade: 1.6. Thesis: Neuroadaptive HCI – Neural Click Detection in Mixed Reality.",
    href: "/projects",
  },
  {
    date: "Nov 2024-Aug 2025",
    title: "NeurodaptiXR - MSc Thesis (CHI'26)",
    institution: "University of Oldenburg · Oldenburg, Germany",
    description:
      "Designed and conducted user studies in Unity 3D environment. Developed deep learning classifiers for neural intention detection using eye-tracking and EEG signals to improve gaze-based XR interactions. Accepted to ACM CHI 2026.",
    image: "/images/neuroadaptixr.png",
    imageAlt: "NeurodaptiXR system prototype",
    href: "/projects",
  },
    {
    date: "Jan-May 2024",
    title: "GenAI Image Enhancement with Physiological Feedback",
    institution: "Human-AI Research",
    description:
      "Developed GAN-generated images for human-in-the-loop experiments. Integrated physiological data (ERP and eye-tracking) with perceptual metrics and ERP-compatible event logging.",
    image: "/images/genai_hitl.png",
    imageAlt: "GenAI research visualization",
    href: "/projects",
  },
  {
    date: "Jun-Oct 2024",
    title: "AMBI4NS - Multivariate TRF Research",
    institution: "Neuroscience Research",
    description:
      "Developed and validated multivariate amplitude-binned envelope techniques for temporal response functions (TRF) with EEG data. Demonstrated improved neural response prediction accuracy.",
    image: "/images/amb4ns.png",
    imageAlt: "AMBI4NS research data",
    href: "/projects",
  },
  {
    date: "May-Jun 2024",
    title: "Coupleccino - Neuronal Modeling",
    institution: "Computational Neuroscience",
    description:
      "Modeled caffeine effects on gap-junction conductance in electrically coupled neurons using Hodgkin-Huxley equations. Published findings on effects on alertness and spike features.",
    image: "/images/coupleccino.png",
    imageAlt: "Coupleccino neuron model",
    href: "/projects",
  },
  {
    date: "Oct 2023",
    title: "Start: MSc - Computational Neuroscience",
    institution: "University of Oldenburg · Oldenburg, Germany",
    description:
      "",
    href: "/projects",
  },
  {
    date: "Summer 2023",
    title: "Summer Internship - Donders Institute",
    institution: "Donders Institute for Brain, Cognition and Behaviour · Nijmegen, Netherlands",
    description:
      "Computational models and trajectory finding of mouse positions from cameras (Computer Vision)",
    image: "/images/donders_hexMaze.jpg",
    imageAlt: "Donders Institute research facility",
    href: "/talks",
  },
    {
    date: "June 2023",
    title: "Graduated: BSc - Biology",
    institution: "Baku State University · Baku, Azerbaijan",
    description:
      "",
    href: "/talks",
  },
  {
    date: "2022",
    title: "BrainAssist - Neuroprosthesis BCI System",
    institution: "Neuroscience Research",
    description:
      "Developed BCI system evaluating physiological signals for neuroprosthesis robot hand control and multimodal health monitoring prototype. Foundation for later NeuroScreen and neuroadaptive XR research.",
    href: "/projects",
  },
    {
    date: "Mar 2022 - Mar 2024",
    title: "Startup Teacher & Mentor",
    institution: "New Space Innovation · Baku, Azerbaijan",
    description:
      "Mentored startup teams on product ideation, UI/UX design, biomimicry, and MVP development. Taught full-stack development and guided teams through product development lifecycle.",
    image: "/images/teaching/new-space-innovation.jpg",
    imageAlt: "New Space Innovation workspace",
    href: "/teaching",
  },
  {
    date: "Aug-Oct 2022",
    title: "Summer Internship - Boğaziçi University",
    institution: "Boğaziçi University · Istanbul, Turkey",
    description:
      "Visiting student internship focused on neuroscience and technology research. Conducted laboratory work and participated in research projects at the university facilities.",
    image: "/images/talks/Bogazici-internship.jpg",
    imageAlt: "Boğaziçi University campus",
    href: "/talks",
  },
{
    date: "2020-Ongoing",
    title: "Founder, Mentor",
    institution: "Sapiens Tech · Baku, Azerbaijan",
    description:
      "Mentored learners and contributed to technology education. Supported science and innovation community building through mentoring and teaching activities.",
    image: "/images/teaching/Sapiens_tech.jpg",
    imageAlt: "Sapiens Tech community",
    href: "/teaching",
  },
  {
    date: "2020-2022",
    title: "Tech Co-Founder",
    institution: "Azerbaijan Science & Innovation Volunteers",
    description:
      "Co-founded non-profit organization focused on science endorsement in Azerbaijan. Organized sessions, workshops, and built sustainable volunteer community with focus on STEM education.",
    image: "/images/talks/science-volunteers-team.jpg",
    imageAlt: "Science volunteers team",
    href: "/talks",
  },
  {
    date: "Oct 2019",
    title: "Start: BSc - Biology",
    institution: "Baku State University · Baku, Azerbaijan",
    description:
      "",
    href: "/talks",
  },
  {
    date: "2016",
    title: "BCI Motivation - Early Neuroscience Interest",
    institution: "Personal Research",
    description:
      "Early interest and exploration in Brain-Computer Interfaces and neuroscience, laying the foundation for later research in computational neuroscience, neural signal processing, and neuroadaptive systems.",
    href: "/contact",
  },
];

export default function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let frameId = 0;

    const updateTimelineState = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) => (current === closestIndex ? current : closestIndex));

      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max((window.scrollY / maxScroll) * 100, 0), 100);
      setScrollProgress((current) => (Math.abs(current - nextProgress) < 0.1 ? current : nextProgress));
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateTimelineState);
    };

    updateTimelineState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-lg font-semibold text-black">
              Elnur Imamaliyev
            </Link>
            <div className="flex flex-wrap gap-6 text-sm justify-end">
              <Link href="/cv" className="hover:text-gray-600 transition">
                CV
              </Link>
              <Link href="/projects" className="hover:text-gray-600 transition">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 transition">
                Talks
              </Link>
              <Link href="/timeline" className="hover:text-gray-600 transition font-medium" aria-current="page">
                Storyline
              </Link>
              <Link href="/teaching" className="hover:text-gray-600 transition">
                Teaching
              </Link>
              <Link href="/contact" className="hover:text-gray-600 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 mb-4">
            Storyline
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight">
            A vertical view of research, teaching, and mentoring milestones.
          </h1>
          <p className="text-gray-600 leading-relaxed">
            This timeline follows the work that shaped my portfolio, from mentoring and teaching through to research output and publication.
          </p>
        </section>

        <section className="relative scroll-smooth md:snap-y md:snap-mandatory md:scroll-py-[50vh] md:[scroll-padding-top:50vh] md:[scroll-padding-bottom:50vh]">
          <div className="pointer-events-none absolute left-8 top-0 bottom-0 z-10 w-[3px] overflow-hidden bg-gray-300 md:left-1/2 md:-translate-x-1/2">
            <div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-sky-500 via-blue-600 to-indigo-600 transition-[height,opacity] duration-200 ease-out"
              style={{
                height: `${scrollProgress}%`,
                opacity: scrollProgress > 0 ? 1 : 0.6,
              }}
            />
          </div>

          <div className="space-y-0">
            {timelineEntries.map((entry, index) => (
              <div
                key={entry.title}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                className="relative grid min-h-[72vh] items-center pl-16 md:pl-0 md:grid-cols-[1fr_auto_1fr] md:snap-center md:py-16 gap-4 md:gap-8"
              >
                <div className="max-w-[18rem] justify-self-start pr-6 md:justify-self-end md:pr-8 md:text-right md:col-start-1">
                  <p className={`text-xl md:text-2xl font-medium leading-tight transition-colors duration-150 ${activeIndex === index ? "text-sky-600" : "text-gray-300"}`}>
                    {entry.date}
                  </p>
                </div>

                <div className="hidden md:flex md:flex-col md:items-center md:col-start-2">
                  <div className="h-3 w-3 rounded-full bg-gray-600 border-2 border-white ring-1 ring-gray-400" />
                </div>

                <article className={`w-full max-w-[28rem] transition-all duration-150 ${activeIndex === index ? "opacity-100" : "opacity-60"} md:col-start-3 md:justify-self-start pl-8 md:pl-0`}>
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        {entry.title}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-gray-700">
                        {entry.institution}
                      </p>
                    </div>

                    {entry.image && (
                      <div className={`overflow-hidden rounded-[1.25rem] bg-gray-100 ring-1 transition-all duration-150 ${activeIndex === index ? "ring-sky-200 shadow-[0_10px_30px_rgba(14,165,233,0.12)]" : "ring-transparent"}`}>
                        <Image
                          src={entry.image} 
                          alt={entry.imageAlt || ""}
                          width={960}
                          height={720}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}

                    <p className="max-w-xl text-[15px] leading-7 text-gray-700">
                      {entry.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}