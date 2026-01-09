'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmberQuillLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0C0A0F] text-white relative overflow-x-hidden">
      {/* Background Image with opacity */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 px-4 pt-[54px] pb-4">
        <div className="flex items-center justify-between max-w-[398px] mx-auto">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-[11px] border border-[#FD833E]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" stroke="white" strokeWidth="1" fill="none" />
              <rect x="4" y="4" width="8" height="8" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            <span className="text-white text-sm">MENU</span>
          </button>

          {/* Divider Line */}
          <div className="flex-1 h-[1px] bg-[#FD833E] mx-3" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-[7px] border border-[#FD833E] flex items-center justify-center">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M1.58333 3.08703L16.4167 3.08703L16.4167 12.6908" stroke="white" strokeWidth="1" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-[7px] border border-[#FD833E] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="3" width="12" height="12" stroke="white" strokeWidth="1" />
                <circle cx="9" cy="9" r="2.25" stroke="white" strokeWidth="1" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-[7px] border border-[#FD833E] flex items-center justify-center">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M6 8.70833H7.5V10.2917" stroke="white" strokeWidth="1" />
                <path d="M10.5 8.70833H12V10.2917" stroke="white" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-20">
        {/* Title */}
        <h1 className="text-center text-[32px] sm:text-[40px] md:text-[46px] leading-tight mb-4 font-glitch font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          EmberQuill Studios
        </h1>

        {/* Welcome Text */}
        <p className="text-center text-[15px] leading-[30px] mb-8 font-mono max-w-[392px] mx-auto">
          Welcome to EmberQuil Studios, where we create digital and real world manga, clothes, and gifts. Check out our products and NFTs. (Black-Owned Manga Studio)
        </p>

        {/* Quote Boxes */}
        <div className="space-y-4 mb-12">
          {/* Quote 1 */}
          <div className="flex items-start gap-3 max-w-[301px] mx-auto">
            <div className="w-6 h-6 flex-shrink-0 mt-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 3L20 3L20 16L12 21L4 16L4 3Z" stroke="#FD833E" strokeWidth="1" />
                <path d="M9 13L15 13L15 8L9 8L9 13Z" stroke="#FD833E" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex-1 bg-[#EB4F4F]/16 border-2 border-[#FD833E] rounded-lg px-6 py-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-[#FFE4C6] text-sm leading-[22px] font-mono">
                A Familiar Wind Surrounds You... YOU'RE IN THE CLOUDS NOW.
              </p>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="flex items-start gap-3 max-w-[258px] mx-auto">
            <div className="w-6 h-6 flex-shrink-0 mt-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 3L20 3L20 16L12 21L4 16L4 3Z" stroke="#FD833E" strokeWidth="1" />
                <path d="M9 13L15 13L15 8L9 8L9 13Z" stroke="#FD833E" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex-1 bg-[#EB4F4F]/16 border-2 border-[#FD833E] rounded-lg px-[18px] py-4">
              <p className="text-[#FFE4C6] text-sm leading-[22px] font-mono">
                Up Here, Everything's Brighter, The world is so clear now.
              </p>
            </div>
          </div>

          {/* Quote 3 */}
          <div className="flex items-start gap-3 max-w-[430px] mx-auto">
            <div className="w-6 h-6 flex-shrink-0 mt-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 3L20 3L20 16L12 21L4 16L4 3Z" stroke="#FD833E" strokeWidth="1" />
                <path d="M9 13L15 13L15 8L9 8L9 13Z" stroke="#FD833E" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex-1 bg-[#EB4F4F]/16 border-2 border-[#FD833E] rounded-lg px-[25.5px] py-4">
              <p className="text-[#FFE4C6] text-sm leading-[22px] font-mono">
                It feels great being here, but something tells you that this is just the beginning.
              </p>
            </div>
          </div>
        </div>

        {/* THE CREW Section */}
        <div className="bg-[#3199AA]/48 backdrop-blur-[10px] border border-[#31A094] rounded-xl p-6 mb-8 relative max-w-[390px] mx-auto">
          {/* Corner decorations */}
          <div className="absolute top-[10px] left-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute top-[10px] right-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute bottom-[10px] left-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute bottom-[10px] right-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />

          <div className="relative z-10">
            <div className="mb-4">
              <p className="text-[#E5E5E5] text-sm leading-[30px] font-mono mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                Our crew is a backed ecosystem ensures honest work gets rewarded, and rewards community members to contribute towards the system.
              </p>
            </div>
            <h2 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[98px] leading-none mb-4 font-glitch font-bold drop-shadow-[0_6px_6px_rgba(0,0,0,0.5)]">
              THE CREW
            </h2>
            <button className="bg-[#777777]/25 border border-[#96E5FF] rounded-[22px] px-[18px] py-3 backdrop-blur-[4px] shadow-[0_0_9.8px_rgba(255,255,255,0.25),0_6px_rgba(0,0,0,0.45)]">
              <span className="text-white font-mono">Meet the team</span>
            </button>
          </div>
        </div>

        {/* Book One Section */}
        <div className="bg-[#FD833E]/21 backdrop-blur-[10px] border border-[#EB4F4F] rounded-xl p-6 mb-8 relative max-w-[392px] mx-auto">
          {/* Corner decorations */}
          <div className="absolute top-[11px] left-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute top-[11px] right-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute bottom-[11px] left-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute bottom-[11px] right-[12px] w-[11px] h-[11px] rounded-full bg-[#D9D9D9]" />

          <div className="relative z-10">
            <div className="mb-4">
              <p className="text-[#E5E5E5] text-sm leading-[24px] font-['Roboto_Mono',_monospace] mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                Book One: The Last War, is a book that says a lot about both people, places, and 3rd things that are the world hence why it is be unreal.
              </p>
            </div>
            <h2 className="text-white text-[35px] sm:text-[50px] md:text-[65px] lg:text-[73px] leading-none mb-4 font-glitch font-bold drop-shadow-[0_6px_6px_rgba(0,0,0,0.5)]">
              Book One
            </h2>
            <button className="bg-[#777777]/25 border border-[#EB4F4F] rounded-[22px] px-[37px] py-3 backdrop-blur-[4px] shadow-[0_0_9.8px_rgba(255,255,255,0.25),0_6px_rgba(0,0,0,0.45)]">
              <span className="text-white font-mono">Book One</span>
            </button>
          </div>
        </div>

        {/* NFT Minting Cards */}
        <div className="space-y-12 mb-12 max-w-[383px] mx-auto">
          {/* Mint 1 */}
          <div className="bg-gradient-to-b from-[#152044] to-[#2C3964] border-3 border-transparent rounded-[10px] p-5 relative shadow-[0_11px_23.9px_rgba(112,219,242,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-mono">MINT 1: 54,000 Shiba Inu</span>
              <div className="w-8 h-8 bg-gray-400 rounded" />
            </div>
          </div>

          {/* Mint 5 */}
          <div className="bg-gradient-to-b from-[#152044] to-[#2C3964] border-3 border-transparent rounded-[10px] p-5 relative shadow-[0_11px_23.9px_rgba(112,219,242,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-['Roboto_Mono',_monospace]">MINT 5: 245,000 Shiba Inu</span>
              <div className="w-8 h-8 bg-gray-400 rounded" />
            </div>
          </div>

          {/* Mint 10 */}
          <div className="bg-gradient-to-b from-[#152044] to-[#2C3964] border-3 border-transparent rounded-[10px] p-5 relative shadow-[0_11px_23.9px_rgba(112,219,242,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-['Roboto_Mono',_monospace]">MINT 10: 4,900,000 Shiba Inu</span>
              <div className="w-8 h-8 bg-gray-400 rounded" />
            </div>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="bg-[#EAEFED]/50 border-t border-b border-[#EAEFED] py-6 mb-12 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="text-[#EAEFED] text-2xl font-mono mr-8">
              EMBERQUIL STUDIOS BOOK ONE RELEASED PLUS DIGITAL COLLECTIBLES, MERCH, AND BOOKS
            </span>
            <span className="text-[#EAEFED] text-2xl font-mono mr-8">
              EMBERQUIL STUDIOS BOOK ONE RELEASED PLUS DIGITAL COLLECTIBLES, MERCH, AND BOOKS
            </span>
          </div>
        </div>

        {/* CREW Section Title */}
        <h2 className="text-center text-[40px] sm:text-[70px] md:text-[100px] lg:text-[127px] leading-none mb-12 font-glitch font-bold text-white border-white border-2 py-4">
          CREW
        </h2>

        {/* Team Bios */}
        <div className="space-y-16 mb-12 max-w-[374px] mx-auto">
          {/* Bio 1 - Blue */}
          <div>
            <div className="bg-[#4CAA8D]/50 border border-white rounded-[10px] p-6 mb-4">
              <div className="flex items-center gap-16">
                <div className="w-[100px] h-[100px] rounded-full border-2 border-white bg-gray-600" />
                <div>
                  <h3 className="text-white text-lg font-mono mb-2">Blue Takatsuki</h3>
                  <p className="text-white text-lg font-mono">Founder & CEO</p>
                </div>
              </div>
            </div>
            <p className="text-white text-sm leading-[22px] font-mono px-2">
              Shue, a quiet and introspective soul, was born amidst the silent serenity of a moonlit night. With a delicate touch, Shue weaved beauty and tranquility into every word of his stories. Inspired by the delicate blossoms that danced upon the wind, Shue's art evoked a sense of calm thought and serenity. Whether writing about delicate cherry blossoms or the graceful flight of the butterfly, Shue's creations transported viewers to a realm of inner peace and quiet contemplation. Through art, Shue sought to instill a sense of harmony in a world that often seemed chaotic and loud. "Words are wind, after all."
            </p>
          </div>

          {/* Bio 2 - Kitty */}
          <div>
            <div className="bg-[#6F308C]/50 border border-white rounded-[10px] p-6 mb-4">
              <div className="flex items-center gap-16">
                <div className="w-[100px] h-[100px] rounded-full border-2 border-white bg-gray-600" />
                <div>
                  <h3 className="text-white text-lg font-['Roboto_Mono',_monospace] mb-2">KittyWitxh</h3>
                  <p className="text-white text-lg font-['Roboto_Mono',_monospace]">Illustrator</p>
                </div>
              </div>
            </div>
            <p className="text-white text-sm leading-[22px] font-mono px-2">
              KittyWitxh was born on a foggy night, deep in the heart of an enchanted forest. From a young age, she discovered her extraordinary ability to communicate with the natural energies of art and inspiration. With her trusty feline companion, Binx, by her side, KittyWitxh delved into the mystical world of artistry. Her creations were a mesmerizing blend of vibrant colors and intricate details, drawing inspiration from the whispers of nature. Each stroke of her brush seemed to bring the world's she imagined to life, spreading joy and wonder to all who laid eyes on her ethereal work.
            </p>
          </div>

          {/* Bio 3 - Kai */}
          <div>
            <div className="bg-[#E8AC37]/50 border border-white rounded-[10px] p-6 mb-4">
              <div className="flex items-center gap-16">
                <div className="w-[100px] h-[100px] rounded-full border-2 border-white bg-gray-600" />
                <div>
                  <h3 className="text-white text-lg font-['Roboto_Mono',_monospace] mb-2">Artist Kai</h3>
                  <p className="text-white text-lg font-['Roboto_Mono',_monospace]">Manga Artist</p>
                </div>
              </div>
            </div>
            <p className="text-white text-sm leading-[22px] font-mono px-2">
              Artist Kai, A young artist with a lot to learn, drawing inspiration from exciting mangas and old school hip-hop music, Kai's art was very manga inspired with varying line weights and clean strokes he captured the energy of characters expressions and personalities, putting viewers into different world and stories and always aspiring to be better than the previous day!
            </p>
          </div>

          {/* Bio 4 - Suppoku */}
          <div>
            <div className="bg-[#F7A4EF]/50 border border-white rounded-[10px] p-6 mb-4">
              <div className="flex items-center gap-16">
                <div className="w-[100px] h-[100px] rounded-full border-2 border-white bg-gray-600" />
                <div>
                  <h3 className="text-white text-lg font-['Roboto_Mono',_monospace] mb-2">Suppoku</h3>
                  <p className="text-white text-lg font-['Roboto_Mono',_monospace]">Artist</p>
                </div>
              </div>
            </div>
            <p className="text-white text-sm leading-[22px] font-mono px-2">
              a mysterious figure clad in flowing robes, emerged from the depths of a pristine mountain spring. Blessed with the power to manipulate water with grace and finesse, Supokku became an artist of the liquid realm. With a gentle touch, he transformed mundane water droplets into breathtaking sculptures that defied the laws of nature. Be it a serene waterfall frozen mid-flow or a delicate wave suspended in time, Supokku's creations mesmerized all who beheld them, transcending the boundaries between art and reality.
            </p>
          </div>
        </div>

        {/* Book Cover Section */}
        <div className="mb-12 max-w-[389px] mx-auto">
          <h2 className="text-center text-[30px] sm:text-[50px] md:text-[65px] lg:text-[78px] leading-none mb-8 font-glitch font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            BOOK ONE THE LAST WAR
          </h2>
          <div className="bg-black border-2 border-[#37A8AB] rounded-[10px] p-2.5 shadow-[14px_21px_rgba(19,35,52,1)]">
            <div className="w-full h-[499px] bg-gray-800 rounded border-2 border-[#37A8AB]" />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-white text-2xl font-mono">54,000 SHIBA INU</span>
            <div className="w-11 h-11 bg-gray-400 rounded" />
          </div>
        </div>

        {/* Founder's Badge Section */}
        <div className="mb-12">
          <h2 className="text-center text-[40px] sm:text-[80px] md:text-[140px] lg:text-[195px] leading-none mb-8 font-glitch font-bold text-[#EB4F4F] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Founder's Badge
          </h2>
          <p className="text-center text-white text-sm leading-[26px] font-mono max-w-[361px] mx-auto mb-8">
            Hard caps at 3 per wallet. This is to avoid abuse and to reward our early holders honestly. Founder's Badge gives you access to every book, as well as collects special features and rewards from the roadmap.
          </p>
          <div className="bg-[#A9B7E2]/40 border border-[#96B3FF] rounded-[10px] p-5 max-w-[398px] mx-auto shadow-[0_11px_23.9px_rgba(222,149,149,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-['Roboto_Mono',_monospace]">MINT 1: 1,000,000 SHIBA INU</span>
              <div className="w-8 h-8 bg-gray-400 rounded" />
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-12 max-w-[413px] mx-auto">
          <h2 className="text-center text-[60px] sm:text-[120px] md:text-[200px] lg:text-[292px] leading-none mb-8 font-glitch font-bold">
            THEY BELIEVE IN US, and you?
          </h2>
          <p className="text-[#EAEFED] text-sm leading-[22px] font-mono">
            The Last War is a project started and created by Cedric. It began as a small discord of only 5-7 people and a lot of skepticism. Throughout the last 6 months Cedric has proven himself as someone that's honest, kind, and a serious builder. He is passionate about his work and his project. Now 'The Last War' is no longer a project or a discord. It's a movement. We plan to bring homemade manga, anime, and propel the digital art community further by employing an honest, and equitable labor route. The artists of these various projects are the recipients of any funds given to their designated work. Split between the labor of creative writing, artistry, and other avenues. The Last War empowers and propels a creator economy based on equitable design.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#2E3736] py-8 px-4">
        <div className="max-w-[430px] mx-auto text-center">
          <h3 className="text-white text-[30px] sm:text-[50px] md:text-[70px] lg:text-[83px] leading-none mb-4 font-glitch font-bold border-white border-2 py-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            emberquil studios
          </h3>
          <div className="flex items-center justify-center gap-10 mb-4 border-t border-b border-white py-2">
            <Link href="/" className="text-white font-mono">INTRO</Link>
            <Link href="/" className="text-white font-mono">ABOUT</Link>
            <Link href="/" className="text-white font-mono">TEAM</Link>
            <Link href="/" className="text-white font-mono">NFTS</Link>
            <Link href="/" className="text-white font-mono">STORY</Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <a href="#" className="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.33 2.6L13.33 2.6L13.33 10.69" stroke="white" strokeWidth="1" />
              </svg>
            </a>
            <a href="#" className="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.67" y="2.67" width="10.67" height="10.67" stroke="white" strokeWidth="1" />
                <circle cx="8" cy="8" r="2" stroke="white" strokeWidth="1" />
              </svg>
            </a>
            <a href="#" className="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.33 7.33H6.67V8.67" stroke="white" strokeWidth="1" />
                <path d="M9.33 7.33H10.67V8.67" stroke="white" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
