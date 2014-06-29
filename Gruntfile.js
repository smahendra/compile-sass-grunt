/* global module:false, require */
module.exports = function(grunt) {
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            // hooks: ['.git/hooks/pre-commit'],
            css: ['<%= rdc_css %>']
        },
        sass: {
            dev: {
                files: {
                    //'<%= rdc_css %>commonv7.dev.css' : '<%= rdc_sass %>boot/boot.v7.scss'
                    'css/commonv.dev.css' : '<%= rdc_sass %>bootstrap.scss'
                },
                options: {
                    style: 'expanded'
                }
            },
            dist: {
                files: {
                    '<%= rdc_css %>../dist/common.min.css' : '<%= rdc_sass %>bootstrap.scss'
                },
                options: {
                    style: 'compressed'
                }
            },
            options: {
                loadPath: ['<%= rdc_sass %>']
            }
        },
        
        watch: {
            SASS: {
                files: ['<%= rdc_sass %>**/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: false
                }
            }
        },
        
        rdc_css: 'css/',
        rdc_sass: 'sass/'
       
    });
    
    // Default task
    grunt.registerTask( 'default', [ 'clean:css', 'sass', 'watch'] );

};