const { createClient } = require('@supabase/supabase-js');

module.exports = ({ env }) => {
  const supabase = createClient(env('SUPABASE_API_URL'), env('SUPABASE_API_KEY'));
  const bucket = env('SUPABASE_BUCKET', 'uploads');
  const publicUrlBase = env('SUPABASE_PUBLIC_URL');

  return {
    provider: 'supabase',

    async upload(file) {
      const { createReadStream, name, type } = file;
      console.log('Uploading file:', name, type);
      const stream = createReadStream();

      const buffer = await streamToBuffer(stream);

      const { error } = await supabase.storage.from(bucket).upload(name, buffer, {
        contentType: type,
        upsert: false,
      });

      if (error) {
        console.error('Supabase upload error:', error);
        throw new Error(`Supabase upload failed: ${error.message}`);
      }

      console.log('Upload successful:', name);

      return {
        url: `${publicUrlBase}/${name}`,
        key: name,
      };
    },


    async uploadStream(file) {
      return this.upload(file);
    },

    async delete(file) {
      const { key } = file;
      const { error } = await supabase.storage.from(bucket).remove([key]);
      if (error) {
        throw new Error(`Supabase delete failed: ${error.message}`);
      }
    },
  };
};

function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
  });
}
