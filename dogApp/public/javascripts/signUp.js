/*function openCloseDropDown(id){
    const dropDownOne = document.getElementById("dropdown-1");
    const dropDownTwo = document.getElementById("dropdown-2");
    const dropDownThree = document.getElementById("dropdown-3");
  
  if(id === "dropdown-bttn-1"){
    if(dropDownOne.style.display === "block"){
      dropDownOne.style.display= "none";
  
      }else{
        dropDownOne.style.display = "block";
  
      }}
      else if (id === "dropdown-bttn-2"){
        if(dropDownTwo.style.display === "block"){
      dropDownTwo.style.display= "none";
  
      }else{
        dropDownTwo.style.display = "block";
  
      }
  
      }
      else if (id === "dropdown-bttn-3"){
        if(dropDownThree.style.display === "block"){
      dropDownThree.style.display= "none";
  
      }else{
        dropDownThree.style.display = "block";
  
      }
    }
    }*/

    function closePopUp(){
      $(document).ready(function() {

$("#popUp-box").remove();

      });
    }
   
   let email = {
    email: " ",
    get userEmail(){
      return this.email;
    },
    set userEmail(email){
      this.email = email;
    }
  
  }
  let password = {
    password: 0,
    get userPassword(){
      return this.password;
    },
    set userPassword(password){
      this.password = password;
    }
  
  }
 
  document.getElementById('userInfo').addEventListener('submit', function(event) {
    event.preventDefault();

email.userEmail = document.getElementById('email').value;
password.userPassword = document.getElementById('password').value;
 
       

  $.ajax({
    url: '/signUp-1/userInfo',
    type: 'POST', 
    async: true,           
    dataType: 'json',
    data:{ email: email.userEmail,
    password: password.userPassword},

  
    success: function(res) {
      //if(res == ""){
        console.log(res);
      $('#login-form').append('<div id="popUp-box" class="popUp-box"><button class="popUp-bttn" id="popUp-bttn" onclick="closePopUp()">x</button><p class="popUp-text">User already exists</p></div>');
      //}

  },
  error: function(xhr, status, error) {
    console.error("AJAX Error:", status, error);
}
});

});