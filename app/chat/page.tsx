'use client'

import Image from 'next/image'
import LowerNavbar from '@/components/LowerNavbar'

const messages = [
  {
    id: 1,
    name: 'Shiba',
    username: '@shiba',
    avatar: '/icons/shiba.svg',
    message: 'Welcome to EmberQuill Studios chat!',
    time: 'Just now',
    likes: 0,
  },
  {
    id: 2,
    name: 'ArtistOne',
    username: '@artistone',
    avatar: '/icons/logo.webp',
    message: 'Excited to be part of this community!',
    time: '5m ago',
    likes: 2,
  },
  {
    id: 3,
    name: 'CreativeMind',
    username: '@creativemind',
    avatar: '/icons/logo.webp',
    message: 'The studio facilities are amazing',
    time: '12m ago',
    likes: 1,
  },
  {
    id: 4,
    name: 'DesignPro',
    username: '@designpro',
    avatar: '/icons/logo.webp',
    message: 'Working on some new concepts today',
    time: '18m ago',
    likes: 3,
  },
  {
    id: 5,
    name: 'StudioMember',
    username: '@studiomember',
    avatar: '/icons/logo.webp',
    message: 'Can anyone share tips on leveling up?',
    time: '25m ago',
    likes: 0,
  },
  {
    id: 6,
    name: 'ArtLover',
    username: '@artlover',
    avatar: '/icons/logo.webp',
    message: 'The plush collection looks incredible!',
    time: '32m ago',
    likes: 5,
  },
  {
    id: 7,
    name: 'CommunityBuilder',
    username: '@communitybuilder',
    avatar: '/icons/logo.webp',
    message: 'Love the collaborative environment here',
    time: '45m ago',
    likes: 4,
  },
  {
    id: 8,
    name: 'Innovator',
    username: '@innovator',
    avatar: '/icons/logo.webp',
    message: 'Working on something special for the community',
    time: '1h ago',
    likes: 6,
  },
]

export default function ChatPage() {
  return (
    <div className="relative flex h-screen w-full max-w-[520px] flex-1 flex-col overflow-hidden bg-dark mx-auto px-2 shadow-inner" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 8px)', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 60px)' }}>
      <div className="flex flex-1 flex-col overflow-hidden relative">
        {/* Header */}
        <div className="flex-shrink-0">
          <style jsx>{`
            @keyframes headerFadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes headerFadeOut {
              0% { opacity: 1; }
              100% { opacity: 0; }
            }
            .header-fade-in {
              animation: headerFadeIn 0.4s ease-out forwards;
            }
            .header-fade-out {
              animation: headerFadeOut 0.25s ease-in forwards;
            }
          `}</style>
          <div className="flex items-center justify-between mb-4 h-12">
            <h1 className="text-2xl font-bold tracking-wide header-fade-in text-white">CHAT</h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-2 mb-3 flex-shrink-0">
          <div className="bg-dark/50 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center h-[80px]">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="text-[10px] text-white/40 uppercase tracking-wide">Your Shibe</span>
            </div>
            <div className="text-2xl font-bold text-white">0.00</div>
          </div>
          <div className="bg-dark/50 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center h-[80px]">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white" aria-hidden="true">
                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                <path d="M12 8v13"></path>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
              </svg>
              <span className="text-[10px] text-white/40 uppercase tracking-wide">Weekly Airdrop</span>
            </div>
            <div className="text-2xl font-bold text-white flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              4d 19h
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-3 flex-shrink-0">
          <button className="bg-dark/50 border border-white/10 rounded-xl p-2 h-[36px] hover:bg-dark/70 transition-colors">
            <div className="flex items-center justify-center h-full">
              <span className="text-xs font-bold text-white">HOW TO EARN</span>
            </div>
          </button>
          <button className="bg-dark/50 border border-white/10 rounded-xl p-2 h-[36px] hover:bg-dark/70 transition-colors">
            <div className="flex items-center justify-center gap-2 h-full">
              <span className="text-xs font-bold text-white">TIP SETTINGS</span>
              <span className="text-[10px] text-white/40 flex items-center gap-0.5">
                <span className="w-3 h-3 rounded-full overflow-hidden inline-flex items-center justify-center flex-shrink-0">
                  <Image alt="LOGO" className="w-full h-full object-cover" src="/icons/logo.webp" width={12} height={12} />
                </span>
                1
              </span>
            </div>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-2 min-h-0 pb-14" style={{ maskImage: 'linear-gradient(transparent 0%, black 8%, black 100%, black 100%)', WebkitMaskImage: 'linear-gradient(transparent 0%, black 8%, black 100%, black 100%)' }}>
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-2 p-2 rounded-lg relative bg-dark/50 border border-white/10">
              <button className="flex-shrink-0 cursor-pointer hover:opacity-80">
                <div className="relative">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full bg-dark h-8 w-8 border border-white/10">
                    <Image className="h-full w-full object-cover" alt={msg.name} src={msg.avatar} width={32} height={32} />
                  </span>
                </div>
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <button className="font-semibold text-xs truncate text-white hover:text-white/70">{msg.name}</button>
                  <button className="text-[10px] text-white/50 truncate hover:text-white/70">{msg.username}</button>
                </div>
                <p className="text-xs text-white/70 break-words">{msg.message}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <span className="text-[10px] text-white/60">{msg.time}</span>
                <button disabled title="Connect wallet to reply" className="flex items-center justify-center w-[28px] h-[28px] rounded-lg transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply w-3.5 h-3.5 text-white/50 hover:text-white transition-colors" aria-hidden="true">
                    <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                    <path d="m9 17-5-5 5-5"></path>
                  </svg>
                </button>
                <button disabled title="Connect wallet to tip" className={`flex flex-col items-center justify-center w-[28px] h-[28px] rounded-lg transition-all ${msg.likes > 0 ? 'bg-white/10' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-heart w-3.5 h-3.5 transition-colors ${msg.likes > 0 ? 'text-white fill-white/50' : 'text-white/50'}`} aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  {msg.likes > 0 && <span className="text-[7px] font-bold text-white -mt-0.5">{msg.likes}</span>}
                </button>
              </div>
            </div>
          ))}
          <div></div>
        </div>

        {/* Bottom Input Area */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
          <div className="pointer-events-auto bg-gradient-to-t from-dark via-dark to-transparent pt-3">
            <div className="pb-2">
              <div className="flex items-center justify-center bg-dark/50 border border-white/10 rounded-xl p-3">
                <p className="text-sm text-white/40">Connect wallet to send messages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LowerNavbar />
    </div>
  )
}
