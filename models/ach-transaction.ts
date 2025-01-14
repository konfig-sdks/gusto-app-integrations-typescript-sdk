/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Representation of an ACH transaction
 * @export
 * @interface AchTransaction
 */
export interface AchTransaction {
    /**
     * The description of the ACH transaction. Can be used to identify the ACH transaction on the recipient\'s bank statement.
     * @type {string}
     * @memberof AchTransaction
     */
    'description'?: string;
    /**
     * Unique identifier of an ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'uuid'?: string;
    /**
     * Unique identifier of the company to which the ACH transaction belongs
     * @type {string}
     * @memberof AchTransaction
     */
    'company_uuid'?: string;
    /**
     * The type of payment event associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_event_type'?: AchTransactionPaymentEventTypeEnum;
    /**
     * Unique identifier for the payment event associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_event_uuid'?: string;
    /**
     * The type of recipient associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'recipient_type'?: AchTransactionRecipientTypeEnum;
    /**
     * Unique identifier for the recipient associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'recipient_uuid'?: string;
    /**
     * The error code associated with the ACH transaction, if any. If there is no error on the ACH transaction, this field will be nil. See [this article](https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2/) for a complete list of ACH return codes.
     * @type {string}
     * @memberof AchTransaction
     */
    'error_code'?: string;
    /**
     * The type of transaction associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'transaction_type'?: string;
    /**
     * The status of the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_status'?: AchTransactionPaymentStatusEnum;
    /**
     * The direction of the payment
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_direction'?: AchTransactionPaymentDirectionEnum;
    /**
     * The date of the payment event check associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_event_check_date'?: string;
    /**
     * The date of the payment associated with the ACH transaction
     * @type {string}
     * @memberof AchTransaction
     */
    'payment_date'?: string;
    /**
     * The amount of money moved by the ACH transaction. This amount is always non-negative.
     * @type {string}
     * @memberof AchTransaction
     */
    'amount'?: string;
}

type AchTransactionPaymentEventTypeEnum = 'Payroll' | 'ContractorPayment'
type AchTransactionRecipientTypeEnum = 'Employee' | 'Contractor'
type AchTransactionPaymentStatusEnum = 'unsubmitted' | 'submitted' | 'successful' | 'failed'
type AchTransactionPaymentDirectionEnum = 'credit' | 'debit'


