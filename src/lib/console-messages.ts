import chalk from 'chalk';

export function criticalError(message: string, instructions: string) {
    console.error(`❌ ${chalk.bold.red(message)}`);
    console.error(chalk.gray(instructions));
    process.exit(1);
}

export function info(message: string) {
    console.log(`ℹ️  ${chalk.bold.blue(message)}`);
}


export function success(message: string) {
    console.log(`✅ ${chalk.bold.green(message)}`);
}

export function celebrate(message: string) {
    console.log('\n 🎉 ' + chalk.black.bold(message) + '\n');
}