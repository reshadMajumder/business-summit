import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investors Summit | High-Level Cross Border Collaboration',
  description: 'The premier global convening of investors, government dignitaries, and project owners. Facilitating G2G, G2B, and B2B engagements since 2016.',
}

export default function SummitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
