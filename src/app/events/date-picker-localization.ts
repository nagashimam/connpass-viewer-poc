import { Injectable } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material/datepicker";

@Injectable({ providedIn: "root" })
export class DatePickerLocalization extends MatDatepickerIntl {
  /** A label for the calendar popup (used by screen readers). */
  calendarLabel: string = 'カレンダー';

  /** A label for the button used to open the calendar popup (used by screen readers). */
  openCalendarLabel: string = 'カレンダーを開く';

  /** Label for the button used to close the calendar popup. */
  closeCalendarLabel: string = 'カレンダーを閉じる';

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel: string = '前の月';

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel: string = '次の月';

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel: string = '前の年';

  /** A label for the next year button (used by screen readers). */
  nextYearLabel: string = '次の年';

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel: string = '前の24年間';

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel: string = '次の24年間';

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel: string = '日付を選ぶ';

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel: string = '年と月を選ぶ';
}