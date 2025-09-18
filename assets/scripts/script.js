

function validateForm() {
    /**
     * Reference to the form element with the ID "myForm".
     * @type {HTMLFormElement}
     */
    const form = document.getElementById("myForm");
    
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
       
        if (username === "" || email === "") {
            alert("Please fill in all required fields.");
            return false;
        }
        else{
        window.open(form.action, "_blank"); //open the form-validation.html in a new tab//
        return false;

        } 
    }
