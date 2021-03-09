const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_forms': '@angular/forms',
  };
  custom.externals.push(
    'rxjs',
    'rxjs/operators',
    '@angular/common',
    '@angular/core',
    '@angular/platform-browser',
    'tslib'
  );
  return custom;
};
