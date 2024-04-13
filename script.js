function validate() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phnNumber").value
    const subject = document.getElementById("select").value
    const password = document.getElementById("password").value
    const comfirmPassword = document.getElementById("comfirmPassword").value
    const checkbox = document.getElementById("checkbox")


    //console.log(name, email, phone, subject, password, comfirmPassword);
    //console.log(checkbox);

    if(name.trim() === ""){
        showError("Name cannot be empty");
        return false
    }

    if(email.trim() === ""){
        showError("Email cannot be empty");
        return false
    }

    if(phone.trim() === "" || isNaN(phone.trim()) || phone.trim().length !==10){
        showError("Please enter a 10-digit valid phone number");
        return false
    }


    if(subject === "0") {
        showError("Please select a subject");
        return false
    }

  
    const passwordRegex = /^(?=.*\d)(?=.*[\W_]).*$/;

    if(password.trim() === "" || password.length !== 8 || !passwordRegex.test(password)){
        showError("Password must be 8 characters long and at least one special character");
        return false
    }

    if(comfirmPassword.trim() === "" || comfirmPassword !== password){
        showError("Password and confirmation do not match");
        return false
    }
    
    if(!checkbox.checked){
        showError("Please agree to the terms and conditions");
        return false
   
    }else{
        alert("Form submitted successfully");
        return true
    }

    //function for error message
function showError(message){
        const errorElement = document.getElementById("demo");
        errorElement.style.color = "red";
        errorElement.style.fontWeight = "bold";
        errorElement.style.textAlign = "center";
        errorElement.style.marginTop = "10px"
        errorElement.textContent = message;
    }
}