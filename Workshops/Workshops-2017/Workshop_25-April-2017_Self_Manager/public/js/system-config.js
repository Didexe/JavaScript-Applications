SystemJS.config({
    transpiler: 'plugin-babel',
map: {
    'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
    
    'app': '/js/app.js',
    'jquery': '/bower_components/jquery/dist/jquery.min.js',
    'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min.js',
    // 'handlebars': '/bower_components/handlebars/handlebars.amd.js',
    'router': '/bower_components/navigo/lib/navigo.js',
    'encryptor': '/js/encryptor.js',

    'display': '/js/new.js',
    'userController': '/js/controllers/user.js',
    'todosController': '/js/controllers/todos.js',
    'eventsController': '/js/controllers/events.js',
    'data': '/js/data.js',
    'templates': '/js/templates.js',
    'requester': '/js/requester.js',
    'helpers': '/js/helpers.js',
}
})

System.import('app');