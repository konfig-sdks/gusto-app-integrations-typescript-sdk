/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Representation of a Minimum Wage
 * @export
 * @interface MinimumWage
 */
export interface MinimumWage {
    /**
     * unique identifier of a minimum wage
     * @type {string}
     * @memberof MinimumWage
     */
    'uuid': string;
    /**
     * The wage rate for a minimum wage record. Represented as a float, e.g. \"15.0\".
     * @type {number}
     * @memberof MinimumWage
     */
    'wage': number;
    /**
     * The type of wage the minimum wage applies to, e.g. \"Regular\", \"Regular-Industry-Specific\".
     * @type {string}
     * @memberof MinimumWage
     */
    'wage_type': string;
    /**
     * The date the minimum wage rule is effective on.
     * @type {string}
     * @memberof MinimumWage
     */
    'effective_date': string;
    /**
     * The governing authority that created the minimum wage, e.g. \"City\", \"State\", or \"Federal\".
     * @type {string}
     * @memberof MinimumWage
     */
    'authority': string;
    /**
     * Description of parties the minimum wage applies to.
     * @type {string}
     * @memberof MinimumWage
     */
    'notes'?: string;
}

