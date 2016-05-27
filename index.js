#!/usr/bin/env node
"use strict";

var Jimp 			= require('jimp'),
		argv 			= require('minimist')(process.argv.slice(2)),
		options   = {
			max_pixels: 50,
			quality: 		75,
			animation:  '.45s'
		},
		template  = '<!--IMG--><div class="-blurmage" style="transform:translatez(0);background-image:url({THUMB});background-size:cover;background-position:center center;transition:background-image {ANIMATION_TIME} ease-in-out;width:{WIDTH}px;height:{HEIGHT}px;"><img width="{WIDTH}" height="{HEIGHT}" src="{IMAGE}" style="visibility:hidden" onload="this.parentNode.style[\'background-image\']=\'url(\'+this.src+\')\'"></div><!--/IMG-->',
		image_url = argv._[0] || ''

if (!image_url) {
	console.error("You must specify an image URL/Path")
	process.exit(1)
}

Jimp.read(image_url).then(function(image){
  	var WIDTH  = image.bitmap.width,
  	    HEIGHT = image.bitmap.height

  	image
  		.scaleToFit(options.max_pixels, options.max_pixels)
  		.blur(1)
  		.quality(options.quality)
  		.getBuffer( Jimp.MIME_JPEG, function(err, buffer){
				var output = template
	    	              .replace(/{ANIMATION_TIME}/g,  options.animation)
	    	              .replace(/{THUMB}/g,   "data:image/jpeg;base64," + buffer.toString('base64').replace(/=+$/,''))
	    	              .replace(/{IMAGE}/g,   image_url)
	    	              .replace(/{WIDTH}/g,   WIDTH)
	    	              .replace(/{HEIGHT}/g,  HEIGHT)
	    	console.log(output)
  		})
}).catch(function (err) {
    console.error(err);
})
