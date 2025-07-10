import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codecrafters.rweru.com'
  const locales = ['en', 'tr']
  
  // Base routes that don't require dynamic data
  const baseRoutes = [
    '/',
    '/home',
    '/about',
    '/contact',
    '/events',
    '/blogs',
  ]

  // Generate sitemap entries for each locale and route
  const routes = baseRoutes.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  return routes
} 