import { Component, inject, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Usuarios } from '../../interfaces/Usuarios.interface';
import { GraficosService } from '../../services/graficos.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [],
})
export class DonutHttpComponent implements OnInit {
  private graficosService = inject(GraficosService);

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      // {
      //   data: [350, 450, 100],
      //   backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'],
      // },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.graficosService
      .getUsuariosDonutData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets = [
          {
            data: values,
          },
        ];
      });
  }
}
