let output = document.querySelector("#output");

function calculate() {
    let a = document.querySelector("#a").value;
    let b = 0;
    let c = 0;
    let d = [];
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            if (c*b == a) {
                d.push(c);
            }
            b++;
        }
        b = 0;
        c++;
    }
    output.innerText = `1,${d},${a}`;
}
