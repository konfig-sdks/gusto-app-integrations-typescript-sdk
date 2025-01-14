/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The licensed payroll processor
 * @export
 * @interface PayrollReceiptLicensee
 */
export interface PayrollReceiptLicensee {
    /**
     * Always the fixed string \"Gusto, Zenpayroll Inc.\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'name'?: string;
    /**
     * Always the fixed string \"525 20th St\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'address'?: string;
    /**
     * Always the fixed string \"San Francisco\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'city'?: string;
    /**
     * Always the fixed string \"CA\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'state'?: string;
    /**
     * Always the fixed string \"94107\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'postal_code'?: string;
    /**
     * Always the fixed string \"4157778888\"
     * @type {string}
     * @memberof PayrollReceiptLicensee
     */
    'phone_number'?: string;
}

