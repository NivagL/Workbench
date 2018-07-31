import { Activity } from './activity'

export class AssetFault {
    /// <summary>
    /// Northpower internal Id
    /// Lookup against internal data table
    /// </summary>
    Id: number;

    /// <summary>
    /// RM, PM, CM, AR etc
    /// Lookup against static data
    /// </summary>
    WorkTypeId: number;

    /// <summary>
    /// Id of Client, Vector, WE, Whangarei
    /// Lookup against static data
    /// </summary>
    ClientId: number;

    /// <summary>
    /// The task was for a specific reason
    /// Lookup against static data
    /// </summary>
    TaskTypeId: number;

    /// <summary>
    /// The task type has a category
    /// Lookup against static data
    /// </summary>
    TaskCategoryId: number;

    /// <summary>
    /// The status of the AssetFault
    /// Should be a work order sub-status
    /// </summary>
    Status: string;

    /// <summary>
    /// The Client allocated request Id 
    /// Not a Northpower Id
    /// </summary>
    NetworkId: number;

    /// <summary>
    /// The Id allocated by Click outbound
    /// Not a Northpower Id
    /// </summary>
    MessageId: number;

    /// <summary>
    /// The original description from the network owner
    /// </summary>
    Description: string;

    /// <summary>
    /// When was the issue raised
    /// </summary>
    Identified: Date;

    /// <summary>
    /// When Northpwoer started addressing the issue
    /// </summary>
    Started: Date;

    /// <summary>
    /// When Northpwoer completed addressing the issue
    /// </summary>
    Completed: Date;

    /// <summary>
    /// The engineer assigned to the issue
    /// </summary>
    Engineer: number;

    /// <summary>
    /// The response gather by the engineer in the field
    /// </summary>
    EngineerResponse: string;

    /// <summary>
    /// The asset identifier
    /// Lookup against internal data table
    /// </summary>
    AssetId: number;

    /// <summary>
    /// The asset type
    /// Lookup against static data
    /// </summary>
    AssetTypeId: number;

    /// <summary>
    /// The asset sub type
    /// Lookup against static data
    /// </summary>
    AssetSubTypeId: number;

    /// <summary>
    /// The address of the original fault
    /// This may differ to the asset address
    /// </summary>
    Address: string;

    /// <summary>
    /// Installation Connection Point
    /// </summary>
    ICP: string;

    /// <summary>
    /// The summary for all activity
    /// Usually from the QA tool
    /// </summary>
    Summary: string;

    /// <summary>
    /// The damage to the asset
    /// Lookup against static data
    /// </summary>
    DamageId: number;

    /// <summary>
    /// The cause of the damage to the asset
    /// Lookup against static data
    /// </summary>
    CauseId: number;

    /// <summary>
    /// The sub cause of the damage to the asset
    /// Lookup against static data
    /// </summary>
    SubCauseId: number;

    /// <summary>
    /// The list of activities carried out against the asset
    /// Lookup against static data
    /// </summary>
    //Activities: Array<number>;
}