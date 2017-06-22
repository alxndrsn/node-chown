`chown`
=======

# Installation

	npm install chown

# Usage

	const chown = require('chown');

	chown('some/path', 'some-user', 'some-group')
	  .then(() => console.log('chowned successfully.'))
	  .catch(err => console.log('There was a problem chowning:', err));
