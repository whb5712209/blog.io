module.exports = function(grunt) {
    console.log(grunt.file.readJSON('package.json'))
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        less: {
            files: [
{
    // files: {
    //   'path/to/result.css': 'path/to/source.less'
    // }
    expand: true,
    cwd:'less/',
    src:'*.less',
    dest:'css',
    rename:function(dest,src){
      if(src){
        grunt.log.writeln('参数1:'+dest+',参数2:'+src)
        var fileName = src.substring(0,src.lastIndexOf('.'));
        var fileResult =  fileName+'.css'
        grunt.log.writeln('原来文件名:'+src+',现在文件名:'+fileResult)
        return fileResult
      }else{
        return 'weimingm';
      }
  }
}
]
        },

        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less','watch']);


};
