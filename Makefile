install: # установить зависимости
	npm ci 

start: 
	node src/index.js

brain-games: # позволит запускать игру без глобальной установки
	node bin/brain-games.js

brain-even: # позволит запускать игру без глобальной установки
	node bin/brain-even.js

brain-calc: # позволит запускать игру без глобальной установки
	node bin/brain-calc.js

publish: 
	npm publish --dry-run

lint:
	npx eslint