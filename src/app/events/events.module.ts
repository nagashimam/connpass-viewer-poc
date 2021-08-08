import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerIntl, MatDatepickerModule } from "@angular/material/datepicker"
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter, NativeDateModule } from '@angular/material/core';
import { DatePickerLocalization } from './date-picker-localization';
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
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MatDatepickerIntl, useClass: DatePickerLocalization },
    { provide: MAT_DATE_LOCALE, useValue: 'ja' },
  ],
})
export class EventsModule { }
