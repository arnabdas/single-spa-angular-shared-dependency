const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
    systemjsModuleName: "app11_m"
  }));

  singleSpaWebpackConfig.externals.push(
    'rxjs',
    'rxjs/operators',
    'single-spa',
    'single-spa-angular',
    '@angular/common',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/router',
    // '@angular/forms',
    '@angular/animations',
    '@angular/animations/browser',
    // '@angular/platform-browser/animations',
    '@angular/material',
    // '@angular/material/core',
    // '@angular/material/slider',
    '@angular/cdk',
    '@angular/cdk/observers',
    '@angular/cdk/platform',
    '@angular/cdk/a11y',
    // '@angular/cdk/bidi',
    '@angular/cdk/coercion',
    '@angular/cdk/keycodes'
  );

  return singleSpaWebpackConfig;
};
