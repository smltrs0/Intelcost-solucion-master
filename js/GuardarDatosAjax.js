var xhr2 = new XMLHttpRequest();
var final_saved_data = [];

xhr2.open('POST', 'php/GetAllData.php', true);

xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4) {
        if (xhr.status == 200) {
            var saved_data = JSON.parse(xhr2.responseText);

            for (let i = data.length - 1; i >= 0; i--) {
                for (let j = saved_data.length - 1; j >= 0; j--) {
                    if (data[i].Id == saved_data[j].item_id) {
                        final_saved_data.push(data[i]);
                        break;
                    }
                }
            }

            if (final_saved_data.length != 0) {
                for (let i = final_saved_data.length - 1; i >= 0; i--) {
                    document.querySelector('#show_saved_data').innerHTML += "<div class='itemMostrado' id='" + final_saved_data[i].Id + "'><img src='img/home.jpg'><span>Dirección :" + final_saved_data[i].Direccion + "</span><br><span>Ciudad: " + final_saved_data[i].Ciudad + "</span><br><span>Telefono: " + final_saved_data[i].Telefono + "</span><br><span>Codigo postal: " + final_saved_data[i].Codigo_Postal + "</span><br><span>Tipo: " + final_saved_data[i].Tipo + "</span><br><span>Precio: " + final_saved_data[i].Precio + "</span><br></div><div class='divider mt-10'></div>";
                }
            }

        } else {
            alert('No se han podido obtener los datos, Error del servidor.');
        }
    }

};

xhr2.send();
