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
 * @interface FederalTaxDetails
 */
export interface FederalTaxDetails {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof FederalTaxDetails
     */
    'version'?: string;
    /**
     * What type of tax entity the company is. One of: - C-Corporation - S-Corporation - Sole proprietor - LLC - LLP - Limited partnership - Co-ownership - Association - Trusteeship - General partnership - Joint venture - Non-Profit
     * @type {string}
     * @memberof FederalTaxDetails
     */
    'tax_payer_type'?: string;
    /**
     * Whether the company is taxed as an S-Corporation. Tax payer types that may be taxed as an S-Corporation include: - S-Corporation - C-Corporation - LLC
     * @type {boolean}
     * @memberof FederalTaxDetails
     */
    'taxable_as_scorp'?: boolean;
    /**
     * The form used by the company for federal tax filing. One of: - 941 (Quarterly federal tax return form) - 944 (Annual federal tax return form)
     * @type {string}
     * @memberof FederalTaxDetails
     */
    'filing_form'?: string;
    /**
     * Whether company\'s Employer Identification Number (EIN) is present
     * @type {boolean}
     * @memberof FederalTaxDetails
     */
    'has_ein'?: boolean;
    /**
     * Whether the EIN was able to be verified as a valid EIN with the IRS. 
     * @type {boolean}
     * @memberof FederalTaxDetails
     */
    'ein_verified'?: boolean;
    /**
     * The legal name of the company
     * @type {string}
     * @memberof FederalTaxDetails
     */
    'legal_name'?: string;
}

