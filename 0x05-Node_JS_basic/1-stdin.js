const message = "Welcome to Holberton School, what is your name?"

console.log(message);

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`Your name is: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
