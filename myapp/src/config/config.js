const config = {
    personalAccessToken: import.meta.env.VITE_GITHUB_TOKEN,
    emailjsServiceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
    emailjsTemplateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    emailjsPublicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
};

console.log(config);

export default config;
