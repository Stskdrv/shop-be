const slsw = require('serverless-webpack');
const webpack = require('webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: 'production',
    plugins: [
        // new webpack.IgnorePlugin(/^pg-native$/)
        // Or, for WebPack 4+:
        new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
      ],
}