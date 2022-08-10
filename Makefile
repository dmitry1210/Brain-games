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

brain-gcd: # позволит запускать игру без глобальной установки
	node bin/brain-gcd.js

brain-progression: # позволит запускать игру без глобальной установки
	node bin/brain-progression.js

brain-prime: # позволит запускать игру без глобальной установки
	node bin/brain-prime.js

publish: 
	npm publish --dry-run

lint:
	npx eslint