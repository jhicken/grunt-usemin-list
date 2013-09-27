/*
 * grunt-useminList
 * https://github.com/jhicken/grunt-useminList
 *
 * Copyright (c) 2013 Jeff Hicken
 * Licensed under the GPL2 license.
 */

'use strict';

module.exports = function(grunt) {


    var HTMLProcessor = require('./htmlprocessor.js');
    var path = require('path');

    grunt.registerMultiTask('usemin-list', 'Using HTML markup as the primary source of information', function() {
        var options = this.options();
        // collect files
        var files = grunt.file.expand({
            filter: 'isFile'
        }, this.data);
        var dest = options.dest;
        var fileList = {};

        files = files.map(function(filepath) {
            return {
                path: filepath,
                body: grunt.file.read(filepath)
            };
        });

        files.forEach(function(file) {
            var proc = new HTMLProcessor(path.dirname(file.path), dest, file.body, {}, function(msg) {
                grunt.log.writeln(msg);
            });
            proc.blocks.forEach(function(block) {
                if (block.type === options.type) {
                    var key = block.dest.split('/');
                    key = key[key.length-1].split('.')[0];
                    fileList[key]=block.src;


                    if(options.extraction){
                        grunt.file.write(options.extraction.path+key+'.'+options.extraction.templateType, block.raw.join('\n').replace(/src=\"/g,'src="'+options.extraction.srcAppend));
                    }
                }

            });
            //console.log(proc.blocks);
        });
        grunt.file.write(dest, JSON.stringify(fileList,{},4));
        if(options.log){
            console.log(fileList);
            console.log('File list object saved at '+dest);
        }
    });
};
