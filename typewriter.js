const sentence = "hello there from lighthouse labs";
const senteceWithNewLine = sentence + "\n"

let timer = 1000;
for (const char of senteceWithNewLine) {
    setTimeout(() => {
        process.stdout.write(char);
    }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
    timer += 50;
}