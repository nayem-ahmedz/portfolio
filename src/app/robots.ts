import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard', '/admin', '/api'], // Keeps these out of Google
        },
        sitemap: 'https://nayem-ahmed.vercel.app/sitemap.xml'
    }
}