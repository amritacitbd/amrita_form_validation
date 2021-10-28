

//get element from html

var userName = document.getElementById('userName');
var nameErr = document.getElementById('nameErr');

var surName = document.getElementById('surName');
var surNameErr = document.getElementById('surNameErr');

var userEmail = document.getElementById('userEmail');
var userEmailErr = document.getElementById('userEmailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

// var confirmPass = document.getElementById('confirmPass');
// var confirmPassErr = document.getElementById('confirmPassErr');


// create a function for submit button
function subm()
{
    // user firstname error
    if(userName.value == ""){
        userName.style.borderColor = "#d22222";
        userName.focus();
        nameErr.innerHTML = "please enter your first name";
        return false;
    }

    // user surname error
    if(surName.value == ""){
        surName.style.borderColor = "#d22222";
        surName.focus();
        surNameErr.innerHTML = "please enter your surname";
        return false;
    }

     // user password error
     if(userEmail.value == ""){
        userEmail.style.borderColor = "#d22222";
        userEmail.focus();
        userEmailErr.innerHTML = "please enter your email";
        return false;
    }

    if(pass.value.length <= 5){
        pass.style.borderColor = "#d22222";
        pass.focus();
        passErr.innerHTML = "passward must be 6 charecters";
        return false;
    }

    // user confirm password error
    // if(confirmPass.value == ""){
    //     confirmPass.style.borderColor = "#d22222";
    //    confirmPass.focus();
    //    confirmPassErr.innerHTML = "please enter password";
    //     return false;
    // }

    // if(confirmPass.value != pass.value){
    //     confirmPass.style.borderColor = "#d22222";
    //    confirmPass.focus();
    //    confirmPassErr.innerHTML = "passwords not matched ";
    //     return false;
    // }
}


//create a function to remove error
function errRemove()
{
    // username
    if(userName.value != ""){
        userName.style.borderColor = "#dddddd";
        nameErr.innerHTML = "";
    }

    // surname
    if(surName.value != ""){
        surName.style.borderColor = "#dddddd";
        surNameErr.innerHTML = "";
    }

    // email
    if(userEmail.value != ""){
        userEmail.style.borderColor = "#dddddd";
        userEmailErr.innerHTML = "";
    }

    // confirm password
    // if(confirmPass.value != ""){
    //     confirmPass.style.borderColor = "#dddddd";
    //     confirmPassErr.innerHTML = "";
    // }

}

userName.addEventListener('blur', errRemove);
surName.addEventListener('blur', errRemove);
userEmail.addEventListener('blur', errRemove);
// confirmPass.addEventListener('blur', errRemove);

// modal & tigger

var tigger = document.getElementById('tigger');
var modal = document.getElementById ('modal');
var close = document.getElementById('close');

tigger.addEventListener('click', function(){
    modal.style.display ="flex";
});

closeModal.addEventListener('click', function(){
    modal.style.display ="none";
});



//get element from html
var userEmail1 = document.getElementById('userEmail1');
var emailError = document.getElementById('emailError')

var userPass = document.getElementById('userPass');
var userPassErr = document.getElementById('userPassErr');



// create a function for long in form 

function logForm()
{
    if(userEmail1.value == ""){
        userEmail1.style.borderColor = "#dddddd";
        userEmail1.focus();
        emailError.innerHTML = "please enter your email";
        return false;
    }

    if(userPass.value == ""){
        userPass.style.borderColor = "#dddddd";
        userPass.focus();
        userPassErr.innerHTML = "please enter your password";
        return false;
    }
 
}

// if(userEmail.value == ""){
//     userEmail.style.borderColor = "#d22222";
//     userEmail.focus();
//     emailErr.innerHTML = "please enter your email";
//     return false;
// }


