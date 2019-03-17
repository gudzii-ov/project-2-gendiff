install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

test:
	npm run test

test-coverage:
	npm run test -- --coverage

publish:
	npm publish

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

.PHONY: test
