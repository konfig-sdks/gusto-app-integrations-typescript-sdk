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
 * @interface PayrollCheck
 */
export interface PayrollCheck {
    /**
     * A unique identifier of the payroll.
     * @type {string}
     * @memberof PayrollCheck
     */
    'payroll_uuid'?: string;
    /**
     * The format the checks will be printed.
     * @type {string}
     * @memberof PayrollCheck
     */
    'printing_format'?: string;
    /**
     * The starting check number for the checks being printed.
     * @type {string}
     * @memberof PayrollCheck
     */
    'starting_check_number'?: string;
    /**
     * A unique identifier of the Generated Document request
     * @type {string}
     * @memberof PayrollCheck
     */
    'request_uuid'?: string;
    /**
     * Current status of the Generated Document
     * @type {string}
     * @memberof PayrollCheck
     */
    'status'?: string;
}

