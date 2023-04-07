import { Component } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartType,
  ChartDataset,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [],
})
export class BarrasDobleComponent {
  provedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [100, 200, 300, 400, 500],
        label: 'Vendedor A',
      },
      {
        data: [50, 250, 30, 450, 200],
        label: 'Vendedor B',
      },
    ],
  };

  produtoData: ChartData<'bar'> = {
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Carros',
        backgroundColor: 'blue',
      },
    ],
  };
}
