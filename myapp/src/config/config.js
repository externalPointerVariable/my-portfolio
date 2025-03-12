function cleanEnvVar(value) {
  return value.replace(/^"(.*)"$/, "$1"); // Removes extra double quotes
}

const config = {
  personalAccessToken: cleanEnvVar(import.meta.env.VITE_GITHUB_TOKEN || ""),
  emailjsServiceId: cleanEnvVar(import.meta.env.VITE_EMAIL_SERVICE_ID || ""),
  emailjsTemplateId: cleanEnvVar(import.meta.env.VITE_EMAIL_TEMPLATE_ID || ""),
  emailjsPublicKey: cleanEnvVar(import.meta.env.VITE_EMAIL_PUBLIC_KEY || ""),
};


export default config;
