/**
 * Kings GruntFile
 * http://mork.io/kings
 * @author Colm Morgan
 */

'use strict';

/**
 * Grunt module
 */
module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-nodemon');

    /**
     * Configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project object
         */
        project: {
            app: 'app',
            assets: '<%= project.app %>/assets',
            images: '<%= project.assets %>/img',
            lib: '<%= project.assets %>/lib',
            css: '<%= project.assets %>/css/sass/app.scss',
            js: [
                '<%= project.assets %>/js/*.js'
            ]
        },

        /**
         * Project banner
         */
        tag: {
            banner: '/*!\n' +
                    ' * <%= pkg.name %>\n' +
                    ' * <%= pkg.title %>\n' +
                    ' * <%= pkg.url %>\n' +
                    ' * @author <%= pkg.author %>\n' +
                    ' * @version <%= pkg.version %>\n' +
                    ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
                    ' */\n'
        },

        /**
         * Sass
         */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    banner: '<%= tag.banner %>'
                },
                files: {
                    '<%= project.assets %>/css/app.css': '<%= project.css %>'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= project.assets %>/css/app.css': '<%= project.css %>'
                }
            }
        },

        /**
         * Watch
         */
        watch: {
            sass: {
                files: '<%= project.assets %>/css/sass/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            }
        },

        /**
         * 
         */
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: ['dev'],
                    nodeArgs: ['--debug'],
                    ignoredFiles: ['node_modules/**'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['server'],
                    delayTime: 1,
                    legacyWatch: true,
                    env: {
                        PORT: '9090'
                    },
                    cwd: __dirname
                }
            },
            exec: {
                options: {
                    exec: 'less'
                }
            }
        },

        /**
         * grunt-develop
         */
        develop: {
            server: {
                file: 'scripts/web-server.js',
                nodeArgs: ['--debug'],              // optional
            //  args: ['appArg1', 'appArg2']        // optional
                env: { NODE_ENV: 'development'}     // optional
            }
        }
    });

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);
};
