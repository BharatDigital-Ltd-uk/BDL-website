export default (plugin: any) => {
  plugin.config ??= {};

  plugin.config.actionOptions = {
    upload: {
      ...plugin.config.actionOptions?.upload,
      allowedMimeTypes: ['application/pdf'],
    },
    uploadStream: {
      ...plugin.config.actionOptions?.uploadStream,
      allowedMimeTypes: ['application/pdf'],
    },
  };

  return plugin;
};
