
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Strategic Liaison',
  description: 'Initiate a dialogue with our global expansion and funding architecture team across our international offices in Canada, Portugal, Nigeria, Malaysia, and the UAE.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
