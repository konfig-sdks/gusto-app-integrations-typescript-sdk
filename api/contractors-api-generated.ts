/* tslint:disable */
/* eslint-disable */
/*
Gusto API

Welcome to Gusto's Embedded Payroll API documentation!

The version of the OpenAPI document: 2024-03-01
Contact: developer@gusto.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Contractor } from '../models';
// @ts-ignore
import { ContractorsCreateIndividualOrBusinessRequest } from '../models';
// @ts-ignore
import { ContractorsUpdateContractorRequest } from '../models';
// @ts-ignore
import { UnprocessableEntityErrorObject } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ContractorsApi - axios parameter creator
 * @export
 */
export const ContractorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an individual or business contractor.  scope: `contractors:manage`
         * @summary Create a contractor
         * @param {string} companyId The UUID of the company
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {ContractorsCreateIndividualOrBusinessRequest} [contractorsCreateIndividualOrBusinessRequest] Create an individual or business contractor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createIndividualOrBusiness: async (companyId: string, xGustoApiVersion?: '2024-03-01', contractorsCreateIndividualOrBusinessRequest?: ContractorsCreateIndividualOrBusinessRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createIndividualOrBusiness', 'companyId', companyId)
            const localVarPath = `/v1/companies/{company_id}/contractors`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId !== undefined ? companyId : `-company_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: contractorsCreateIndividualOrBusinessRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/companies/{company_id}/contractors',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(contractorsCreateIndividualOrBusinessRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all contractors, active and inactive, individual and business, for a company.  scope: `contractors:read`
         * @summary Get contractors of a company
         * @param {string} companyId The UUID of the company
         * @param {number} [page] The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
         * @param {number} [per] Number of objects per page. For majority of endpoints will default to 25
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (companyId: string, page?: number, per?: number, xGustoApiVersion?: '2024-03-01', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getAll', 'companyId', companyId)
            const localVarPath = `/v1/companies/{company_id}/contractors`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId !== undefined ? companyId : `-company_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (per !== undefined) {
                localVarQueryParameter['per'] = per;
            }

            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/companies/{company_id}/contractors',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a contractor.  scope: `contractors:read`
         * @summary Get a contractor
         * @param {string} contractorId The UUID of the contractor
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (contractorId: string, xGustoApiVersion?: '2024-03-01', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractorId' is not null or undefined
            assertParamExists('getDetails', 'contractorId', contractorId)
            const localVarPath = `/v1/contractors/{contractor_id}`
                .replace(`{${"contractor_id"}}`, encodeURIComponent(String(contractorId !== undefined ? contractorId : `-contractor_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/contractors/{contractor_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a contractor.  scope: `contractors:write`  > 🚧 Warning > > Watch out when changing a contractor\'s type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
         * @summary Update a contractor
         * @param {string} contractorId The UUID of the contractor
         * @param {'2024-03-01'} [xGustoApiVersion] Determines the date-based API version associated with your API call. If none is provided, your application\&#39;s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
         * @param {ContractorsUpdateContractorRequest} [contractorsUpdateContractorRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContractor: async (contractorId: string, xGustoApiVersion?: '2024-03-01', contractorsUpdateContractorRequest?: ContractorsUpdateContractorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contractorId' is not null or undefined
            assertParamExists('updateContractor', 'contractorId', contractorId)
            const localVarPath = `/v1/contractors/{contractor_id}`
                .replace(`{${"contractor_id"}}`, encodeURIComponent(String(contractorId !== undefined ? contractorId : `-contractor_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (xGustoApiVersion != null) {
                localVarHeaderParameter['X-Gusto-API-Version'] = String(xGustoApiVersion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: contractorsUpdateContractorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/contractors/{contractor_id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(contractorsUpdateContractorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContractorsApi - functional programming interface
 * @export
 */
export const ContractorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContractorsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an individual or business contractor.  scope: `contractors:manage`
         * @summary Create a contractor
         * @param {ContractorsApiCreateIndividualOrBusinessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createIndividualOrBusiness(requestParameters: ContractorsApiCreateIndividualOrBusinessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contractor>> {
            const contractorsCreateIndividualOrBusinessRequest: ContractorsCreateIndividualOrBusinessRequest = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createIndividualOrBusiness(requestParameters.companyId, requestParameters.xGustoApiVersion, contractorsCreateIndividualOrBusinessRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all contractors, active and inactive, individual and business, for a company.  scope: `contractors:read`
         * @summary Get contractors of a company
         * @param {ContractorsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: ContractorsApiGetAllRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Contractor>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.companyId, requestParameters.page, requestParameters.per, requestParameters.xGustoApiVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a contractor.  scope: `contractors:read`
         * @summary Get a contractor
         * @param {ContractorsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: ContractorsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contractor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.contractorId, requestParameters.xGustoApiVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a contractor.  scope: `contractors:write`  > 🚧 Warning > > Watch out when changing a contractor\'s type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
         * @summary Update a contractor
         * @param {ContractorsApiUpdateContractorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateContractor(requestParameters: ContractorsApiUpdateContractorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contractor>> {
            const contractorsUpdateContractorRequest: ContractorsUpdateContractorRequest = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateContractor(requestParameters.contractorId, requestParameters.xGustoApiVersion, contractorsUpdateContractorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContractorsApi - factory interface
 * @export
 */
export const ContractorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContractorsApiFp(configuration)
    return {
        /**
         * Create an individual or business contractor.  scope: `contractors:manage`
         * @summary Create a contractor
         * @param {ContractorsApiCreateIndividualOrBusinessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createIndividualOrBusiness(requestParameters: ContractorsApiCreateIndividualOrBusinessRequest, options?: AxiosRequestConfig): AxiosPromise<Contractor> {
            return localVarFp.createIndividualOrBusiness(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all contractors, active and inactive, individual and business, for a company.  scope: `contractors:read`
         * @summary Get contractors of a company
         * @param {ContractorsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: ContractorsApiGetAllRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Contractor>> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a contractor.  scope: `contractors:read`
         * @summary Get a contractor
         * @param {ContractorsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: ContractorsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Contractor> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a contractor.  scope: `contractors:write`  > 🚧 Warning > > Watch out when changing a contractor\'s type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
         * @summary Update a contractor
         * @param {ContractorsApiUpdateContractorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContractor(requestParameters: ContractorsApiUpdateContractorRequest, options?: AxiosRequestConfig): AxiosPromise<Contractor> {
            return localVarFp.updateContractor(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createIndividualOrBusiness operation in ContractorsApi.
 * @export
 * @interface ContractorsApiCreateIndividualOrBusinessRequest
 */
export type ContractorsApiCreateIndividualOrBusinessRequest = {
    
    /**
    * The UUID of the company
    * @type {string}
    * @memberof ContractorsApiCreateIndividualOrBusiness
    */
    readonly companyId: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof ContractorsApiCreateIndividualOrBusiness
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
} & ContractorsCreateIndividualOrBusinessRequest

/**
 * Request parameters for getAll operation in ContractorsApi.
 * @export
 * @interface ContractorsApiGetAllRequest
 */
export type ContractorsApiGetAllRequest = {
    
    /**
    * The UUID of the company
    * @type {string}
    * @memberof ContractorsApiGetAll
    */
    readonly companyId: string
    
    /**
    * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
    * @type {number}
    * @memberof ContractorsApiGetAll
    */
    readonly page?: number
    
    /**
    * Number of objects per page. For majority of endpoints will default to 25
    * @type {number}
    * @memberof ContractorsApiGetAll
    */
    readonly per?: number
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof ContractorsApiGetAll
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
}

/**
 * Request parameters for getDetails operation in ContractorsApi.
 * @export
 * @interface ContractorsApiGetDetailsRequest
 */
export type ContractorsApiGetDetailsRequest = {
    
    /**
    * The UUID of the contractor
    * @type {string}
    * @memberof ContractorsApiGetDetails
    */
    readonly contractorId: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof ContractorsApiGetDetails
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
}

/**
 * Request parameters for updateContractor operation in ContractorsApi.
 * @export
 * @interface ContractorsApiUpdateContractorRequest
 */
export type ContractorsApiUpdateContractorRequest = {
    
    /**
    * The UUID of the contractor
    * @type {string}
    * @memberof ContractorsApiUpdateContractor
    */
    readonly contractorId: string
    
    /**
    * Determines the date-based API version associated with your API call. If none is provided, your application\'s [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
    * @type {'2024-03-01'}
    * @memberof ContractorsApiUpdateContractor
    */
    readonly xGustoApiVersion?: '2024-03-01'
    
} & ContractorsUpdateContractorRequest

/**
 * ContractorsApiGenerated - object-oriented interface
 * @export
 * @class ContractorsApiGenerated
 * @extends {BaseAPI}
 */
export class ContractorsApiGenerated extends BaseAPI {
    /**
     * Create an individual or business contractor.  scope: `contractors:manage`
     * @summary Create a contractor
     * @param {ContractorsApiCreateIndividualOrBusinessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractorsApiGenerated
     */
    public createIndividualOrBusiness(requestParameters: ContractorsApiCreateIndividualOrBusinessRequest, options?: AxiosRequestConfig) {
        return ContractorsApiFp(this.configuration).createIndividualOrBusiness(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all contractors, active and inactive, individual and business, for a company.  scope: `contractors:read`
     * @summary Get contractors of a company
     * @param {ContractorsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractorsApiGenerated
     */
    public getAll(requestParameters: ContractorsApiGetAllRequest, options?: AxiosRequestConfig) {
        return ContractorsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a contractor.  scope: `contractors:read`
     * @summary Get a contractor
     * @param {ContractorsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractorsApiGenerated
     */
    public getDetails(requestParameters: ContractorsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return ContractorsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a contractor.  scope: `contractors:write`  > 🚧 Warning > > Watch out when changing a contractor\'s type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
     * @summary Update a contractor
     * @param {ContractorsApiUpdateContractorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContractorsApiGenerated
     */
    public updateContractor(requestParameters: ContractorsApiUpdateContractorRequest, options?: AxiosRequestConfig) {
        return ContractorsApiFp(this.configuration).updateContractor(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
