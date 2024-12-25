document.getElementById("calculate").addEventListener("click",()=>{

    let fromCurrency=document.getElementById("fromCurrency").value
    let toCurrency=document.getElementById("toCurrency").value
    let amount=document.getElementById("amount").value

    console.log(fromCurrency);
    console.log(toCurrency);
    console.log(amount);

    fetch("https://api.exchangerate-api.com/v4/latest/"+fromCurrency)
    .then(data=>data.json())
    // .then(data=>console.log(data["rates"][toCurrency]));
    .then(data=>{
    //    const h1= document.createElement("h1");
    //    h1.appendChild(document.createTextNode("Answer is "+data["rates"][toCurrency]*amount))
    //    document.body.appendChild(h1);

    let answer=data["rates"][toCurrency]*amount;
    document.getElementById("answer").textContent= amount+" "+fromCurrency+" = "+answer+" "+toCurrency;
    })
})

