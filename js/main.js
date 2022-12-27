const form = document.querySelector("#form");
const Mnumber = form.querySelector("#mnumber");
const Snumber = form.querySelector("#snumber");
const Cnumber = form.querySelector("#cnumber");
const Mname = form.querySelector("#mname");
const Mtype = form.querySelector("#mtype");
const Mdate = form.querySelector("#date");
let arr = [];

function Jahongir(mnumber, snumber, cnumber, mname, mtype, mdate) {
    this.mnumber = mnumber;
    this.snumber = snumber;
    this.cnumber = cnumber;
    this.mname = mname;
    this.mtype = mtype;
    this.mdate = mdate;


}

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const elements = evt.target.elements;
    const mnumber = elements.mnumber.value;
    const snumber = elements.snumber.value
    const cnumber = elements.snumber.value
    const mname = elements.mname.value
    const mtype = elements.mtype.value
    const mdate = elements.date.value
    const newObj = new Jahongir(mnumber, snumber, cnumber, mname, mtype, mdate);
    form.reset();
    arr.push(newObj)

})