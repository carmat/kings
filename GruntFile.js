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
    grunt.loadNpmTasks(
        'grunt-contrib-sass'
    );

    /**
     * Configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /** Nodemon
         */
         // nodemon: {
         //     dev: {
         //         options: {
         //             file: 'scripts/web-server.js',
         //             args: ['dev'],
         //             nodeArgs: ['--debug'],
         //             ignoredFiles: ['node_modules/**'],
         //             watchedExtensions: ['js'],
         //             watchedFolders: ['server'],
         //             delayTime: 1,
         //             legacyWatch: true,
         //             env: {
         //                 PORT: '9090',
         //                 NODE_ENV: 'development'
         //             },
         //             cwd: __dirname
         //         }
         //     },
         //     exec: {
         //         options: {
         //             exec: 'less'
         //         }
         //     }
         // },

        /**
         * grunt-develop
         */
        develop: {
            server: {
                file: 'scripts/web-server.js',
                nodeArgs: ['--debug'],              // optional
                env: { NODE_ENV: 'development'}     // optional
            }
        },

        /**
         * Set project object
         */
        project: {
            app: 'app',
            assets: '<%= project.app %>/assets',
            images: '<%= project.assets %>/img',
            lib: '<%= project.assets %>/lib',
            sass_dir: '<%= project.assets %>/css/sass',
            sass: '<%= project.sass_dir %>/app.scss',
            sass_ie: '<%= project.sass_dir %>/ie.scss',
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
                    '<%= project.assets %>/css/app.css': '<%= project.sass %>',
                    '<%= project.assets %>/css/ie.css': '<%= project.sass_ie %>'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= project.assets %>/css/app.css': '<%= project.sass %>',
                    '<%= project.assets %>/css/ie.css': '<%= project.sass_ie %>'
                }
            }
        },

        /**
         * Watch
         */
        watch: {
            sass: {
                files: '<%= project.sass_dir %>/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            }
        }
    });

    grunt.registerTask('default', [
        'develop',
        'sass:dev',
        'watch'
    ]);
};
