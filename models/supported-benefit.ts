/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SupportedBenefit
 */
export interface SupportedBenefit {
    /**
     * The description of the benefit.
     * @type {string}
     * @memberof SupportedBenefit
     */
    'description'?: string;
    /**
     * The benefit type in Gusto.
     * @type {number}
     * @memberof SupportedBenefit
     */
    'benefit_type'?: number;
    /**
     * The name of the benefit.
     * @type {string}
     * @memberof SupportedBenefit
     */
    'name'?: string;
    /**
     * Whether the benefit is deducted before tax calculations, thus reducing one’s taxable income
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'pretax'?: boolean;
    /**
     * Whether the benefit is deducted after tax calculations.
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'posttax'?: boolean;
    /**
     * Whether the benefit is considered imputed income.
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'imputed'?: boolean;
    /**
     * Whether the benefit is healthcare related.
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'healthcare'?: boolean;
    /**
     * Whether the benefit is associated with retirement planning.
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'retirement'?: boolean;
    /**
     * Whether the benefit has a government mandated yearly limit.
     * @type {boolean}
     * @memberof SupportedBenefit
     */
    'yearly_limit'?: boolean;
    /**
     * Category where the benefit belongs to.
     * @type {string}
     * @memberof SupportedBenefit
     */
    'category'?: string;
}

