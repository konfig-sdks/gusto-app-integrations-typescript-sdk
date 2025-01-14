/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information for the user who will be the primary payroll administrator for the new company.
 * @export
 * @interface CompaniesCreateCompanyRequestUser
 */
export interface CompaniesCreateCompanyRequestUser {
    /**
     * The first name of the user who will be the primary payroll admin.
     * @type {string}
     * @memberof CompaniesCreateCompanyRequestUser
     */
    'first_name': string;
    /**
     * The last name of the user who will be the primary payroll admin.
     * @type {string}
     * @memberof CompaniesCreateCompanyRequestUser
     */
    'last_name': string;
    /**
     * The email of the user who will be the primary payroll admin.
     * @type {string}
     * @memberof CompaniesCreateCompanyRequestUser
     */
    'email': string;
    /**
     * The phone number of the user who will be the primary payroll admin.
     * @type {string}
     * @memberof CompaniesCreateCompanyRequestUser
     */
    'phone'?: string;
}

