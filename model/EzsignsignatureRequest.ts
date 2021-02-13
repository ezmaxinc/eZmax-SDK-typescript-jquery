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
 * An Ezsignsignature Object
 */
export interface EzsignsignatureRequest {
    /**
     * A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
     */
    fkiEzsignfoldersignerassociationID: number;

    /**
     * The page number in the document where to apply the signature
     */
    iEzsignpagePagenumber: number;

    /**
     * The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    iEzsignsignatureX: number;

    /**
     * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    iEzsignsignatureY: number;

    /**
     * The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     */
    iEzsignsignatureStep: number;

    /**
     * The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
     */
    eEzsignsignatureType: EzsignsignatureRequest.EEzsignsignatureTypeEnum;

    /**
     * A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
     */
    fkiEzsigndocumentID: number;

}
export namespace EzsignsignatureRequest {
    export enum EEzsignsignatureTypeEnum {
        Acknowledgement = <any> 'Acknowledgement',
        Handwritten = <any> 'Handwritten',
        Initials = <any> 'Initials',
        Name = <any> 'Name'
    }
}
