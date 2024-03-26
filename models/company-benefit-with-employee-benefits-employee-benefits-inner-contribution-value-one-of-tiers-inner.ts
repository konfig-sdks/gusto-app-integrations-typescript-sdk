/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A single tier of a tiered matching scheme.
 * @export
 * @interface CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValueOneOfTiersInner
 */
export interface CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValueOneOfTiersInner {
    /**
     * The percentage of employee deduction within this tier the company contribution will match.
     * @type {string}
     * @memberof CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValueOneOfTiersInner
     */
    'rate'?: string;
    /**
     * The percentage threshold at which this tier ends (inclusive).  For example, a value of \"5\" means the company contribution will match employee deductions from the previous tier\'s threshold up to and including 5% of payroll.  If this is the first tier, a value of \"5\" means the company contribution will match employee deductions from 0% up to and including 5% of payroll.
     * @type {string}
     * @memberof CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValueOneOfTiersInner
     */
    'threshold'?: string;
    /**
     * The step up difference between this tier\'s threshold and the previous tier\'s threshold. In the first tier, this is equivalent to threshold.
     * @type {string}
     * @memberof CompanyBenefitWithEmployeeBenefitsEmployeeBenefitsInnerContributionValueOneOfTiersInner
     */
    'threshold_delta'?: string;
}
