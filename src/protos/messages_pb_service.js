// package: proto
// file: messages.proto

var messages_pb = require("./messages_pb");
var grpc = require("grpc-web-client").grpc;

var EmployeeServices = (function () {
  function EmployeeServices() {}
  EmployeeServices.serviceName = "proto.EmployeeServices";
  return EmployeeServices;
}());

EmployeeServices.getByBadgeNumber = {
  methodName: "getByBadgeNumber",
  service: EmployeeServices,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.GetByBadgeNumberRequest,
  responseType: messages_pb.EmployeeResponse
};

EmployeeServices.getAll = {
  methodName: "getAll",
  service: EmployeeServices,
  requestStream: false,
  responseStream: true,
  requestType: messages_pb.GetAllrequest,
  responseType: messages_pb.EmployeeResponse
};

EmployeeServices.saveEmployee = {
  methodName: "saveEmployee",
  service: EmployeeServices,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.EmployeeRequest,
  responseType: messages_pb.EmployeeResponse
};

EmployeeServices.saveAll = {
  methodName: "saveAll",
  service: EmployeeServices,
  requestStream: true,
  responseStream: true,
  requestType: messages_pb.EmployeeRequest,
  responseType: messages_pb.EmployeeResponse
};

EmployeeServices.addPhoto = {
  methodName: "addPhoto",
  service: EmployeeServices,
  requestStream: true,
  responseStream: false,
  requestType: messages_pb.AddPhotoRequest,
  responseType: messages_pb.AddPhotoResponse
};

exports.EmployeeServices = EmployeeServices;

function EmployeeServicesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EmployeeServicesClient.prototype.getByBadgeNumber = function getByBadgeNumber(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(EmployeeServices.getByBadgeNumber, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

EmployeeServicesClient.prototype.getAll = function getAll(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(EmployeeServices.getAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

EmployeeServicesClient.prototype.saveEmployee = function saveEmployee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(EmployeeServices.saveEmployee, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

EmployeeServices.prototype.saveAll = function saveAll() {
  throw new Error("Client streaming is not currently supported");
}

EmployeeServices.prototype.addPhoto = function addPhoto() {
  throw new Error("Bi-directional streaming is not currently supported");
}

exports.EmployeeServicesClient = EmployeeServicesClient;

