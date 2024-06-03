let output = document.querySelector("#output");

function calculate() {
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let d = document.querySelector("#d").value;
    let e = document.querySelector("#e").value;
    let f;
    let g;
    if ((a-b) == (b-c)) {
        f = -1*(a-b);
        g = -1(a-(-1*f));
        output.innerText = `${f}n+${g}`;
    } else if ((a-b)-(b-c) == (b-c)-(c-d)) {
        f = -1*((a-b)-(b-c))/2;
        g = a-(-1*((a-b)-(b-c)))/2;
        output.innerText = `${f}n+${g}`;
    } else {
        output.innerText = "Equasolverr is yet to achieve the capabilities required to solve this.";
    }
}
