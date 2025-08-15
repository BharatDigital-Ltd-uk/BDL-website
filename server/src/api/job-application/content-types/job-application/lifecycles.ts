// // src/api/job-application/content-types/job-application/lifecycles.ts
// // Strapi v5 — sends (1) auto-reply to applicant, (2) notification to OWNER_EMAIL

// function makeAbsoluteUrl(pathOrUrl?: string): string {
//   if (!pathOrUrl) return '';
//   if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
//   const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
//   return base ? `${base}${pathOrUrl}` : pathOrUrl;
// }

// export default {
//   async afterCreate(event: any) {
//     const { result } = event;

//     // Required fields per your schema.json
//     const to = (result?.email || '').toString().trim();
//     if (!to) {
//       strapi.log.warn('[job-applications.afterCreate] Created without email; skipping auto-reply.');
//       return;
//     }

//     const firstName = (result?.firstName || '').toString().trim();
//     const lastName  = (result?.lastName  || '').toString().trim();
//     const fullName  = [firstName, lastName].filter(Boolean).join(' ').trim();

//     const phone     = (result?.phone    || '').toString().trim();
//     const jobTitle  = (result?.jobTitle || '').toString().trim();

//     // resume is a single media (per schema), may be a populated object with .url
//     const resumeUrl = makeAbsoluteUrl(result?.resume?.url);

//     const site       = process.env.SITE_NAME   || 'our team';
//     const ownerEmail = process.env.OWNER_EMAIL || '';

//     try {
//       const emailService = strapi.plugin('email').service('email');

//       // 1) Auto-reply to the applicant
//       await emailService.send({
//         to,
//         subject: `Thanks for applying${jobTitle ? ` for ${jobTitle}` : ''} at ${site}`,
//         text: [
//           fullName ? `Hi ${fullName},` : 'Hi,',
//           '',
//           `Thanks for your application${jobTitle ? ` for "${jobTitle}"` : ''} at ${site}.`,
//           'We’ve received it and our team will review it shortly.',
//           resumeUrl ? `\nResume on file: ${resumeUrl}` : '',
//           '',
//           `— ${site}`,
//         ].join('\n'),
//         html: `
//           <p>${fullName ? `Hi ${fullName},` : 'Hi,'}</p>
//           <p>Thanks for your application${jobTitle ? ` for <strong>${jobTitle}</strong>` : ''} at ${site}. We’ve received it and our team will review it shortly.</p>
//           ${resumeUrl ? `<p><strong>Resume on file:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
//           <p>— ${site}</p>
//         `,
//       });

//       // 2) Notify your team (OWNER_EMAIL)
//       if (ownerEmail) {
//         await emailService.send({
//           to: ownerEmail,
//           subject: `New job application: ${fullName || to}${jobTitle ? ` — ${jobTitle}` : ''}`,
//           text: [
//             `Name: ${fullName || '—'}`,
//             `Email: ${to}`,
//             `Phone: ${phone || '—'}`,
//             `Job Title: ${jobTitle || '—'}`,
//             resumeUrl ? `Resume: ${resumeUrl}` : '',
//           ].join('\n'),
//           html: `
//             <p><strong>Name:</strong> ${fullName || '—'}</p>
//             <p><strong>Email:</strong> ${to}</p>
//             <p><strong>Phone:</strong> ${phone || '—'}</p>
//             <p><strong>Job Title:</strong> ${jobTitle || '—'}</p>
//             ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
//           `,
//         });
//       }

//       strapi.log.info(`[job-applications.afterCreate] Confirmation sent to ${to}${ownerEmail ? `; notified ${ownerEmail}` : ''}.`);
//     } catch (err) {
//       strapi.log.error('[job-applications.afterCreate] Failed to send application emails', err);
//     }
//   },
// };

// src/api/job-application/content-types/job-application/lifecycles.ts
// Strapi v5 — sends (1) auto-reply to applicant, (2) notification to OWNER_EMAIL

function toAbsoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return '';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;

  // Prefer Strapi's server.url; fall back to PUBLIC_URL; else return original
  const serverUrl = strapi.config.get('server.url') as string | undefined;
  const base = (serverUrl || process.env.PUBLIC_URL || '').replace(/\/$/, '');
  return base ? `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}` : pathOrUrl;
}

function pickResumeUrl(resume: any): string {
  // Supports single-media object, array, or raw id (unpopulated)
  if (!resume) return '';
  const item = Array.isArray(resume) ? resume[0] : resume;
  const url = item?.url || '';
  return toAbsoluteUrl(url);
}

export default {
  async afterCreate(event: any) {
    const { result } = event;

    // Re-fetch with population so media fields are available
    let populated: any = result;
    try {
      populated = await strapi.entityService.findOne(
        'api::job-application.job-application',
        result.id,
        { populate: { resume: true } }
      );
    } catch (e) {
      strapi.log.warn('[job-applications.afterCreate] Could not re-fetch with populate; proceeding with raw result.');
    }

    // Required fields per your schema.json
    const to = (populated?.email || '').toString().trim();
    if (!to) {
      strapi.log.warn('[job-applications.afterCreate] Created without email; skipping auto-reply.');
      return;
    }

    const firstName = (populated?.firstName || '').toString().trim();
    const lastName  = (populated?.lastName  || '').toString().trim();
    const fullName  = [firstName, lastName].filter(Boolean).join(' ').trim();

    const phone     = (populated?.phone    || '').toString().trim();
    const jobTitle  = (populated?.jobTitle || '').toString().trim();

    // Works for single or multiple media; returns absolute URL or ''
    let resumeUrl = pickResumeUrl(populated?.resume);

    // If still empty and original had a raw value, try building from it
    if (!resumeUrl && result?.resume?.url) {
      resumeUrl = toAbsoluteUrl(result.resume.url);
    }

    const site       = process.env.SITE_NAME   || 'our team';
    const ownerEmail = process.env.OWNER_EMAIL || '';

    try {
      const emailService = strapi.plugin('email').service('email');

      // 1) Auto-reply to the applicant
      await emailService.send({
        to,
        subject: `Thanks for applying${jobTitle ? ` for ${jobTitle}` : ''} at ${site}`,
        text: [
          fullName ? `Hi ${fullName},` : 'Hi,',
          '',
          `Thanks for your application${jobTitle ? ` for "${jobTitle}"` : ''} at ${site}.`,
          'We’ve received it and our team will review it shortly.',
          resumeUrl ? `\nResume on file: ${resumeUrl}` : '',
          '',
          `— ${site}`,
        ].join('\n'),
        html: `
          <p>${fullName ? `Hi ${fullName},` : 'Hi,'}</p>
          <p>Thanks for your application${jobTitle ? ` for <strong>${jobTitle}</strong>` : ''} at ${site}. We’ve received it and our team will review it shortly.</p>
          ${resumeUrl ? `<p><strong>Resume on file:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
          <p>— ${site}</p>
        `,
      });

      // 2) Notify your team (OWNER_EMAIL)
      if (ownerEmail) {
        await emailService.send({
          to: ownerEmail,
          subject: `New job application: ${fullName || to}${jobTitle ? ` — ${jobTitle}` : ''}`,
          text: [
            `Name: ${fullName || '—'}`,
            `Email: ${to}`,
            `Phone: ${phone || '—'}`,
            `Job Title: ${jobTitle || '—'}`,
            resumeUrl ? `Resume: ${resumeUrl}` : '',
          ].join('\n'),
          html: `
            <p><strong>Name:</strong> ${fullName || '—'}</p>
            <p><strong>Email:</strong> ${to}</p>
            <p><strong>Phone:</strong> ${phone || '—'}</p>
            <p><strong>Job Title:</strong> ${jobTitle || '—'}</p>
            ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>` : ''}
          `,
        });
      }

      strapi.log.info(`[job-applications.afterCreate] Confirmation sent to ${to}${ownerEmail ? `; notified ${ownerEmail}` : ''}.`);
    } catch (err) {
      strapi.log.error('[job-applications.afterCreate] Failed to send application emails', err);
    }
  },
};
