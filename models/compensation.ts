/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FlsaStatusType } from './flsa-status-type';

/**
 * The representation of compensation in Gusto.
 * @export
 * @interface Compensation
 */
export interface Compensation {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof Compensation
     */
    'version'?: string;
    /**
     * The UUID of the compensation in Gusto.
     * @type {string}
     * @memberof Compensation
     */
    'uuid'?: string;
    /**
     * The UUID of the job to which the compensation belongs.
     * @type {string}
     * @memberof Compensation
     */
    'job_uuid'?: string;
    /**
     * The dollar amount paid per payment unit.
     * @type {string}
     * @memberof Compensation
     */
    'rate'?: string;
    /**
     * The unit accompanying the compensation rate. If the employee is an owner, rate should be \'Paycheck\'.
     * @type {string}
     * @memberof Compensation
     */
    'payment_unit'?: CompensationPaymentUnitEnum;
    /**
     * The FLSA status for this compensation. Salaried (\'Exempt\') employees are paid a fixed salary every pay period. Salaried with overtime (\'Salaried Nonexempt\') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly (\'Nonexempt\') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees (\'Commission Only Exempt\') earn wages based only on commission. Commissioned with overtime (\'Commission Only Nonexempt\') earn wages based on commission, and receive overtime pay when applicable. Owners (\'Owner\') are employees that own at least twenty percent of the company. 
     * @type {FlsaStatusType}
     * @memberof Compensation
     */
    'flsa_status'?: FlsaStatusType;
    /**
     * The effective date for this compensation. For the first compensation, this defaults to the job\'s hire date.
     * @type {string}
     * @memberof Compensation
     */
    'effective_date'?: string;
    /**
     * Indicates if the compensation could be adjusted to minimum wage during payroll calculation.
     * @type {boolean}
     * @memberof Compensation
     */
    'adjust_for_minimum_wage'?: boolean;
}

type CompensationPaymentUnitEnum = 'Hour' | 'Week' | 'Month' | 'Year' | 'Paycheck'


