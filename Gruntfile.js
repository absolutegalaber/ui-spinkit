module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'dist/build/uiSpinkitModule.js',
                    'dist/build/skRotatingPlane.js',
                    'dist/build/skDoubleBounce.js',
                    'dist/build/skWanderingCubes.js',
                    'dist/build/skWave.js',
                    'dist/build/skPulse.js',
                    'dist/build/skChasingDots.js',
                    'dist/build/skThreeBounce.js',
                    'dist/build/skCircle.js',
                    'dist/build/skCubeGrid.js',
                    'dist/build/skWordpress.js',
                    'dist/build/skFadingCircle.js',
                    'dist/build/uiSpinkitConfig.js'
                ],
                dest: 'dist/uiSpinkit.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                preserveComments: false
            },
            build: {
                src: 'dist/uiSpinkit.js',
                dest: 'dist/uiSpinkit.min.js'
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
                    dest: 'dist/build',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test',
                    src: '**/*.coffee',
                    dest: 'dist/test',
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['coffee:dist', 'coffee:test', 'concat:dist', 'uglify']);

};
