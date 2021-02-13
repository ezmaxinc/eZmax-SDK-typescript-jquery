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
 * An Ezsigndocument Object and children to create a complete structure
 */
export interface EzsigndocumentResponseCompound {
    /**
     * The unique ID of the Ezsignfolder
     */
    fkiEzsignfolderID: number;

    /**
     * The maximum date and time at which the document can be signed.
     */
    dtEzsigndocumentDuedate: string;

    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;

    /**
     * The actual file name that will be used when downloading or attaching to an email.
     */
    sEzsigndocumentFilename: string;

    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    sEzsigndocumentName: string;

    /**
     * The unique ID of the Ezsigntemplate
     */
    pkiEzsigndocumentID: number;

    eEzsigndocumentStep: models.FieldEEzsigndocumentStep;

    /**
     * The date and time when the Ezsigndocument was first sent.
     */
    dtEzsigndocumentFirstsend: string;

    /**
     * The date and time when the Ezsigndocument was sent the last time.
     */
    dtEzsigndocumentLastsend: string;

    /**
     * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     */
    iEzsigndocumentOrder: number;

    /**
     * The number of pages in the Ezsigndocument.
     */
    iEzsigndocumentPagetotal: number;

    /**
     * The number of signatures that were signed in the document.
     */
    iEzsigndocumentSignaturesigned: number;

    /**
     * The number of total signatures that were requested in the Ezsigndocument.
     */
    iEzsigndocumentSignaturetotal: number;

    /**
     * MD5 Hash of the initial PDF Document before signatures were applied to it.
     */
    sEzsigndocumentMD5initial: string;

    /**
     * MD5 Hash of the final PDF Document after all signatures were applied to it.
     */
    sEzsigndocumentMD5signed: string;

    objAudit: models.CommonAudit;

}
