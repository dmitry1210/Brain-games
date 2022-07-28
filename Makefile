install: # установить зависимости
	npm ci 

brain-games: # позволит запускать игру без глобальной установки
	node bin/brain-games.js

brain-even: # позволит запускать игру без глобальной установки
	node bin/brain-even.js

publish: 
	npm publish --dry-run

lint:
	npx eslint