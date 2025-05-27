let btn = document.querySelector("button");
let p = document.querySelector("p");

let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async ()=>{
    // let fact = await getFacts(); //returns Promise
    console.log("button was clicked")
    let fact  = await getFacts();
    console.log(fact)
    p.innerText = fact
})

async function getFacts(){
    try{

    
    let res = await axios.get(url);  //return Promise
    console.log("Fetch Successful")
    return res.data.fact;
    }catch(err){
        console.log("Error: ",err);

    }
}