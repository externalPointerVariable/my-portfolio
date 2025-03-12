function cleanEnvVar(value) {
  return value.replace(/^"(.*)"$/, "$1"); // Removes extra double quotes
}

const config = {
  personalAccessToken: cleanEnvVar(import.meta.env.VITE_GITHUB_TOKEN || ""),
  emailjsServiceId: cleanEnvVar(import.meta.env.VITE_EMAIL_SERVICE_ID || ""),
  emailjsTemplateId: cleanEnvVar(import.meta.env.VITE_EMAIL_TEMPLATE_ID || ""),
  emailjsPublicKey: cleanEnvVar(import.meta.env.VITE_EMAIL_PUBLIC_KEY || ""),
};

console.log(config); // Debugging

export default config;
