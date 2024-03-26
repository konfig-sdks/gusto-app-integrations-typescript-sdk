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
 * @interface PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner
 */
export interface PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner {
    /**
     * The name of the compensation. This also serves as the unique, immutable identifier for this compensation.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner
     */
    'name'?: string;
    /**
     * The amount of the compensation for the pay period.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner
     */
    'amount'?: string;
    /**
     * The UUID of the job for the compensation.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner
     */
    'job_uuid'?: string;
}

