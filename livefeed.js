/* app design
-users location is taken and shown/ puts user into a feed of people in area
-user is anonymous meaning anyone can post
-user clicks submit (+) and it posts to the feed
-feed is endless log of peoples thoughts(posts)
-after someone posts the input is cleared and someone else can post
*/

(function() {
  //global variables
  var post, input, characters, maxChar;
  // x refers to the location display div is
  var x = document.getElementById('output');
  //this checks if the naviagator supports geolocation if so it gets it
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onPositionReceived,onPositionNotReceived,{timeout: 5000});
    }else{//this is what happens when the browser doesnt support it
      x.innerHTML = 'browser doesn\'t support';
    }
// if the position is not received or denied this happens
  function onPositionNotReceived(positionError){
    console.log(positionError);
  }// if the position is recieved then this happens next
  //the output div for location is updated with the new info
   function onPositionReceived(position){
     x.innerHTML = "latitude = " + position.coords.latitude;
     x.innerHTML += "<br />"
     x.innerHTML += "Longitude = " + position.coords.longitude;
     //this is mapquest api that allows reverse geocode to name the coordinates
  var locAPI = "https://www.mapquestapi.com/geocoding/v1/reverse?key=SAGajtAzMGvp01ZSwAH88C03epaqEjNG&location="+position.coords.latitude+","+position.coords.longitude+"&includeRoadMetadata=true&includeNearestIntersection=true";
//this creates an object that fetches the data from the api
  $.get({
    url: locAPI,
    success: function(data){
      //console.log(data);
      x.innerHTML = data.results[0].locations[0].adminArea5 + ', ';
      x.innerHTML += data.results[0].locations[0].adminArea3;
    }
  });

   }
// event listeners for click or enter on keyboard to submit post
  document.querySelector('.btn-submit').addEventListener('click', addItem);
    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        addItem();
      }
});
    //function that posts the text in the input field if there is any
    function addItem(){
      input = document.querySelector('.input-field').value;
      //check if there is something in it and then set it = to post
      if (input) {
        post = input;
        // clear the input field
        document.querySelector('.input-field').value = '';
        //create a new div and add it to the feed with the input text in it
        newPost();
      }else{}

    }
    // function that creates div with post inside of it
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
// GoogleMapsAPI without a key code is here incase mapquests api breaks vvv
//x.innerHTML = data.results[1].address_components[0].long_name + ', ';
//x.innerHTML += data.results[1].address_components[2].long_name;
//"https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true";
