require.config({
    paths: {
        jQuery: 'lib/jquery',
        Underscore: 'lib/underscore',
        Backbone: 'lib/backbone',
        text: 'lib/text',
        templates: '../templates'
    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'Playground': ['Backbone']
    }
});

require(['Playground'], function(Playground){
    Playground.initialize();

})