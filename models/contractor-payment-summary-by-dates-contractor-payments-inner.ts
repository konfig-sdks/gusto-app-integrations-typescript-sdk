/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContractorPayment } from './contractor-payment';

/**
 * 
 * @export
 * @interface ContractorPaymentSummaryByDatesContractorPaymentsInner
 */
export interface ContractorPaymentSummaryByDatesContractorPaymentsInner {
    /**
     * The UUID of the contractor.
     * @type {string}
     * @memberof ContractorPaymentSummaryByDatesContractorPaymentsInner
     */
    'contractor_uuid'?: string;
    /**
     * The payment check date.
     * @type {string}
     * @memberof ContractorPaymentSummaryByDatesContractorPaymentsInner
     */
    'check_date'?: string;
    /**
     * The total reimbursements for the contractor within a given time period.
     * @type {string}
     * @memberof ContractorPaymentSummaryByDatesContractorPaymentsInner
     */
    'reimbursement_total'?: string;
    /**
     * The total wages for the contractor within a given time period.
     * @type {string}
     * @memberof ContractorPaymentSummaryByDatesContractorPaymentsInner
     */
    'wage_total'?: string;
    /**
     * The contractor’s payments within a given time period. 
     * @type {Array<ContractorPayment>}
     * @memberof ContractorPaymentSummaryByDatesContractorPaymentsInner
     */
    'payments'?: Array<ContractorPayment>;
}

