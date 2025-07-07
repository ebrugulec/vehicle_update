import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "schema";
export declare enum OperationalStatus {
    /** MAINTENANCE_REQUIRED - Indicates that the vehicle requires maintenance or repairs. */
    MAINTENANCE_REQUIRED = 0,
    /** PARTLY_OPERATIONAL - Specifies that the vehicle is partially functional but may have limited capabilities. */
    PARTLY_OPERATIONAL = 1,
    /** OPERATIONAL - Represents that the vehicle is fully functional and available for use. */
    OPERATIONAL = 2,
    /** IN_TRANSFER - Specifies that the vehicle is being transported between locations. */
    IN_TRANSFER = 3,
    /** AT_SUPPLIER - Indicates that the vehicle is currently located at the supplier's facility. */
    AT_SUPPLIER = 4,
    /** STOLEN - Indicates that the vehicle has been reported as stolen. */
    STOLEN = 5,
    /** IN_STORAGE - Represents that the vehicle is stored and not actively in use. */
    IN_STORAGE = 6,
    UNRECOGNIZED = -1
}
export declare function operationalStatusFromJSON(object: any): OperationalStatus;
export declare function operationalStatusToJSON(object: OperationalStatus): string;
export interface VehicleUpdate {
    /** describing the exact timestamp a given event was triggered. */
    eventTimestampPosix: number;
    /** describing the event name */
    eventName: string;
    /** unique identifier for vehicle */
    licensePlate: string;
    /** describing the supplier name of the vehicle */
    supplierName: string;
    /** describing the hub slug where the vehicle is used */
    hubSlug: string;
    /** describing the unique identifier for vehicle */
    vehicleId: string;
    /** describing the current status of the vehicle */
    operationalStatus: string;
}
export declare const VehicleUpdate: MessageFns<VehicleUpdate>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
