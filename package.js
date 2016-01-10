Package.describe({
	name: 'wilybear:meteor-gocr',
	version: '0.0.1',
	summary: 'Client side optical character recognition (OCR) using gocr.js',
	git: 'https://github.com/awylie199/meteor-gocr.git',
	documentation: 'README.md'
});

Npm.depends({
    "ws"        : "0.8.1"
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');

	api.addFiles([
		'gocr.es5.js',
		'meteor-gocr.js'
	], [
		'client',
		'server'
	]);

	api.export('GOCR');
});
