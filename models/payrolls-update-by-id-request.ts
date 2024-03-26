/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollsUpdateByIdRequestEmployeeCompensationsInner } from './payrolls-update-by-id-request-employee-compensations-inner';

/**
 * 
 * @export
 * @interface PayrollsUpdateByIdRequest
 */
export interface PayrollsUpdateByIdRequest {
    /**
     * 
     * @type {Array<PayrollsUpdateByIdRequestEmployeeCompensationsInner>}
     * @memberof PayrollsUpdateByIdRequest
     */
    'employee_compensations': Array<PayrollsUpdateByIdRequestEmployeeCompensationsInner>;
}
