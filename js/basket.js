const imgages=document.querySelectorAll(".image");
const basket=document.querySelector('#basket');
const order={src:[],date:''}
let img_copy;
imgages.forEach((img)=>{
    img.addEventListener("click",()=>
    {
        img_copy=img.cloneNode(true);
        basket.append(img_copy);
        order.src.push(img_copy.src);
    })
})

const btOrder=document.querySelector('button');
btOrder.addEventListener('click',()=>{
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    order.date=formattedDate;
    localStorage.setItem('card-img', JSON.stringify(order));
    window.location.reload();
})