let btn = document.querySelector("button");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");

let url = "https://catfact.ninja/fact";
let counter = 0;

btn.addEventListener("click", async ()=>{
    // let fact = await getFacts(); //returns Promise
    console.log("button was clicked")
    if(counter == 10){
        alert("Aren't you a Cat Lover!! Keep Meowingg");
    }
    counter++;
    h3.innerText = `Facts read: ${counter}`
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