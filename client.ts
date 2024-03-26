/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  CompaniesApi,
  CompanyBenefitsApi,
  ContractorPaymentsApi,
  ContractorsApi,
  DepartmentsApi,
  EarningTypesApi,
  EmployeeAddressesApi,
  EmployeeBenefitsApi,
  EmployeeEmploymentsApi,
  EmployeesApi,
  EventsApi,
  GarnishmentsApi,
  IntrospectionApi,
  JobsAndCompensationsApi,
  LocationsApi,
  PaySchedulesApi,
  PayrollsApi,
  TimeOffPoliciesApi,
  WebhooksApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { GustoAppIntegrationsCustom } from "./client-custom";

export class GustoAppIntegrations extends GustoAppIntegrationsCustom {
  readonly companies: CompaniesApi;
  readonly companyBenefits: CompanyBenefitsApi;
  readonly contractorPayments: ContractorPaymentsApi;
  readonly contractors: ContractorsApi;
  readonly departments: DepartmentsApi;
  readonly earningTypes: EarningTypesApi;
  readonly employeeAddresses: EmployeeAddressesApi;
  readonly employeeBenefits: EmployeeBenefitsApi;
  readonly employeeEmployments: EmployeeEmploymentsApi;
  readonly employees: EmployeesApi;
  readonly events: EventsApi;
  readonly garnishments: GarnishmentsApi;
  readonly introspection: IntrospectionApi;
  readonly jobsAndCompensations: JobsAndCompensationsApi;
  readonly locations: LocationsApi;
  readonly paySchedules: PaySchedulesApi;
  readonly payrolls: PayrollsApi;
  readonly timeOffPolicies: TimeOffPoliciesApi;
  readonly webhooks: WebhooksApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.companies = new CompaniesApi(configuration);
    this.companyBenefits = new CompanyBenefitsApi(configuration);
    this.contractorPayments = new ContractorPaymentsApi(configuration);
    this.contractors = new ContractorsApi(configuration);
    this.departments = new DepartmentsApi(configuration);
    this.earningTypes = new EarningTypesApi(configuration);
    this.employeeAddresses = new EmployeeAddressesApi(configuration);
    this.employeeBenefits = new EmployeeBenefitsApi(configuration);
    this.employeeEmployments = new EmployeeEmploymentsApi(configuration);
    this.employees = new EmployeesApi(configuration);
    this.events = new EventsApi(configuration);
    this.garnishments = new GarnishmentsApi(configuration);
    this.introspection = new IntrospectionApi(configuration);
    this.jobsAndCompensations = new JobsAndCompensationsApi(configuration);
    this.locations = new LocationsApi(configuration);
    this.paySchedules = new PaySchedulesApi(configuration);
    this.payrolls = new PayrollsApi(configuration);
    this.timeOffPolicies = new TimeOffPoliciesApi(configuration);
    this.webhooks = new WebhooksApi(configuration);
  }

}