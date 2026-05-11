"use client";
import Link from "next/link";

export default function Day0Az() {
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
              <Link href="/pyweek/en/day0" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                🌐 English
              </Link>
              <Link href="/pyweek/az" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                ← Geri
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
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                Gün 0
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Gün 0
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Mühit Quraşdırması və yükləmələr
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              4 May 2026-dan əvvəl · 1–2 saat
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Ümumi Baxış</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Workshopdan əvvəl komputerinizi tapşırıqlar üçün hazırlayın: Python-u, lazımi kitabxanaları və kod redaktorunuzu (VS code) quraşdırın.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Əgər çətinlik çəksəiniz aşağıdakı videonu izləyin:
              </p>
              <a
                href="https://www.youtube.com/watch?v=1_c1JsRfaFs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
              >
                Python & VS Code-un Quraşdırması | Addım-addım Video Təlimat →
              </a>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Quraşdırma Addımları</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Yükləmələr</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">1️⃣</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span><strong>Visual Studio Code-u yükləyin</strong></span>
                    <a
                      href="https://code.visualstudio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
                    >
                    VS Code-u yüklə →
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">2️⃣</span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span><strong>Pythonu yükləyin</strong></span>
                    <a
                      href="https://python.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Python 3.10+ yüklə →
                    </a>
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                  <strong>💡 Alternativ:</strong> Əgər VS Code-u yükləyə bilməsəniz, Google Colab istifadə edə bilərsiniz:
                </p>
                <a
                  href="https://colab.research.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                  Google Colab-a keçid →
                </a>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 mt-8">Layihəyə başlayın</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">3️⃣</span>
                  <span><strong>Yeni proyekt açın</strong> - Kompüterinizdə yeni bir qovluq yaradın</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">4️⃣</span>
                  <span><strong>Terminali açın:</strong> <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">Ctrl + J</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">5️⃣</span>
                  <span><strong>Virtual mühit yaradın:</strong> <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">python3 -m venv pyweek_env</code> (macOS/Linux) və ya <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">python -m venv pyweek_env</code> (Windows)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">6️⃣</span>
                  <span><strong>Virtual mühiti aktivləşdirin:</strong> <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">source pyweek_env/bin/activate</code> (macOS/Linux) və ya <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">pyweek_env\Scripts\activate</code> (Windows)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">7️⃣</span>
                  <span><strong>pip-i yenilə:</strong> <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">pip install --upgrade pip</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">8️⃣</span>
                  <span><strong>Paketləri quraşdır:</strong> <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">pip install numpy pandas matplotlib scipy jupyter</code></span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Quraşdırmalar</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Lazımi Paketləri Quraşdırın</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">⚠️ Önəmli: Virtual mühit aktivləşdirildikdən sonra çalışdırın</p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-3">Macbook-da <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">python</code> əvəzinə <code className="text-sm bg-gray-900 text-green-400 px-2 py-1 rounded">python3</code> istifadə edin!</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">1. pip-i yenilə:</p>
                      <div className="bg-black dark:bg-gray-950 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <p>pip install --upgrade pip</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">2. Paketləri quraşdır:</p>
                      <div className="bg-black dark:bg-gray-950 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <p>pip install numpy pandas matplotlib scipy jupyter</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Tövsiyə olunan IDE/Redaktor:</h4>
                  <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>✓ <strong>VS Code</strong> Python genişləndirməsi ilə (Copilot dəstəyi üçün tövsiyə olunur)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Yoxlama:</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">Bütün paketlərin quraşdırılıb-quraşdırılmadığını yoxlayın:</p>
                  <div className="bg-black dark:bg-gray-950 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <p>python3 -c "import numpy, pandas, matplotlib, scipy; print('Bütün paketlər quraşdırıldı!')"</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Əhatə Edilən Mövzular</h2>
              <div className="flex flex-wrap gap-3">
                {["Python Quraşdırması", "Virtual Mühitlər", "pip Paket Meneceri", "NumPy", "Pandas", "Matplotlib", "IDE Quraşdırması", "Yoxlama"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/az"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← PyWeek
              </Link>
              <Link
                href="/pyweek/az/day1"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Gün 1 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
