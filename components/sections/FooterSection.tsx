'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container, Divider } from '../kit'

export default function FooterSection() {
  const navLinks = [
    { label: 'Studio', href: '#studio' },
    { label: 'Artists', href: '#artists' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Plush', href: '#plush' },
    { label: 'Level Up', href: '#level-up' },
    { label: 'Community', href: '#community' },
  ]

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '◉', label: 'Instagram', href: '#' },
    { icon: '◈', label: 'Discord', href: '#' },
  ]

  return (
    <footer className="bg-dark border-t border-nerv-teal/30 py-12">
      <Container size="lg">
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="h-10 w-10 flex items-center justify-center">
                <Image
                  src="/icons/logo.webp"
                  alt="EmberQuill Studios"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(232,93,4,0.6)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-display font-bold text-nerv-orange uppercase tracking-wider">
                  EmberQuill
                </span>
                <span className="text-xs text-nerv-sage/60 uppercase tracking-widest">
                  Studios
                </span>
              </div>
            </Link>
            <p className="text-sm text-nerv-sage/60 font-mono leading-relaxed mb-4">
              Black-owned manga studio. Providing housing, contracts, and opportunities 
              for creative professionals.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-nerv-teal rounded-nerv flex items-center justify-center text-nerv-sage hover:text-nerv-orange hover:border-nerv-orange transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-display font-bold text-nerv-orange uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-nerv-sage/70 hover:text-nerv-orange font-mono transition-colors"
                  >
                    <span className="text-nerv-orange/40 mr-2">&gt;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal Status */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-display font-bold text-nerv-orange uppercase tracking-wider mb-4">
              System Status
            </h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between p-2 bg-nerv-teal/5 border border-nerv-teal/20 rounded-nerv">
                <span className="text-nerv-sage/60">SERVER</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nerv-green rounded-full animate-pulse" />
                  <span className="text-nerv-green">ONLINE</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-nerv-teal/5 border border-nerv-teal/20 rounded-nerv">
                <span className="text-nerv-sage/60">MINTING</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nerv-green rounded-full animate-pulse" />
                  <span className="text-nerv-green">ACTIVE</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-nerv-teal/5 border border-nerv-teal/20 rounded-nerv">
                <span className="text-nerv-sage/60">APPLICATIONS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-nerv-green rounded-full animate-pulse" />
                  <span className="text-nerv-green">OPEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider glow className="mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-nerv-sage/40">
          <div>
            © 2026 EmberQuill Studios. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Terminal ID: EQS-NERV-2026</span>
            <span>•</span>
            <span>Build: v2.0.0</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
