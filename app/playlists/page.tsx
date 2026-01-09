'use client'

import { useState } from 'react'
import Image from 'next/image'
import LowerNavbar from '@/components/LowerNavbar'

interface Playlist {
  id: number
  title: string
  artist: string
  description: string
  price: string
  duration: string
  genre: string
  coverImage?: string
  tracks: number
}

const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Mental Wealth Sessions',
    artist: 'EmberQuill Collective',
    description: 'Curated collection of focus music designed for deep learning and mental clarity',
    price: '9.99',
    duration: '2h 15m',
    genre: 'Ambient / Study',
    tracks: 12,
  },
  {
    id: 2,
    title: 'Creative Flow',
    artist: 'Studio Artists',
    description: 'Upbeat tracks to fuel your creative process and inspire innovation',
    price: '12.99',
    duration: '1h 45m',
    genre: 'Electronic / Indie',
    tracks: 15,
  },
  {
    id: 3,
    title: 'Meditation & Mindfulness',
    artist: 'Wellness Series',
    description: 'Peaceful compositions for meditation, reflection, and mental wellness',
    price: '8.99',
    duration: '3h 30m',
    genre: 'Ambient / Meditation',
    tracks: 20,
  },
  {
    id: 4,
    title: 'Productivity Beats',
    artist: 'Focus Lab',
    description: 'High-energy instrumental tracks to boost productivity and concentration',
    price: '11.99',
    duration: '2h 00m',
    genre: 'Lo-Fi / Hip-Hop',
    tracks: 18,
  },
  {
    id: 5,
    title: 'Night Studio Sessions',
    artist: 'Late Night Collective',
    description: 'Smooth, atmospheric sounds perfect for late-night creative work',
    price: '10.99',
    duration: '1h 30m',
    genre: 'Jazz / Chill',
    tracks: 14,
  },
  {
    id: 6,
    title: 'Morning Motivation',
    artist: 'Rise & Create',
    description: 'Energetic tracks to start your day with purpose and drive',
    price: '9.99',
    duration: '1h 20m',
    genre: 'Pop / Indie',
    tracks: 16,
  },
]

export default function PlaylistsPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('All')
  const genres = ['All', 'Ambient', 'Electronic', 'Lo-Fi', 'Jazz', 'Pop', 'Meditation']

  const filteredPlaylists =
    selectedGenre === 'All'
      ? playlists
      : playlists.filter((p) => p.genre.toLowerCase().includes(selectedGenre.toLowerCase()))

  return (
    <div className="relative min-h-screen bg-dark">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(193, 178, 255, 0.1) 50px, rgba(193, 178, 255, 0.1) 100px),
              repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(84, 163, 136, 0.1) 50px, rgba(84, 163, 136, 0.1) 100px)
            `,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="pt-24 pb-8 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 gradient-text">
              Music for Sale
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Discover curated playlists designed for learning, creativity, and mental wellness.
              Support our artists while enhancing your work and study sessions.
            </p>
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    selectedGenre === genre
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-dark/50 border border-white/10 text-white/70 hover:text-white hover:border-primary/30'
                  }
                `}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Playlists Grid */}
        <div className="px-4 lg:px-8 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="glass-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Cover Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/30 group-hover:text-white/50 transition-colors relative z-10"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  <div className="absolute top-3 right-3 glass px-2 py-1 rounded-lg">
                    <span className="text-xs font-bold text-white">{playlist.price}$</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {playlist.title}
                    </h3>
                    <p className="text-sm text-white/60">{playlist.artist}</p>
                  </div>

                  <p className="text-sm text-white/70 mb-4 line-clamp-2">
                    {playlist.description}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                        {playlist.tracks} tracks
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {playlist.duration}
                      </span>
                    </div>
                    <span className="px-2 py-1 bg-primary/20 rounded text-primary text-[10px] font-medium">
                      {playlist.genre.split(' / ')[0]}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 text-sm">
                      Purchase
                    </button>
                    <button className="px-4 py-2.5 border border-white/20 hover:border-primary/50 rounded-lg transition-all duration-300 group/play">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/70 group-hover/play:text-primary transition-colors"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPlaylists.length === 0 && (
            <div className="text-center py-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/30 mx-auto mb-4"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <p className="text-white/50 text-lg">No playlists found in this genre</p>
            </div>
          )}
        </div>
      </div>

      <LowerNavbar />
    </div>
  )
}
