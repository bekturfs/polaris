module.exports = {
  transform: {
    '\\.(js|tsx?)$': [
      'babel-jest',
      {targets: 'current node', envName: 'test', rootMode: 'upward'},
    ],
  },
  // Babel can't handle that this is an ESM module, so we ignore it
  transformIgnorePatterns: ['node_modules/(?!on-change)'],
};
