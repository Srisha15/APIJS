let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let img = document.querySelector("#dog")
btn.addEventListener("click",async ()=>{
    let url = await getImage(); //return Promise
    console.log(url);
    img.setAttribute("src",url)
})
async function getImage(){
    try{//fetch
    let res = await axios.get(url); //Promise
    // console.log(res.data.message);
    return res.data.message
    }
    catch(err){
        console.log("Error: ",err)
    }
}