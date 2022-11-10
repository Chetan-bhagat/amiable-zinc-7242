document.querySelector("#home").addEventListener("click",()=>{
    location.reload()
})
let i=0;
let j=0;
let x=setInterval(imgflip,2000);
function imgflip(){
    let img=["https://uidesign.gbtcdn.com/GB/image/8823/printer_1190x420_en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/electronics_1190x420_en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"]
    document.querySelector("#imgflip>img").setAttribute("src",img[i]);
    i++;
    if( i==img.length){
        i=0
    }
}
let y=setInterval(()=>{
    let arr=["Search 🔍", "Type Here...", "Find your best product.."]
    document.querySelector("#search").placeholder = arr[j];  
    j++
    if( j==arr.length){
        j=0
    } 
},1500)
document.querySelector("#collection")
let collection_arr=[{
    id: 0,
    img:"offer.png",
    discription: "",
    price: 120
    
},{
    id: 1,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16571/goods_thumb_220-v1/5cd047a2fbea.jpg",
    discription: "Nimble Tech Store",
    price: 120
    
},{
    id: 2,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16456/goods_thumb_220-v3/67f17c7e8795.jpg",
    discription: "Ortur Official Store",
    price: 125
    
},
{
    id: 3,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16384/goods_thumb_220-v1/c29e4f319b14.jpg",
    discription: "Asseo Go Store",
    price: 854
    
},
{
    id: 4,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16512/goods_thumb_220-v1/8d220616eed4.jpg",
    discription: "Eight Hours Store",
    price: 220
    
},
{
    id: 5,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_thumb_220-v1/d7a90e41e9e6.jpg",
    discription: "Clearance Sale",
    price: 900
    
}]
collection()
function collection(){
    document.querySelector("#collection").innerHTML=""
    for( let i=0;i<collection_arr.length;i++){
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",collection_arr[i].img);
        let des=document.createElement("p")
        des.innerText=collection_arr[i].discription;
        document.querySelector("#collection").append(div1)
        div1.append(img,des)

    }
}

let superdeal_arr=[{
    id: 0,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdsmmBSPKcdmaB_7eAla_-4scoRiGgDoo7Q&usqp=CAU",
    martprise: "",
    discription: "",
    price: ""
    
},{
    id: 6,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16515/goods_thumb_220-v4/50504435afc7.jpg",
    discription: "Xiaomi XiaoVV Smart Outdoor",
    martprise: "$ 119.10",  // text-decoration: underline;
    price: 56.99
    
},{
    id: 7,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v3/959e91168592.jpg",
    discription: "Xiaomi Mijia Sonic Electric Toothbrush",
    martprise: "$ 40.99",  // text-decoration: underline;
    price: 28.99
    
},
{
    id: 8,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16485/goods_thumb_220-v1/9f0b0f0fb93e.jpg",
    discription: "X12 Plus 7inch 16GB Game Console Games",
    martprise: "$ 65.54",  // text-decoration: underline;
    price: 51.99
    
},
{
    id: 9,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg",
    discription: "Global Version M11 Ultra Smartphones",
    martprise: "$ 240.00",  // text-decoration: underline;
    price: 117.99
    
},
{
    id: 10,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16516/goods_thumb_220-v7/f97b0f08055f.jpg",
    discription: "Original Xiaomi Mi Stylus Pen",
    martprise: "$ 83.99",  // text-decoration: underline;
    price: 66.88
    
}]
superdeal()
function superdeal(){
    document.querySelector("#superdeal").innerHTML=""
    for( let i=0;i<superdeal_arr.length;i++){
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",superdeal_arr[i].img);
        let des=document.createElement("p")
        des.innerText=superdeal_arr[i].discription;
        let  markprise=document.createElement("h4")
        markprise.innerText=superdeal_arr[i].martprise;
        let  price=document.createElement("h3")
        price.innerText=superdeal_arr[i].price;
        document.querySelector("#superdeal").append(div1)
        div1.append(img,des,markprise,price)

    }
}
let k=0
let A=setInterval(()=>{
    let arr=["https://uidesign.gbtcdn.com/GB/image/8823/lQDPJxa0uAZUaLLNASzNAcKwomYtks8U_ZwDKSfz14CJAA_450_300.jpg", "https://uidesign.gbtcdn.com/GB/image/9746/band7pro.jpg", "https://uidesign.gbtcdn.com/GB/image/8823/lQDPJxa0uAZUaPTNASzNAcKwpTzUF6FCvx4DKSfz08AdAA_450_300.jpg"]
    document.querySelector("#newchange").setAttribute("src",arr[k]);  
    k++
    if( k==arr.length){
        k=0
    } 
},1500);

let newsub_arr=[{
    id: 11,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16660/goods_thumb_220-v1/59b11139a0dd.jpg",
    martprise: "$ 29.99",  // text-decoration: underline;
    price: 17.68
    
},{
    id: 12,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16653/goods_thumb_220-v4/dda839eb0bb0.jpg",
    martprise: "$ 40.99",  // text-decoration: underline;
    price: 9.37
    
},
{
    id: 13,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16659/goods_thumb_220-v1/d042dd9ed7e0.jpg",
    martprise: "$ 65.54",  // text-decoration: underline;
    price: 549
    
},
{
    id: 14,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16654/goods_thumb_220-v1/e7c2f2a04654.jpg",
    martprise: "$ 240.00",  // text-decoration: underline;
    price: 117.99
    
}]
newsub()
function newsub(){
    document.querySelector("#newsub").innerHTML=""
    for( let i=0;i<newsub_arr.length;i++){
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",newsub_arr[i].img);
        let  markprise=document.createElement("h4")
        markprise.innerText=newsub_arr[i].martprise;
        let  price=document.createElement("h3")
        price.innerText=newsub_arr[i].price;
        let addcart=document.createElement("button")
        addcart.innerText="Add to cart"
        document.querySelector("#newsub").append(div1)
        div1.append(img,markprise,price,addcart)

    }
}
let recommended_arr=[{
    id: 15,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_img-v3/b14e634a2e36.jpg",
    description: "Mpow 059 Pro/Lite Wireless Headphone with blutooth connectivity in black",
    price: 24.99
    
},
{
    id: 16,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_img_big-v1/f6bacc190fa6.jpg",
    description: "Dere Laptop MBook M11 15.6 Inch 12GB RAM 512GB SSD Intel Celeron",
    price: 349.00
    
},
{
    id: 17,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6866325577285169152/16643/goods_img_big-v1/4ca8f7d742f4.jpg",
    description: "Halloween Neon Mask Mixed Color Led Masks in variors light colors",
    price: 11.03
    
},
{
    id: 18,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16571/goods_img_big-v3/8fe9d8ae4819.jpg",
    description: "New 4K HD Dual Lens Wifi Mini Camera Wide Angle Portable Mini Camera",
    price: 17.68
    
},
{
    id: 19,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16621/goods_img_big-v9/b0cd2641f96c.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 17.68
    
}
,
{
    id: 20,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16652/goods_img-v1/6f6b92e796e0.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 49.00
    
},
{
    id: 21,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img-v1/42405dc55cb8.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 345.00
    
},
{
    id: 22,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16545/goods_img-v3/a75d89f4a160.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 549.99
    
},
{
    id: 23,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16552/goods_img-v5/338e1a4c7edb.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 1049
    
},
{
    id: 24,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16640/goods_img-v1/f1a0d52bfd9c.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 78.99
    
},{
    id: 25,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img-v1/84225c6f6906.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 14.99
    
}
,
{
    id: 26,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/0b0ff330204b.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 174.00
    
},
{
    id: 27,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img-v1/688df4b94eb8.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 37.99
    
},
{
    id: 28,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_img-v1/11ba0ca21ab9.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 1499.00
    
},
{
    id: 29,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16517/goods_img-v7/a00cb9f65d8f.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 199.99
    
},
{
    id: 30,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16640/goods_img-v3/ee27ceccf974.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 599.99
    
},
{
    id: 31,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_img-v3/1519af3adbf9.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 296.66
    
},
{
    id: 32,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img-v3/31d0d9d6c843.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 899.00
    
},
{
    id: 33,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16656/goods_img-v1/f5cdeb8b98f6.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 199.99
    
},
{
    id: 34,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_img-v1/5ef9d5b1a9a0.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 599.99
    
},
{
    id: 35,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16654/goods_img-v3/b14e634a2e36.jpg",
    description: "Mpow 059 Pro/Lite Wireless Headphone with blutooth connectivity in black",
    price: 24.99
    
},
{
    id: 36,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16652/goods_img_big-v1/f6bacc190fa6.jpg",
    description: "Dere Laptop MBook M11 15.6 Inch 12GB RAM 512GB SSD Intel Celeron",
    price: 349.00
    
},
{
    id: 37,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6866325577285169152/16643/goods_img_big-v1/4ca8f7d742f4.jpg",
    description: "Halloween Neon Mask Mixed Color Led Masks in variors light colors",
    price: 11.03
    
},
{
    id: 38,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16571/goods_img_big-v3/8fe9d8ae4819.jpg",
    description: "New 4K HD Dual Lens Wifi Mini Camera Wide Angle Portable Mini Camera",
    price: 17.68
    
},
{
    id: 39,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16621/goods_img_big-v9/b0cd2641f96c.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 17.68
    
}
,
{
    id: 40,
    img:"https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16652/goods_img-v1/6f6b92e796e0.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 49.00
    
},
{
    id: 41,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img-v1/42405dc55cb8.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 345.00
    
},
{
    id: 42,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16545/goods_img-v3/a75d89f4a160.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 549.99
    
},
{
    id: 43,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16552/goods_img-v5/338e1a4c7edb.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 1049
    
},
{
    id: 44,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16640/goods_img-v1/f1a0d52bfd9c.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 78.99
    
},{
    id: 45,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img-v1/84225c6f6906.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 14.99
    
}
,
{
    id: 46,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/0b0ff330204b.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 174.00
    
},
{
    id: 47,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img-v1/688df4b94eb8.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 37.99
    
},
{
    id: 48,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16643/goods_img-v1/11ba0ca21ab9.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 1499.00
    
},
{
    id: 49,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16517/goods_img-v7/a00cb9f65d8f.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 199.99
    
},
{
    id: 50,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16640/goods_img-v3/ee27ceccf974.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 599.99
    
},
{
    id: 51,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_img-v3/1519af3adbf9.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 296.66
    
},
{
    id: 52,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img-v3/31d0d9d6c843.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 899.00
    
},
{
    id: 53,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16656/goods_img-v1/f5cdeb8b98f6.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 199.99
    
},
{
    id: 54,
    img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_img-v1/5ef9d5b1a9a0.jpg",
    description: "Blood Oxygen Fitness Traker Waterproof Xiaomi Smart Band 7 Pro - Black",
    price: 599.99
    
}]
recommended()
function recommended(){
    document.querySelector("#recommended").innerHTML=""
    for( let i=0;i<recommended_arr.length;i++){
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",recommended_arr[i].img);
        let des=document.createElement("p")
        des.innerText=recommended_arr[i].description;
        let  price=document.createElement("h3")
        price.innerText=recommended_arr[i].price;
        let addcart=document.createElement("button")
        addcart.innerText="Add to cart"
        document.querySelector("#recommended").append(div1)
        div1.append(img,des,price,addcart)

    }
}
