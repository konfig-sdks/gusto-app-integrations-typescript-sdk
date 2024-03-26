/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the payroll for the pay period.
 * @export
 * @interface PayPeriodPayroll
 */
export interface PayPeriodPayroll {
    /**
     * The UUID of the payroll for this pay period.
     * @type {string}
     * @memberof PayPeriodPayroll
     */
    'payroll_uuid'?: string;
    /**
     * The date on which employees will be paid for the payroll if the payroll is submitted on time.
     * @type {string}
     * @memberof PayPeriodPayroll
     */
    'check_date'?: string;
    /**
     * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
     * @type {boolean}
     * @memberof PayPeriodPayroll
     */
    'processed'?: boolean;
    /**
     * The date by which payroll should be run for employees to be paid on time. Payroll data, such as time and attendance data, should be submitted on or before this date.
     * @type {string}
     * @memberof PayPeriodPayroll
     */
    'payroll_deadline'?: string;
    /**
     * Whether it is regular pay period or transition pay period.
     * @type {string}
     * @memberof PayPeriodPayroll
     */
    'payroll_type'?: PayPeriodPayrollPayrollTypeEnum;
}

type PayPeriodPayrollPayrollTypeEnum = 'regular' | 'transition'

