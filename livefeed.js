/* app design
-user is anonymous meaning anyone can post
-user writes text into the input up to 200 characters
-user clicks submit (+) and it posts to the feed
-feed is endless log of peoples thoughts(posts)
-after someone posts the input is cleared and someone else can post
*/


  var post, input, characters, maxChar;

  function onPositionReceived(position){
    console.log(position);
  }
  function onPositionNotReceived(positionError){
    console.log(positionError);
  }
  if(navigator.geolocation){
    navigator.geolocation.watchPosition(onPositionReceived, onPositionNotReceived, {timeout: 0});
  }
  //maxChar = 150;
  //check if there is any input in the box
  document.querySelector('.btn-submit').addEventListener('click', function() {
    //read the input field
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
  });

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
