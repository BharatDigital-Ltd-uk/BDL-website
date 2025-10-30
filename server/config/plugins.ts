
// // config/plugins.ts
// export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       // Optional: set a default folder in your Cloudinary account
//       actionOptions: {
//         upload: {
//           folder: env('CLOUDINARY_FOLDER', 'testimonials'),
//         },
//         delete: {},
//       },
//     },
//   },
// });

export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
  // File uploads via Cloudinary
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          // Ensures PDFs/images/videos are handled correctly
          resource_type: 'auto',
          // Forces public delivery (not authenticated/private)
          type: 'upload',
          // Default folder for uploaded assets
          folder: env('CLOUDINARY_FOLDER', 'testimonials'),
        },
        delete: {},
      },
    },
  },

  // Email plugin (SMTP via Nodemailer)
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtppro.zoho.eu'), // EU data-centre SMTP
        port: Number(env('SMTP_PORT', '587')),
        // secure = true → SSL (port 465); false → STARTTLS (port 587)
        secure: env('SMTP_SECURE') === 'true' || env('SMTP_PORT') === '465',
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        requireTLS: true,
        tls: { minVersion: 'TLSv1.2' },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'info@bharatdigital.co.uk'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'info@bharatdigital.co.uk'),
      },
    },
  },
});





