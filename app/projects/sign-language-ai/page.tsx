"use client";
import Link from "next/link";
import Image from "next/image";

export default function SignLanguageAI() {
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
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
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
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white mb-6 transition text-sm font-medium">
            ← Back to Projects
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Academic
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
              Ongoing
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
            Multimodal AI & Vision World Models for Sign Language
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm mb-12">
            <p className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              University of Salzburg
            </p>
            <span className="hidden sm:block">•</span>
            <p className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              April 2026 – Present
            </p>
          </div>
        </div>

        <article className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">What Does Language Look Like Without Sound, Text, or Full Attention?</h3>
          
          <p className="mb-6">
            This project investigates how linguistic structures are encoded and processed in two atypical language communities — Deaf signers of Austrian Sign Language (&Ouml;GS) and multilingual adults with ADHD — using multimodal AI and vision world model approaches.
          </p>

          <p className="mb-6">
            On the <strong>sign language</strong> side, self-supervised vision world models (JEPA-style) are applied to motion capture and EMG recordings to learn kinematic representations of sign production beyond traditional statistical features. 
          </p>

          <p className="mb-6">
            On the <strong>ADHD</strong> side, large language models (LLMs) and NLP methods analyse conversation management — turn-taking, topic coherence, and discourse structure — as computational markers of attentional profiles in multilingual speech.
          </p>

          <h3 className="text-xl font-semibold text-black dark:text-white mb-4 mt-8">Research Strands</h3>
          
          <h4 className="text-lg font-medium text-black dark:text-white mb-2 mt-6">Strand 1 — Vision World Models for Sign Language</h4>
          <p className="mb-4">
            Austrian Sign Language (ÖGS) is a complete natural language expressed entirely in the visual-spatial modality. Despite this, ÖGS — like most sign languages worldwide — remains almost entirely absent from current AI training data and model architectures.
          </p>
          <p className="mb-4">
            This strand applies self-supervised vision world models, specifically JEPA-style (Joint Embedding Predictive Architecture) approaches, to motion capture and surface EMG recordings of fluent Deaf ÖGS signers. Rather than reconstructing raw sensor input, the model learns to predict in a structured latent space — capturing the kinematic regularities that encode grammatical and semantic information in signing.
          </p>
          <p className="mb-6">
            The goal is to learn representations of sign language production that go beyond traditional hand-crafted kinematic features — revealing how grammatical structures like telicity, intensification, and agreement are encoded in the dynamics of movement itself. This creates a foundation for downstream tasks: sign language recognition, generation, and ultimately real-time interaction in extended reality environments.
          </p>

          <h4 className="text-lg font-medium text-black dark:text-white mb-2 mt-6">Strand 2 — LLMs and Naturalistic Language in Neurodivergent Populations</h4>
          <p className="mb-4">
            The second strand shifts from modality to attention. Naturalistic conversation — turn-taking, topic coherence, discourse management — is a rich source of linguistic signal that standard NLP benchmarks rarely capture. This is especially true for speakers whose attentional profiles differ from the neurotypical norm assumed by most language models.
          </p>
          <p className="mb-6">
            Using large language models and computational discourse analysis, this strand examines conversation transcripts from multilingual neurodivergent speakers, investigating how LLMs can detect, characterise, and ultimately support atypical but valid patterns of linguistic interaction. The aim is not to pathologise difference, but to build AI systems that recognise and accommodate the full range of human communicative behaviour.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 my-8">
            <h4 className="font-semibold text-black dark:text-white mb-2">The Unifying Question:</h4>
            <p className="italic text-gray-600 dark:text-gray-400 m-0 text-sm">
              When the standard conditions of language use — modality, medium, or sustained attention — are altered, what computational signatures remain, and what do they reveal about language as a system?
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            Part of the <strong>MoCap_Sign</strong> and <strong>ADHD-Multi</strong> funded projects, Department of Linguistics & CCNS, University of Salzburg.<br/>
            Supervised by Prof. Dietmar Roehm.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Multimodal AI", "Vision World Models", "JEPA", "Sign Language", "ÖGS", "Motion Capture", "EMG", "LLMs", "NLP", "ADHD", "Multilingualism", "Computational Linguistics"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}