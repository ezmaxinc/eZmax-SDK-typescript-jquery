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
 * Request for the /1/module/sspr/resetPassword API Request
 */
export interface SsprResetPasswordV1Request {
    /**
     * The customer code assigned to your account
     */
    pksCustomerCode: string;

    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;

    eUserTypeSSPR: models.FieldEUserTypeSSPR;

    /**
     * The email address.
     */
    sEmailAddress?: string;

    /**
     * The Login name of the User.
     */
    sUserLoginname?: string;

    /**
     * Hex Encoded Secret SSPR token
     */
    binUserSSPRtoken: string;

}
