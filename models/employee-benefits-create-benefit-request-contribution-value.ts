/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeBenefitsCreateBenefitRequestContributionValueOneOfInner } from './employee-benefits-create-benefit-request-contribution-value-one-of-inner';

/**
 * @type EmployeeBenefitsCreateBenefitRequestContributionValue
 * For the `amount` and `percentage` contribution types, the value of the corresponding amount or percentage.  For the `tiered` contribution type, an array of tiers.
 * @export
 */
export type EmployeeBenefitsCreateBenefitRequestContributionValue = Array<EmployeeBenefitsCreateBenefitRequestContributionValueOneOfInner> | string;

