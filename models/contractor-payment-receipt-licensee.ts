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
 * @interface ContractorPaymentReceiptLicensee
 */
export interface ContractorPaymentReceiptLicensee {
    /**
     * Always the fixed string \"Gusto, Zenpayroll Inc.\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'name'?: string;
    /**
     * Always the fixed string \"525 20th St\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'address'?: string;
    /**
     * Always the fixed string \"San Francisco\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'city'?: string;
    /**
     * Always the fixed string \"CA\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'state'?: string;
    /**
     * Always the fixed string \"94107\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'postal_code'?: string;
    /**
     * Always the fixed string \"4157778888\"
     * @type {string}
     * @memberof ContractorPaymentReceiptLicensee
     */
    'phone_number'?: string;
}

