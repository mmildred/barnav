import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [waveHeight, setWaveHeight] = useState([20, 40, 60, 40, 20])

  const tracks = [
    { title: 'Midnight City', artist: 'The Dreamers', duration: '3:45' },
    { title: 'Echoes in the Void', artist: 'Luna Shadows', duration: '4:20' },
    { title: 'Neon Dreams', artist: 'Electric Forest', duration: '3:15' }
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setWaveHeight(prev =>
        prev.map(() => Math.floor(Math.random() * 60) + 10)
      )
    }, 200)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying) return

    const trackInterval = setInterval(() => {
      setCurrentTrack(prev => (prev + 1) % tracks.length)
    }, 10000)

    return () => clearInterval(trackInterval)
  }, [isPlaying, tracks.length])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-4"
    >
      <div className="max-w-3xl text-center text-gray-300">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenido a <span className="text-purple-400">SONIC.WAVES</span>
        </h1>

        <p className="text-lg text-gray-400 mb-10">
          La plataforma donde la música indie conecta con su audiencia.
        </p>

        {/* Mini reproductor */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">
          <div className="flex justify-between items-center mb-4">
            <div className="text-left">
              <p className="text-white font-semibold">
                {tracks[currentTrack].title}
              </p>
              <p className="text-sm text-gray-400">
                {tracks[currentTrack].artist}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              {tracks[currentTrack].duration}
            </p>
          </div>

          <div className="flex justify-center gap-1 h-8">
            {waveHeight.map((height, index) => (
              <div
                key={index}
                className="w-1.5 bg-purple-500 rounded-full transition-all"
                style={{ height: isPlaying ? height : 10 }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </button>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/artistas"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Explorar Artistas
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition"
          >
            Subir tu Música
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
