/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Representation of a recovery case
 * @export
 * @interface RecoveryCase
 */
export interface RecoveryCase {
    /**
     * Unique identifier of an recovery case
     * @type {string}
     * @memberof RecoveryCase
     */
    'uuid'?: string;
    /**
     * Unique identifier of the company to which the recovery case belongs
     * @type {string}
     * @memberof RecoveryCase
     */
    'company_uuid'?: string;
    /**
     * Status of the recovery case
     * @type {string}
     * @memberof RecoveryCase
     */
    'status'?: RecoveryCaseStatusEnum;
    /**
     * The latest bank error code for the recovery case. See [this article](https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2/) for a complete list of ACH return codes.
     * @type {string}
     * @memberof RecoveryCase
     */
    'latest_error_code'?: string;
    /**
     * Date when funds were originally debited from the company\'s bank account
     * @type {string}
     * @memberof RecoveryCase
     */
    'original_debit_date'?: string;
    /**
     * Check date for the associated payroll or contractor payments
     * @type {string}
     * @memberof RecoveryCase
     */
    'check_date'?: string;
    /**
     * The uuid of the associated payroll for which the recovery case was created. If the recovery case was created for a contractor payment, this field will be null.
     * @type {string}
     * @memberof RecoveryCase
     */
    'payroll_uuid'?: string;
    /**
     * The uuids of the associated contractor payments for which the recovery case was created. If the recovery case was created for a payroll, this field will be null.
     * @type {Array<string>}
     * @memberof RecoveryCase
     */
    'contractor_payment_uuids'?: Array<string>;
    /**
     * Amount outstanding for the recovery case
     * @type {string}
     * @memberof RecoveryCase
     */
    'amount_outstanding'?: string;
    /**
     * Total amount to be debited from the payroll or contractor payments
     * @type {string}
     * @memberof RecoveryCase
     */
    'event_total_amount'?: string;
}

type RecoveryCaseStatusEnum = 'open' | 'redebit_initiated' | 'recovered' | 'lost'

