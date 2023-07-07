let signup = document.querySelector('.signup');
/*  this is collect all data from form and set in local store  ea form say pura data laylyga or local store may set karayga */
const names = document.querySelector('.nameicon');
let collect_Data_From_signup_btn = document.querySelector('.collect_Data_From_signup_btn').addEventListener('click', (e) =>
{

    e.stopImmediatePropagation()
    e.stopPropagation()
   
    
    let firstname = document.querySelector('.firstname').value;
    let lastname = document.querySelector('.lastname').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
  let confirmpassword = document.querySelector('.confirmpassword').value;
    if (firstname && password === confirmpassword && lastname)
    {
        console.log(firstname, lastname, email, password, confirmpassword)
        document.querySelector('.password').style.borderColor = '#DEE2E6' 
        document.querySelector('.confirmpassword').style.borderColor = '#DEE2E6'
        

        let user_register_detail2 = {
            'firstname': firstname, 'lastname': lastname,
            'email':email, 'password':password
        };

        // Put the object into storage
        localStorage.setItem('user_register_detail2', JSON.stringify(user_register_detail2));
        
    
  

        //  now reset out from

        document.querySelector('.firstname').value = "";
        document.querySelector('.lastname').value = "";
        document.querySelector('.email').value = "";
        document.querySelector('.password').value = "";
        document.querySelector('.confirmpassword').value = "";
        
        alert("User Signup Successfully...")
        
        window.location.replace("./login.html")
    
    }
    else
    {
        document.querySelector('.password').style.borderColor = 'red' 
        document.querySelector('.confirmpassword').style.borderColor = 'red'
     
    }
   
})
