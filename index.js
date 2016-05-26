#!/usr/bin/env node
"use strict";

var lwip 			= require('lwip'),
		argv 			= require('minimist')(process.argv.slice(2)),
		image_url = argv._[0] || false,
		download  = require('got');

if (!image_url){
	console.error("You must specify an image URL/Path")
	process.exit(1)
}

download(image_url,{encoding:null}).then(function(response){
	var type = response.headers['content-type'],WIDTH,HEIGHT
  lwip.open(response.body, type.replace('image/',''), function(err, image){
  	WIDTH = image.width()
  	HEIGHT = image.height()
	  image.contain(20, 20, {r:0,g:0,b:0,a:0}, 'lanczos', function(err, image){
	    image.toBuffer('jpg', function(err, buffer){
	    	var datauri   = "data:" + type + ";base64," + buffer.toString('base64')
	    	var template  = '<div style="background-image:url({THUMB});background-size:cover;transition:background-image .5s ease-in-out;width:{WIDTH}px;height:{HEIGHT}px;"><img width="{WIDTH}" height="{HEIGHT}" src="{IMAGE}" style="opacity:0" onload="this.parentNode.style[\'background-image\']=\'url(\'+this.src+\')\'"></div>'

	    	var output = template
	    	              .replace(/{THUMB}/g, datauri)
	    	              .replace(/{IMAGE}/g, image_url)
	    	              .replace(/{WIDTH}/g, WIDTH)
	    	              .replace(/{HEIGHT}/g,HEIGHT)

	    	console.log(output)
	    })
	  })
	})
})
