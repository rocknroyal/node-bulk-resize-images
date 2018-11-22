const fs = require( 'fs' );
const path = require( 'path' );
const sharp = require('sharp');

/**
 * Modify params
 * Use `sharp.fit.inside` to resize maintaining aspect ratio without crop
 */
const params = {
	'src' : path.resolve( __dirname, 'src'),
	'dest' : path.resolve( __dirname, 'dest'),
	'width'  : 900,
	'height' : 900,
	'sharp' : {
		fit: sharp.fit.cover, // resize maintaining aspect ratio with crop
		withoutEnlargement: true
	}
};

fs.readdir( params.src, function( error, files ) { 
	
	if(error) {
        console.error( 'Error reading src directory!', error );
        process.exit(1);
    }

    if( files.length > 0 ) {

    	fs.mkdir( params.dest, err => {
			
			// We only care about errors other than the directory already exists
	    	if (err && err.code != 'EEXIST')
	    		console.error( "Error creating dest directory!", err );

	    });
    }

    files.forEach( function( file, index ) {

		let fileSrcPath = path.join( params.src, file );
		let fileDestPath = path.join( params.dest, file );
		
		sharp( fileSrcPath )
			.resize( params.width, params.height, params.sharp)
			.toFile( fileDestPath, function(error) {
			
				if(error)
					console.error( "Something went wrong resizing %s", file );
			    else
			    	console.error( "Successfully resized file: %s", file );
		});

    });

});