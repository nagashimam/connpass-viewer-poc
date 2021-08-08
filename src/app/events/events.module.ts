import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerIntl, MatDatepickerModule } from "@angular/material/datepicker"
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE, NativeDateAdapter, NativeDateModule } from '@angular/material/core';
import { DatePickerLocalization } from './date-picker-localization';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MatDatepickerIntl, useClass: DatePickerLocalization },
    { provide: MAT_DATE_LOCALE, useValue: 'ja' },
  ],
})
export class EventsModule { }
