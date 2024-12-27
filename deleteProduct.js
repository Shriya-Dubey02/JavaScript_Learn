fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    // data mai pura object aata hai
    document.write(`<p>number : ${data["page"]["number"]}</p>`)
    document.write(`<p>totalPages : ${data["page"]["totalPages"]}</p>`)


    // foreach is used for arrays

    data["_embedded"]["products"].forEach(product=>{
        document.write(`<h1>${product["productName"]}</h1>`)
        document.write(`<p>${product["_links"]["self"]["href"]}</p>`)
       
        // $ means "value of" used instead of + and ""
    });
})