import { Serie } from './serie.js';
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    const tbody: HTMLElement = document.getElementById('series')!;
    console.log('Desplegando series.');
    series.map(s => {
        let tr: HTMLElement = document.createElement('tr');
        tr.setAttribute('class', 'fila-serie');
        let html: string = `<td> <b>${s.id}</b> </td>
                              <td> <a href=${s.link} target='_blank'>${s.name}</a> </td>
                              <td> ${s.channel} </td>
                              <td> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

function insertSeasonsAvrg(series: Serie[]): void {
    console.log('Calculando promedio.');
    let sum: number = 0;
    series.map(s => {sum += s.seasons});
    const avrg: number = sum / series.length;
    console.log('Desplegando promedio.');
    const table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p>&nbsp; Seasons average: '+avrg+'</p>';
    table.insertAdjacentHTML('afterend', html);
}

function showDetail(series: Serie[]): void {
    const trs: NodeList = document.querySelectorAll('tr.fila-serie');
    const col: HTMLElement = document.getElementById('detail-col')!;

    // Detalle por defecto: Breaking Bad
    const html: string = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${series[0].cover}>
            <div class="card-body">
                <h5 class="card-title">${series[0].name}</h5>
                <p class="card-text">
                    ${series[0].description}<br><br>
                    <a href=${series[0].link}>${series[0].link}</a>
                    <br><br>
                </p>
            </div>
        </div>`
    col.innerHTML = html;

    // Hacer click en cada fila muestra su detalle
    for(let i: number = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function() {
            console.log('Fila '+i+' recibe click');
            const html: string = `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src=${series[i].cover}>
                    <div class="card-body">
                        <h5 class="card-title">${series[i].name}</h5>
                        <p class="card-text">
                            ${series[i].description}<br><br>
                            <a href=${series[i].link}>${series[i].link}</a>
                            <br><br>
                        </p>
                    </div>
                </div>`
            col.innerHTML = html;
        });
    }
}

insertSeries(series);
insertSeasonsAvrg(series);
showDetail(series);

