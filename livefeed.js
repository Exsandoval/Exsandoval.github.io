/* app design
-user is anonymous meaning anyone can post
-user writes text into the input up to 200 characters
-user clicks submit (+) and it posts to the feed
-feed is endless log of peoples thoughts(posts)
-after someone posts the input is cleared and someone else can post
*/

(function() {
  'use strict';
  var post, input, characters, maxChar;
  var x = document.getElementById('output');
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onPositionReceived,onPositionNotReceived,{timeout: 5000});
    }else{
      x.innerHTML = 'browser doesn\'t support';
    }

  function onPositionNotReceived(positionError){
    console.log(positionError);
  }
   function onPositionReceived(position){
     x.innerHTML = "latitude = " + position.coords.latitude;
     x.innerHTML += "<br />"
     x.innerHTML += "Longitude = " + position.coords.longitude;
  var locAPI = "https://www.mapquestapi.com/geocoding/v1/reverse?key=SAGajtAzMGvp01ZSwAH88C03epaqEjNG&location="+position.coords.latitude+","+position.coords.longitude+"&includeRoadMetadata=true&includeNearestIntersection=true";
  $.get({
    url: locAPI,
    success: function(data){
      console.log(data);
      x.innerHTML = data.results[1].locations.adminArea5 + ', ';
      x.innerHTML += data.results[1].locations.adminArea3;
    }
  });

   }
  //maxChar = 150;
  //check if there is any input in the box
  document.querySelector('.btn-submit').addEventListener('click', addItem);
    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        addItem();
      }
});
    //read the input field
    function addItem(){
      input = document.querySelector('.input-field').value;
      //characters = input.length;
      //console.log(characters);
      //check if there is something in it and then set it = to post
      if (input) {
        //check how many characters are in the input
      //  if(characters <= maxChar){
        post = input;
        //update the ui to show the post
        //document.querySelector('.posts').textContent = post;

        document.querySelector('.input-field').value = '';
        newPost();
      }

    }
    /*input = document.querySelector('.input-field').value;
    //characters = input.length;
    //console.log(characters);
    //check if there is something in it and then set it = to post
    if (input) {
      //check how many characters are in the input
    //  if(characters <= maxChar){
      post = input;
      //update the ui to show the post
      //document.querySelector('.posts').textContent = post;

      document.querySelector('.input-field').value = '';
      newPost();
    }*/
  //});

  function newPost() {
    var div = document.createElement("div");
    div.class = 'posts'
    //div.style.width = "100vw";
    //div.style.height = "50px";
    //div.style.background = "whitesmoke";
    //div.style.color = "black";
    div.textContent = post;

    document.getElementById('feed').prepend(div);
  }

}());
//x.innerHTML = data.results[1].address_components[0].long_name + ', ';
//x.innerHTML += data.results[1].address_components[2].long_name;
//"https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true";
