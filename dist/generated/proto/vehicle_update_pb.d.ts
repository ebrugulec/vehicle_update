import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file proto/vehicle_update.proto.
 */
export declare const file_proto_vehicle_update: GenFile;
/**
 * @generated from message schema.VehicleUpdate
 */
export type VehicleUpdate = Message<"schema.VehicleUpdate"> & {
    /**
     * describing the exact timestamp a given event was triggered
     *
     * @generated from field: int64 event_timestamp_posix = 1;
     */
    eventTimestampPosix: bigint;
    /**
     * describing the event name
     *
     * @generated from field: string event_name = 2;
     */
    eventName: string;
    /**
     * unique identifier for vehicle
     *
     * @generated from field: string license_plate = 3;
     */
    licensePlate: string;
    /**
     * describing the supplier name of the vehicle
     *
     * @generated from field: string supplier_name = 4;
     */
    supplierName: string;
    /**
     * describing the hub slug where the vehicle is used
     *
     * @generated from field: string hub_slug = 5;
     */
    hubSlug: string;
    /**
     * describing the unique identifier for vehicle
     *
     * @generated from field: string vehicle_id = 6;
     */
    vehicleId: string;
    /**
     * describing the current status of the vehicle
     *
     * @generated from field: string operational_status = 7;
     */
    operationalStatus: string;
};
/**
 * Describes the message schema.VehicleUpdate.
 * Use `create(VehicleUpdateSchema)` to create a new message.
 */
export declare const VehicleUpdateSchema: GenMessage<VehicleUpdate>;
/**
 * @generated from enum schema.OperationalStatus
 */
export declare enum OperationalStatus {
    /**
     * Indicates that the vehicle requires maintenance or repairs.
     *
     * @generated from enum value: MAINTENANCE_REQUIRED = 0;
     */
    MAINTENANCE_REQUIRED = 0,
    /**
     * Specifies that the vehicle is partially functional but may have limited capabilities.
     *
     * @generated from enum value: PARTLY_OPERATIONAL = 1;
     */
    PARTLY_OPERATIONAL = 1,
    /**
     * Represents that the vehicle is fully functional and available for use.
     *
     * @generated from enum value: OPERATIONAL = 2;
     */
    OPERATIONAL = 2,
    /**
     * Specifies that the vehicle is being transported between locations.
     *
     * @generated from enum value: IN_TRANSFER = 3;
     */
    IN_TRANSFER = 3,
    /**
     * Indicates that the vehicle is currently located at the supplier's facility.
     *
     * @generated from enum value: AT_SUPPLIER = 4;
     */
    AT_SUPPLIER = 4,
    /**
     * Indicates that the vehicle has been reported as stolen.
     *
     * @generated from enum value: STOLEN = 5;
     */
    STOLEN = 5,
    /**
     * Represents that the vehicle is stored and not actively in use.
     *
     * @generated from enum value: IN_STORAGE = 6;
     */
    IN_STORAGE = 6
}
/**
 * Describes the enum schema.OperationalStatus.
 */
export declare const OperationalStatusSchema: GenEnum<OperationalStatus>;
