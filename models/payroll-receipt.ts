/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollReceiptEmployeeCompensationsInner } from './payroll-receipt-employee-compensations-inner';
import { PayrollReceiptLicensee } from './payroll-receipt-licensee';
import { PayrollReceiptTaxesInner } from './payroll-receipt-taxes-inner';
import { PayrollReceiptTotals } from './payroll-receipt-totals';

/**
 * 
 * @export
 * @interface PayrollReceipt
 */
export interface PayrollReceipt {
    /**
     * A unique identifier of the payroll receipt.
     * @type {string}
     * @memberof PayrollReceipt
     */
    'payroll_uuid'?: string;
    /**
     * A unique identifier of the company for the payroll.
     * @type {string}
     * @memberof PayrollReceipt
     */
    'company_uuid'?: string;
    /**
     * The name of the company by whom the payroll was paid
     * @type {string}
     * @memberof PayrollReceipt
     */
    'name_of_sender'?: string;
    /**
     * Always the fixed string \"Payroll Recipients\"
     * @type {string}
     * @memberof PayrollReceipt
     */
    'name_of_recipient'?: string;
    /**
     * Always the fixed string \"Payroll recipients include the employees listed below plus the tax agencies for the taxes listed below.\"
     * @type {string}
     * @memberof PayrollReceipt
     */
    'recipient_notice'?: string;
    /**
     * The debit or funding date for the payroll
     * @type {string}
     * @memberof PayrollReceipt
     */
    'debit_date'?: string;
    /**
     * Always the fixed string \"ZenPayroll, Inc., dba Gusto is a licensed money transmitter. For more about Gusto’s licenses and your state-specific rights to request information, submit complaints, dispute errors, or cancel transactions, visit our license page.\"
     * @type {string}
     * @memberof PayrollReceipt
     */
    'license'?: string;
    /**
     * URL for the license information for the licensed payroll processor. Always the fixed string \"https://gusto.com/about/licenses\"
     * @type {string}
     * @memberof PayrollReceipt
     */
    'license_uri'?: string;
    /**
     * 
     * @type {string}
     * @memberof PayrollReceipt
     */
    'right_to_refund'?: string;
    /**
     * 
     * @type {string}
     * @memberof PayrollReceipt
     */
    'liability_of_licensee'?: string;
    /**
     * 
     * @type {PayrollReceiptTotals}
     * @memberof PayrollReceipt
     */
    'totals'?: PayrollReceiptTotals;
    /**
     * An array of totaled employer and employee taxes for the pay period.
     * @type {Array<PayrollReceiptTaxesInner>}
     * @memberof PayrollReceipt
     */
    'taxes'?: Array<PayrollReceiptTaxesInner>;
    /**
     * An array of employee compensations and withholdings for this payroll
     * @type {Array<PayrollReceiptEmployeeCompensationsInner>}
     * @memberof PayrollReceipt
     */
    'employee_compensations'?: Array<PayrollReceiptEmployeeCompensationsInner>;
    /**
     * 
     * @type {PayrollReceiptLicensee}
     * @memberof PayrollReceipt
     */
    'licensee'?: PayrollReceiptLicensee;
}

