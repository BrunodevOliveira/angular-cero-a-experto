import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
  ]
})
export class ErrorPageComponent {

}
