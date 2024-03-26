/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeStateTaxQuestion } from './employee-state-tax-question';

/**
 * 
 * @export
 * @interface EmployeeStateTax
 */
export interface EmployeeStateTax {
    /**
     * The employee\'s uuid
     * @type {string}
     * @memberof EmployeeStateTax
     */
    'employee_uuid': string;
    /**
     * Two letter US state abbreviation
     * @type {string}
     * @memberof EmployeeStateTax
     */
    'state': string;
    /**
     * 
     * @type {boolean}
     * @memberof EmployeeStateTax
     */
    'file_new_hire_report'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmployeeStateTax
     */
    'is_work_state'?: boolean;
    /**
     * 
     * @type {Array<EmployeeStateTaxQuestion>}
     * @memberof EmployeeStateTax
     */
    'questions': Array<EmployeeStateTaxQuestion>;
}
