/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeBenefitsCreateBenefitRequestContributionValue } from './employee-benefits-create-benefit-request-contribution-value';

/**
 * An object representing the company contribution type and value.
 * @export
 * @interface EmployeeBenefitsCreateBenefitRequestContribution
 */
export interface EmployeeBenefitsCreateBenefitRequestContribution {
    /**
     * The company contribution scheme.  `amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.  `percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.  `tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.
     * @type {string}
     * @memberof EmployeeBenefitsCreateBenefitRequestContribution
     */
    'type'?: EmployeeBenefitsCreateBenefitRequestContributionTypeEnum;
    /**
     * 
     * @type {EmployeeBenefitsCreateBenefitRequestContributionValue}
     * @memberof EmployeeBenefitsCreateBenefitRequestContribution
     */
    'value'?: EmployeeBenefitsCreateBenefitRequestContributionValue;
}

type EmployeeBenefitsCreateBenefitRequestContributionTypeEnum = 'tiered' | 'percentage' | 'amount'

