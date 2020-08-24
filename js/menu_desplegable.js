var city = [];
var type = [];
var data;

var xhr = new XMLHttpRequest();

xhr.open('POST', 'data-1.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            data = JSON.parse(xhr.responseText);

            for (var i = data.length - 1; i >= 0; i--) {
                if (city.length == 0) {
                    city[0] = data[i].Ciudad;
                } else {
                    for (var j = city.length - 1; j >= 0; j--) {
                        if (city[j] != data[i].Ciudad) {
                            if (j == 0) {
                                city.push(data[i].Ciudad);
                            }
                        } else {
                            break;
                        }
                    }
                }

                if (type.length == 0) {
                    type[0] = data[i].Tipo;
                } else {
                    for (var j = type.length - 1; j >= 0; j--) {
                        if (type[j] != data[i].Tipo) {
                            if (j == 0) {
                                type.push(data[i].Tipo);
                            }
                        } else {
                            break;
                        }
                    }
                }

            }

            for (var i = city.length - 1; i >= 0; i--) {
                var option = document.createElement('option');

                option.text = city[i];
                option.value = city[i];

                document.querySelector('#selectCiudad').add(option);
            }

            for (var i = type.length - 1; i >= 0; i--) {
                var option = document.createElement('option');

                option.text = type[i];
                option.value = type[i];

                document.querySelector('#selectTipo').add(option);
            }

        } else {
            console.log('Imposible cargar los datos.');
        }
    }
};

xhr.send();
