module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                files: {
                    'dist/css/main.css': '_sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'], 
                tasks: ['sass'] 
            }
		},
        connect: {
            server: {
                options: {
                    port: 4000,
                    debug: true
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'dist/js'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('startServer', ['connect', 'watch']);
    grunt.registerTask('production', ['sass', 'uglify']);
};