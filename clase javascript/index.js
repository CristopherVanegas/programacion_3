// var div = document.getElementById("div-principal");

// div.innerHTML = "<h1>test</h1>"
// console.log(div.innerText)

function cargarUsuarios(){

  var totalRegistro = document.getElementById("total-registros").value;
  if(totalRegistro == ""){
    totalRegistro = 10;

  }

fetch('https://randomuser.me/api/?results='+ totalRegistro)
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
          <h5 class="card-title">${usuarios[i].name.first} ${usuarios[i].name.last}</h5>
          <p class="card-text">${usuarios[i].email}</p>
        </div>
      </div>`;
    }

    document.getElementById("div-principal").innerHTML = contenido;

  });

}

function cargarCorreos(){
  var parrafos = document.getElementsByTagName("p");
  var correos = "";
  for(var i =0; i<parrafos.length; i++){
    correos += `<li>${parrafos[i].innerText}</li>`;
  }
  document.getElementById("correos").innerHTML = correos;
}

  // <h5 class="card-title">` +  usuarios[i].name.first+ ` ` +  usuarios[i].name.last+ `</h5>