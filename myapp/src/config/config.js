import dotenv from "dotenv";
dotenv.config();

const config = {
    personalAccessToken: process.env.VITE_GITHUB_TOKEN?.replace(/^\"|\"$/g, ''),
    emailjsServiceId: process.env.VITE_EMAIL_SERVICE_ID?.replace(/^\"|\"$/g, ''),
    emailjsTemplateId: process.env.VITE_EMAIL_TEMPLATE_ID?.replace(/^\"|\"$/g, ''),
    emailjsPublicKey: process.env.VITE_EMAIL_PUBLIC_KEY?.replace(/^\"|\"$/g, ''),
};

console.log(config);

export default config;
