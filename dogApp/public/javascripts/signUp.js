function openCloseDropDown(id){
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
    }