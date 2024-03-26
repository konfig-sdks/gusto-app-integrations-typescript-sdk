/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollBlockersErrorErrorsInner } from './payroll-blockers-error-errors-inner';

/**
 * Payroll Blockers Error  For detailed information, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers)
 * @export
 * @interface PayrollBlockersError
 */
export interface PayrollBlockersError {
    /**
     * 
     * @type {Array<PayrollBlockersErrorErrorsInner>}
     * @memberof PayrollBlockersError
     */
    'errors'?: Array<PayrollBlockersErrorErrorsInner>;
}

