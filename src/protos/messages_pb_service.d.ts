// package: proto
// file: messages.proto

import * as messages_pb from "./messages_pb";
import {grpc} from "grpc-web-client";

type EmployeeServicesgetByBadgeNumber = {
  readonly methodName: string;
  readonly service: typeof EmployeeServices;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.GetByBadgeNumberRequest;
  readonly responseType: typeof messages_pb.EmployeeResponse;
};

type EmployeeServicesgetAll = {
  readonly methodName: string;
  readonly service: typeof EmployeeServices;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof messages_pb.GetAllrequest;
  readonly responseType: typeof messages_pb.EmployeeResponse;
};

type EmployeeServicessaveEmployee = {
  readonly methodName: string;
  readonly service: typeof EmployeeServices;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.EmployeeRequest;
  readonly responseType: typeof messages_pb.EmployeeResponse;
};

type EmployeeServicessaveAll = {
  readonly methodName: string;
  readonly service: typeof EmployeeServices;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof messages_pb.EmployeeRequest;
  readonly responseType: typeof messages_pb.EmployeeResponse;
};

type EmployeeServicesaddPhoto = {
  readonly methodName: string;
  readonly service: typeof EmployeeServices;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.AddPhotoRequest;
  readonly responseType: typeof messages_pb.AddPhotoResponse;
};

export class EmployeeServices {
  static readonly serviceName: string;
  static readonly getByBadgeNumber: EmployeeServicesgetByBadgeNumber;
  static readonly getAll: EmployeeServicesgetAll;
  static readonly saveEmployee: EmployeeServicessaveEmployee;
  static readonly saveAll: EmployeeServicessaveAll;
  static readonly addPhoto: EmployeeServicesaddPhoto;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class EmployeeServicesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getByBadgeNumber(
    requestMessage: messages_pb.GetByBadgeNumberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: messages_pb.EmployeeResponse|null) => void
  ): void;
  getByBadgeNumber(
    requestMessage: messages_pb.GetByBadgeNumberRequest,
    callback: (error: ServiceError, responseMessage: messages_pb.EmployeeResponse|null) => void
  ): void;
  getAll(requestMessage: messages_pb.GetAllrequest, metadata?: grpc.Metadata): ResponseStream<messages_pb.EmployeeResponse>;
  saveEmployee(
    requestMessage: messages_pb.EmployeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: messages_pb.EmployeeResponse|null) => void
  ): void;
  saveEmployee(
    requestMessage: messages_pb.EmployeeRequest,
    callback: (error: ServiceError, responseMessage: messages_pb.EmployeeResponse|null) => void
  ): void;
  saveAll(): void;
  addPhoto(): void;
}

