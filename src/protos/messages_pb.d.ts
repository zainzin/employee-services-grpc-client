// package: proto
// file: messages.proto

import * as jspb from "google-protobuf";

export class Employee extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBadgenumber(): number;
  setBadgenumber(value: number): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getVacationaccrualrate(): number;
  setVacationaccrualrate(value: number): void;

  getVacationaccrued(): number;
  setVacationaccrued(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employee.AsObject;
  static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employee;
  static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
  export type AsObject = {
    id: number,
    badgenumber: number,
    firstname: string,
    lastname: string,
    vacationaccrualrate: number,
    vacationaccrued: number,
  }
}

export class GetAllrequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllrequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllrequest): GetAllrequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllrequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllrequest;
  static deserializeBinaryFromReader(message: GetAllrequest, reader: jspb.BinaryReader): GetAllrequest;
}

export namespace GetAllrequest {
  export type AsObject = {
  }
}

export class GetByBadgeNumberRequest extends jspb.Message {
  getBadgenumber(): number;
  setBadgenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByBadgeNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByBadgeNumberRequest): GetByBadgeNumberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByBadgeNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByBadgeNumberRequest;
  static deserializeBinaryFromReader(message: GetByBadgeNumberRequest, reader: jspb.BinaryReader): GetByBadgeNumberRequest;
}

export namespace GetByBadgeNumberRequest {
  export type AsObject = {
    badgenumber: number,
  }
}

export class EmployeeRequest extends jspb.Message {
  hasEmployee(): boolean;
  clearEmployee(): void;
  getEmployee(): Employee | undefined;
  setEmployee(value?: Employee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmployeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmployeeRequest): EmployeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmployeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmployeeRequest;
  static deserializeBinaryFromReader(message: EmployeeRequest, reader: jspb.BinaryReader): EmployeeRequest;
}

export namespace EmployeeRequest {
  export type AsObject = {
    employee?: Employee.AsObject,
  }
}

export class EmployeeResponse extends jspb.Message {
  hasEmployee(): boolean;
  clearEmployee(): void;
  getEmployee(): Employee | undefined;
  setEmployee(value?: Employee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmployeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmployeeResponse): EmployeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmployeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmployeeResponse;
  static deserializeBinaryFromReader(message: EmployeeResponse, reader: jspb.BinaryReader): EmployeeResponse;
}

export namespace EmployeeResponse {
  export type AsObject = {
    employee?: Employee.AsObject,
  }
}

export class AddPhotoRequest extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPhotoRequest): AddPhotoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPhotoRequest;
  static deserializeBinaryFromReader(message: AddPhotoRequest, reader: jspb.BinaryReader): AddPhotoRequest;
}

export namespace AddPhotoRequest {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class AddPhotoResponse extends jspb.Message {
  getIssuccess(): boolean;
  setIssuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPhotoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPhotoResponse): AddPhotoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPhotoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPhotoResponse;
  static deserializeBinaryFromReader(message: AddPhotoResponse, reader: jspb.BinaryReader): AddPhotoResponse;
}

export namespace AddPhotoResponse {
  export type AsObject = {
    issuccess: boolean,
  }
}

