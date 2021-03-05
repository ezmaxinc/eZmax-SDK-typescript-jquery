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
 * An Apikey Object
 */
export interface ApikeyResponse {
    objApikeyDescription: models.MultilingualApikeyDescription;

    /**
     * The secret token for the API key.  This will be returned only on creation.
     */
    sComputedToken?: string;

    /**
     * The unique ID of the Apikey
     */
    pkiApikeyID: number;

    objAudit: models.CommonAudit;

}
