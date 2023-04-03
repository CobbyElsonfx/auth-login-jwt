const form = document.querySelector("form")

form.addEventListener("submit", async (ev)=>{
    ev.preventDefault()


    const email = form.email.value
    const password = form.password.value
    const emailError = document.getElementById("emailError")
    const passwordError = document.getElementById("passwordError")


    // note we must reset the error message to nothing on every submit button
    emailError.textContent =  ""  
    passwordError.textContent = ""

        try {
            const res =  await fetch("/signup", {
                method: "POST",
                body: JSON.stringify({email,password}),
                headers : {"Content-type": "application/json"} 
            }) 
            
            // the fetch as you know is normally used to fetch for data from  a server but it can also be used to 
            // to send data to a databse using the post method in the above code
            // we use the fetch method to post data into mongodb via the /signup endpoint
            // so we can access the res it received from the post 
            const  data = await res.json() // since this is also a promise we must await for the res  

            // Must check for errors or succes
            //if errors are present in the data received we can the access the message we defined in the handleError function 
            // in the sigup.js file
            if(data.errors){
                emailError.textContent = data.errors.email.message  // update the UI with the respective error message
                passwordError.textContent = data.errors.password.message   
            }

            //if the data contains the instance of the user id wich was sent as response during the authentication
            if(data.user){
              location.asign("/") //redirect the user to the home page/ "/" endpoint
            }

        } catch (error) {
            console.log(error)
            
        }


        
    

    console.log("clicked")
})




    





