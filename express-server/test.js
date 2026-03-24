fetch("http://localhost:8080/addNewQuote",{
    method:"POST",
    body:JSON.stringify({
        quote:"this is a quote",
        author:"example author"
    })
}).then((response)=>response.json()).then((value)=>console.log(value))