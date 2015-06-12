module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'build/dist/uiSpinkitModule.js',
                    'build/dist/skRotatingPlane.js',
                    'build/dist/skWanderingCubes.js',
                    'build/dist/skWave.js',
                    'build/dist/skPulse.js',
                    'build/dist/skChasingDots.js',
                    'build/dist/skThreeBounce.js',
                    'build/dist/skCircle.js',
                    'build/dist/skCubeGrid.js',
                    'build/dist/skWordpress.js',
                    'build/dist/skFadingCircle.js',
                    'build/dist/uiSpinkitConfig.js'
                ],
                dest: 'build/dist/uiSpinkit.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                preserveComments: false
            },
            build: {
                src: 'build/dist/uiSpinkit.js',
                dest: 'build/uiSpinkit.min.js'
            }
        },
        coffee: {
            options: {
                sourceMap: true,
                sourceRoot: ''
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.coffee',
                    dest: 'build/dist',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test',
                    src: '**/*.coffee',
                    dest: 'build/test',
                    ext: '.js'
                }]
            }
        },
        clean: {
            files: 'build'
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['coffee:dist', 'coffee:test', 'concat:dist', 'uglify']);

};
