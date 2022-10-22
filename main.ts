import { Serie } from './serie.js';
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    const tbody: HTMLElement = document.getElementById('series')!;
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
    const table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p>Seasons average: '+avrg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}

function showDetail(series: Serie[]): void {
    const tbody: HTMLElement = document.getElementById('series')!;
    const trs: HTMLCollection = tbody.getElementsByTagName('tr')!;
    const col: HTMLElement = document.getElementById('detail')!;

    for (let i: number = 0; i < trs.length; i++) {
        let tr: HTMLElement = trs[i];
        tr.addEventListener('click', function() {
            console.log('Recibe click')
            const html: string = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${series[i].cover} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${series[i].name}</h5>
              <p class="card-text">${series[i].description}</p>
            </div>
          </div>`
            col.innerHTML = html;
        });
    }
}

insertSeries(series);
insertSeasonsAvrg(series);

