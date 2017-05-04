SystemJS.config({
 // tell SystemJS which transpiler to use
 transpiler: 'plugin-babel',
 // tell SystemJS where to look for the dependencies
 map: {
  'plugin-babel': './libs/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': './libs/systemjs-plugin-babel/systemjs-babel-browser.js',
  'text': 'libs/systemjs-plugin-text/text.js',
  // app start script
  'app': 'js/app.js',
  'router': 'js/router.js',
  'requester': 'js/requester.js',
  'data': 'js/data.js',
  'homeController': 'js/controllers/home.js',
  'myCookieController': 'js/controllers/myCookie.js',
  'userController': 'js/controllers/user.js',
  'templates': 'js/templates.js',

//   Library files
   'jquery': 'libs/jquery/dist/jquery.min.js',
   'handlebars': '/libs/handlebars/dist/handlebars.amd.js',
  //  'toastr': 'libs/toastr/build/toastr.min.css'
  //  'cryptojs': '/libs/cryptojs/cryptojs.js',
 }
});

System.import('app');