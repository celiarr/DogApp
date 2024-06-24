function openMessageBox(){
    const sidebarButton = document.getElementById('sidebar-button');
    const messageSidebar = document.getElementById('message-sidebar');
    sidebarButton.addEventListener("click",() =>
    {
    if(messageSidebar.style.transform === "translateX(-100%)"){
        messageSidebar.style.transition = "transform 0.5s";
        messageSidebar.style.transform = "none";
    }else{
        messageSidebar.style.transition = "transform 0.5s";
        messageSidebar.style.transform = "translateX(-100%)";
    }
    }, {once : true});
    }
 


    ///for printing incoming and out messages
    $("#alert-sent").append(`<hr><div><img class="alerts-dog-img"> <button>Delete</button> </div>`);
    $("#alert-received").append(`<hr><img class="alerts-dog-img" id="alert-received-img"> <button>Delete</button> <button onclick="messageOptions();">respond with a message</button>`);
  
  
  
    function messageOptions() {
$("#map").append(`<div class="alert-options"> <p>Notify user you are near ?</p><a class="options-bttn" onclick=" hideMessageOptions()">send alert</a><a class="options-bttn" onclick=" hideMessageOptions()">send alert with message</a></div>`)
  //$("#map").append(`<div class="message-options" id="message-options"><p>Message Options: </p><a class="options-bttn" onclick=" hideMessageOptions()">Hello, I am 0.2 miles away from you.</a><hr><a class="options-bttn"  onclick=" hideMessageOptions()">Hello, I am near and would like to avoid crossing paths</a><hr><a class="options-bttn"  onclick=" hideMessageOptions()">Hello, I am near and have a friendly dog. I don’t mind crossing paths</a></div>`).show();
}
function hideMessageOptions(){
$("#message-options").hide();
$("#alert-options").hide();
}