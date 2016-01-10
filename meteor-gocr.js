if ( Meteor && Meteor.isServer ) {
    GOCR = Npm.require('ocrad.js');
} else if ( Meteor && Meteor.isClient ) {
	//
} else {
    throw new Error('Error - Meteor-Ocrad Package: Neither Client nor Server');
}

Meteor.startup(function() {
  "use strict";

  if (typeof GOCR !== 'undefined') {
    GOCR && console.log( "OCRAD defined : ", GOCR );
  }

});
