/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeCustomField } from './employee-custom-field';

/**
 * 
 * @export
 * @interface EmployeesGetCustomFieldsResponse
 */
export interface EmployeesGetCustomFieldsResponse {
    /**
     * 
     * @type {Array<EmployeeCustomField>}
     * @memberof EmployeesGetCustomFieldsResponse
     */
    'custom_fields'?: Array<EmployeeCustomField>;
}

