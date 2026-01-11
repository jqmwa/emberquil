'use client'

import { Section, Container, Card, Button, Badge } from '../kit'

export default function CryptoSection() {
  return (
    <Section className="bg-dark/50">
      <Container size="lg">
        <div className="mb-12 text-center">
          <div className="font-mono text-nerv-orange text-sm mb-2">
            <span>&gt;</span> CRYPTO.INTEGRATION
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nerv-sage uppercase tracking-tight mb-4">
            Shiba Inu Rewards
          </h2>
          <p className="text-lg text-nerv-sage/70 font-mono max-w-3xl mx-auto">
            Studio currency powered by Shiba Inu. Support artists, mint collectibles, 
            and participate in the creator economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Your Shiba */}
          <Card variant="default" className="p-6 text-center" glow>
            <div className="text-4xl mb-3">🐕</div>
            <div className="text-xs text-nerv-sage/40 font-mono mb-2 uppercase tracking-wider">
              Your Shiba
            </div>
            <div className="text-3xl font-display font-bold text-nerv-orange mb-2">
              0.00
            </div>
            <Badge variant="default" className="text-xs">Connect Wallet</Badge>
          </Card>

          {/* Weekly Airdrop */}
          <Card variant="default" className="p-6 text-center" glow>
            <div className="text-4xl mb-3">🎁</div>
            <div className="text-xs text-nerv-sage/40 font-mono mb-2 uppercase tracking-wider">
              Weekly Airdrop
            </div>
            <div className="text-3xl font-display font-bold text-nerv-orange mb-2 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              4d 19h
            </div>
            <Badge variant="green" className="text-xs">Active</Badge>
          </Card>

          {/* Founder's Badge */}
          <Card variant="default" className="p-6 text-center" glow>
            <div className="text-4xl mb-3">👑</div>
            <div className="text-xs text-nerv-sage/40 font-mono mb-2 uppercase tracking-wider">
              Founder's Badge
            </div>
            <div className="text-xl font-display font-bold text-nerv-orange mb-2">
              1M SHIB
            </div>
            <Badge variant="orange" className="text-xs">Limited</Badge>
          </Card>
        </div>

        {/* Minting Options */}
        <div className="max-w-2xl mx-auto">
          <Card variant="default" className="p-6 md:p-8">
            <h3 className="text-xl font-display font-bold text-nerv-orange mb-6 text-center">
              Mint Founder's Badge
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="text-sm text-nerv-sage/70 font-mono leading-relaxed">
                Hard caps at 3 per wallet to avoid abuse and reward early holders honestly. 
                Founder's Badge gives you access to every book, special features, and roadmap rewards.
              </div>
            </div>

            <div className="border border-nerv-orange/30 rounded-nerv p-4 mb-6 bg-nerv-orange/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-nerv-sage/40 font-mono mb-1">MINT PRICE</div>
                  <div className="text-2xl font-display font-bold text-nerv-orange">
                    1,000,000 SHIB
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-nerv-sage/40 font-mono mb-1">SUPPLY</div>
                  <div className="text-lg font-display font-bold text-nerv-sage">
                    Limited
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                How to Earn
              </Button>
              <Button variant="primary" className="w-full">
                Connect Wallet
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-nerv-teal/20">
              <div className="text-xs text-nerv-sage/40 font-mono text-center">
                SYSTEM_STATUS: ONLINE | NETWORK: VERIFIED | SECURITY: ACTIVE
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
