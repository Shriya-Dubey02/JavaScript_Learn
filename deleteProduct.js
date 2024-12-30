fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data);
    // data mai pura object aata hai
    // document.write(`<p>number : ${data["page"]["number"]}</p>`)
    // document.write(`<p>totalPages : ${data["page"]["totalPages"]}</p>`)


    // foreach is used for arrays

    data["_embedded"]["products"].forEach(product=>{
        // document.write(`<h1>${product["productName"]}</h1>`)
        // document.write(`<p>${product["_links"]["self"]["href"]}</p>`)
        console.log(product);
        const a=document.createElement("a");
        a.textContent=product["productName"];
        document.body.appendChild(a);

        //setAttribute is js metod which will help you
        console.log(product["_links"]["self"]["href"]);

        //setAttribute is a method attribute ka name dena hai
        a.setAttribute("href",product["_links"]["self"]["href"]);

        a.addEventListener("click",(event)=>{
            event.preventDefault()// to stop new page
            fetch(product["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())
            .then(data=>console.log("deleted product"+data))

       
        // $ means "value of" used instead of + and ""
    });
})
})