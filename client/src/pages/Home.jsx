import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-600 via-red-500 to-red-400 text-white overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute right-0 top-0 w-96 opacity-20 pointer-events-none" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="520" cy="80" r="220" fill="url(#g)" />
        <path d="M350 420c60-30 120-100 180-140" stroke="#fff" strokeWidth="2" fill="none" opacity="0.08" />
      </svg>

      <header className="relative z-10 w-full bg-white/10 backdrop-blur-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/20 shadow-sm">
              <span className="font-bold text-white">GE</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold leading-tight">GalliEats</h1>
              <div className="text-xs opacity-90">Hyperlocal food delivery</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/user/login" className="px-4 py-2 rounded-md bg-white/20 text-white hover:bg-white/30">User Login</Link>
            <Link to="/partner/login" className="px-4 py-2 rounded-md bg-white/20 text-white hover:bg-white/30">Partner Login</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <section className="bg-white/95 text-red-600 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get food from nearby favorites</h2>
              <p className="text-sm text-gray-700 mb-6">Order from local restaurants and get it delivered fast. Simple, local, and delightful — designed for neighborhoods.</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <Link to="/user/login" className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold shadow-md hover:scale-[1.01] transition"> 
                  {/* user icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.66 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  User Login
                </Link>
                <Link to="/user/register" className="mt-2 text-xs text-gray-700 text-center">New user? Create an account</Link>
              </div>

              <div className="flex flex-col">
                <Link to="/partner/login" className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold shadow-md hover:scale-[1.01] transition">
                  {/* partner icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"></path></svg>
                  Partner Login
                </Link>
                <Link to="/partner/register" className="mt-2 text-xs text-gray-700 text-center">New partner? Register your restaurant</Link>
              </div>
            </div>
          </section>

          <aside className="hidden md:flex items-center justify-center">
            {/* Decorative illustration: delivery bike and map pin */}
            <div className="w-full max-w-md p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <linearGradient id="a" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FFD54F" />
                    <stop offset="100%" stopColor="#FF5252" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="200" height="160" rx="12" fill="url(#a)" opacity="0.12" />
                <g fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
                  <path d="M30 110c12-10 26-14 42-12 20 3 34 16 52 18" />
                  <circle cx="50" cy="120" r="10" />
                  <circle cx="120" cy="120" r="10" />
                  <path d="M60 110h30l10-20 18 6" />
                </g>
                <g fill="#fff" opacity="0.95">
                  <circle cx="150" cy="40" r="6" />
                  <path d="M150 30v10h-4v-4h-4v-4z" />
                </g>
              </svg>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Home
