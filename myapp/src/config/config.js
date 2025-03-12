const config = {
    personalAccessToken: String(import.meta.env.VITE_GITHUB_TOKEN),
    emailjsServiceId: String(import.meta.env.VITE_EMAIL_SERVICE_ID),
    emailjsTemplateId: String(import.meta.env.VITE_EMAIL_TEMPLATE_ID),
    emailjsPublicKey: String(import.meta.env.VITE_EMAIL_PUBLIC_KEY),
}

export default config;