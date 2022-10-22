import { series } from './data.js';
function insertSeries(series) {
    var tbody = document.getElementById('series');
    console.log('Desplegando series.');
    series.map(function (s) {
        var tr = document.createElement('tr');
        var html = "<td> ".concat(s.id, " </td>\n                              <td> <a href=").concat(s.link, " target=\"_blank\">").concat(s.name, "</a> </td>\n                              <td> ").concat(s.channel, " </td>\n                              <td> ").concat(s.seasons, " </td>");
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
    var html = '<p>Seasons average: ' + avrg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
insertSeries(series);
insertSeasonsAvrg(series);
