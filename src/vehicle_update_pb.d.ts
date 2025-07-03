// package: schema
// file: vehicle_update.proto

import * as jspb from "google-protobuf";

export class VehicleUpdate extends jspb.Message {
  getEventTimestampPosix(): number;
  setEventTimestampPosix(value: number): void;

  getEventName(): string;
  setEventName(value: string): void;

  getLicensePlate(): string;
  setLicensePlate(value: string): void;

  getSupplierName(): string;
  setSupplierName(value: string): void;

  getHubSlug(): string;
  setHubSlug(value: string): void;

  getVehicleId(): string;
  setVehicleId(value: string): void;

  getOperationalStatus(): string;
  setOperationalStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleUpdate): VehicleUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VehicleUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleUpdate;
  static deserializeBinaryFromReader(message: VehicleUpdate, reader: jspb.BinaryReader): VehicleUpdate;
}

export namespace VehicleUpdate {
  export type AsObject = {
    eventTimestampPosix: number,
    eventName: string,
    licensePlate: string,
    supplierName: string,
    hubSlug: string,
    vehicleId: string,
    operationalStatus: string,
  }
}

export interface OperationalStatusMap {
  MAINTENANCE_REQUIRED: 0;
  PARTLY_OPERATIONAL: 1;
  OPERATIONAL: 2;
  IN_TRANSFER: 3;
  AT_SUPPLIER: 4;
  STOLEN: 5;
  IN_STORAGE: 6;
}

export const OperationalStatus: OperationalStatusMap;

