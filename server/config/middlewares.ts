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
            'https://owjkaylfsdqyukhbszrx.supabase.co', // API requests
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Cloudinary images/thumbnails
            'https://owjkaylfsdqyukhbszrx.supabase.co', // images from Supabase
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // Cloudinary videos/audio if any
            'https://owjkaylfsdqyukhbszrx.supabase.co',
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
        'https://bdl-2.vercel.app',
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
