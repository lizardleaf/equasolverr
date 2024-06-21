let output = document.querySelector("#output");

function calculate() {
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let d = document.querySelector("#d").value;
    let e = document.querySelector("#e").value;
    let f;
    let g;
    let h;
    if ((a-b) == (b-c)) {
        f = -1*(a-b);
        g = a-f;
        output.innerText = `${f}n+${g}`;
    } else if ((c-b)-(b-c) == (b-c)-(c-d)) {
        f =((c-b)-(b-a))*0.5;
        if (a-f*2 != b-2*f*2) {
            h = ((c-3*f*2)-(b-2*f2))-((b-2*f2)-(a-f*2));
        g= a-(f+h);
        output.innerText = `${f}n2+${h}n+${g}`;
        } 
       else {
        output.innerText = "Equasolverr is yet to achieve the capabilities required to solve this.";
        }
    }
} 
