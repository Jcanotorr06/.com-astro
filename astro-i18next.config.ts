import type { AstroI18nextConfig } from 'astro-i18next';

const config : AstroI18nextConfig = {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    i18nextServer: {
        debug: true,
    }

}