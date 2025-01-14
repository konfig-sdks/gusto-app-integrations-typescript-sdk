/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The representation of an unprocessed termination pay period.
 * @export
 * @interface UnprocessedTerminationPayPeriod
 */
export interface UnprocessedTerminationPayPeriod {
    /**
     * The start date of the pay period.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'start_date'?: string;
    /**
     * The end date of the pay period.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'end_date'?: string;
    /**
     * The check date of the pay period.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'check_date'?: string;
    /**
     * The debit date of the pay period.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'debit_date'?: string;
    /**
     * The full name of the employee.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'employee_name'?: string;
    /**
     * A unique identifier of the employee.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'employee_uuid'?: string;
    /**
     * A unique identifier of the pay schedule to which the pay period belongs.
     * @type {string}
     * @memberof UnprocessedTerminationPayPeriod
     */
    'pay_schedule_uuid'?: string;
}

