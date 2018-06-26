install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

test:
	npm run test

publish:
	npm publish

lint:
	npm run eslint .

build:
	npm run build
