const form = document.querySelector("form")

form.addEventListener("submit", async (ev)=>{
    ev.preventDefault()

    const email = form.email.value
    const password = form.password.value

        try {
            const res =  await fetch("/signup", {
                method: "POST",
                body: JSON.stringify({email,password}),
                headers : {"Content-type": "Application/json"}
            })           
        } catch (error) {
            console.log(error)
            
        }
        
    

    console.log("clicked")
})




    





