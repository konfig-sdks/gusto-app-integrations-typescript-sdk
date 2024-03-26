<div align="center">

[![Visit Gusto](./header.png)](https://gusto.com)

# [Gusto](https://gusto.com)<a id="gusto"></a>

Welcome to Gusto's Embedded Payroll API documentation!

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`gustoappintegrations.companies.createCompany`](#gustoappintegrationscompaniescreatecompany)
  * [Overview](#overview)
  * [`gustoappintegrations.companies.getCompanyInfo`](#gustoappintegrationscompaniesgetcompanyinfo)
  * [`gustoappintegrations.companies.getCustomFields`](#gustoappintegrationscompaniesgetcustomfields)
  * [`gustoappintegrations.companyBenefits.createCompanyBenefit`](#gustoappintegrationscompanybenefitscreatecompanybenefit)
  * [`gustoappintegrations.companyBenefits.getAllSupportedBenefits`](#gustoappintegrationscompanybenefitsgetallsupportedbenefits)
  * [`gustoappintegrations.companyBenefits.getByCompanyId`](#gustoappintegrationscompanybenefitsgetbycompanyid)
  * [`gustoappintegrations.companyBenefits.getById`](#gustoappintegrationscompanybenefitsgetbyid)
  * [`gustoappintegrations.companyBenefits.getFieldsRequirementsById`](#gustoappintegrationscompanybenefitsgetfieldsrequirementsbyid)
  * [`gustoappintegrations.companyBenefits.getSummaryById`](#gustoappintegrationscompanybenefitsgetsummarybyid)
  * [`gustoappintegrations.companyBenefits.getSupportedBenefitById`](#gustoappintegrationscompanybenefitsgetsupportedbenefitbyid)
  * [`gustoappintegrations.companyBenefits.removeBenefit`](#gustoappintegrationscompanybenefitsremovebenefit)
  * [`gustoappintegrations.companyBenefits.updateBenefit`](#gustoappintegrationscompanybenefitsupdatebenefit)
  * [`gustoappintegrations.contractorPayments.getSingle`](#gustoappintegrationscontractorpaymentsgetsingle)
  * [`gustoappintegrations.contractorPayments.listForCompany`](#gustoappintegrationscontractorpaymentslistforcompany)
  * [`gustoappintegrations.contractors.createIndividualOrBusiness`](#gustoappintegrationscontractorscreateindividualorbusiness)
  * [`gustoappintegrations.contractors.getAll`](#gustoappintegrationscontractorsgetall)
  * [`gustoappintegrations.contractors.getDetails`](#gustoappintegrationscontractorsgetdetails)
  * [`gustoappintegrations.contractors.updateContractor`](#gustoappintegrationscontractorsupdatecontractor)
  * [`gustoappintegrations.departments.addPeopleToDepartment`](#gustoappintegrationsdepartmentsaddpeopletodepartment)
  * [`gustoappintegrations.departments.createDepartment`](#gustoappintegrationsdepartmentscreatedepartment)
  * [`gustoappintegrations.departments.deleteDepartment`](#gustoappintegrationsdepartmentsdeletedepartment)
  * [`gustoappintegrations.departments.getByUuid`](#gustoappintegrationsdepartmentsgetbyuuid)
  * [`gustoappintegrations.departments.listForCompany`](#gustoappintegrationsdepartmentslistforcompany)
  * [`gustoappintegrations.departments.removeEmployees`](#gustoappintegrationsdepartmentsremoveemployees)
  * [`gustoappintegrations.departments.updateDepartment`](#gustoappintegrationsdepartmentsupdatedepartment)
  * [`gustoappintegrations.earningTypes.createCustomEarningType`](#gustoappintegrationsearningtypescreatecustomearningtype)
  * [`gustoappintegrations.earningTypes.deactivate`](#gustoappintegrationsearningtypesdeactivate)
  * [`gustoappintegrations.earningTypes.getAll`](#gustoappintegrationsearningtypesgetall)
  * [`gustoappintegrations.earningTypes.updateTypeById`](#gustoappintegrationsearningtypesupdatetypebyid)
  * [`gustoappintegrations.employeeAddresses.createHomeAddress`](#gustoappintegrationsemployeeaddressescreatehomeaddress)
  * [`gustoappintegrations.employeeAddresses.createWorkAddress`](#gustoappintegrationsemployeeaddressescreateworkaddress)
  * [`gustoappintegrations.employeeAddresses.deleteEmployeeHomeAddress`](#gustoappintegrationsemployeeaddressesdeleteemployeehomeaddress)
  * [`gustoappintegrations.employeeAddresses.deleteEmployeeWorkAddress`](#gustoappintegrationsemployeeaddressesdeleteemployeeworkaddress)
  * [`gustoappintegrations.employeeAddresses.get`](#gustoappintegrationsemployeeaddressesget)
  * [`gustoappintegrations.employeeAddresses.getHomeAddress`](#gustoappintegrationsemployeeaddressesgethomeaddress)
  * [`gustoappintegrations.employeeAddresses.getHomeAddresses`](#gustoappintegrationsemployeeaddressesgethomeaddresses)
  * [`gustoappintegrations.employeeAddresses.getWorkAddresses`](#gustoappintegrationsemployeeaddressesgetworkaddresses)
  * [`gustoappintegrations.employeeAddresses.updateHomeAddress`](#gustoappintegrationsemployeeaddressesupdatehomeaddress)
  * [`gustoappintegrations.employeeAddresses.updateWorkAddress`](#gustoappintegrationsemployeeaddressesupdateworkaddress)
  * [`gustoappintegrations.employeeBenefits.createBenefit`](#gustoappintegrationsemployeebenefitscreatebenefit)
  * [`gustoappintegrations.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany`](#gustoappintegrationsemployeebenefitscreateytdbenefitamountsfromdifferentcompany)
  * [`gustoappintegrations.employeeBenefits.getAllForEmployee`](#gustoappintegrationsemployeebenefitsgetallforemployee)
  * [`gustoappintegrations.employeeBenefits.getById`](#gustoappintegrationsemployeebenefitsgetbyid)
  * [`gustoappintegrations.employeeBenefits.removeBenefit`](#gustoappintegrationsemployeebenefitsremovebenefit)
  * [`gustoappintegrations.employeeBenefits.updateBenefit`](#gustoappintegrationsemployeebenefitsupdatebenefit)
  * [`gustoappintegrations.employeeEmployments.createRehire`](#gustoappintegrationsemployeeemploymentscreaterehire)
  * [`gustoappintegrations.employeeEmployments.createTermination`](#gustoappintegrationsemployeeemploymentscreatetermination)
  * [`gustoappintegrations.employeeEmployments.deleteRehire`](#gustoappintegrationsemployeeemploymentsdeleterehire)
  * [`gustoappintegrations.employeeEmployments.deleteTermination`](#gustoappintegrationsemployeeemploymentsdeletetermination)
  * [`gustoappintegrations.employeeEmployments.getHistory`](#gustoappintegrationsemployeeemploymentsgethistory)
  * [`gustoappintegrations.employeeEmployments.getRehireInfo`](#gustoappintegrationsemployeeemploymentsgetrehireinfo)
  * [`gustoappintegrations.employeeEmployments.listTerminationsForEmployee`](#gustoappintegrationsemployeeemploymentslistterminationsforemployee)
  * [`gustoappintegrations.employeeEmployments.updateRehire`](#gustoappintegrationsemployeeemploymentsupdaterehire)
  * [`gustoappintegrations.employeeEmployments.updateTermination`](#gustoappintegrationsemployeeemploymentsupdatetermination)
  * [`gustoappintegrations.employees.createEmployee`](#gustoappintegrationsemployeescreateemployee)
  * [`gustoappintegrations.employees.deleteOnboardingEmployee`](#gustoappintegrationsemployeesdeleteonboardingemployee)
  * [`gustoappintegrations.employees.getCompanyEmployees`](#gustoappintegrationsemployeesgetcompanyemployees)
  * [`gustoappintegrations.employees.getCustomFields`](#gustoappintegrationsemployeesgetcustomfields)
  * [`gustoappintegrations.employees.getDetails`](#gustoappintegrationsemployeesgetdetails)
  * [`gustoappintegrations.employees.getTimeOffActivities`](#gustoappintegrationsemployeesgettimeoffactivities)
  * [`gustoappintegrations.employees.updateEmployee`](#gustoappintegrationsemployeesupdateemployee)
  * [`gustoappintegrations.events.getAll`](#gustoappintegrationseventsgetall)
  * [`gustoappintegrations.garnishments.createGarnishment`](#gustoappintegrationsgarnishmentscreategarnishment)
  * [`gustoappintegrations.garnishments.get`](#gustoappintegrationsgarnishmentsget)
  * [`gustoappintegrations.garnishments.getEmployeeGarnishments`](#gustoappintegrationsgarnishmentsgetemployeegarnishments)
  * [`gustoappintegrations.garnishments.update`](#gustoappintegrationsgarnishmentsupdate)
  * [`gustoappintegrations.introspection.accessTokenInfo`](#gustoappintegrationsintrospectionaccesstokeninfo)
  * [`gustoappintegrations.introspection.exchangeRefreshToken`](#gustoappintegrationsintrospectionexchangerefreshtoken)
  * [`gustoappintegrations.jobsAndCompensations.createCompensation`](#gustoappintegrationsjobsandcompensationscreatecompensation)
  * [`gustoappintegrations.jobsAndCompensations.createJob`](#gustoappintegrationsjobsandcompensationscreatejob)
  * [`gustoappintegrations.jobsAndCompensations.deleteCompensation`](#gustoappintegrationsjobsandcompensationsdeletecompensation)
  * [`gustoappintegrations.jobsAndCompensations.deleteSpecificJob`](#gustoappintegrationsjobsandcompensationsdeletespecificjob)
  * [`gustoappintegrations.jobsAndCompensations.getCompensationById`](#gustoappintegrationsjobsandcompensationsgetcompensationbyid)
  * [`gustoappintegrations.jobsAndCompensations.getCompensationsByJobId`](#gustoappintegrationsjobsandcompensationsgetcompensationsbyjobid)
  * [`gustoappintegrations.jobsAndCompensations.getDetails`](#gustoappintegrationsjobsandcompensationsgetdetails)
  * [`gustoappintegrations.jobsAndCompensations.getEmployeeJobs`](#gustoappintegrationsjobsandcompensationsgetemployeejobs)
  * [`gustoappintegrations.jobsAndCompensations.updateCompensation`](#gustoappintegrationsjobsandcompensationsupdatecompensation)
  * [`gustoappintegrations.jobsAndCompensations.updateJob`](#gustoappintegrationsjobsandcompensationsupdatejob)
  * [`gustoappintegrations.locations.createCompanyLocation`](#gustoappintegrationslocationscreatecompanylocation)
  * [`gustoappintegrations.locations.getDetails`](#gustoappintegrationslocationsgetdetails)
  * [`gustoappintegrations.locations.getMinimumWages`](#gustoappintegrationslocationsgetminimumwages)
  * [`gustoappintegrations.locations.listCompanyLocations`](#gustoappintegrationslocationslistcompanylocations)
  * [`gustoappintegrations.locations.updateLocation`](#gustoappintegrationslocationsupdatelocation)
  * [`gustoappintegrations.paySchedules.getAssignments`](#gustoappintegrationspayschedulesgetassignments)
  * [`gustoappintegrations.paySchedules.getDetails`](#gustoappintegrationspayschedulesgetdetails)
  * [`gustoappintegrations.paySchedules.list`](#gustoappintegrationspayscheduleslist)
  * [`gustoappintegrations.paySchedules.listUnprocessedTerminationPayPeriods`](#gustoappintegrationspayscheduleslistunprocessedterminationpayperiods)
  * [`gustoappintegrations.paySchedules.list_0`](#gustoappintegrationspayscheduleslist_0)
  * [`gustoappintegrations.payrolls.getAllForCompany`](#gustoappintegrationspayrollsgetallforcompany)
  * [`gustoappintegrations.payrolls.getSinglePayroll`](#gustoappintegrationspayrollsgetsinglepayroll)
  * [`gustoappintegrations.payrolls.prepareForUpdate`](#gustoappintegrationspayrollsprepareforupdate)
  * [`gustoappintegrations.payrolls.updateById`](#gustoappintegrationspayrollsupdatebyid)
  * [`gustoappintegrations.timeOffPolicies.calculateAccruingTimeOffHours`](#gustoappintegrationstimeoffpoliciescalculateaccruingtimeoffhours)
  * [`gustoappintegrations.webhooks.createSubscription`](#gustoappintegrationswebhookscreatesubscription)
  * [`gustoappintegrations.webhooks.deleteSubscriptionByUuid`](#gustoappintegrationswebhooksdeletesubscriptionbyuuid)
  * [`gustoappintegrations.webhooks.getSubscriptionByUuid`](#gustoappintegrationswebhooksgetsubscriptionbyuuid)
  * [`gustoappintegrations.webhooks.listSubscriptions`](#gustoappintegrationswebhookslistsubscriptions)
  * [`gustoappintegrations.webhooks.requestVerificationToken`](#gustoappintegrationswebhooksrequestverificationtoken)
  * [`gustoappintegrations.webhooks.updateSubscriptionByUuid`](#gustoappintegrationswebhooksupdatesubscriptionbyuuid)
  * [`gustoappintegrations.webhooks.verifySubscriptionToken`](#gustoappintegrationswebhooksverifysubscriptiontoken)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Gusto&serviceName=App%20Integrations&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { GustoAppIntegrations } from "gusto-app-integrations-typescript-sdk";

const gustoappintegrations = new GustoAppIntegrations({
  // Defining the base path is optional and defaults to https://api.gusto-demo.com
  // basePath: "https://api.gusto-demo.com",
  apiKey: "API_KEY",
  accessToken: "ACCESS_TOKEN",
});

const createCompanyResponse =
  await gustoappintegrations.companies.createCompany({
    xGustoApiVersion: "2024-03-01",
    user: {
      first_name: "first_name_example",
      last_name: "last_name_example",
      email: "email_example",
    },
    company: {
      name: "name_example",
    },
  });

console.log(createCompanyResponse);
```

## Reference<a id="reference"></a>


### `gustoappintegrations.companies.createCompany`<a id="gustoappintegrationscompaniescreatecompany"></a>

### Overview<a id="overview"></a>
The company provisioning API provides a way to create a Gusto company as part of your integration. When you successfully call the API, the API does the following:
* Creates a new company in Gusto.
* Creates a new user in Gusto.
* Makes the new user the primary payroll administrator of the new company.
* Sends a welcome email to the new user.
In the response, you will receive an account claim URL. Redirect the user to this URL to complete their account setup inside of Gusto

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCompanyResponse =
  await gustoappintegrations.companies.createCompany({
    xGustoApiVersion: "2024-03-01",
    user: {
      first_name: "first_name_example",
      last_name: "last_name_example",
      email: "email_example",
    },
    company: {
      name: "name_example",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user: [`CompaniesCreateCompanyRequestUser`](./models/companies-create-company-request-user.ts)<a id="user-companiescreatecompanyrequestusermodelscompanies-create-company-request-userts"></a>

##### company: [`CompaniesCreateCompanyRequestCompany`](./models/companies-create-company-request-company.ts)<a id="company-companiescreatecompanyrequestcompanymodelscompanies-create-company-request-companyts"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesCreateCompanyResponse](./models/companies-create-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/provision` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companies.getCompanyInfo`<a id="gustoappintegrationscompaniesgetcompanyinfo"></a>

Get a company.         
The employees:read scope is required to return home_address and non-work locations.         
The company_admin:read scope is required to return primary_payroll_admin.         
The signatories:read scope is required to return primary_signatory.         

scope: `companies:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyInfoResponse =
  await gustoappintegrations.companies.getCompanyInfo({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Company](./models/company.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companies.getCustomFields`<a id="gustoappintegrationscompaniesgetcustomfields"></a>

Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company

scope: `companies:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse =
  await gustoappintegrations.companies.getCustomFields({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesGetCustomFieldsResponse](./models/companies-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.createCompanyBenefit`<a id="gustoappintegrationscompanybenefitscreatecompanybenefit"></a>

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

scope: `company_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCompanyBenefitResponse =
  await gustoappintegrations.companyBenefits.createCompanyBenefit({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
    description: "description_example",
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of the company benefit.For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### benefit_type: `number`<a id="benefit_type-number"></a>

The ID of the benefit to which the company benefit belongs.

##### active: `boolean`<a id="active-boolean"></a>

Whether this benefit is active for employee participation.

##### responsible_for_employer_taxes: `boolean`<a id="responsible_for_employer_taxes-boolean"></a>

Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.

##### responsible_for_employee_w2: `boolean`<a id="responsible_for_employee_w2-boolean"></a>

Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefit](./models/company-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/company_benefits` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getAllSupportedBenefits`<a id="gustoappintegrationscompanybenefitsgetallsupportedbenefits"></a>

Returns all benefits supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllSupportedBenefitsResponse =
  await gustoappintegrations.companyBenefits.getAllSupportedBenefits({
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[SupportedBenefit](./models/supported-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/benefits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getByCompanyId`<a id="gustoappintegrationscompanybenefitsgetbycompanyid"></a>

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.

scope: `company_benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByCompanyIdResponse =
  await gustoappintegrations.companyBenefits.getByCompanyId({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### enrollmentCount: `boolean`<a id="enrollmentcount-boolean"></a>

Whether to return employee enrollment count

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefit](./models/company-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/company_benefits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getById`<a id="gustoappintegrationscompanybenefitsgetbyid"></a>

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.

scope: `company_benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await gustoappintegrations.companyBenefits.getById({
  companyBenefitId: "companyBenefitId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyBenefitId: `string`<a id="companybenefitid-string"></a>

The UUID of the company benefit

##### withEmployeeBenefits: `boolean`<a id="withemployeebenefits-boolean"></a>

Whether to return employee benefits associated with the benefit

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefitWithEmployeeBenefits](./models/company-benefit-with-employee-benefits.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company_benefits/{company_benefit_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getFieldsRequirementsById`<a id="gustoappintegrationscompanybenefitsgetfieldsrequirementsbyid"></a>

Returns field requirements for the requested benefit type.

scope: `benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFieldsRequirementsByIdResponse =
  await gustoappintegrations.companyBenefits.getFieldsRequirementsById({
    benefitId: "benefitId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### benefitId: `string`<a id="benefitid-string"></a>

The benefit type in Gusto.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[BenefitTypeRequirements](./models/benefit-type-requirements.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/benefits/{benefit_id}/requirements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getSummaryById`<a id="gustoappintegrationscompanybenefitsgetsummarybyid"></a>

Returns summary benefit data for the requested company benefit id.

Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.

scope: `company_benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryByIdResponse =
  await gustoappintegrations.companyBenefits.getSummaryById({
    companyBenefitId: "companyBenefitId_example",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyBenefitId: `string`<a id="companybenefitid-string"></a>

The UUID of the company benefit

##### startDate: `string`<a id="startdate-string"></a>

The start date for which to retrieve company benefit summary

##### endDate: `string`<a id="enddate-string"></a>

The end date for which to retrieve company benefit summary

##### detailed: `boolean`<a id="detailed-boolean"></a>

Display employee payroll item summary

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[BenefitSummary](./models/benefit-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company_benefits/{company_benefit_id}/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.getSupportedBenefitById`<a id="gustoappintegrationscompanybenefitsgetsupportedbenefitbyid"></a>

Returns a benefit supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSupportedBenefitByIdResponse =
  await gustoappintegrations.companyBenefits.getSupportedBenefitById({
    benefitId: "benefitId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### benefitId: `string`<a id="benefitid-string"></a>

The benefit type in Gusto.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[SupportedBenefit](./models/supported-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/benefits/{benefit_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.removeBenefit`<a id="gustoappintegrationscompanybenefitsremovebenefit"></a>

The following must be true in order to delete a company benefit
  - There are no employee benefits associated with the company benefit
  - There are no payroll items associated with the company benefit
  - The benefit is not managed by a Partner or by Gusto (type must be 'External')

scope: `company_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBenefitResponse =
  await gustoappintegrations.companyBenefits.removeBenefit({
    companyBenefitId: "companyBenefitId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyBenefitId: `string`<a id="companybenefitid-string"></a>

The UUID of the company benefit

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company_benefits/{company_benefit_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.companyBenefits.updateBenefit`<a id="gustoappintegrationscompanybenefitsupdatebenefit"></a>

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

scope: `company_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBenefitResponse =
  await gustoappintegrations.companyBenefits.updateBenefit({
    companyBenefitId: "companyBenefitId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### companyBenefitId: `string`<a id="companybenefitid-string"></a>

The UUID of the company benefit

##### description: `string`<a id="description-string"></a>

The description of the company benefit.For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.

##### active: `boolean`<a id="active-boolean"></a>

Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyBenefit](./models/company-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company_benefits/{company_benefit_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractorPayments.getSingle`<a id="gustoappintegrationscontractorpaymentsgetsingle"></a>

Returns a single contractor payments

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleResponse =
  await gustoappintegrations.contractorPayments.getSingle({
    companyId: "companyId_example",
    contractorPaymentId: "contractorPaymentId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### contractorPaymentId: `string`<a id="contractorpaymentid-string"></a>

The UUID of the contractor payment

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[ContractorPayment](./models/contractor-payment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractorPayments.listForCompany`<a id="gustoappintegrationscontractorpaymentslistforcompany"></a>

Returns an object containing individual contractor payments, within a given time period, including totals.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForCompanyResponse =
  await gustoappintegrations.contractorPayments.listForCompany({
    companyId: "companyId_example",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### startDate: `string`<a id="startdate-string"></a>

The time period for which to retrieve contractor payments

##### endDate: `string`<a id="enddate-string"></a>

The time period for which to retrieve contractor payments

##### contractorUuid: `string`<a id="contractoruuid-string"></a>

The UUID of the contractor. When specified, will load all payments for that contractor.

##### groupByDate: `boolean`<a id="groupbydate-boolean"></a>

Display contractor payments results group by check date if set to true.

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[ContractorPaymentsListForCompanyResponse](./models/contractor-payments-list-for-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/contractor_payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractors.createIndividualOrBusiness`<a id="gustoappintegrationscontractorscreateindividualorbusiness"></a>

Create an individual or business contractor.

scope: `contractors:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIndividualOrBusinessResponse =
  await gustoappintegrations.contractors.createIndividualOrBusiness({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
    type: "Individual",
    wage_type: "Fixed",
    start_date: "2020-01-11",
    hourly_rate: "40.0",
    self_onboarding: false,
    file_new_hire_report: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### type: `string`<a id="type-string"></a>

The contractor type.

##### wage_type: `string`<a id="wage_type-string"></a>

The contractor’s wage type. 

##### start_date: `string`<a id="start_date-string"></a>

The day when the contractor will start working for the company. 

##### hourly_rate: `string`<a id="hourly_rate-string"></a>

The contractor’s hourly rate. This attribute is required if the wage_type is `Hourly`.

##### self_onboarding: `boolean`<a id="self_onboarding-boolean"></a>

Whether the contractor or the payroll admin will complete onboarding in Gusto. Self-onboarding is recommended so that contractors receive Gusto accounts. If self_onboarding is true, then email is required.

##### email: `string`<a id="email-string"></a>

The contractor’s email address.

##### first_name: `string`<a id="first_name-string"></a>

The contractor’s first name. This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.

##### last_name: `string`<a id="last_name-string"></a>

The contractor’s last name. This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.

##### middle_initial: `string`<a id="middle_initial-string"></a>

The contractor’s middle initial. This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.

##### file_new_hire_report: `boolean`<a id="file_new_hire_report-boolean"></a>

The boolean flag indicating whether Gusto will file a new hire report for the contractor. This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.

##### work_state: `string`<a id="work_state-string"></a>

State where the contractor will be conducting the majority of their work for the company. This value is used when generating the new hire report. This attribute is required for `Individual` contractors if `file_new_hire_report` is true and will be ignored for `Business` contractors.

##### ssn: `string`<a id="ssn-string"></a>

This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors. Social security number is needed to file the annual 1099 tax form.

##### business_name: `string`<a id="business_name-string"></a>

The name of the contractor business. This attribute is required for `Business` contractors and will be ignored for `Individual` contractors.

##### ein: `string`<a id="ein-string"></a>

The employer identification number of the contractor business. This attribute is optional for `Business` contractors and will be ignored for `Individual` contractors.

##### is_active: `boolean`<a id="is_active-boolean"></a>

The status of the contractor.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Contractor](./models/contractor.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/contractors` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractors.getAll`<a id="gustoappintegrationscontractorsgetall"></a>

Get all contractors, active and inactive, individual and business, for a company.

scope: `contractors:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await gustoappintegrations.contractors.getAll({
  companyId: "companyId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Contractor](./models/contractor.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/contractors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractors.getDetails`<a id="gustoappintegrationscontractorsgetdetails"></a>

Get a contractor.

scope: `contractors:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await gustoappintegrations.contractors.getDetails({
  contractorId: "contractorId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contractorId: `string`<a id="contractorid-string"></a>

The UUID of the contractor

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Contractor](./models/contractor.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contractors/{contractor_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.contractors.updateContractor`<a id="gustoappintegrationscontractorsupdatecontractor"></a>

Update a contractor.

scope: `contractors:write`

> 🚧 Warning
>
> Watch out when changing a contractor's type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateContractorResponse =
  await gustoappintegrations.contractors.updateContractor({
    contractorId: "contractorId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
    type: "Individual",
    wage_type: "Fixed",
    start_date: "2020-01-11",
    hourly_rate: "40.0",
    self_onboarding: false,
    file_new_hire_report: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contractorId: `string`<a id="contractorid-string"></a>

The UUID of the contractor

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.

##### type: `string`<a id="type-string"></a>

The contractor type.

##### wage_type: `string`<a id="wage_type-string"></a>

The contractor’s wage type. 

##### start_date: `string`<a id="start_date-string"></a>

The day when the contractor will start working for the company. 

##### hourly_rate: `string`<a id="hourly_rate-string"></a>

The contractor’s hourly rate. This attribute is required if the wage_type is `Hourly`.

##### self_onboarding: `boolean`<a id="self_onboarding-boolean"></a>

Whether the contractor or the payroll admin will complete onboarding in Gusto. Self-onboarding is recommended so that contractors receive Gusto accounts. If self_onboarding is true, then email is required.

##### email: `string`<a id="email-string"></a>

The contractor’s email address.

##### first_name: `string`<a id="first_name-string"></a>

The contractor’s first name. This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.

##### last_name: `string`<a id="last_name-string"></a>

The contractor’s last name. This attribute is required for `Individual` contractors and will be ignored for `Business` contractors.

##### middle_initial: `string`<a id="middle_initial-string"></a>

The contractor’s middle initial. This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.

##### file_new_hire_report: `boolean`<a id="file_new_hire_report-boolean"></a>

The boolean flag indicating whether Gusto will file a new hire report for the contractor. This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors.

##### work_state: `string`<a id="work_state-string"></a>

State where the contractor will be conducting the majority of their work for the company. This value is used when generating the new hire report. This attribute is required for `Individual` contractors if `file_new_hire_report` is true and will be ignored for `Business` contractors.

##### ssn: `string`<a id="ssn-string"></a>

This attribute is optional for `Individual` contractors and will be ignored for `Business` contractors. Social security number is needed to file the annual 1099 tax form.

##### business_name: `string`<a id="business_name-string"></a>

The name of the contractor business. This attribute is required for `Business` contractors and will be ignored for `Individual` contractors.

##### ein: `string`<a id="ein-string"></a>

The employer identification number of the contractor business. This attribute is optional for `Business` contractors and will be ignored for `Individual` contractors.

##### is_active: `boolean`<a id="is_active-boolean"></a>

The status of the contractor.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Contractor](./models/contractor.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contractors/{contractor_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.addPeopleToDepartment`<a id="gustoappintegrationsdepartmentsaddpeopletodepartment"></a>

Add employees and contractors to a department

scope: `departments:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPeopleToDepartmentResponse =
  await gustoappintegrations.departments.addPeopleToDepartment({
    departmentUuid: "departmentUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### departmentUuid: `string`<a id="departmentuuid-string"></a>

The UUID of the department

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### employees: [`DepartmentsAddPeopleToDepartmentRequestEmployeesInner`](./models/departments-add-people-to-department-request-employees-inner.ts)[]<a id="employees-departmentsaddpeopletodepartmentrequestemployeesinnermodelsdepartments-add-people-to-department-request-employees-innerts"></a>

Array of employees to add to the department

##### contractors: [`DepartmentsAddPeopleToDepartmentRequestEmployeesInner`](./models/departments-add-people-to-department-request-employees-inner.ts)[]<a id="contractors-departmentsaddpeopletodepartmentrequestemployeesinnermodelsdepartments-add-people-to-department-request-employees-innerts"></a>

Array of contractors to add to the department

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments/{department_uuid}/add` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.createDepartment`<a id="gustoappintegrationsdepartmentscreatedepartment"></a>

Create a department

scope: `departments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDepartmentResponse =
  await gustoappintegrations.departments.createDepartment({
    companyUuid: "companyUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyUuid: `string`<a id="companyuuid-string"></a>

The UUID of the company

##### title: `string`<a id="title-string"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_uuid}/departments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.deleteDepartment`<a id="gustoappintegrationsdepartmentsdeletedepartment"></a>

Delete a department. You cannot delete a department until all employees and contractors have been removed.

scope: `departments:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDepartmentResponse =
  await gustoappintegrations.departments.deleteDepartment({
    departmentUuid: "departmentUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### departmentUuid: `string`<a id="departmentuuid-string"></a>

The UUID of the department

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments/{department_uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.getByUuid`<a id="gustoappintegrationsdepartmentsgetbyuuid"></a>

Get a department given the UUID

scope: `departments:read`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUuidResponse = await gustoappintegrations.departments.getByUuid({
  departmentUuid: "departmentUuid_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### departmentUuid: `string`<a id="departmentuuid-string"></a>

The UUID of the department

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments/{department_uuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.listForCompany`<a id="gustoappintegrationsdepartmentslistforcompany"></a>

Get all of the departments for a given company with the employees and contractors assigned to that department.

scope: `departments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForCompanyResponse =
  await gustoappintegrations.departments.listForCompany({
    companyUuid: "companyUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyUuid: `string`<a id="companyuuid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_uuid}/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.removeEmployees`<a id="gustoappintegrationsdepartmentsremoveemployees"></a>

Remove employees and contractors from a department

scope: `departments:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEmployeesResponse =
  await gustoappintegrations.departments.removeEmployees({
    departmentUuid: "departmentUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### departmentUuid: `string`<a id="departmentuuid-string"></a>

The UUID of the department

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### employees: [`DepartmentsAddPeopleToDepartmentRequestEmployeesInner`](./models/departments-add-people-to-department-request-employees-inner.ts)[]<a id="employees-departmentsaddpeopletodepartmentrequestemployeesinnermodelsdepartments-add-people-to-department-request-employees-innerts"></a>

Array of employees to remove from a department

##### contractors: [`DepartmentsAddPeopleToDepartmentRequestEmployeesInner`](./models/departments-add-people-to-department-request-employees-inner.ts)[]<a id="contractors-departmentsaddpeopletodepartmentrequestemployeesinnermodelsdepartments-add-people-to-department-request-employees-innerts"></a>

Array of contractors to remove from a department

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments/{department_uuid}/remove` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.departments.updateDepartment`<a id="gustoappintegrationsdepartmentsupdatedepartment"></a>

Update a department

scope: `departments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDepartmentResponse =
  await gustoappintegrations.departments.updateDepartment({
    departmentUuid: "departmentUuid_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### departmentUuid: `string`<a id="departmentuuid-string"></a>

The UUID of the department

##### title: `string`<a id="title-string"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Department](./models/department.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments/{department_uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.earningTypes.createCustomEarningType`<a id="gustoappintegrationsearningtypescreatecustomearningtype"></a>

Create a custom earning type.

If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.

scope: `payrolls:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomEarningTypeResponse =
  await gustoappintegrations.earningTypes.createCustomEarningType({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the custom earning type.

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EarningType](./models/earning-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/earning_types` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.earningTypes.deactivate`<a id="gustoappintegrationsearningtypesdeactivate"></a>

Deactivate an earning type.

scope: `payrolls:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deactivateResponse = await gustoappintegrations.earningTypes.deactivate({
  companyId: "companyId_example",
  earningTypeUuid: "earningTypeUuid_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### earningTypeUuid: `string`<a id="earningtypeuuid-string"></a>

The UUID of the earning type

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/earning_types/{earning_type_uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.earningTypes.getAll`<a id="gustoappintegrationsearningtypesgetall"></a>

A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.

#### Default Earning Type<a id="default-earning-type"></a>
Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)

#### Custom Earning Type<a id="custom-earning-type"></a>
Custom earning types are all the other earning types added specifically for a company.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await gustoappintegrations.earningTypes.getAll({
  companyId: "companyId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EarningTypesGetAllResponse](./models/earning-types-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/earning_types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.earningTypes.updateTypeById`<a id="gustoappintegrationsearningtypesupdatetypebyid"></a>

Update an earning type.

scope: `payrolls:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTypeByIdResponse =
  await gustoappintegrations.earningTypes.updateTypeById({
    companyId: "companyId_example",
    earningTypeUuid: "earningTypeUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### earningTypeUuid: `string`<a id="earningtypeuuid-string"></a>

The UUID of the earning type

##### name: `string`<a id="name-string"></a>

The name of the custom earning type.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EarningType](./models/earning-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/earning_types/{earning_type_uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.createHomeAddress`<a id="gustoappintegrationsemployeeaddressescreatehomeaddress"></a>

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

Supports home address effective dating and courtesy withholding.

scope: `employees:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createHomeAddressResponse =
  await gustoappintegrations.employeeAddresses.createHomeAddress({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### street_1: `string`<a id="street_1-string"></a>

##### street_2: `string`<a id="street_2-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### effective_date: `string`<a id="effective_date-string"></a>

##### courtesy_withholding: `boolean`<a id="courtesy_withholding-boolean"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeAddress](./models/employee-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/home_addresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.createWorkAddress`<a id="gustoappintegrationsemployeeaddressescreateworkaddress"></a>

The work address of an employee describes when an employee began working at an associated company location.

scope: `employees:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWorkAddressResponse =
  await gustoappintegrations.employeeAddresses.createWorkAddress({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### location_uuid: `string`<a id="location_uuid-string"></a>

Reference to a company location

##### effective_date: `string`<a id="effective_date-string"></a>

Date the employee began working at the company location

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeWorkAddress](./models/employee-work-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/work_addresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.deleteEmployeeHomeAddress`<a id="gustoappintegrationsemployeeaddressesdeleteemployeehomeaddress"></a>

Used for deleting an employee's home address.  Cannot delete the employee's active home address.

scope: `employees:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmployeeHomeAddressResponse =
  await gustoappintegrations.employeeAddresses.deleteEmployeeHomeAddress({
    homeAddressUuid: "homeAddressUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### homeAddressUuid: `string`<a id="homeaddressuuid-string"></a>

The UUID of the home address

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/home_addresses/{home_address_uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.deleteEmployeeWorkAddress`<a id="gustoappintegrationsemployeeaddressesdeleteemployeeworkaddress"></a>

Used for deleting an employee's work address.  Cannot delete the employee's active work address.

scope: `employees:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEmployeeWorkAddressResponse =
  await gustoappintegrations.employeeAddresses.deleteEmployeeWorkAddress({
    workAddressUuid: "workAddressUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workAddressUuid: `string`<a id="workaddressuuid-string"></a>

The UUID of the work address

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/work_addresses/{work_address_uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.get`<a id="gustoappintegrationsemployeeaddressesget"></a>

The work address of an employee is used for payroll tax purposes.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await gustoappintegrations.employeeAddresses.get({
  workAddressUuid: "workAddressUuid_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workAddressUuid: `string`<a id="workaddressuuid-string"></a>

The UUID of the work address

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeWorkAddress](./models/employee-work-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/work_addresses/{work_address_uuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.getHomeAddress`<a id="gustoappintegrationsemployeeaddressesgethomeaddress"></a>

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

Supports home address effective dating and courtesy withholding.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeAddressResponse =
  await gustoappintegrations.employeeAddresses.getHomeAddress({
    homeAddressUuid: "homeAddressUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### homeAddressUuid: `string`<a id="homeaddressuuid-string"></a>

The UUID of the home address

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeAddress](./models/employee-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/home_addresses/{home_address_uuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.getHomeAddresses`<a id="gustoappintegrationsemployeeaddressesgethomeaddresses"></a>

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

Supports home address effective dating and courtesy withholding.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeAddressesResponse =
  await gustoappintegrations.employeeAddresses.getHomeAddresses({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeAddress](./models/employee-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/home_addresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.getWorkAddresses`<a id="gustoappintegrationsemployeeaddressesgetworkaddresses"></a>

Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
signifying if it is the currently active work address.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkAddressesResponse =
  await gustoappintegrations.employeeAddresses.getWorkAddresses({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeWorkAddress](./models/employee-work-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/work_addresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.updateHomeAddress`<a id="gustoappintegrationsemployeeaddressesupdatehomeaddress"></a>

The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

Supports home address effective dating and courtesy withholding.

scope: `employees:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateHomeAddressResponse =
  await gustoappintegrations.employeeAddresses.updateHomeAddress({
    homeAddressUuid: "homeAddressUuid_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### homeAddressUuid: `string`<a id="homeaddressuuid-string"></a>

The UUID of the home address

##### street_1: `string`<a id="street_1-string"></a>

##### street_2: `string`<a id="street_2-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### effective_date: `string`<a id="effective_date-string"></a>

##### courtesy_withholding: `boolean`<a id="courtesy_withholding-boolean"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeAddress](./models/employee-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/home_addresses/{home_address_uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeAddresses.updateWorkAddress`<a id="gustoappintegrationsemployeeaddressesupdateworkaddress"></a>

The work address of an employee is used for payroll tax purposes.

scope: `employees:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkAddressResponse =
  await gustoappintegrations.employeeAddresses.updateWorkAddress({
    workAddressUuid: "workAddressUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workAddressUuid: `string`<a id="workaddressuuid-string"></a>

The UUID of the work address

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### location_uuid: `string`<a id="location_uuid-string"></a>

Reference to a company location

##### effective_date: `string`<a id="effective_date-string"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeWorkAddress](./models/employee-work-address.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/work_addresses/{work_address_uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.createBenefit`<a id="gustoappintegrationsemployeebenefitscreatebenefit"></a>

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBenefitResponse =
  await gustoappintegrations.employeeBenefits.createBenefit({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    company_benefit_uuid: "company_benefit_uuid_example",
    active: true,
    employee_deduction: "0.00",
    deduct_as_percentage: false,
    elective: false,
    catch_up: false,
    coverage_salary_multiplier: "0.00",
    deduction_reduces_taxable_income: "unset",
    company_contribution: "0.00",
    contribute_as_percentage: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### company_benefit_uuid: `string`<a id="company_benefit_uuid-string"></a>

The UUID of the company benefit.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### active: `boolean`<a id="active-boolean"></a>

Whether the employee benefit is active.

##### employee_deduction: `string`<a id="employee_deduction-string"></a>

The amount to be deducted, per pay period, from the employee\\\'s pay.

##### deduct_as_percentage: `boolean`<a id="deduct_as_percentage-boolean"></a>

Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.

##### employee_deduction_annual_maximum: `string`<a id="employee_deduction_annual_maximum-string"></a>

The maximum employee deduction amount per year. A null value signifies no limit.

##### contribution: [`EmployeeBenefitsCreateBenefitRequestContribution`](./models/employee-benefits-create-benefit-request-contribution.ts)<a id="contribution-employeebenefitscreatebenefitrequestcontributionmodelsemployee-benefits-create-benefit-request-contributionts"></a>

##### elective: `boolean`<a id="elective-boolean"></a>

Whether the company contribution is elective (aka \\\"matching\\\"). For `tiered`, `elective_amount`, and `elective_percentage` contribution types this is ignored and assumed to be `true`.

##### company_contribution_annual_maximum: `string`<a id="company_contribution_annual_maximum-string"></a>

The maximum company contribution amount per year. A null value signifies no limit.

##### limit_option: `string`<a id="limit_option-string"></a>

Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either \\\"Family\\\" or \\\"Individual\\\". For a Dependent Care FSA benefit, the limit option should be either \\\"Joint Filing or Single\\\" or \\\"Married and Filing Separately\\\".

##### catch_up: `boolean`<a id="catch_up-boolean"></a>

Whether the employee should use a benefit’s \\\"catch up\\\" rate. Only Roth 401k and 401k benefits use this value for employees over 50.

##### coverage_amount: `string`<a id="coverage_amount-string"></a>

The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.

##### coverage_salary_multiplier: `string`<a id="coverage_salary_multiplier-string"></a>

The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.

##### deduction_reduces_taxable_income: `string`<a id="deduction_reduces_taxable_income-string"></a>

Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not \\\"unset\\\", coverage amount and coverage salary multiplier are ignored.

##### company_contribution: `string`<a id="company_contribution-string"></a>

The amount to be paid, per pay period, by the company.

##### contribute_as_percentage: `boolean`<a id="contribute_as_percentage-boolean"></a>

Whether the company contribution amount should be treated as a percentage to be deducted from each payroll.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeBenefit](./models/employee-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/employee_benefits` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany`<a id="gustoappintegrationsemployeebenefitscreateytdbenefitamountsfromdifferentcompany"></a>

Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.

This endpoint only supports passing outside contributions for 401(k) benefits.

scope: `employee_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createYtdBenefitAmountsFromDifferentCompanyResponse =
  await gustoappintegrations.employeeBenefits.createYtdBenefitAmountsFromDifferentCompany(
    {
      employeeId: "employeeId_example",
      xGustoApiVersion: "2024-03-01",
      tax_year: 2000,
      ytd_employee_deduction_amount: "0.00",
      ytd_company_contribution_amount: "0.00",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tax_year: `number`<a id="tax_year-number"></a>

The tax year for which this amount applies.

##### ytd_employee_deduction_amount: `string`<a id="ytd_employee_deduction_amount-string"></a>

The year-to-date employee deduction made outside the current company.

##### ytd_company_contribution_amount: `string`<a id="ytd_company_contribution_amount-string"></a>

The year-to-date company contribution made outside the current company.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### benefit_type: `number`<a id="benefit_type-number"></a>

The benefit type supported by Gusto.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.getAllForEmployee`<a id="gustoappintegrationsemployeebenefitsgetallforemployee"></a>

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllForEmployeeResponse =
  await gustoappintegrations.employeeBenefits.getAllForEmployee({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeBenefit](./models/employee-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/employee_benefits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.getById`<a id="gustoappintegrationsemployeebenefitsgetbyid"></a>

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.

scope: `employee_benefits:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await gustoappintegrations.employeeBenefits.getById({
  employeeBenefitId: "employeeBenefitId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeBenefitId: `string`<a id="employeebenefitid-string"></a>

The UUID of the employee benefit.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeBenefit](./models/employee-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employee_benefits/{employee_benefit_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.removeBenefit`<a id="gustoappintegrationsemployeebenefitsremovebenefit"></a>

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBenefitResponse =
  await gustoappintegrations.employeeBenefits.removeBenefit({
    employeeBenefitId: "employeeBenefitId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeBenefitId: `string`<a id="employeebenefitid-string"></a>

The UUID of the employee benefit.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employee_benefits/{employee_benefit_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeBenefits.updateBenefit`<a id="gustoappintegrationsemployeebenefitsupdatebenefit"></a>

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: `employee_benefits:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBenefitResponse =
  await gustoappintegrations.employeeBenefits.updateBenefit({
    employeeBenefitId: "employeeBenefitId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
    employee_deduction: "0.00",
    elective: false,
    catch_up: false,
    deduction_reduces_taxable_income: "unset",
    coverage_salary_multiplier: "0.00",
    company_contribution: "0.00",
    contribute_as_percentage: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### employeeBenefitId: `string`<a id="employeebenefitid-string"></a>

The UUID of the employee benefit.

##### active: `boolean`<a id="active-boolean"></a>

Whether the employee benefit is active.

##### employee_deduction: `string`<a id="employee_deduction-string"></a>

The amount to be deducted, per pay period, from the employee\\\'s pay.

##### deduct_as_percentage: `boolean`<a id="deduct_as_percentage-boolean"></a>

Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.

##### employee_deduction_annual_maximum: `string`<a id="employee_deduction_annual_maximum-string"></a>

The maximum employee deduction amount per year. A null value signifies no limit.

##### contribution: [`EmployeeBenefitsUpdateBenefitRequestContribution`](./models/employee-benefits-update-benefit-request-contribution.ts)<a id="contribution-employeebenefitsupdatebenefitrequestcontributionmodelsemployee-benefits-update-benefit-request-contributionts"></a>

##### elective: `boolean`<a id="elective-boolean"></a>

Whether the company contribution is elective (aka \\\"matching\\\"). For `tiered`, `elective_amount`, and `elective_percentage` contribution types this is ignored and assumed to be `true`.

##### company_contribution_annual_maximum: `string`<a id="company_contribution_annual_maximum-string"></a>

The maximum company contribution amount per year. A null value signifies no limit.

##### limit_option: `string`<a id="limit_option-string"></a>

Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either \\\"Family\\\" or \\\"Individual\\\". For a Dependent Care FSA benefit, the limit option should be either \\\"Joint Filing or Single\\\" or \\\"Married and Filing Separately\\\".

##### catch_up: `boolean`<a id="catch_up-boolean"></a>

Whether the employee should use a benefit’s \\\"catch up\\\" rate. Only Roth 401k and 401k benefits use this value for employees over 50.

##### coverage_amount: `string`<a id="coverage_amount-string"></a>

The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.

##### deduction_reduces_taxable_income: `string`<a id="deduction_reduces_taxable_income-string"></a>

Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not \\\"unset\\\", coverage amount and coverage salary multiplier are ignored.

##### coverage_salary_multiplier: `string`<a id="coverage_salary_multiplier-string"></a>

The coverage amount as a multiple of the employee’s salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.

##### company_contribution: `string`<a id="company_contribution-string"></a>

The amount to be paid, per pay period, by the company.

##### contribute_as_percentage: `boolean`<a id="contribute_as_percentage-boolean"></a>

Whether the company contribution amount should be treated as a percentage to be deducted from each payroll.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeBenefit](./models/employee-benefit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employee_benefits/{employee_benefit_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.createRehire`<a id="gustoappintegrationsemployeeemploymentscreaterehire"></a>

Rehire is created whenever an employee is scheduled to return to the company.

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRehireResponse =
  await gustoappintegrations.employeeEmployments.createRehire({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    effective_date: "effective_date_example",
    file_new_hire_report: true,
    work_location_uuid: "work_location_uuid_example",
    employment_status: "part_time",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effective_date: `string`<a id="effective_date-string"></a>

The day when the employee returns to work.

##### file_new_hire_report: `boolean`<a id="file_new_hire_report-boolean"></a>

The boolean flag indicating whether Gusto will file a new hire report for the employee.

##### work_location_uuid: `string`<a id="work_location_uuid-string"></a>

The uuid of the employee\\\'s work location.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### employment_status: `string`<a id="employment_status-string"></a>

The employee\\\'s employment status. Supplying an invalid option will set the employment_status to *not_set*.

##### two_percent_shareholder: `boolean`<a id="two_percent_shareholder-boolean"></a>

Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Rehire](./models/rehire.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/rehire` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.createTermination`<a id="gustoappintegrationsemployeeemploymentscreatetermination"></a>

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTerminationResponse =
  await gustoappintegrations.employeeEmployments.createTermination({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    effective_date: "effective_date_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effective_date: `string`<a id="effective_date-string"></a>

The employee\\\'s last day of work.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### run_termination_payroll: `boolean`<a id="run_termination_payroll-boolean"></a>

If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Termination](./models/termination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/terminations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.deleteRehire`<a id="gustoappintegrationsemployeeemploymentsdeleterehire"></a>

Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRehireResponse =
  await gustoappintegrations.employeeEmployments.deleteRehire({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/rehire` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.deleteTermination`<a id="gustoappintegrationsemployeeemploymentsdeletetermination"></a>

Delete an employee termination.

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTerminationResponse =
  await gustoappintegrations.employeeEmployments.deleteTermination({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/terminations` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.getHistory`<a id="gustoappintegrationsemployeeemploymentsgethistory"></a>

Retrieve the employment history for a given employee, which includes termination and rehire.

scope: `employments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHistoryResponse =
  await gustoappintegrations.employeeEmployments.getHistory({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeEmploymentsGetHistoryResponseInner](./models/employee-employments-get-history-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/employment_history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.getRehireInfo`<a id="gustoappintegrationsemployeeemploymentsgetrehireinfo"></a>

Retrieve an employee's rehire, which contains information on when the employee returns to work.

scope: `employments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRehireInfoResponse =
  await gustoappintegrations.employeeEmployments.getRehireInfo({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Rehire](./models/rehire.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/rehire` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.listTerminationsForEmployee`<a id="gustoappintegrationsemployeeemploymentslistterminationsforemployee"></a>

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTerminationsForEmployeeResponse =
  await gustoappintegrations.employeeEmployments.listTerminationsForEmployee({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Termination](./models/termination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/terminations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.updateRehire`<a id="gustoappintegrationsemployeeemploymentsupdaterehire"></a>

Update an employee's rehire.

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRehireResponse =
  await gustoappintegrations.employeeEmployments.updateRehire({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
    effective_date: "effective_date_example",
    file_new_hire_report: true,
    work_location_uuid: "work_location_uuid_example",
    employment_status: "part_time",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.

##### effective_date: `string`<a id="effective_date-string"></a>

The day when the employee returns to work.

##### file_new_hire_report: `boolean`<a id="file_new_hire_report-boolean"></a>

The boolean flag indicating whether Gusto will file a new hire report for the employee.

##### work_location_uuid: `string`<a id="work_location_uuid-string"></a>

The uuid of the employee\\\'s work location.

##### employment_status: `string`<a id="employment_status-string"></a>

The employee\\\'s employment status. Supplying an invalid option will set the employment_status to *not_set*.

##### two_percent_shareholder: `boolean`<a id="two_percent_shareholder-boolean"></a>

Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Rehire](./models/rehire.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/rehire` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employeeEmployments.updateTermination`<a id="gustoappintegrationsemployeeemploymentsupdatetermination"></a>

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: `employments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTerminationResponse =
  await gustoappintegrations.employeeEmployments.updateTermination({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
    effective_date: "effective_date_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.

##### effective_date: `string`<a id="effective_date-string"></a>

The employee\\\'s last day of work.

##### run_termination_payroll: `boolean`<a id="run_termination_payroll-boolean"></a>

If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Termination](./models/termination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/terminations/{employee_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.createEmployee`<a id="gustoappintegrationsemployeescreateemployee"></a>

Create an employee.

scope: `employees:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmployeeResponse =
  await gustoappintegrations.employees.createEmployee({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
    first_name: "first_name_example",
    last_name: "last_name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### first_name: `string`<a id="first_name-string"></a>

##### last_name: `string`<a id="last_name-string"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### middle_initial: `string`<a id="middle_initial-string"></a>

##### date_of_birth: `string`<a id="date_of_birth-string"></a>

##### email: `string`<a id="email-string"></a>

##### ssn: `string`<a id="ssn-string"></a>

##### self_onboarding: `boolean`<a id="self_onboarding-boolean"></a>

If true, employee is expected to self-onboard. If false, payroll admin is expected to enter in the employee\\\'s onboarding information

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.deleteOnboardingEmployee`<a id="gustoappintegrationsemployeesdeleteonboardingemployee"></a>

Use this endpoint to delete an employee who is in onboarding. Deleting
an onboarded employee is not allowed. Please check out the Terminations api
if you need to terminate an onboarded employee.

scope: `employees:manage`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOnboardingEmployeeResponse =
  await gustoappintegrations.employees.deleteOnboardingEmployee({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.getCompanyEmployees`<a id="gustoappintegrationsemployeesgetcompanyemployees"></a>

Get all of the employees, onboarding, active and terminated, for a given company.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyEmployeesResponse =
  await gustoappintegrations.employees.getCompanyEmployees({
    companyId: "companyId_example",
    include: "all_compensations",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### terminated: `boolean`<a id="terminated-boolean"></a>

Filters employees by the provided boolean

##### include: `'all_compensations' | 'custom_fields'`<a id="include-all_compensations--custom_fields"></a>

Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options: - all_compensations: Include all effective dated compensations for each job instead of only the current compensation - custom_fields: Include employees\' custom fields

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.getCustomFields`<a id="gustoappintegrationsemployeesgetcustomfields"></a>

Returns a list of the employee's custom fields.

scope: `employees:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse =
  await gustoappintegrations.employees.getCustomFields({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeesGetCustomFieldsResponse](./models/employees-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.getDetails`<a id="gustoappintegrationsemployeesgetdetails"></a>

Get an employee.

scope: `employees:read`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await gustoappintegrations.employees.getDetails({
  employeeId: "employeeId_example",
  include: "all_compensations",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### include: `'all_compensations' | 'custom_fields'`<a id="include-all_compensations--custom_fields"></a>

Include the requested attribute(s) in each employee response, multiple options are comma separated. Available options: - all_compensations: Include all effective dated compensations for each job instead of only the current compensation - custom_fields: Include employees\' custom fields

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.getTimeOffActivities`<a id="gustoappintegrationsemployeesgettimeoffactivities"></a>

Get employee time off activities.

scope: `employee_time_off_activities:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffActivitiesResponse =
  await gustoappintegrations.employees.getTimeOffActivities({
    employeeUuid: "employeeUuid_example",
    timeOffType: "timeOffType_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeUuid: `string`<a id="employeeuuid-string"></a>

The UUID of the employee

##### timeOffType: `string`<a id="timeofftype-string"></a>

The time off type name you want to query data for. ex: \'sick\' or \'vacation\'

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffActivity](./models/time-off-activity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_uuid}/time_off_activities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.employees.updateEmployee`<a id="gustoappintegrationsemployeesupdateemployee"></a>

Update an employee.

scope: `employees:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeResponse =
  await gustoappintegrations.employees.updateEmployee({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### first_name: `string`<a id="first_name-string"></a>

##### middle_initial: `string`<a id="middle_initial-string"></a>

##### last_name: `string`<a id="last_name-string"></a>

##### date_of_birth: `string`<a id="date_of_birth-string"></a>

##### email: `string`<a id="email-string"></a>

##### ssn: `string`<a id="ssn-string"></a>

##### two_percent_shareholder: `boolean`<a id="two_percent_shareholder-boolean"></a>

Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.events.getAll`<a id="gustoappintegrationseventsgetall"></a>

Fetch all events, going back up to 30 days, that your partner application has the required scopes for. Note that a partner does NOT have to have verified webhook subscriptions in order to utilize this endpoint.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `events:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await gustoappintegrations.events.getAll({
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startingAfterUuid: `string`<a id="startingafteruuid-string"></a>

A cursor for pagination. Returns all events occuring after the specified UUID (exclusive)

##### resourceUuid: `string`<a id="resourceuuid-string"></a>

The UUID of the company. If not specified, will return all events for all companies.

##### limit: `string`<a id="limit-string"></a>

Limits the number of objects returned in a single response, between 1 and 100. The default is 25

##### eventType: `string`<a id="eventtype-string"></a>

A string containing the exact event name (e.g. `employee.created`), or use a wildcard match to filter for a group of events (e.g. `employee.*`, `*.created`, `notification.*.created` etc.)

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Event](./models/event.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.garnishments.createGarnishment`<a id="gustoappintegrationsgarnishmentscreategarnishment"></a>

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `garnishments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createGarnishmentResponse =
  await gustoappintegrations.garnishments.createGarnishment({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    description: "description_example",
    active: true,
    amount: "amount_example",
    court_ordered: true,
    recurring: false,
    deduct_as_percentage: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of the garnishment.

##### amount: `number`<a id="amount-number"></a>

The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. \\\"8.00\\\".

##### court_ordered: `boolean`<a id="court_ordered-boolean"></a>

Whether the garnishment is court ordered.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### active: `boolean`<a id="active-boolean"></a>

Whether or not this garnishment is currently active.

##### times: `number`<a id="times-number"></a>

The number of times to apply the garnishment. Ignored if recurring is true.

##### recurring: `boolean`<a id="recurring-boolean"></a>

Whether the garnishment should recur indefinitely.

##### annual_maximum: `number`<a id="annual_maximum-number"></a>

The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. \\\"200.00\\\".

##### pay_period_maximum: `number`<a id="pay_period_maximum-number"></a>

The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. \\\"16.00\\\".

##### deduct_as_percentage: `boolean`<a id="deduct_as_percentage-boolean"></a>

Whether the amount should be treated as a percentage to be deducted per pay period.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Garnishment](./models/garnishment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/garnishments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.garnishments.get`<a id="gustoappintegrationsgarnishmentsget"></a>

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `garnishments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await gustoappintegrations.garnishments.get({
  garnishmentId: "garnishmentId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### garnishmentId: `string`<a id="garnishmentid-string"></a>

The UUID of the garnishment

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Garnishment](./models/garnishment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/garnishments/{garnishment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.garnishments.getEmployeeGarnishments`<a id="gustoappintegrationsgarnishmentsgetemployeegarnishments"></a>

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `garnishments:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeGarnishmentsResponse =
  await gustoappintegrations.garnishments.getEmployeeGarnishments({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Garnishment](./models/garnishment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/garnishments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.garnishments.update`<a id="gustoappintegrationsgarnishmentsupdate"></a>

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: `garnishments:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await gustoappintegrations.garnishments.update({
  garnishmentId: "garnishmentId_example",
  xGustoApiVersion: "2024-03-01",
  version: "version_example",
  active: true,
  recurring: false,
  deduct_as_percentage: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### garnishmentId: `string`<a id="garnishmentid-string"></a>

The UUID of the garnishment

##### description: `string`<a id="description-string"></a>

The description of the garnishment.

##### active: `boolean`<a id="active-boolean"></a>

Whether or not this garnishment is currently active.

##### amount: `number`<a id="amount-number"></a>

The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. \\\"8.00\\\".

##### court_ordered: `boolean`<a id="court_ordered-boolean"></a>

Whether the garnishment is court ordered.

##### times: `number`<a id="times-number"></a>

The number of times to apply the garnishment. Ignored if recurring is true.

##### recurring: `boolean`<a id="recurring-boolean"></a>

Whether the garnishment should recur indefinitely.

##### annual_maximum: `number`<a id="annual_maximum-number"></a>

The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. \\\"200.00\\\".

##### pay_period_maximum: `number`<a id="pay_period_maximum-number"></a>

The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. \\\"16.00\\\".

##### deduct_as_percentage: `boolean`<a id="deduct_as_percentage-boolean"></a>

Whether the amount should be treated as a percentage to be deducted per pay period.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Garnishment](./models/garnishment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/garnishments/{garnishment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.introspection.accessTokenInfo`<a id="gustoappintegrationsintrospectionaccesstokeninfo"></a>

Returns scope and resource information associated with the current access token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const accessTokenInfoResponse =
  await gustoappintegrations.introspection.accessTokenInfo({
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[IntrospectionAccessTokenInfoResponse](./models/introspection-access-token-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/token_info` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.introspection.exchangeRefreshToken`<a id="gustoappintegrationsintrospectionexchangerefreshtoken"></a>

Exchange a refresh token for a new access token.

The previous `refresh_token` will be revoked on the first usage of the new `access_token`.

The `expires_in` value is provided in seconds from when the `access_token` was generated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeRefreshTokenResponse =
  await gustoappintegrations.introspection.exchangeRefreshToken({
    xGustoApiVersion: "2024-03-01",
    client_id: "client_id_example",
    client_secret: "client_secret_example",
    refresh_token: "refresh_token_example",
    grant_type: "grant_type_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### client_id: `string`<a id="client_id-string"></a>

Your client id

##### client_secret: `string`<a id="client_secret-string"></a>

Your client secret

##### refresh_token: `string`<a id="refresh_token-string"></a>

The `refresh_token` being exchanged for an access token code

##### grant_type: `string`<a id="grant_type-string"></a>

this should be the literal string \\\'refresh_token\\\'

##### redirect_uri: `string`<a id="redirect_uri-string"></a>

The redirect URI you set up via the Developer Portal

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Authentication](./models/authentication.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.createCompensation`<a id="gustoappintegrationsjobsandcompensationscreatecompensation"></a>

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

scope: `jobs:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCompensationResponse =
  await gustoappintegrations.jobsAndCompensations.createCompensation({
    jobId: "jobId_example",
    xGustoApiVersion: "2024-03-01",
    payment_unit: "Hour",
    flsa_status: "Exempt",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payment_unit: `string`<a id="payment_unit-string"></a>

The unit accompanying the compensation rate. If the employee is an owner, rate should be \\\'Paycheck\\\'.

##### flsa_status: [`FlsaStatusType`](./models/flsa-status-type.ts)<a id="flsa_status-flsastatustypemodelsflsa-status-typets"></a>

The FLSA status for this compensation. Salaried (\\\'Exempt\\\') employees are paid a fixed salary every pay period. Salaried with overtime (\\\'Salaried Nonexempt\\\') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly (\\\'Nonexempt\\\') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees (\\\'Commission Only Exempt\\\') earn wages based only on commission. Commissioned with overtime (\\\'Commission Only Nonexempt\\\') earn wages based on commission, and receive overtime pay when applicable. Owners (\\\'Owner\\\') are employees that own at least twenty percent of the company. 

##### jobId: `string`<a id="jobid-string"></a>

The UUID of the job

##### rate: `string`<a id="rate-string"></a>

The dollar amount paid per payment unit.

##### effective_date: `string`<a id="effective_date-string"></a>

The date when the compensation takes effect.

##### adjust_for_minimum_wage: `boolean`<a id="adjust_for_minimum_wage-boolean"></a>

Determines whether the compensation should be adjusted for minimum wage. Only applies to Nonexempt employees.

##### minimum_wages: [`JobsAndCompensationsCreateCompensationRequestMinimumWagesInner`](./models/jobs-and-compensations-create-compensation-request-minimum-wages-inner.ts)[]<a id="minimum_wages-jobsandcompensationscreatecompensationrequestminimumwagesinnermodelsjobs-and-compensations-create-compensation-request-minimum-wages-innerts"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Compensation](./models/compensation.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/jobs/{job_id}/compensations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.createJob`<a id="gustoappintegrationsjobsandcompensationscreatejob"></a>

Create a job.

scope: `jobs:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createJobResponse =
  await gustoappintegrations.jobsAndCompensations.createJob({
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
    title: "title_example",
    hire_date: "hire_date_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The job title

##### hire_date: `string`<a id="hire_date-string"></a>

The date when the employee was hired or rehired for the job.

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### two_percent_shareholder: `boolean`<a id="two_percent_shareholder-boolean"></a>

Whether the employee owns at least 2% of the company.

##### state_wc_covered: `boolean`<a id="state_wc_covered-boolean"></a>

Whether this job is eligible for workers\\\' compensation coverage in the state of Washington (WA).

##### state_wc_class_code: `string`<a id="state_wc_class_code-string"></a>

The risk class code for workers\\\' compensation in Washington state. Please visit [Washington state\\\'s Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Job](./models/job.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.deleteCompensation`<a id="gustoappintegrationsjobsandcompensationsdeletecompensation"></a>

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.

scope: `jobs:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCompensationResponse =
  await gustoappintegrations.jobsAndCompensations.deleteCompensation({
    compensationId: "compensationId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### compensationId: `string`<a id="compensationid-string"></a>

The UUID of the compensation

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/compensations/{compensation_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.deleteSpecificJob`<a id="gustoappintegrationsjobsandcompensationsdeletespecificjob"></a>

Deletes a specific job that an employee holds.

scope: `jobs:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificJobResponse =
  await gustoappintegrations.jobsAndCompensations.deleteSpecificJob({
    jobId: "jobId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The UUID of the job

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/jobs/{job_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.getCompensationById`<a id="gustoappintegrationsjobsandcompensationsgetcompensationbyid"></a>

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

scope: `jobs:read`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompensationByIdResponse =
  await gustoappintegrations.jobsAndCompensations.getCompensationById({
    compensationId: "compensationId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### compensationId: `string`<a id="compensationid-string"></a>

The UUID of the compensation

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Compensation](./models/compensation.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/compensations/{compensation_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.getCompensationsByJobId`<a id="gustoappintegrationsjobsandcompensationsgetcompensationsbyjobid"></a>

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.

Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.

Use `flsa_status` to determine if an employee is eligible for overtime.

scope: `jobs:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompensationsByJobIdResponse =
  await gustoappintegrations.jobsAndCompensations.getCompensationsByJobId({
    jobId: "jobId_example",
    include: "all_compensations",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The UUID of the job

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### include: `'all_compensations'`<a id="include-all_compensations"></a>

Available options: - all_compensations: Include all effective dated compensations for each job instead of only the current compensation

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Compensation](./models/compensation.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/jobs/{job_id}/compensations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.getDetails`<a id="gustoappintegrationsjobsandcompensationsgetdetails"></a>

Get a job.

scope: `jobs:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse =
  await gustoappintegrations.jobsAndCompensations.getDetails({
    jobId: "jobId_example",
    include: "all_compensations",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The UUID of the job

##### include: `'all_compensations'`<a id="include-all_compensations"></a>

Available options: - all_compensations: Include all effective dated compensations for the job instead of only the current compensation

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Job](./models/job.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/jobs/{job_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.getEmployeeJobs`<a id="gustoappintegrationsjobsandcompensationsgetemployeejobs"></a>

Get all of the jobs that an employee holds.

scope: `jobs:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeJobsResponse =
  await gustoappintegrations.jobsAndCompensations.getEmployeeJobs({
    employeeId: "employeeId_example",
    include: "all_compensations",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### include: `'all_compensations'`<a id="include-all_compensations"></a>

Available options: - all_compensations: Include all effective dated compensations for each job instead of only the current compensation

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Job](./models/job.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employees/{employee_id}/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.updateCompensation`<a id="gustoappintegrationsjobsandcompensationsupdatecompensation"></a>

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.

scope: `jobs:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompensationResponse =
  await gustoappintegrations.jobsAndCompensations.updateCompensation({
    compensationId: "compensationId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
    payment_unit: "Hour",
    flsa_status: "Exempt",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### compensationId: `string`<a id="compensationid-string"></a>

The UUID of the compensation

##### rate: `string`<a id="rate-string"></a>

The dollar amount paid per payment unit.

##### payment_unit: `string`<a id="payment_unit-string"></a>

The unit accompanying the compensation rate. If the employee is an owner, rate should be \\\'Paycheck\\\'.

##### flsa_status: [`FlsaStatusType`](./models/flsa-status-type.ts)<a id="flsa_status-flsastatustypemodelsflsa-status-typets"></a>

The FLSA status for this compensation. Salaried (\\\'Exempt\\\') employees are paid a fixed salary every pay period. Salaried with overtime (\\\'Salaried Nonexempt\\\') employees are paid a fixed salary every pay period, and receive overtime pay when applicable. Hourly (\\\'Nonexempt\\\') employees are paid for the hours they work, and receive overtime pay when applicable. Commissioned employees (\\\'Commission Only Exempt\\\') earn wages based only on commission. Commissioned with overtime (\\\'Commission Only Nonexempt\\\') earn wages based on commission, and receive overtime pay when applicable. Owners (\\\'Owner\\\') are employees that own at least twenty percent of the company. 

##### adjust_for_minimum_wage: `boolean`<a id="adjust_for_minimum_wage-boolean"></a>

Determines whether the compensation should be adjusted for minimum wage. Only applies to Nonexempt employees.

##### minimum_wages: [`JobsAndCompensationsCreateCompensationRequestMinimumWagesInner`](./models/jobs-and-compensations-create-compensation-request-minimum-wages-inner.ts)[]<a id="minimum_wages-jobsandcompensationscreatecompensationrequestminimumwagesinnermodelsjobs-and-compensations-create-compensation-request-minimum-wages-innerts"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Compensation](./models/compensation.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/compensations/{compensation_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.jobsAndCompensations.updateJob`<a id="gustoappintegrationsjobsandcompensationsupdatejob"></a>

Update a job.

scope: `jobs:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateJobResponse =
  await gustoappintegrations.jobsAndCompensations.updateJob({
    jobId: "jobId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.

##### jobId: `string`<a id="jobid-string"></a>

The UUID of the job

##### title: `string`<a id="title-string"></a>

The job title

##### hire_date: `string`<a id="hire_date-string"></a>

The date when the employee was hired or rehired for the job.

##### two_percent_shareholder: `boolean`<a id="two_percent_shareholder-boolean"></a>

Whether the employee owns at least 2% of the company.

##### state_wc_covered: `boolean`<a id="state_wc_covered-boolean"></a>

Whether this job is eligible for workers\\\' compensation coverage in the state of Washington (WA).

##### state_wc_class_code: `string`<a id="state_wc_class_code-string"></a>

The risk class code for workers\\\' compensation in Washington state. Please visit [Washington state\\\'s Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Job](./models/job.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/jobs/{job_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.locations.createCompanyLocation`<a id="gustoappintegrationslocationscreatecompanylocation"></a>

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies.write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCompanyLocationResponse =
  await gustoappintegrations.locations.createCompanyLocation({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
    phone_number: "0480728880",
    street_1: "street_1_example",
    city: "city_example",
    state: "state_example",
    zip: "zip_example",
    country: "USA",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phone_number: `string`<a id="phone_number-string"></a>

##### street_1: `string`<a id="street_1-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### street_2: `string`<a id="street_2-string"></a>

##### country: `string`<a id="country-string"></a>

##### mailing_address: `boolean`<a id="mailing_address-boolean"></a>

Specify if this location is the company\\\'s mailing address.

##### filing_address: `boolean`<a id="filing_address-boolean"></a>

Specify if this location is the company\\\'s filing address.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Location](./models/location.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/locations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.locations.getDetails`<a id="gustoappintegrationslocationsgetdetails"></a>

Get a location.

scope: `companies:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await gustoappintegrations.locations.getDetails({
  locationId: "locationId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### locationId: `string`<a id="locationid-string"></a>

The UUID of the location

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Location](./models/location.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/locations/{location_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.locations.getMinimumWages`<a id="gustoappintegrationslocationsgetminimumwages"></a>

Get minimum wages for a location

scope: `companies:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMinimumWagesResponse =
  await gustoappintegrations.locations.getMinimumWages({
    locationUuid: "locationUuid_example",
    effectiveDate: "2020-01-31",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### locationUuid: `string`<a id="locationuuid-string"></a>

The UUID of the location

##### effectiveDate: `string`<a id="effectivedate-string"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[MinimumWage](./models/minimum-wage.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/locations/{location_uuid}/minimum_wages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.locations.listCompanyLocations`<a id="gustoappintegrationslocationslistcompanylocations"></a>

Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.

Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.

scope: `companies:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyLocationsResponse =
  await gustoappintegrations.locations.listCompanyLocations({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Location](./models/location.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.locations.updateLocation`<a id="gustoappintegrationslocationsupdatelocation"></a>

Update a location.

scope: `companies.write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLocationResponse =
  await gustoappintegrations.locations.updateLocation({
    locationId: "locationId_example",
    xGustoApiVersion: "2024-03-01",
    version: "version_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### locationId: `string`<a id="locationid-string"></a>

The UUID of the location

##### version: `string`<a id="version-string"></a>

The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.

##### phone_number: `string`<a id="phone_number-string"></a>

##### street_1: `string`<a id="street_1-string"></a>

##### street_2: `string`<a id="street_2-string"></a>

##### city: `string`<a id="city-string"></a>

##### state: `string`<a id="state-string"></a>

##### zip: `string`<a id="zip-string"></a>

##### country: `string`<a id="country-string"></a>

##### mailing_address: `boolean`<a id="mailing_address-boolean"></a>

For a company location, specify if this location is the company\\\'s mailing address. A company has a single mailing address, so this designation will override any previous selection.

##### filing_address: `boolean`<a id="filing_address-boolean"></a>

For a company location, specify if this location is the company\\\'s filing address. A company has a single filing address, so this designation will override any previous selection.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Location](./models/location.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/locations/{location_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.paySchedules.getAssignments`<a id="gustoappintegrationspayschedulesgetassignments"></a>

This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.

scope: `pay_schedules:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentsResponse =
  await gustoappintegrations.paySchedules.getAssignments({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayScheduleAssignment](./models/pay-schedule-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/pay_schedules/assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.paySchedules.getDetails`<a id="gustoappintegrationspayschedulesgetdetails"></a>

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `pay_schedules:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await gustoappintegrations.paySchedules.getDetails({
  companyId: "companyId_example",
  payScheduleId: "payScheduleId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### payScheduleId: `string`<a id="payscheduleid-string"></a>

The UUID of the pay schedule

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PaySchedule](./models/pay-schedule.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.paySchedules.list`<a id="gustoappintegrationspayscheduleslist"></a>

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: `pay_schedules:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await gustoappintegrations.paySchedules.list({
  companyId: "companyId_example",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### page: `number`<a id="page-number"></a>

The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.

##### per: `number`<a id="per-number"></a>

Number of objects per page. For majority of endpoints will default to 25

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PaySchedule](./models/pay-schedule.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/pay_schedules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.paySchedules.listUnprocessedTerminationPayPeriods`<a id="gustoappintegrationspayscheduleslistunprocessedterminationpayperiods"></a>

When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.

This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUnprocessedTerminationPayPeriodsResponse =
  await gustoappintegrations.paySchedules.listUnprocessedTerminationPayPeriods({
    companyId: "companyId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[UnprocessedTerminationPayPeriod](./models/unprocessed-termination-pay-period.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/pay_periods/unprocessed_termination_pay_periods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.paySchedules.list_0`<a id="gustoappintegrationspayscheduleslist_0"></a>

Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened. To begin submitting information for a given payroll, we need to agree on the time period.

By default, this endpoint returns pay periods starting from 6 months ago to the date today.  Use the `start_date` and `end_date` parameters to change the scope of the response.  End dates can be up to 3 months in the future and there is no limit on start dates.

Starting in version '2023-04-01', the eligible_employees attribute was removed from the response.  The eligible employees for a payroll are determined by the employee_compensations returned from the payrolls#prepare endpoint.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const list_0Response = await gustoappintegrations.paySchedules.list_0({
  companyId: "companyId_example",
  startDate: "2020-01-01",
  endDate: "2020-01-31",
  xGustoApiVersion: "2024-03-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### payrollTypes: `string`<a id="payrolltypes-string"></a>

regular and/or transition. Multiple options are comma separated. The default is regular pay periods if nothing is passed in.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayPeriod](./models/pay-period.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/pay_periods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.payrolls.getAllForCompany`<a id="gustoappintegrationspayrollsgetallforcompany"></a>

Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.

By default, will return processed, regular payrolls for the past 6 months.

Notes:
* Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
* end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllForCompanyResponse =
  await gustoappintegrations.payrolls.getAllForCompany({
    companyId: "companyId_example",
    processingStatuses: "unprocessed",
    payrollTypes: "regular",
    include: "totals",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### processingStatuses: `'unprocessed' | 'processed'`<a id="processingstatuses-unprocessed--processed"></a>

Whether to include processed and/or unprocessed payrolls in the response, defaults to processed, for multiple attributes comma separate the values, i.e. `?processing_statuses=processed,unprocessed`

##### payrollTypes: `'regular' | 'off_cycle' | 'external'`<a id="payrolltypes-regular--off_cycle--external"></a>

Whether to include regular and/or off_cycle payrolls in the response, defaults to regular, for multiple attributes comma separate the values, i.e. `?payroll_types=regular,off_cycle`

##### include: `'totals' | 'payroll_status_meta'`<a id="include-totals--payroll_status_meta"></a>

Include the requested attribute in the response. In v2023-04-01 totals are no longer included by default. For multiple attributes comma separate the values, i.e. `?include=totals,payroll_status_meta`

##### startDate: `string`<a id="startdate-string"></a>

Return payrolls whose pay period is after the start date

##### endDate: `string`<a id="enddate-string"></a>

Return payrolls whose pay period is before the end date

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayrollMinimal](./models/payroll-minimal.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/payrolls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.payrolls.getSinglePayroll`<a id="gustoappintegrationspayrollsgetsinglepayroll"></a>

Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.

Notes:
* Hour and dollar amounts are returned as string representations of numeric decimals.
* Hours are represented to the thousands place; dollar amounts are represented to the cent.
* Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
* When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
  * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSinglePayrollResponse =
  await gustoappintegrations.payrolls.getSinglePayroll({
    companyId: "companyId_example",
    payrollId: "payrollId_example",
    include: "benefits",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### payrollId: `string`<a id="payrollid-string"></a>

The UUID of the payroll

##### include: `'benefits' | 'deductions' | 'taxes' | 'payroll_status_meta'`<a id="include-benefits--deductions--taxes--payroll_status_meta"></a>

Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[Payroll](./models/payroll.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/payrolls/{payroll_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.payrolls.prepareForUpdate`<a id="gustoappintegrationspayrollsprepareforupdate"></a>

This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.

Notes:
 * Will null out calculated_at & totals if a payroll has already been calculated.
 * Will return the version param used for updating the payroll

scope: `payrolls:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const prepareForUpdateResponse =
  await gustoappintegrations.payrolls.prepareForUpdate({
    companyId: "companyId_example",
    payrollId: "payrollId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### payrollId: `string`<a id="payrollid-string"></a>

The UUID of the payroll

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayrollPrepared](./models/payroll-prepared.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/payrolls/{payroll_id}/prepare` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.payrolls.updateById`<a id="gustoappintegrationspayrollsupdatebyid"></a>

This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.  You can think of the **unprocessed**
payroll object as a template of fields that you can update.  You cannot modify the structure of the payroll object through this endpoint, only values
of the fields included in the payroll.  If you do not include specific employee compensations or fixed/hourly compensations in your request body, they
will not be removed from the payroll.

scope: `payrolls:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await gustoappintegrations.payrolls.updateById({
  companyId: "companyId_example",
  payrollId: "payrollId_example",
  xGustoApiVersion: "2024-03-01",
  employee_compensations: [
    {
      payment_method: "Direct Deposit",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employee_compensations: [`PayrollsUpdateByIdRequestEmployeeCompensationsInner`](./models/payrolls-update-by-id-request-employee-compensations-inner.ts)[]<a id="employee_compensations-payrollsupdatebyidrequestemployeecompensationsinnermodelspayrolls-update-by-id-request-employee-compensations-innerts"></a>

##### companyId: `string`<a id="companyid-string"></a>

The UUID of the company

##### payrollId: `string`<a id="payrollid-string"></a>

The UUID of the payroll

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayrollPrepared](./models/payroll-prepared.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}/payrolls/{payroll_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.timeOffPolicies.calculateAccruingTimeOffHours`<a id="gustoappintegrationstimeoffpoliciescalculateaccruingtimeoffhours"></a>

Returns a list of accruing time off for each time off policy associated with the employee.

Factors affecting the accrued hours:
  * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
  * how many hours of work during this pay period
  * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
  * company pay schedule frequency (for per pay period)

If none of the parameters is passed in, the accrued time off hour will be 0.

scope: `payrolls:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const calculateAccruingTimeOffHoursResponse =
  await gustoappintegrations.timeOffPolicies.calculateAccruingTimeOffHours({
    payrollId: "payrollId_example",
    employeeId: "employeeId_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payrollId: `string`<a id="payrollid-string"></a>

The UUID of the payroll

##### employeeId: `string`<a id="employeeid-string"></a>

The UUID of the employee

##### regular_hours_worked: `number`<a id="regular_hours_worked-number"></a>

regular hours worked in this pay period

##### overtime_hours_worked: `number`<a id="overtime_hours_worked-number"></a>

overtime hours worked in this pay period

##### double_overtime_hours_worked: `number`<a id="double_overtime_hours_worked-number"></a>

double overtime hours worked in this pay period

##### pto_hours_used: `number`<a id="pto_hours_used-number"></a>

paid time off hours used in this pay period

##### sick_hours_used: `number`<a id="sick_hours_used-number"></a>

sick hours used in this pay period

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[AccruingTimeOffHour](./models/accruing-time-off-hour.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payrolls/{payroll_id}/employees/{employee_id}/calculate_accruing_time_off_hours` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.createSubscription`<a id="gustoappintegrationswebhookscreatesubscription"></a>

Create a webhook subscription to receive events of the specified subscription_types whenever there is a state change.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:write`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSubscriptionResponse =
  await gustoappintegrations.webhooks.createSubscription({
    xGustoApiVersion: "2024-03-01",
    url: "url_example",
    subscription_types: ["BankAccount"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### subscription_types: `string`[]<a id="subscription_types-string"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.deleteSubscriptionByUuid`<a id="gustoappintegrationswebhooksdeletesubscriptionbyuuid"></a>

Deletes the Webhook Subscription associated with the provided UUID.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSubscriptionByUuidResponse =
  await gustoappintegrations.webhooks.deleteSubscriptionByUuid({
    webhookSubscriptionUuid: "webhookSubscriptionUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookSubscriptionUuid: `string`<a id="webhooksubscriptionuuid-string"></a>

The webhook subscription UUID.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions/{webhook_subscription_uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.getSubscriptionByUuid`<a id="gustoappintegrationswebhooksgetsubscriptionbyuuid"></a>

Returns the Webhook Subscription associated with the provided UUID.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:read`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriptionByUuidResponse =
  await gustoappintegrations.webhooks.getSubscriptionByUuid({
    webhookSubscriptionUuid: "webhookSubscriptionUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookSubscriptionUuid: `string`<a id="webhooksubscriptionuuid-string"></a>

The webhook subscription UUID.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions/{webhook_subscription_uuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.listSubscriptions`<a id="gustoappintegrationswebhookslistsubscriptions"></a>

Returns all webhook subscriptions associated with the provided Partner API token.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:read`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscriptionsResponse =
  await gustoappintegrations.webhooks.listSubscriptions({
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.requestVerificationToken`<a id="gustoappintegrationswebhooksrequestverificationtoken"></a>

Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:read`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestVerificationTokenResponse =
  await gustoappintegrations.webhooks.requestVerificationToken({
    webhookSubscriptionUuid: "webhookSubscriptionUuid_example",
    xGustoApiVersion: "2024-03-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookSubscriptionUuid: `string`<a id="webhooksubscriptionuuid-string"></a>

The webhook subscription UUID.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.updateSubscriptionByUuid`<a id="gustoappintegrationswebhooksupdatesubscriptionbyuuid"></a>

Updates the Webhook Subscription associated with the provided UUID.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscriptionByUuidResponse =
  await gustoappintegrations.webhooks.updateSubscriptionByUuid({
    webhookSubscriptionUuid: "webhookSubscriptionUuid_example",
    xGustoApiVersion: "2024-03-01",
    subscription_types: ["BankAccount"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscription_types: `string`[]<a id="subscription_types-string"></a>

##### webhookSubscriptionUuid: `string`<a id="webhooksubscriptionuuid-string"></a>

The webhook subscription UUID.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions/{webhook_subscription_uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `gustoappintegrations.webhooks.verifySubscriptionToken`<a id="gustoappintegrationswebhooksverifysubscriptiontoken"></a>

When a webhook subscription is created, a `verification_token` is POSTed to the registered webhook subscription URL. This `verify` endpoint needs to be called with `verification_token` before webhook events can be sent to the registered webhook URL.

Use the /v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token API to resend the `verification_token` to the Subscriber.

> 📘 Token Authentication
>
> This endpoint uses the [organization level api token and the Token scheme with HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/authentication#api-token-authentication).

scope: `webhook_subscriptions:write`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifySubscriptionTokenResponse =
  await gustoappintegrations.webhooks.verifySubscriptionToken({
    webhookSubscriptionUuid: "webhookSubscriptionUuid_example",
    xGustoApiVersion: "2024-03-01",
    verification_token: "verification_token_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### verification_token: `string`<a id="verification_token-string"></a>

The token POSTed to the Subscription URL.

##### webhookSubscriptionUuid: `string`<a id="webhooksubscriptionuuid-string"></a>

The webhook subscription UUID.

##### xGustoApiVersion: `'2024-03-01'`<a id="xgustoapiversion-2024-03-01"></a>

Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
