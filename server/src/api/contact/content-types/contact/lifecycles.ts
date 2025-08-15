// src/api/contact/content-types/contact/lifecycles.ts
export default {
  async afterCreate(event: any) {
    const { result } = event;

    const to = result?.email;
    if (!to) {
      strapi.log.warn('Contact created without email; skipping auto-reply.');
      return;
    }

    const firstName = (result?.firstName || '').toString().trim();
    const lastName = (result?.lastName || '').toString().trim();
    const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
    const phone = (result?.phone || '').toString().trim();
    const rawMessage = (result?.message || '').toString();

    const site = process.env.SITE_NAME || 'our team';
    const ownerEmail = process.env.OWNER_EMAIL;

    // escape basic HTML in the message
    const escapedHtmlMessage = rawMessage
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    try {
      const emailService = strapi.plugin('email').service('email');

      // 1) Auto-reply to the submitter
      await emailService.send({
        to,
        subject: `Thanks for contacting ${site}`,
        text: [
          fullName ? `Hi ${fullName},` : 'Hi,',
          '',
          'Thanks for reaching out. We received your message:',
          `"${rawMessage}"`,
          '',
          "We'll get back to you soon.",
          `— ${site}`,
        ].join('\n'),
        html: `
          <p>${fullName ? `Hi ${fullName},` : 'Hi,'}</p>
          <p>Thanks for reaching out. We received your message:</p>
          <blockquote style="margin:0 0 1em 0;padding-left:1em;border-left:3px solid #eee;">
            ${escapedHtmlMessage}
          </blockquote>
          <p>We'll get back to you soon.</p>
          <p>— ${site}</p>
        `,
      });

      // 2) Optional: notify yourself/your team
      if (ownerEmail) {
        await emailService.send({
          to: ownerEmail,
          subject: `New contact: ${fullName || to}`,
          text: [
            `Name: ${fullName || '—'}`,
            `Email: ${to}`,
            `Phone: ${phone || '—'}`,
            '',
            'Message:',
            rawMessage,
          ].join('\n'),
          html: `
            <p><strong>Name:</strong> ${fullName || '—'}</p>
            <p><strong>Email:</strong> ${to}</p>
            <p><strong>Phone:</strong> ${phone || '—'}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="margin:0;padding-left:1em;border-left:3px solid #eee;">
              ${escapedHtmlMessage}
            </blockquote>
          `,
        });
      }
    } catch (err) {
      strapi.log.error('Failed to send contact emails', err);
    }
  },
};
