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
        //Chris Coyier
        // svgstore: {
        //   options: {
        //     prefix : 'shape-', 
        //   },
        //   default : {
        //       files: {
        //         'svg-sprites/svg-defs.svg': ['svgs/*.svg'],
        //       }
        //     }
        //   },

        
        iconizr: {
        simple: {
          src: ['svgs'],
          dest: 'svg-sprites',
          options:{
                render:{ css:false }
                  }
                }
              },

      // SVG Sprites creates folders and HTML file.
       // svg_sprites: {
       //      options: {
       //        // Task-specific options go here.
       //      },
       //      your_target: {
       //        src: 'svgs/*.svg',
       //        dest: 'svg-sprites'
       //      },
       //  },

        // svg2png: {
        // all: {
        //     // specify files in array format with multiple src-dest mapping
        //         files: [
        //             // rasterize all SVG files in "img" and its subdirectories to "img/png"
        //             { cwd: 'svgs', src: ['**/*.svg'], dest: 'svg-sprites/pngs/' }
        //         ]
        // }
        // },
        
        rdc_css: 'css/',
        rdc_sass: 'sass/'
       
    });


    grunt.loadNpmTasks('grunt-svg-sprites');
    grunt.loadNpmTasks('grunt-svg2png');
    
    // Default task
    grunt.registerTask( 'default', [ 'clean:css', 'sass', 'watch'] );
    //grunt.registerTask( 'combine', [ 'svg_sprites', 'svg2png'] );
    grunt.registerTask( 'combine', [ 'iconizr'] );


};