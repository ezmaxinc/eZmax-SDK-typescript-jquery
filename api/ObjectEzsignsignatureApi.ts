/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
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


export class ObjectEzsignsignatureApi {
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
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @summary Create a new Ezsignsignature
     * @param modelsEzsignsignatureCreateObjectV1Request 
     */
    public ezsignsignatureCreateObjectV1(modelsEzsignsignatureCreateObjectV1Request: Array<models.EzsignsignatureCreateObjectV1Request>, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.EzsignsignatureCreateObjectV1Response;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/1/object/ezsignsignature';

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'modelsEzsignsignatureCreateObjectV1Request' is not null or undefined
        if (modelsEzsignsignatureCreateObjectV1Request === null || modelsEzsignsignatureCreateObjectV1Request === undefined) {
            throw new Error('Required parameter modelsEzsignsignatureCreateObjectV1Request was null or undefined when calling ezsignsignatureCreateObjectV1.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Authorization) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(modelsEzsignsignatureCreateObjectV1Request);
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
            { response: JQueryXHR; body: models.EzsignsignatureCreateObjectV1Response;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.EzsignsignatureCreateObjectV1Response, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * 
     * @summary Delete an existing Ezsignsignature
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.EzsignsignatureDeleteObjectV1Response;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}'.replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureDeleteObjectV1.');
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
            type: 'DELETE',
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
            { response: JQueryXHR; body: models.EzsignsignatureDeleteObjectV1Response;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.EzsignsignatureDeleteObjectV1Response, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignsignature\'s children IDs
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public ezsignsignatureGetChildrenV1(pkiEzsignsignatureID: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body?: any;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren'.replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetChildrenV1.');
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
            { response: JQueryXHR; body?: any;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * 
     * @summary Retrieve an existing Ezsignsignature
     * @param pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    public ezsignsignatureGetObjectV1(pkiEzsignsignatureID: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.EzsignsignatureGetObjectV1Response;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/1/object/ezsignsignature/{pkiEzsignsignatureID}'.replace('{' + 'pkiEzsignsignatureID' + '}', encodeURIComponent(String(pkiEzsignsignatureID)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'pkiEzsignsignatureID' is not null or undefined
        if (pkiEzsignsignatureID === null || pkiEzsignsignatureID === undefined) {
            throw new Error('Required parameter pkiEzsignsignatureID was null or undefined when calling ezsignsignatureGetObjectV1.');
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
            { response: JQueryXHR; body: models.EzsignsignatureGetObjectV1Response;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.EzsignsignatureGetObjectV1Response, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

}
