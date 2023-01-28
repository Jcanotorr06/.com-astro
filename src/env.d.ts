/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly NOTION_TOKEN: string;
    readonly EMAIL_SERVICE_ID: string;
    readonly EMAIL_TEMPLATE_ID: string;
    readonly EMAIL_PUBLIC_KEY: string;
    readonly ASTRO_TEST_VAR: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}