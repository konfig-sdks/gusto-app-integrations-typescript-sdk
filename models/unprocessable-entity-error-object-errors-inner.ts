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
 * @interface UnprocessableEntityErrorObjectErrorsInner
 */
export interface UnprocessableEntityErrorObjectErrorsInner {
    /**
     * Specifies where the error occurs. Typically this key identifies the attribute/parameter related to the error.
     * @type {string}
     * @memberof UnprocessableEntityErrorObjectErrorsInner
     */
    'error_key'?: string;
    /**
     * Specifies the type of error. The category provides error groupings and can be used to build custom error handling in your integration.
     * @type {string}
     * @memberof UnprocessableEntityErrorObjectErrorsInner
     */
    'category'?: string;
    /**
     * Provides details about the error - generally this message can be surfaced to an end user.
     * @type {string}
     * @memberof UnprocessableEntityErrorObjectErrorsInner
     */
    'message'?: string;
    /**
     * Contains relevant data to identify the resource in question when applicable. For example, to identify an entity `entity_type` and `entity_uuid` will be provided.
     * @type {object}
     * @memberof UnprocessableEntityErrorObjectErrorsInner
     */
    'metadata'?: object;
}

