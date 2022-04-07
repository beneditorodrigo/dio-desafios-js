do {
    let linhas = parseInt(gets());
} while (linhas < 1 || linhas >= 1000);

for (let i = 1; i <= linhas; i++) {
    let X = (i * i);
    let Y = (i * i * i);

    print(i, X, Y);
}