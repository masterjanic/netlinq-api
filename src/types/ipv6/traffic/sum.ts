import {
  type OptionalTrafficRequest,
  type TrafficSumResponse,
} from "~/types/common";

export interface GetIpv6TrafficSumBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv6TrafficSumBySubnetResponse = TrafficSumResponse;

export interface GetIpv6TrafficSumByIpRequest extends OptionalTrafficRequest {
  ip: string;
}

export type GetIpv6TrafficSumByIpResponse = TrafficSumResponse;

export interface GetIpv6TrafficSumByTagRequest extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv6TrafficSumByTagResponse = TrafficSumResponse;
