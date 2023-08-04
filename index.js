function lerJson(json_file){
    fetch(json_file)
        .then(response => response.json())
        .then(data =>preencheDivVagas(data))
}

function preencheDivVagas(data){
    data["vagas"].forEach(element => {
        document.getElementById("todos-conteiners-vagas").innerHTML += "<div class='containers-vagas-disponiveis'><h2 class='titulo-vaga'><strong>"+element.titulo+"</strong></h2><p class='local-vaga'>"+element.cidade+"</p></div>"
    });
}

lerJson("info.json")
//"<div id='todos-conteiners-vagas'><h2><strong></strong></h2><p></p></div>"