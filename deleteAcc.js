fetch("http://localhost:8080/accounts")
.then(data=>data.json())
.then(data=>{
    console.log(data);


data["_embedded"]["accounts"].forEach(account=>{
    console.log(account);
   const a= document.createElement("a");
   a.textContent=account["accountType"];
   document.body.appendChild(a);

   console.log(account["_links"]["self"]["href"]);

        //setAttribute is a method attribute ka name dena hai
        a.setAttribute("href",account["_links"]["self"]["href"]);

        a.addEventListener("click",(event)=>{
            event.preventDefault()// to stop new page
            fetch(account["_links"]["self"]["href"],{method:"DELETE"})
            .then(data=>data.json())
            .then(data=>console.log("deleted product"+data))

       
        // $ means "value of" used instead of + and ""
    });
})
})