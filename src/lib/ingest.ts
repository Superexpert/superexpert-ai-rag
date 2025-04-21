import fg from 'fast-glob';

export async function plan() {
    console.log('Planning ingest...');
}


export async function ingest(cfg:any) {
    // Display list of files to be processed
    console.log('Files to be processed:');
    if (!cfg.files || cfg.files.length === 0) {
        console.error('No files specified in the configuration.');
        process.exit(1);
    }
    // Expand globs to actual file paths
    const files = await expandGlobs(cfg.files);
    if (files.length === 0) {
        console.error('No files found matching the specified patterns.');
        process.exit(1);
    }
    // Display the files
    files.forEach((file: string) => {
        console.log(`- ${file}`);
    });
    cfg.files.forEach((file: string) => {
        console.log(`- ${file}`);
    });
    // Verify database connection
    if (!cfg.db || !cfg.db.connectionString) {
        console.error('Database connection string is missing in the configuration.');
        process.exit(1);
    }




    //console.dir(cfg, { depth: null });
}


export async function expandGlobs(patterns: string[], cwd = process.cwd()) {
    return fg(patterns, {
      cwd,                       // base dir
      absolute: true,            // always return absolute paths
      onlyFiles: true,           // skip directories
      ignore: ['**/node_modules/**', '**/.git/**'],  // perf!
      dot: false,                // ignore dotfiles by default
      followSymbolicLinks: false // safer for user home dirs
    });
  }