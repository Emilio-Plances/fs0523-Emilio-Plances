import {Phone} from "./class/Phone.js";

const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`

async function getProducts(){ 
    let res= await fetch(`${LINK}`, {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        }
    })

    let products= await res.json();
    console.log(products);
}

async function addProduct(phone){
    fetch(`${LINK}`, {
        "method":"POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        },
        body: JSON.stringify(phone)
    }).then(res => {
        console.log(res);
        if(res.status == 200){
            Swal.fire({
                icon: "success",
                text: `Dati caricati correttamente!`
            });
            console.log(`Caricato`);
        }else{
            Swal.fire({
                icon: "error",
                title: "Attenzione!",
                text: `Inserire dati validi!`
            });
        }
    })
}
getProducts();

async function deleteProduct(phone_id){
    fetch(`${LINK}/${phone_id}`, {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        }
    }).then(res => {
        if(res.status === 200){
            
            console.log(`Eliminato`)
        }
    })
}

async function updateProduct(phone,phone_id){
    fetch(`${LINK}/${phone_id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        },
        body: JSON.stringify(phone)
    }).then (res => {
        if (res.status==200){
            console.log(`Modificato`)
        }
    })
}

let submit=document.querySelector(`#submit`);

submit.addEventListener(`click`, (e)=>{
    e.preventDefault();
    let phone= new Phone();
    console.log(phone);
    addProduct(phone);
});