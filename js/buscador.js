document.querySelector('#submitButton').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#finalData').innerHTML = '<h5>Resultados de la búsqueda:</h5>';
    var finalData = [];

    var Ciudad = document.querySelector('#selectCiudad').value;
    var ViviendaTipo = document.querySelector('#selectTipo').value;

    if (Ciudad != 0 || ViviendaTipo != 0) {
        for (let i = data.length - 1; i >= 0; i--) {
            if (Ciudad != 0 && ViviendaTipo != 0) {
                if (data[i].Ciudad == Ciudad && data[i].Tipo == ViviendaTipo) {
                    finalData.push(data[i]);
                }
            }

            if (Ciudad != 0 && ViviendaTipo == 0) {
                if (data[i].Ciudad == Ciudad) {
                    finalData.push(data[i]);
                }
            } else if (Ciudad == 0 && ViviendaTipo != 0) {
                if (data[i].Tipo == ViviendaTipo) {
                    finalData.push(data[i]);
                }
            }
        }
    } else {
        alert('Debe seleccionar una ciudad o un tipo de vivienda para poder realizar la busqueda.')
    }
    document.querySelector('#finalData').innerHTML = '<h5>Resultados de la búsqueda: ' + finalData.length + '</h5>';


    for (let i = finalData.length - 1; i >= 0; i--) {
        document.querySelector('#finalData').innerHTML += "<div class='itemMostrado' id='" + finalData[i].Id + "'><img src='img/home.jpg'><span>Dirección :" + finalData[i].Direccion + "</span><br><span>Ciudad: " + finalData[i].Ciudad + "</span><br><span>Telefono: " + finalData[i].Telefono + "</span><br><span>Codigo postal: " + finalData[i].Codigo_Postal + "</span><br><span>Tipo: " + finalData[i].Tipo + "</span><br><span>Precio: " + finalData[i].Precio + "</span><br><form action='php/save.php' method='POST'><input type='hidden' value='" + finalData[i].Id + "' name='id'><button id='button" + finalData[i].Id + "' class='save_button'>Guardar</button></form></div><div class='divider mt-10'></div>";
    }

});
