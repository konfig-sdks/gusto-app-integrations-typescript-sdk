/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The representation of a pay schedule.
 * @export
 * @interface PaySchedule
 */
export interface PaySchedule {
    /**
     * The unique identifier of the pay schedule in Gusto.
     * @type {string}
     * @memberof PaySchedule
     */
    'uuid'?: string;
    /**
     * The frequency that employees on this pay schedule are paid with Gusto.
     * @type {string}
     * @memberof PaySchedule
     */
    'frequency'?: PayScheduleFrequencyEnum;
    /**
     * The first date that employees on this pay schedule are paid with Gusto.
     * @type {string}
     * @memberof PaySchedule
     */
    'anchor_pay_date'?: string;
    /**
     * The last date of the first pay period. This can be the same date as the anchor pay date.
     * @type {string}
     * @memberof PaySchedule
     */
    'anchor_end_of_pay_period'?: string;
    /**
     * An integer between 1 and 31 indicating the first day of the month that employees are paid. This field is only relevant for pay schedules with the “Twice per month” and “Monthly” frequencies. It will be null for pay schedules with other frequencies.
     * @type {number}
     * @memberof PaySchedule
     */
    'day_1'?: number | null;
    /**
     * An integer between 1 and 31 indicating the second day of the month that employees are paid. This field is the second pay date for pay schedules with the \"Twice per month\" frequency. For semi-monthly pay schedules, this field should be set to 31. For months shorter than 31 days, we will set the second pay date to the last day of the month. It will be null for pay schedules with other frequencies.
     * @type {number}
     * @memberof PaySchedule
     */
    'day_2'?: number | null;
    /**
     * This field will be hourly when the pay schedule is for hourly employees, salaried when the pay schedule is for salaried employees, the department name if pay schedule is by department, and null when the pay schedule is for all employees.
     * @type {string}
     * @memberof PaySchedule
     */
    'name'?: string | null;
    /**
     * A custom name for a pay schedule, defaults to the pay frequency description.
     * @type {string}
     * @memberof PaySchedule
     */
    'custom_name'?: string;
    /**
     * With Autopilot® enabled, payroll will run automatically one day before your payroll deadlines.
     * @type {boolean}
     * @memberof PaySchedule
     */
    'auto_pilot'?: boolean;
    /**
     * Whether this pay schedule is associated with any employees. A pay schedule is inactive when it\'s unassigned.
     * @type {boolean}
     * @memberof PaySchedule
     */
    'active'?: boolean;
}

type PayScheduleFrequencyEnum = 'Every week' | 'Every other week' | 'Twice per month' | 'Monthly' | 'Quarterly' | 'Annually'


