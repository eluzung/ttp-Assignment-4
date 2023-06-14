function check (event) { 
    event.preventDefault();
    if (document.getElementById ("password").value == "123456") { 
        let change = document.querySelector("h1").innerHTML = "success";
        console.log(change);
        return true; 
    } else { 
        alert ("wrong keyword entry"); 
     } 
    }
