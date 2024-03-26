/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PayScheduleAssignmentEmployee
 */
export interface PayScheduleAssignmentEmployee {
    /**
     * The UUID of the employee.
     * @type {string}
     * @memberof PayScheduleAssignmentEmployee
     */
    'employee_uuid'?: string;
    /**
     * The employee\'s pay schedule UUID.
     * @type {string}
     * @memberof PayScheduleAssignmentEmployee
     */
    'pay_schedule_uuid'?: string;
}
