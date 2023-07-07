let login = document.querySelector('.login');

const names = document.querySelector('.nameicon');

let logincheck = document.querySelector(".login_logout")

  

  document.querySelector(".login_logout").innerHTML = "Login"
  let user_register_detail = {
    'firstname':"", 'lastname':"",
    'email':"", 'password':""
};

// Put the object into storage
  localStorage.setItem('user_register_detail', JSON.stringify(user_register_detail));
 

  // login vaildation check user has email id password not    user ne shie id password daal raha ha nhe register karte  time wala id password
  let login_vaildation_check = document.querySelector('.login_vaildation_check').addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    e.stopPropagation()
    console.log(logincheck.innerHTML)
    if (logincheck.innerHTML == "Logout") {
  

      document.querySelector(".login_logout").innerHTML = "Login"
      let user_register_detail = {
        'firstname':"", 'lastname':"",
        'email':"", 'password':""
    };
    
    // Put the object into storage
      localStorage.setItem('user_register_detail', JSON.stringify(user_register_detail));
      alert("User Logout SuccessFull")
      window.location.replace("./index.html")
    
    }

else
{
  let loginEmail = document.querySelector('.loginEmail').value
  let loginPassword = document.querySelector('.loginPassword').value

  let retrievedObject2 = localStorage.getItem('user_register_detail2');
  let get_data_from_local_store2 = JSON.parse(retrievedObject2)
   

  //  ea set kar raha hu login wala may
      
  let user_register_detail = {
    'firstname': get_data_from_local_store2.firstname, 'lastname': get_data_from_local_store2.lastname,
    'email':get_data_from_local_store2.email, 'password':get_data_from_local_store2.password
};

// Put the object into storage



  if (user_register_detail == null) alert("User does'nt  Exist please Provide vaild Detail....")

  else if (loginPassword != user_register_detail.password || loginEmail != user_register_detail.email) {
    alert("User does'nt  Exist please Provide vaild Detail....")
  }

  else {
    alert("Login SuccessFull")
    document.querySelector(".nameicon").innerHTML = get_data_from_local_store2.firstname

    let user_register_detail = {
      'firstname': get_data_from_local_store2.firstname, 'lastname':get_data_from_local_store2.lastname,
      'email':get_data_from_local_store2.email, 'password': get_data_from_local_store2.password
    };

    // Put the object into storage
    localStorage.setItem('user_register_detail', JSON.stringify(user_register_detail));
    // Assuming the user is successfully logged in
    // Redirecting to another file after login
    // window.location.href = 'http://127.0.0.1:5501/index.html';

    // window.location.href("/index.html")
    document.querySelector(".signup_hide_show").style.display='none'
    window.location.replace("./index.html")
       
  }
}
  })
