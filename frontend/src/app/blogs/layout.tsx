
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Core | Strategic Insights & Global News',
  description: 'Executive intelligence on global scaling, strategic partnerships, and institutional development from the Business Summit board.',
}

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
