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
 * @interface WebhooksUpdateSubscriptionByUuidRequest
 */
export interface WebhooksUpdateSubscriptionByUuidRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhooksUpdateSubscriptionByUuidRequest
     */
    'subscription_types': Array<WebhooksUpdateSubscriptionByUuidRequestSubscriptionTypesEnum>;
}

type WebhooksUpdateSubscriptionByUuidRequestSubscriptionTypesEnum = 'BankAccount' | 'Company' | 'CompanyBenefit' | 'Contractor' | 'ContractorPayment' | 'Employee' | 'EmployeeBenefit' | 'EmployeeJobCompensation' | 'ExternalPayroll' | 'Form' | 'Location' | 'Notification' | 'Payroll' | 'PaySchedule' | 'Signatory'


