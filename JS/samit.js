function myFunction() {
    alert("¡Haz hecho clic en el icono!");
  }

function redirectTo(page) {
    window.location.href = page;
    
}

function toggleSublist() {
  var sublist = document.querySelector('.sublist');
  sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
}

function mostrarVideo(videoId) {
  var playerDiv = document.getElementById('player');
  playerDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function buscador () {

  
}