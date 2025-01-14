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
 * @interface LocationsUpdateLocationRequestAllOf
 */
export interface LocationsUpdateLocationRequestAllOf {
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'phone_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'street_1'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'street_2'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'zip'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'country'?: string;
    /**
     * For a company location, specify if this location is the company\'s mailing address. A company has a single mailing address, so this designation will override any previous selection.
     * @type {boolean}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'mailing_address'?: boolean;
    /**
     * For a company location, specify if this location is the company\'s filing address. A company has a single filing address, so this designation will override any previous selection.
     * @type {boolean}
     * @memberof LocationsUpdateLocationRequestAllOf
     */
    'filing_address'?: boolean;
}

