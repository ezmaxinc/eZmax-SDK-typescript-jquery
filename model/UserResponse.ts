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
 * A User Object
 */
export interface UserResponse {
    /**
     * The unique ID of the User
     */
    pkiUserID: number;

    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;

    eUserType: models.FieldEUserType;

    /**
     * The First name of the user
     */
    sUserFirstname: string;

    /**
     * The Last name of the user
     */
    sUserLastname: string;

    /**
     * The Login name of the User.
     */
    sUserLoginname: string;

    objAudit: models.CommonAudit;

}
