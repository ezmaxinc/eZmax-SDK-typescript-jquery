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

import * as models from './models';

/**
 * Response for the /1/object/ezsignsignature/createObject API Request
 */
export interface EzsignsignatureCreateObjectV1Response {
    mPayload: models.EzsignsignatureCreateObjectV1ResponseMPayload;

    objDebugPayload?: models.CommonResponseObjDebugPayload;

    objDebug?: models.CommonResponseObjDebug;

}
