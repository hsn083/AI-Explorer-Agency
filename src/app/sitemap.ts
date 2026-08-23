import { MetadataRoute } from 'next'
import { getAllTeamMembers } from '@/lib/team-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aiexplorer.agency'
  const teamMembers = getAllTeamMembers()
  
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-23'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date('2026-08-23'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  const profileUrls: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: `${baseUrl}/profiles/${member.id}`,
    lastModified: new Date('2026-08-23'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...profileUrls]
}
