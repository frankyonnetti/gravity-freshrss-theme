/*
|--------------------------------------------------------------------------
| Browser-sync config file
|--------------------------------------------------------------------------
|
| For up-to-date information about the options:
|   http://www.browsersync.io/docs/options/
|
| There are more options than you see here, these are just the ones that are
| set internally. See the website for more info.
*/

module.exports = {
  port: 3478,
  proxy: 'local.freshrss.test',
  open: false,
  browser: 'google chrome',
  ghostMode: false,
  notify: true,
  ui: false,
  reloadOnRestart: true,
  files: [
    'Gravity/gravity.css',
    'Gravity/gravity.rtl.css'
  ],
  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match
      }
    }
  }
}
