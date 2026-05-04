"use client";
import Link from "next/link";

export default function Day1Az() {
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
                Gün 1
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Gün 1
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Python Əsasları və Elmi Proqramlaşdırmaya Giriş
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              4 May 2026 · 2–3 saat
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Ümumi Baxış</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Python əsaslarını öyrənin — dəyişənlər, məlumat tipləri, dövrələr, şərtlər, funksiyalar, lüğətlər və CSV ilə fayl işləri. NumPy, Pandas, Matplotlib və SciPy-a praktiki nümunələrlə giriş.
              </p>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Birinci Yarı (1 saat)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Python Əsasları</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Dəyişənlər və məlumat tipləri (int, float, string, list, dict, tuple)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Məntiq axını: şərtlər (if/elif/else) və dövrələr (for/while)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Funksiyalar: tərif, parametrlər, qayıdış dəyərləri</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Fayl I/O və CSV əməliyyatları praktiki nümunələrlə</span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">İkinci Yarı (1 saat)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Elmi Kitabxanaların Tanıtılması</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>NumPy:</strong> Rəqəmli hesablamalar və massivilər</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Pandas:</strong> Məlumat manipulyasiyası və analizi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Matplotlib:</strong> Məlumatların vizualizasiyası</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>SciPy:</strong> Elmi hesablamalar</span>
                </li>
              </ul>
            </section>

            {/* Resources */}
            <section className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">📥 Mənbələr & Yükləmələr</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Bütün praktiki nümunələr və kodlar aşağıdakı Jupyter Notebook-da mövcuddur:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/notebooks/Day1.ipynb"
                  download
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
                >
                  ⬇️ Notebook-u Yüklə (Gün 1)
                </a>
                <Link
                  href="/pyweek/az/resources"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  🔗 Bütün Mənbələr →
                </Link>
              </div>
            </section>

            {/* Homework */}
            <section className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">📝 Ev Tapşırığı</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Gün 1 materialını birləşdirmək üçün ev tapşırığını tamamlayın:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Homework/homework/PyWeek_Homework.ipynb"
                  download
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  ⬇️ Ev Tapşırığını Yüklə
                </a>
              </div>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Əhatə Edilən Mövzular</h2>
              <div className="flex flex-wrap gap-3">
                {["Python Əsasları", "Məlumat Tipləri", "Funksiyalar", "Fayl I/O", "NumPy", "Pandas", "Matplotlib"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/az/day0"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← Gün 0
              </Link>
              <Link
                href="/pyweek/az/day2"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Gün 2 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
