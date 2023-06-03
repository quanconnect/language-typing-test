const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk'])
// const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk'])
module.exports = withTM({
  experimental: {
    esmExternals: 'loose',
    granularChunks: true,
  },
});
// module.exports = {
//   experimental: {
//     granularChunks: true,
//   },
// };
