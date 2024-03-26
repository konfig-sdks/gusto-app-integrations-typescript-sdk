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
 * @interface EmployeeEmploymentsUpdateTerminationRequestAllOf
 */
export interface EmployeeEmploymentsUpdateTerminationRequestAllOf {
    /**
     * The employee\'s last day of work.
     * @type {string}
     * @memberof EmployeeEmploymentsUpdateTerminationRequestAllOf
     */
    'effective_date': string;
    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     * @type {boolean}
     * @memberof EmployeeEmploymentsUpdateTerminationRequestAllOf
     */
    'run_termination_payroll'?: boolean;
}
