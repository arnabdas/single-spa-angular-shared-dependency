const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
    // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
    systemjsModuleName: "app11"
  }));

  singleSpaWebpackConfig.externals.push(
    'rxjs',
    'rxjs/operators',
    'single-spa',
    'single-spa-angular',
    /^@angular\/.*/,
  );

  return singleSpaWebpackConfig;
};
