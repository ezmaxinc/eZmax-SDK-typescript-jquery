/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Response for the /1/object/ezsigndocument/{pkiEzsigndocument}/applyEzsigntemplate API Request
 */
export interface EzsigndocumentApplyEzsigntemplateV1Response {
    objDebugPayload?: models.CommonResponseObjDebugPayload;

    objDebug?: models.CommonResponseObjDebug;

}
