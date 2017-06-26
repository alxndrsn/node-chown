`chown`
=======

# Installation

	npm install chown

# Usage

## To change user and group

	const chown = require('chown');

	chown('some/path', 'some-user', 'some-group')
	  .then(() => console.log('chowned successfully.'))
	  .catch(err => console.log('There was a problem chowning:', err));

## To change user only

	const chown = require('chown');

	chown('some/path', 'some-user')
	  .then(() => console.log('chowned successfully.'))
	  .catch(err => console.log('There was a problem chowning:', err));
