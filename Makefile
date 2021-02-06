lint:
	npx eslint .

build:
	sudo rm -rf dist
	NODE_ENV=development npx webpack

start:
	npm run start
