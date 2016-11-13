.PHONY: test readme

jsdocs:
	@echo "Creating API Docs..."
	npm run jsdocs

jsdocs-private:
	@echo "Creating API Docs with private..."
	npm run jsdocs-private

readme:
	@echo "Creating README.md..."
	npm run readme

test:
	@echo "Running unit tests..."
	npm test
