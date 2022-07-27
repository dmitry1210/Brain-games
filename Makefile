install: # установить зависимости
	npm ci 

brain-games: # позволит запускать игру без глобальной установки
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint: # запускает проверку eslint
	npx eslint