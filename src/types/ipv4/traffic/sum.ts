import {
  type OptionalTrafficRequest,
  type TrafficSumResponse,
} from "~/types/common";

export interface GetIpv4TrafficSumBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv4TrafficSumBySubnetResponse = TrafficSumResponse;

export interface GetIpv4TrafficSumByIpRequest extends OptionalTrafficRequest {
  ip: string;
}

export type GetIpv4TrafficSumByIpResponse = TrafficSumResponse;

export interface GetIpv4TrafficSumByTagRequest extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv4TrafficSumByTagResponse = TrafficSumResponse;
