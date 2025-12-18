// types/deviation.ts
export type DeviationStatus = "rejected" | "resolved";
export type Priority = "low" | "medium" | "high";

export interface Deviation {
    id: number;
    name: string;
    status: DeviationStatus;
    statusName: string;
    createdAtUtc: string;
    updatedAtUtc: string;
    updatedByUser: string;
    priority: Priority;
    responsibleUser: string;
    objectName: string;
    roomName: string;
    levelName: string;
    buildingName: string;
    propertyName: string;
    objectIcon?: {
        url: string;
        name: string;
    };
}