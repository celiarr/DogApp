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
 let count = 0;
  
 function idGenerator(){
  return count++;
 }


function displayMssgBox(){
let id = idGenerator();
  $(`<div class='alert-options'><button onclick='hideMessageOptions(this.id, this.innerHTML)' style='display: inline;' class='options-bttn' id='mssg-${id}'>Hello, I am close and would like to avoid crossing paths </button><hr><button class='options-bttn' onclick='hideMessageOptions(this.id, this.innerHTML)' style='display: inline;' id='mssg-${id}'>Hello, I am near and have a friendly dog. I don’t mind crossing paths</button></div>`).insertAfter("#message-sidebar")


}
//send message selected to database 
const sendMessage = (message) => {
  $.ajax({
      type: "POST",
      url: "/map/getMessage", 
      async: false,
        data : {
           "message" :  JSON.stringify(message)}
     
    });
}


function hideMessageOptions(className,message){
$("#alert-options").hide();
sendMessage(message);


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