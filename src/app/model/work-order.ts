// export class WorkOrder {
//   Id: number;
//   Title: string;
// };

// export class WorkOrder {
//     Id: number;
//     Title: string;
//     Index: number;
// }

export interface WorkOrderActivity {
    id: string;
    workOrderId: string;
    assetId: string;
    activityTypeId: number;
    activityCode?: string;
}


export interface WorkOrder {
    id: string;
    clientId: number;
    workTypeId: number;
    clientRequestId?: string;
    requested: Date;
    received: Date;
    status: number;
    statusChanged: Date;
    description?: string;
    scheduledStart: Date;
    scheduledEnd: Date;
    activities?: Array<WorkOrderActivity>;
}
