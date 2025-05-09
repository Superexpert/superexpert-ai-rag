# test local
npm run build
node dist/index.js --help 


# Publish Recipe

1.	Code & commit your changes.
2.	Run one of the release scripts:

```
npm run release:patch        # OR release:minor / release:major
```

This script:
* cleans, builds (prisma generate + tsc),
* bumps the version,
* publishes to the npm registry.

3.	Verify in a fresh shell:

```
npx @superexpert-ai/rag --help
```

(npx now installs the freshly-published latest build and finds your bin.)

4.	Push the commit + git tag:

```
git push origin main --tags
```


Your users (or CI pipelines) can immediately run the new version with plain npx @superexpert-ai/rag.

