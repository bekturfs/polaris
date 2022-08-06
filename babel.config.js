/**
 * @type {import('@babel/core').TransformOptions}
 */
export default {
  presets: [['@shopify/babel-preset', {typescript: true, react: true}]],
  babelrcRoots: [
    '.',
    // Note: The following projects use rootMode: 'upward' to inherit
    // and merge with this root level config.
    './polaris-tokens',
    './polaris-icons',
    './polaris-react',
  ],
};
