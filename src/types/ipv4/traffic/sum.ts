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
  /**
   * The IPv4 address to get the traffic data for.
   * Must follow the IPv4 address format.
   *
   * @example 192.168.1.1
   */
  ip: string;
}

export type GetIpv4TrafficSumByIpResponse = TrafficSumResponse;

export interface GetIpv4TrafficSumByTagRequest extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv4TrafficSumByTagResponse = TrafficSumResponse;
