/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TaxRequirementApplicableIfInnerValue } from './tax-requirement-applicable-if-inner-value';

/**
 * 
 * @export
 * @interface TaxRequirementApplicableIfInner
 */
export interface TaxRequirementApplicableIfInner {
    /**
     * An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set.
     * @type {string}
     * @memberof TaxRequirementApplicableIfInner
     */
    'key'?: string;
    /**
     * 
     * @type {TaxRequirementApplicableIfInnerValue}
     * @memberof TaxRequirementApplicableIfInner
     */
    'value'?: TaxRequirementApplicableIfInnerValue;
}

