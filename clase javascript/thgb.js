// var div = document.getElementById("div-principal");

// div.innerHTML = "<h1>test</h1>"
// console.log(div.innerText)

function cargarUsuarios(){
    var totalRegistros = document.getElementById("total-registros").value;
  
  if(totalRegistros==""){
  totalRegistros =10;
  
  }
  
  
  fetch('https://randomuser.me/api/?results='+ totalRegistros)
    .then(response => response.json())
    .then(data =>{
  
      var usuarios = data.results;
      var contenido = "";
      for( var i = 0 ; i<usuarios.length ; i++){
        // alert(usuarios[i].name.first + "  " + usuarios[i].name.last)
          // alert(usuarios[i].location.street.name)
          contenido += `<div class="card" style="width: 18rem;">
          <img src="${usuarios[i].picture.large}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${usuarios[i].name.first} 
            ${usuarios[i].name.last} </h5>
            <p class="card-text">${usuarios[i].email} </p>
          </div>
        </div>`;
      }
  
      document.getElementById("div-principal").innerHTML = contenido;
  
    });
  }