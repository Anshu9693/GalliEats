import React from 'react'

const AuthLayout = ({ title, subtitle, children, illustration }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-red-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 flex flex-col justify-center items-start space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-600">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
          <div className="mt-4 w-full">{children}</div>
        </div>

        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-red-600 to-pink-500 text-white p-8">
          {illustration ? (
            illustration
          ) : (
            <div className="text-center">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                <path d="M12 2C8 2 5 5 5 9v3H3v2h2v6h6v-6h2v6h6v-6h2v-2h-2V9c0-4-3-7-7-7z" fill="currentColor" />
              </svg>
              <p className="opacity-90">Fast delivery, local restaurants</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout