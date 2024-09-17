import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
			url: 'https://etsmanagementimmo.com',
			lastModified: new Date(),
            changeFrequency: 'yearly',
			priority: 1,
		},
        {
			url: 'https://etsmanagementimmo.com/contact-us',
			lastModified: new Date(),
            changeFrequency: 'monthly',
			priority: 0.9,
		},
        {
			url: 'https://etsmanagementimmo.com/blog',
			lastModified: new Date(),
            changeFrequency: 'monthly',
			priority: 0.8,
		},
        {
			url: 'https://etsmanagementimmo.com/about',
			lastModified: new Date(),
            changeFrequency: 'yearly',
			priority: 0.8,
		},
        {
			url: 'https://etsmanagementimmo.com/faq',
			lastModified: new Date(),
            changeFrequency: 'yearly',
			priority: 0.7,
		},
    ]
}