/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollEmployeeCompensationsTypeInnerBenefitsInner } from './payroll-employee-compensations-type-inner-benefits-inner';
import { PayrollEmployeeCompensationsTypeInnerDeductionsInner } from './payroll-employee-compensations-type-inner-deductions-inner';
import { PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner } from './payroll-employee-compensations-type-inner-fixed-compensations-inner';
import { PayrollEmployeeCompensationsTypeInnerHourlyCompensationsInner } from './payroll-employee-compensations-type-inner-hourly-compensations-inner';
import { PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner } from './payroll-employee-compensations-type-inner-paid-time-off-inner';
import { PayrollEmployeeCompensationsTypeInnerTaxesInner } from './payroll-employee-compensations-type-inner-taxes-inner';

/**
 * 
 * @export
 * @interface PayrollEmployeeCompensationsTypeInner
 */
export interface PayrollEmployeeCompensationsTypeInner {
    /**
     * The current version of this employee compensation. This field is only available for prepared payrolls. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'version'?: string;
    /**
     * The UUID of the employee.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'employee_uuid'?: string;
    /**
     * This employee will be excluded from payroll calculation and will not be paid for the payroll. Cancelling a payroll would reset all employees\' excluded back to false.
     * @type {boolean}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'excluded'?: boolean;
    /**
     * The employee\'s gross pay, equal to regular wages + cash tips + payroll tips + any other additional earnings, excluding imputed income. This value is only available for processed payrolls.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'gross_pay'?: string | null;
    /**
     * The employee\'s net pay, equal to gross_pay - employee taxes - employee deductions or garnishments - cash tips. This value is only available for processed payrolls.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'net_pay'?: string | null;
    /**
     * The employee\'s check amount, equal to net_pay + reimbursements. This value is only available for processed payrolls.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'check_amount'?: string | null;
    /**
     * The employee\'s compensation payment method.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'payment_method'?: PayrollEmployeeCompensationsTypeInnerPaymentMethodEnum;
    /**
     * Custom text that will be printed as a personal note to the employee on a paystub.
     * @type {string}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'memo'?: string | null;
    /**
     * An array of fixed compensations for the employee. Fixed compensations include tips, bonuses, and one time reimbursements. If this payroll has been processed, only fixed compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active fixed compensations are returned.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'fixed_compensations'?: Array<PayrollEmployeeCompensationsTypeInnerFixedCompensationsInner>;
    /**
     * An array of hourly compensations for the employee. Hourly compensations include regular, overtime, and double overtime hours. If this payroll has been processed, only hourly compensations with a value greater than 0.00 are returned. For an unprocessed payroll, all active hourly compensations are returned.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerHourlyCompensationsInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'hourly_compensations'?: Array<PayrollEmployeeCompensationsTypeInnerHourlyCompensationsInner>;
    /**
     * An array of all paid time off the employee is eligible for this pay period.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'paid_time_off'?: Array<PayrollEmployeeCompensationsTypeInnerPaidTimeOffInner>;
    /**
     * An array of employee benefits for the pay period. Benefits are only included for processed payroll when the include parameter is present.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerBenefitsInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'benefits'?: Array<PayrollEmployeeCompensationsTypeInnerBenefitsInner>;
    /**
     * An array of employee deductions for the pay period. Deductions are only included for processed payroll when the include parameter is present.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerDeductionsInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'deductions'?: Array<PayrollEmployeeCompensationsTypeInnerDeductionsInner>;
    /**
     * An array of employer and employee taxes for the pay period. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
     * @type {Array<PayrollEmployeeCompensationsTypeInnerTaxesInner>}
     * @memberof PayrollEmployeeCompensationsTypeInner
     */
    'taxes'?: Array<PayrollEmployeeCompensationsTypeInnerTaxesInner>;
}

type PayrollEmployeeCompensationsTypeInnerPaymentMethodEnum = 'Check' | 'Direct Deposit'

