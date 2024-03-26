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
 * @interface IntrospectionExchangeRefreshTokenRequest
 */
export interface IntrospectionExchangeRefreshTokenRequest {
    /**
     * Your client id
     * @type {string}
     * @memberof IntrospectionExchangeRefreshTokenRequest
     */
    'client_id': string;
    /**
     * Your client secret
     * @type {string}
     * @memberof IntrospectionExchangeRefreshTokenRequest
     */
    'client_secret': string;
    /**
     * The redirect URI you set up via the Developer Portal
     * @type {string}
     * @memberof IntrospectionExchangeRefreshTokenRequest
     */
    'redirect_uri'?: string;
    /**
     * The `refresh_token` being exchanged for an access token code
     * @type {string}
     * @memberof IntrospectionExchangeRefreshTokenRequest
     */
    'refresh_token': string;
    /**
     * this should be the literal string \'refresh_token\'
     * @type {string}
     * @memberof IntrospectionExchangeRefreshTokenRequest
     */
    'grant_type': string;
}

