import { series } from './data.js';
function insertSeries(series) {
    var tbody = document.getElementById('series');
    console.log('Desplegando series.');
    series.map(function (s) {
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'fila-serie');
        var html = "<td> <b>".concat(s.id, "</b> </td>\n                              <td> <a href=").concat(s.link, " target='_blank'>").concat(s.name, "</a> </td>\n                              <td> ").concat(s.channel, " </td>\n                              <td> ").concat(s.seasons, " </td>");
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}
function insertSeasonsAvrg(series) {
    console.log('Calculando promedio.');
    var sum = 0;
    series.map(function (s) { sum += s.seasons; });
    var avrg = sum / series.length;
    console.log('Desplegando promedio.');
    var table = document.getElementById('tabla-series');
    var html = '<p>&nbsp; Seasons average: ' + avrg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
function showDetail(series) {
    var trs = document.querySelectorAll('tr.fila-serie');
    var col = document.getElementById('detail-col');
    // Detalle por defecto: Breaking Bad
    var html = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=".concat(series[0].cover, ">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(series[0].name, "</h5>\n                <p class=\"card-text\">\n                    ").concat(series[0].description, "<br><br>\n                    <a href=").concat(series[0].link, ">").concat(series[0].link, "</a>\n                    <br><br>\n                </p>\n            </div>\n        </div>");
    col.innerHTML = html;
    var _loop_1 = function (i) {
        trs[i].addEventListener('click', function () {
            console.log('Fila ' + i + ' recibe click');
            var html = "\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\" src=".concat(series[i].cover, ">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(series[i].name, "</h5>\n                        <p class=\"card-text\">\n                            ").concat(series[i].description, "<br><br>\n                            <a href=").concat(series[i].link, ">").concat(series[i].link, "</a>\n                            <br><br>\n                        </p>\n                    </div>\n                </div>");
            col.innerHTML = html;
        });
    };
    // Hacer click en cada fila muestra su detalle
    for (var i = 0; i < trs.length; i++) {
        _loop_1(i);
    }
}
insertSeries(series);
insertSeasonsAvrg(series);
showDetail(series);
