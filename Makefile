install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

even:
	brain-even

calc:
	brain-calc

gcd:
	brain-gcd

progression:
	brain-progression

prime:
	brain-prime