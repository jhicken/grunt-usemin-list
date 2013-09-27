# grunt-useminlist

> This is based on grunt usemin. It will create a json file that includes all usemin blocks and src's. It also can extract the raw script blocks and extend there path.

The whole purpose of this plugin is to extract the usemin blocks from your code to reuse as either templates of in other parts of your build process. 

In my case I am useing it to do continues testing. my usemin blocks can be copied to my karma.conf and inside my jasmine reporter. 

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-usemin-list --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-useminlist');
```

## The "useminlist" task

### Overview
In your project's Gruntfile, add a section named `useminlist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  useminlist: {
    html: '<%= yeoman.app %>/index.html',
    options: {
      dest: '.tmp/list.json',
      type: 'js',
      log: false,
      extraction:{
        path: 'test/runnersrc/',
        templateType: 'html',
        srcAppend: '../app/'
      }
    }
  },
})
```

### Options

#### options.dest
Type: `String`

This is the var that is used to declare where you want you json output to be.

#### options.type
Type: `String`

This is the file type as declared by usemin comment blocks.

#### options.log
Type: `Boolean`

Declares if you would like to see the json object logged in the console.

#### options.extraction
Type: `Object`

If this exsists an attempt to create templates of the raw html blocks will be made.

#### options.extraction.path
Type: `String`

This declares the path to the location you would like you raw extracted templates.

#### options.extraction.templateType
Type: `String`

This is the file extention appended to your extracted raw files.

#### options.extraction.srcAppend
Type: `String`

This will modify the src paths on all of your raw template src tags.

ex:
```js
srcAppend:'../folder1/folder2'
```
```html
<script src="stuff.js"></script>
<script src="other/stuff2.js"></script>
```
This will become
```html
<script src="../folder1/folder2/stuff.js"></script>
<script src="../folder1/folder2/other/stuff2.js"></script>
```


### Usage Examples 

This is a TODO:

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  useminlist: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  useminlist: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.4 started project
