install:
	npm install

publish:
	npm publish --dry-run

link:
	npm link

unlink:
	npm unlink gendiff --global

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

ci:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

.PHONY: test