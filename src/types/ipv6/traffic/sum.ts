import {
  type OptionalTrafficRequest,
  type TrafficSumResponse,
} from "@/types/common";

export interface GetIpv6TrafficSumBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv6TrafficSumBySubnetResponse = TrafficSumResponse;

export interface GetIpv6TrafficSumByIpRequest extends OptionalTrafficRequest {
  /**
   * The IPv6 address to get the traffic data for.
   * Must follow the IPv6 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;
}

export type GetIpv6TrafficSumByIpResponse = TrafficSumResponse;

export interface GetIpv6TrafficSumByTagRequest extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv6TrafficSumByTagResponse = TrafficSumResponse;
