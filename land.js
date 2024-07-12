const Valid = () => {
    const name = document.getElementById("name").value;
    const nameStat = document.getElementById("nameStat");
    const nameexp = /^[a-zA-z]$/;

    const password = document.getElementById("password").value;
    const passwordStat = document.getElementById("passwordStat");

    const email = document.getElementById("email").value;
    const emailStat = document.getElementById("emailStat");
    const emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 


    const date = document.getElementById("date").value;
    const dateStat = document.getElementById("dateStat");

    const Country = document.getElementById("Country").value;
    const CountryStat = document.getElementById("CountryStat");

    if(name ===""){
        nameStat.innerHTML = " Please Print name";
    }
    else{
        if(name.match(nameexp)){
        nameStat.innerHTML = " ";
    }   
    else{
        nameStat.innerHTML = "Letter's only";
    }
}

if(password ===""){
    passwordStat.innerHTML = "Password Please";
}
else{ 
    passwordStat.innerHTML = " ";
}

   if(email === ""){
    emailStat.innerHTML = " Type Email "; 
   }
   else{
     if(email.match(emailexp)){
        emailStat.innerHTML = "";
     }
     else{
        emailStat.innerHTML ='Incorrect order';
     }
   }
     if(date === ""){
        dateStat.innerHTML = "Choose Date";
     }
     else{
        dateStat.innerHTML = ""
     }
if(Country === ""){
    CountryStat.innerHTML = "Please Choose ";
}
else{
    CountryStat.innerHTML = "";
}

    return false
}