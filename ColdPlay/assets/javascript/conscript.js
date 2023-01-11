function clearerrors(){
    
    document.getElementById('errors-content').innerHTML="";
      
    document.getElementById("errors").classList.remove('d-block');

    document.getElementById("errors").classList.add('d-none');
    

    

}

function validateForm(){
    clearerrors();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var errors = "";
    
    if(isEmpty(firstName) || 
        isEmpty(lastName) || 
        isEmpty(email)|| 
        isEmpty(message)){
            errors += "<li>Please fill in all fields.</li>";
    }

    if(
        short(message)){
            errors+="<li>The message is to short, please fill in a valid message with 20 characters  </li>";
    
        
       }
    

    if(errors != ""){
        document.getElementById('errors-content').innerHTML = "<ul class='errors-list'>"+errors+"</ul>";
        /*Removing the d-none to make the card show when having errors*/
        document.getElementById('errors').classList.remove('d-none');

        document.getElementById('errors').classList.add('d-block');

        return false;
    }
    else{
        return true;
    }
}

function isEmpty(field){
    if(field == ""){
        return true;
    }
    else{
        return false;
    }
}

   function short(field){

    if (field.length<20){
        return true;

    }
    else{
        return false;
    }

}
