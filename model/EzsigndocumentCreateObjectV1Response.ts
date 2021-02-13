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

import * as models from './models';

/**
 * Response for the /1/object/ezsigndocument/createObject API Request
 */
export interface EzsigndocumentCreateObjectV1Response {
    mPayload: models.EzsigndocumentCreateObjectV1ResponseMPayload;

    objDebugPayload?: models.CommonResponseObjDebugPayload;

    objDebug?: models.CommonResponseObjDebug;

}
