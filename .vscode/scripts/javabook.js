let sound = document.getElementById('eend')
let play = document.getElementById('links')

play.onclick =
  function() {
        console.log('links');
  sound.play();
        return false;
    };
