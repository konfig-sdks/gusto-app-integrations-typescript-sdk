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
 * @interface PayScheduleAssignmentDepartment
 */
export interface PayScheduleAssignmentDepartment {
    /**
     * The UUID of the department.
     * @type {string}
     * @memberof PayScheduleAssignmentDepartment
     */
    'department_uuid'?: string;
    /**
     * The department\'s pay schedule UUID.
     * @type {string}
     * @memberof PayScheduleAssignmentDepartment
     */
    'pay_schedule_uuid'?: string;
}

