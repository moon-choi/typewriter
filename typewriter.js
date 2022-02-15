const sentence = "hello there from lighthouse labs"
const sentenceN = sentence + "\n"

let timer = 1000;
for (const char of sentenceN) {
    setTimeout(() => {
        process.stdout.write(char);
    }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
    timer += 50;
}