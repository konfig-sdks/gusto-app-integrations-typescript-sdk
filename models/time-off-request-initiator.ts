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
 * @interface TimeOffRequestInitiator
 */
export interface TimeOffRequestInitiator {
    /**
     * The ID of the employee who initiated the time off request.
     * @type {string}
     * @memberof TimeOffRequestInitiator
     */
    'id'?: string;
    /**
     * The full name of the employee who initiated the time off request.
     * @type {string}
     * @memberof TimeOffRequestInitiator
     */
    'full_name'?: string;
}

