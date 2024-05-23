let output = document.querySelector("#output");

function calculate() {
    let a = document.querySelector("#a").value;
    let b = 0;
    let c = 0;
    let d = [];
    if (a.includes("-") == true) {
        for (let i = 0; i < (a*-1)+1; i++) {
            for (let j = 0; j < (a*-1)+1; j++) {
                if (c*b == (a*-1)) {
                    d.push(`-${c}`);
                }
                b++;
            }
            b = 0;
            c++;
        }
        output.innerText = d;
    } else {
        for (let i = 0; i < a+1; i++) {
            for (let j = 0; j < a+1; j++) {
                if (c*b == a) {
                    d.push(c);
                }
                b++;
            }
            b = 0;
            c++;
        }
        output.innerText = d;
    }
}
