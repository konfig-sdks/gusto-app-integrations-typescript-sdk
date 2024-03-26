/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyPrimarySignatoryHomeAddress } from './company-primary-signatory-home-address';

/**
 * The primary signatory of the company.
 * @export
 * @interface CompanyPrimarySignatory
 */
export interface CompanyPrimarySignatory {
    /**
     * 
     * @type {string}
     * @memberof CompanyPrimarySignatory
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPrimarySignatory
     */
    'middle_initial'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPrimarySignatory
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPrimarySignatory
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyPrimarySignatory
     */
    'email'?: string;
    /**
     * 
     * @type {CompanyPrimarySignatoryHomeAddress}
     * @memberof CompanyPrimarySignatory
     */
    'home_address'?: CompanyPrimarySignatoryHomeAddress;
}
