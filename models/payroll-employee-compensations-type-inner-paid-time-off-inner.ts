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
 * @interface PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner
 */
export interface PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner {
    /**
     * The name of the PTO. This also serves as the unique, immutable identifier for the PTO.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner
     */
    'name'?: string;
    /**
     * The hours of this PTO taken during the pay period.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner
     */
    'hours'?: string;
    /**
     * The outstanding hours paid upon termination. This field is only applicable for termination payrolls.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner
     */
    'final_payout_unused_hours_input'?: string;
}

