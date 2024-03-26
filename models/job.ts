/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Compensation } from './compensation';

/**
 * The representation of a job in Gusto.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * The title for the job.
     * @type {string}
     * @memberof Job
     */
    'title'?: string | null;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof Job
     */
    'version'?: string;
    /**
     * The UUID of the job.
     * @type {string}
     * @memberof Job
     */
    'uuid'?: string;
    /**
     * The UUID of the employee to which the job belongs.
     * @type {string}
     * @memberof Job
     */
    'employee_uuid'?: string;
    /**
     * The date when the employee was hired or rehired for the job.
     * @type {string}
     * @memberof Job
     */
    'hire_date'?: string;
    /**
     * Whether this is the employee\'s primary job. The value will be set to true unless an existing job exists for the employee.
     * @type {boolean}
     * @memberof Job
     */
    'primary'?: boolean;
    /**
     * The current compensation rate of the job.
     * @type {string}
     * @memberof Job
     */
    'rate'?: string;
    /**
     * The payment unit of the current compensation for the job.
     * @type {string}
     * @memberof Job
     */
    'payment_unit'?: string;
    /**
     * The UUID of the current compensation of the job.
     * @type {string}
     * @memberof Job
     */
    'current_compensation_uuid'?: string;
    /**
     * Whether the employee owns at least 2% of the company.
     * @type {boolean}
     * @memberof Job
     */
    'two_percent_shareholder'?: boolean;
    /**
     * Whether this job is eligible for workers\' compensation coverage in the state of Washington (WA).
     * @type {boolean}
     * @memberof Job
     */
    'state_wc_covered'?: boolean;
    /**
     * The risk class code for workers\' compensation in Washington state. Please visit [Washington state\'s Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.
     * @type {string}
     * @memberof Job
     */
    'state_wc_class_code'?: string;
    /**
     * 
     * @type {Array<Compensation>}
     * @memberof Job
     */
    'compensations'?: Array<Compensation>;
}
