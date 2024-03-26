/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 * @export
 * @interface Garnishment
 */
export interface Garnishment {
    /**
     * The description of the garnishment.
     * @type {string}
     * @memberof Garnishment
     */
    'description'?: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof Garnishment
     */
    'version'?: string;
    /**
     * The UUID of the garnishment in Gusto.
     * @type {string}
     * @memberof Garnishment
     */
    'uuid'?: string;
    /**
     * The UUID of the employee to which this garnishment belongs.
     * @type {number}
     * @memberof Garnishment
     */
    'employee_uuid'?: number;
    /**
     * Whether or not this garnishment is currently active.
     * @type {boolean}
     * @memberof Garnishment
     */
    'active'?: boolean;
    /**
     * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. \"8.00\".
     * @type {number}
     * @memberof Garnishment
     */
    'amount'?: number;
    /**
     * Whether the garnishment is court ordered.
     * @type {boolean}
     * @memberof Garnishment
     */
    'court_ordered'?: boolean;
    /**
     * The number of times to apply the garnishment. Ignored if recurring is true.
     * @type {number}
     * @memberof Garnishment
     */
    'times'?: number | null;
    /**
     * Whether the garnishment should recur indefinitely.
     * @type {boolean}
     * @memberof Garnishment
     */
    'recurring'?: boolean;
    /**
     * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. \"200.00\".
     * @type {number}
     * @memberof Garnishment
     */
    'annual_maximum'?: number | null;
    /**
     * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. \"16.00\".
     * @type {number}
     * @memberof Garnishment
     */
    'pay_period_maximum'?: number | null;
    /**
     * Whether the amount should be treated as a percentage to be deducted per pay period.
     * @type {boolean}
     * @memberof Garnishment
     */
    'deduct_as_percentage'?: boolean;
}
