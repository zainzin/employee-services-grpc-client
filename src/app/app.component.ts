import { Component } from '@angular/core';
import { grpc } from 'grpc-web-client';
import * as grpcWeb from 'grpc-web';
import {GetAllrequest, GetByBadgeNumberRequest, EmployeeResponse, Employee} from '../protos/messages_pb';
import {EmployeeServices, EmployeeServicesClient} from '../protos/messages_pb_service';
import { unary } from 'grpc-web-client/dist/unary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-client';
  constructor() {
    const employeeService = new EmployeeServicesClient('https://localhost:9000', null);
    const request = new GetByBadgeNumberRequest();
    request.setBadgenumber(1000);
    const metadata = new grpc.Metadata({
    });
    const call = employeeService.getByBadgeNumber(request, metadata
      , (err: grpcWeb.Error, response: EmployeeResponse) => {
      console.log(err);
      console.log(response.getEmployee());
    });
  }



  unaryCall(): void {
    const getByBadgeNumberRequest = new GetByBadgeNumberRequest();
      getByBadgeNumberRequest.setBadgenumber(1000);
      grpc.unary(EmployeeServices.getByBadgeNumber, {
        debug: true,
        host: 'https://localhost:9000',
        request: getByBadgeNumberRequest,
        onEnd: (message) => {
          console.log(message);
        }
      });
  }
}
