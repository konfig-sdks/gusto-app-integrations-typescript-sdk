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
 * @interface JobsAndCompensationsCreateJobRequest
 */
export interface JobsAndCompensationsCreateJobRequest {
    /**
     * The job title
     * @type {string}
     * @memberof JobsAndCompensationsCreateJobRequest
     */
    'title': string;
    /**
     * The date when the employee was hired or rehired for the job.
     * @type {string}
     * @memberof JobsAndCompensationsCreateJobRequest
     */
    'hire_date': string;
    /**
     * Whether the employee owns at least 2% of the company.
     * @type {boolean}
     * @memberof JobsAndCompensationsCreateJobRequest
     */
    'two_percent_shareholder'?: boolean;
    /**
     * Whether this job is eligible for workers\' compensation coverage in the state of Washington (WA).
     * @type {boolean}
     * @memberof JobsAndCompensationsCreateJobRequest
     */
    'state_wc_covered'?: boolean;
    /**
     * The risk class code for workers\' compensation in Washington state. Please visit [Washington state\'s Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.
     * @type {string}
     * @memberof JobsAndCompensationsCreateJobRequest
     */
    'state_wc_class_code'?: string;
}

