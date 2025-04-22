if (process.env.PRISMA_SKIP_POSTINSTALL_GENERATE) {      // ← official flag
    console.log('Skipping Prisma Client generation');
    process.exit(0);
  }
  
  const { spawnSync } = require('node:child_process');
  const result = spawnSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['prisma', 'generate', '--verbose'],
    { stdio: 'inherit' }                                   // stream progress
  );
  process.exit(result.status);