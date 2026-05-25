/**
 * CONFIGURACIÓN DE EMAILJS
 * 
 * PASOS PARA CONFIGURAR:
 * 
 * 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
 * 
 * 2. Conecta tu email (Gmail recomendado):
 *    - En el panel, ve a "Email Services"
 *    - Haz clic en "Connect new service" 
 *    - Selecciona "Gmail"
 *    - Autoriza el acceso
 *    - Copia el Service ID (ejemplo: service_abc123...)
 * 
 * 3. Crea un Template de Email:
 *    - Ve a "Email Templates"
 *    - Haz clic en "Create New Template"
 *    - Configura el template con estas variables:
 *      * {{from_name}} - Nombre del usuario
 *      * {{from_email}} - Email del usuario
 *      * {{subject}} - Asunto del mensaje
 *      * {{message}} - Mensaje del usuario
 *    - Email destinatario: innovar.iamtec@gmail.com
 *    - Guarda y copia el Template ID (ejemplo: template_abc123...)
 * 
 * 4. Obtén tu Public Key:
 *    - Ve a "Account" > "API Keys"
 *    - Copia el "Public Key" (nunca compartas la Secret Key)
 * 
 * 5. Reemplaza los valores de abajo:
 */

export const emailjsConfig = {
  publicKey: 'cilxWVO6VxRHOi2_k',        // Reemplaza con tu Public Key
  serviceId: 'service_82a7nur',        // Reemplaza con tu Service ID
  templateId: 'template_g79lqec',      // Reemplaza con tu Template ID
  recipientEmail: 'innovar.iamtec@gmail.com' // Email destinatario
};

/**
 * TEMPLATE DE EJEMPLO PARA EMAILJS:
 * 
 * Subject: Nueva consulta de contacto - {{subject}}
 * 
 * De: {{from_name}} ({{from_email}})
 * Asunto: {{subject}}
 * 
 * Mensaje:
 * {{message}}
 * 
 * ---
 * Este mensaje fue enviado desde el formulario de contacto en www.iamtec.com
 */

// Verificar que la configuración está completa
export function isEmailJsConfigured() {
  return emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY_HERE' &&
         emailjsConfig.serviceId !== 'YOUR_SERVICE_ID_HERE' &&
         emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID_HERE';
}
