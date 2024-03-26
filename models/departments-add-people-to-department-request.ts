/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DepartmentsAddPeopleToDepartmentRequestEmployeesInner } from './departments-add-people-to-department-request-employees-inner';

/**
 * 
 * @export
 * @interface DepartmentsAddPeopleToDepartmentRequest
 */
export interface DepartmentsAddPeopleToDepartmentRequest {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     * @type {string}
     * @memberof DepartmentsAddPeopleToDepartmentRequest
     */
    'version'?: string;
    /**
     * Array of employees to add to the department
     * @type {Array<DepartmentsAddPeopleToDepartmentRequestEmployeesInner>}
     * @memberof DepartmentsAddPeopleToDepartmentRequest
     */
    'employees'?: Array<DepartmentsAddPeopleToDepartmentRequestEmployeesInner>;
    /**
     * Array of contractors to add to the department
     * @type {Array<DepartmentsAddPeopleToDepartmentRequestEmployeesInner>}
     * @memberof DepartmentsAddPeopleToDepartmentRequest
     */
    'contractors'?: Array<DepartmentsAddPeopleToDepartmentRequestEmployeesInner>;
}

