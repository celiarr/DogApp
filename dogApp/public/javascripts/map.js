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
    $("#alert-sent").append(`<hr><div class="alert-sent-0" id="alert-sent-0"><img class="alerts-dog-img"> <button onclick="deleteMessage()">Delete</button> </div>`);
    $("#alert-received").append(`<hr><div class="alert-received-0" id="alert-received-0"><img class="alerts-dog-img" id="alert-received-img"> <button onclick="deleteMessage()">Delete</button> <button onclick="messageOptions();">respond with a message</button></div>`);
  
  
  
    function messageOptions() {
$("#message-sidebar").append(`<div class="alert-options" id="alert-options"><a class="options-bttn" onclick="hideMessageOptions()" style="display: inline;">Hello, I am near and would like to avoid crossing paths</a><a class="options-bttn" onclick=" hideMessageOptions()" style="display: inline;">Hello, I am near and have a friendly dog. I don’t mind crossing paths</a></div>`)
//$("#alert-received").append(`<div class="message-options" id="message-options"><p>Message Options: </p><a class="options-bttn" onclick=" hideMessageOptions()">Hello, I am 0.2 miles away from you.</a><hr><a class="options-bttn"  onclick=" hideMessageOptions()">Hello, I am near and would like to avoid crossing paths</a><hr><a class="options-bttn"  onclick=" hideMessageOptions()">Hello, I am near and have a friendly dog. I don’t mind crossing paths</a></div>`).show();
}
function hideMessageOptions(){
$("#message-options").hide();
$("#alert-options").hide();
}

function deleteMessage(){
$("#alert-sent-0").remove();
$("alert-received-0").remove();

}

function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
              center: {lat: 36.91269, lng: -121.75569}, 
              zoom: 10,
              map_id: 'd86da7b08d23b8f2'
          });

          const contentString = '<div style="height:fit-content; width:fit-content; color: black;">hi</div>';
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "Uluru",
          });

          const marker = new google.maps.Marker({
            position: {lat: 36.89645, lng: -121.74788},
            map,
            icon: {
                url: "/images/Dog_Paw_icon .png",

               // url: "../public/images/Dog_Paw_icon .png",
            
                scaledSize: new google.maps.Size(70, 80),//(width, height)
                
                
            }
          });

          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });
        }


        window.initMap = initMap;