import { Clock, Briefcase, Coffee, Music } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Work Side (996) - 更深邃的蓝色调 */}
      <div className="flex-1 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-8 flex flex-col justify-center items-center transform transition-all duration-500 hover:scale-105">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"> Working With 996</h2>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-lg">9am - 9pm</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            <span className="text-lg">6 days a week</span>
          </div>
          <p className="text-center max-w-md text-blue-100 leading-relaxed">
            Dedicated to hard work and professional growth. Pushing boundaries and achieving goals.
          </p>
        </div>
      </div>

      {/* Relaxation Side (798) - 温暖的紫红色调 */}
      <div className="flex-1 bg-gradient-to-bl from-purple-950 via-fuchsia-950 to-rose-950 text-white p-8 flex flex-col justify-center items-center transform transition-all duration-500 hover:scale-105">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-rose-400">Working For 798</h2>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
            <Coffee className="w-6 h-6 text-fuchsia-400" />
            <span className="text-lg">Unwind</span>
          </div>
          <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
            <Music className="w-6 h-6 text-rose-400" />
            <span className="text-lg">Enjoy</span>
          </div>
          <p className="text-center max-w-md text-fuchsia-100 leading-relaxed">
            Time to relax, recharge, and enjoy life. Embrace leisure and cultural experiences.
          </p>
        </div>
      </div>

      {/* Overlay content - 更新渐变配色 */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-400 to-rose-400 animate-pulse">
            996798.xyz
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Working with 996, Working for 798
          </p>
          <Link 
            href="/" 
            className="group bg-gradient-to-r from-blue-500/20 to-rose-500/20 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-rose-500 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

