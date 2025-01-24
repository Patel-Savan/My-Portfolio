declare var window: any;

export const environment = {
    production: false,
    API_EMAILJS_SERVICE_ID: window.__env?.API_EMAILJS_SERVICE_ID,
    API_EMAILJS_TEMPLATE_ID: window.__env?.API_EMAILJS_TEMPLATE_ID,
    API_EMAILJS_USER_ID: window.__env?.API_EMAILJS_USER_ID,
    API_BASE_URL:window.__env?.API_BASE_URL
  };
  