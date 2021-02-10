



function videoUrl() {

    //How to handle Errors ?
    
    var input = document.querySelector("#VideoLink").value;
    if (input == "") {
        alert("Enter a Valid URL");
        return false;
    };
    document.querySelector('#videoSrc').src = input;
    document.querySelector('#video').load();
    
}

function offSet(){

    var input = document.querySelector("#VideoTime").value;
    if (input == "") {
        alert("Enter a Valid number");
        return false;
    };
    document.querySelector("#video").currentTime = input;
    document.querySelector("#video").play();
}

function preview(){

    var input = document.querySelector("#VideoLink").value;
    if (input == "") {
        alert("Enter a Valid URL");
        return false;
    };


    var videlem = document.createElement("video");
    /// ... some setup like poster image, size, position etc. goes here...
    /// now, add sources:
    var sourceMP4 = document.createElement("source"); 
    sourceMP4.type = "video/mp4";
    sourceMP4.src = input;

    
    videlem.appendChild(sourceMP4);
 
    videlem.controls="controls";
    
    
    
    document.querySelector("#test").appendChild(videlem);

    var video = document.querySelector("#video");
    var canvas = document.querySelector("#myCanvas");
    
    canvas.getContext('2d').drawImage(videlem, 90,130,100,80);
    
    
}

function rotation(){
    var input = document.querySelector("#angle").value;
    if (input == "") {
        alert("Enter a Valid number");
        return false;
    };

    const video = document.querySelector("#video");
    video.style.transform = 'rotate('+input+'deg)';
}

function rotation0(){
    const video = document.querySelector("#video");
    video.style.transform = 'rotate('+0+'deg)';
}

let phoneN;
let location1;

function checkId(){
    


    phoneN = document.querySelector("#PNumber").value;

    if (sessionStorage.getItem(phoneN) === null) {
        alert("You Need to register in the Account section");
        window.location.replace("file:///C:/Users/maxim/Desktop/Cours/Cours%20Eurecom/WebInt/Projet/account.html");
        //Then the user needs to register
    }
    else{
        getLocalisation();
        document.querySelector('#IdCheck').style.display = "none";
        document.querySelector('#CommentSection').style.display = "block";
    }

    let loca = navigator.geolocation;
    




}




function displayCommentary(){
    document.querySelector('#commentaries').innerHTML =""
    var url = document.querySelector('#videoSrc').src;
    var VidCommentaries;

    if(JSON.parse(localStorage.getItem(url))!=null){
        document.querySelector("#commentaries").style.display="flex";
        VidCommentaries = JSON.parse(localStorage.getItem(url));
        for(let i=0; i<VidCommentaries.length; i++) {
            document.querySelector('#commentaries').innerHTML += VidCommentaries[i][2] + " , " + VidCommentaries[i][1]  + ' said : ' + VidCommentaries[i][0] +  " in " + VidCommentaries[i][3][0] + ", " +  VidCommentaries[VidCommentaries.length -1][3][1]+  "</br>";
            
          }
        
    }
    

}
function Wantcomment(){
    const button = document.querySelector('#commentWant')
    button.style.display = "none";
    document.querySelector('#IdCheck').style.display = "block";
    displayCommentaries();

}



function comment(){
    
   
    var comment = document.querySelector("#comment").value;
    var table = JSON.parse(sessionStorage.getItem(phoneN));

    var url = document.querySelector('#videoSrc').src;
    var VidCommentaries;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var location = location1;

    
    
    if(JSON.parse(localStorage.getItem(url))===null){
        var VidCommentaries = [[comment,table[0],date,location]]
        localStorage.setItem(url,JSON.stringify(VidCommentaries));
    }
    else{
        VidCommentaries = JSON.parse(localStorage.getItem(url));
        VidCommentaries.push([comment,table[0],date,location]);
    }

    localStorage.setItem(url,JSON.stringify(VidCommentaries));

    document.querySelector("#commentaries").style.display="flex";
    var preText = VidCommentaries[VidCommentaries.length -1][2] + " , " + VidCommentaries[VidCommentaries.length -1][1] + ' said : ';
    document.querySelector("#commentaries").innerHTML += preText + VidCommentaries[VidCommentaries.length -1][0] + " in " + VidCommentaries[VidCommentaries.length -1][3][0] + ", " +  VidCommentaries[VidCommentaries.length -1][3][1] + "</br>";
      

}

function ChangeAccount(){
    document.querySelector('#CommentSection').style.display = "none";
    document.querySelector('#IdCheck').style.display = "block";



}




function getLocalisation(){
    //First we get the coordinates

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);     
      }
    else { 
        alert("Geolocation is not supported by this browser.")
        return
      }
    }

    

function getPosition(position) {

    //Create query for the API.
   
    var latitude = "latitude=" + position.coords.latitude;
    var longitude = "&longitude=" + position.coords.longitude;
    var query = latitude + longitude + "&localityLanguage=en";

    const Http = new XMLHttpRequest();
    var bigdatacloud_api =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?";


    bigdatacloud_api += query;

    Http.open("GET", bigdatacloud_api);
    Http.send();

    Http.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        location1 = [myObj.locality,myObj.countryName];

      }

     
    };    
  }

  
var checkbox = document.querySelector("#controls");

checkbox.addEventListener('change', function() {
    
  if (this.checked) {
    document.querySelector("#video").controls = false;
  } else {
    document.querySelector("#video").controls = true;
  }
});


let ListURL =["https://archive.org/download/PPLKfdfGV/Nates%20Firepole%20Fail.mp4","https://archive.org/download/rmflfjf/Morpheus%20Jump%20Fail%28144P%29.mp4","https://archive.org/download/bigchiefhateshisnuts/Big%20Chief%20Hates-His-Nuts.mp4"];
let ListName =["Nates Firepole Fail","Big Chief Hates-His-Nuts","Big Chief Hates-His-Nuts"]
let i = 1;
var jukeBox = document.querySelector("#juke");
jukeBox.onended = function() {
    var video = document.querySelector("#juke");
    document.querySelector("#jukeSrc").src = ListURL[i];
    var j = i+1;
    document.querySelector("#title").innerHTML = ListName[i] + ": video " + (j) +"/3";
    i = (i + 1)%3
    
    video.load();
    video.play();
    


}








