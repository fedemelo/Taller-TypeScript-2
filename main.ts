import { Serie } from './serie.js';
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    let tbody: HTMLElement = document.getElementById('series')!;
    console.log('Desplegando series.');
    series.map(s => {
        let tr: HTMLElement = document.createElement('tr');
        let html: string = `<td> ${s.id} </td>
                              <td> <a href=${s.link} target="_blank">${s.name}</a> </td>
                              <td> ${s.channel} </td>
                              <td> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

function insertSeasonsAvrg(series: Serie[]): void {
    console.log('Calculando promedio.')
    let sum: number = 0;
    series.map(s => {sum += s.seasons});
    const avrg: number = sum / series.length;
    console.log('Desplegando promedio.')
    let table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p>Seasons average: '+avrg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}

insertSeries(series);
insertSeasonsAvrg(series);

