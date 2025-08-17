export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'http:',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Cloudinary images/thumbnails
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Cloudinary videos/audio if any
          ],
          'frame-src': [
            "'self'",
            'res.cloudinary.com', // just in case embeds/iframed previews are used
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://bdl-website.vercel.app',
        'http://localhost:5173',
        'https://www.bharatdigital.co.uk',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
