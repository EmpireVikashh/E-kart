const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
var retrievedObject = localStorage.getItem('user_register_detail');
let get_data_from_local_store = JSON.parse(retrievedObject);

// console.log(get_data_from_local_store);


if(get_data_from_local_store!=null && get_data_from_local_store.email && get_data_from_local_store.password){
  document.querySelector(".nameicon").innerHTML = get_data_from_local_store.firstname;
  document.querySelector(".signup_hide_show").style.display='none'
  document.querySelector(".login_logout").innerHTML="Logout"
}
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
