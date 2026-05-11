"use client";
import Link from "next/link";

export default function Day3Az() {
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
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300">
                Gün 3
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Gün 3
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Qiymətləndirmə və İnkişaf Yolları
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              13 May 2026 · 2–3 saat
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Ümumi Baxış</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Tələbələrin AI-dəstəkli prototiplərinin təqdimatı. Qiymətləndirmə meyarları: funksionallıq, kod keyfiyyəti, AI istifadəsi, təqdimat keyfiyyəti. Açıq müzakirə və resurslar.
              </p>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Birinci Yarı (1 saat)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Tələbə Təqdimatları</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🎤</span>
                  <span>Hər tələbə/qrup öz AI-dəstəkli prototipini təqdim edir (hər təqdimat üçün 5-7 dəq)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🎤</span>
                  <span>İşləyən kodun demo-su və yanaşmanın izahı</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🎤</span>
                  <span>Müəllim və bərabərlərdən suallar</span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">İkinci Yarı (1 saat)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Qiymətləndirmə və Müzakirə</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Qiymətləndirmə Meyarları:</h4>
                  <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>✓ Funksionallıq: Prototip nəzərdə tutulduğu kimi işləyirmi?</li>
                    <li>✓ Kod Keyfiyyəti: Kod təmiz, yaxşı təşkil olunmuş və sənədləşdirildimi?</li>
                    <li>✓ AI İstifadəsi: AI inkişafa nə dərəcədə effektiv istifadə edilmişdir?</li>
                    <li>✓ Təqdimat: Təqdimatiın aydınlığı və təşkili</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Açıq Müzakirə:</h4>
                  <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                    <li>• Worksopdan sonra öyrənməyə necə davam etmək</li>
                    <li>• Elmi proqramlaşdırma və AI-də karyera imkanları</li>
                    <li>• Davamlı inkişaf üçün resurslar və icmalar</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Əhatə Edilən Mövzular</h2>
              <div className="flex flex-wrap gap-3">
                {["Təqdimatlar", "Kod Keyfiyyəti", "Qiymətləndirmə", "Ən Yaxşı Praktikalar", "Resurslar", "Sonrakı Addımlar"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/az/day2"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← Gün 2
              </Link>
              <Link
                href="/pyweek/az"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                PyWeek-ə Geri
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
