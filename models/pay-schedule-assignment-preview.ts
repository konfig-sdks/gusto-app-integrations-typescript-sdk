/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayScheduleAssignmentEmployeeChange } from './pay-schedule-assignment-employee-change';

/**
 * The representation of a pay schedule assignment preview.
 * @export
 * @interface PayScheduleAssignmentPreview
 */
export interface PayScheduleAssignmentPreview {
    /**
     * The pay schedule assignment type.
     * @type {string}
     * @memberof PayScheduleAssignmentPreview
     */
    'type'?: PayScheduleAssignmentPreviewTypeEnum;
    /**
     * A list of pay schedule changes including pay period and transition pay period.
     * @type {Array<PayScheduleAssignmentEmployeeChange>}
     * @memberof PayScheduleAssignmentPreview
     */
    'employee_changes'?: Array<PayScheduleAssignmentEmployeeChange>;
}

type PayScheduleAssignmentPreviewTypeEnum = 'single' | 'hourly_salaried' | 'by_employee' | 'by_department'


