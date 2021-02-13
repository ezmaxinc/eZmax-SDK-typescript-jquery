/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class GlobalCustomerApi {
    protected basePath = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest';
    public defaultHeaders: Array<string> = [];
    public defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings = undefined;
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration, defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        if (defaultExtraJQueryAjaxSettings) {
            this.defaultExtraJQueryAjaxSettings = defaultExtraJQueryAjaxSettings;
        }
    }

    private extendObj<T1 extends object, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Retrieve the customer\'s specific server endpoint where to send requests. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer\'s data is stored.
     * @summary Get customer endpoint
     * @param pksCustomerCode The customer code assigned to your account
     * @param sInfrastructureproductCode The infrastructure product Code  If undefined, \&quot;appcluster01\&quot; is assumed
     */
    public globalCustomerGetEndpointV1(pksCustomerCode: string, sInfrastructureproductCode?: 'appcluster01' | 'ezsignuser', extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.GlobalCustomerGetEndpointV1Response;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/1/customer/{pksCustomerCode}/endpoint'.replace('{' + 'pksCustomerCode' + '}', encodeURIComponent(String(pksCustomerCode)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'pksCustomerCode' is not null or undefined
        if (pksCustomerCode === null || pksCustomerCode === undefined) {
            throw new Error('Required parameter pksCustomerCode was null or undefined when calling globalCustomerGetEndpointV1.');
        }

        if (sInfrastructureproductCode !== null && sInfrastructureproductCode !== undefined) {
            queryParameters['sInfrastructureproductCode'] = <string><any>sInfrastructureproductCode;
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Authorization) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body: models.GlobalCustomerGetEndpointV1Response;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.GlobalCustomerGetEndpointV1Response, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

}
