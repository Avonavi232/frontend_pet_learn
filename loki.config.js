module.exports = {
  diffingEngine: 'looks-same',
  'looks-same': {
    tolerance: 5,
  },
  configurations: {
    'chrome.laptop': {
      target: 'chrome.docker',
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
  },
};
