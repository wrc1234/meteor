Package.describe({
  summary: "Moved to the 'markdown' package",
  version: '1.0.7-rc.0'
});

Package.onUse(function (api) {
  api.imply("markdown");
});
