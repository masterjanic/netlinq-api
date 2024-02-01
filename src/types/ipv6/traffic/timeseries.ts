import {
  type OptionalTrafficRequest,
  type TrafficTimeseriesResponse,
} from "~/types/common";

export interface GetIpv6TrafficTimeseriesBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv6TrafficTimeseriesBySubnetResponse =
  TrafficTimeseriesResponse;

export interface GetIpv6TrafficTimeseriesByIpRequest
  extends OptionalTrafficRequest {
  /**
   * The IPv6 address to get the traffic data for.
   * Must follow the IPv6 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;
}

export type GetIpv6TrafficTimeseriesByIpResponse = TrafficTimeseriesResponse;

export interface GetIpv6TrafficTimeseriesByTagRequest
  extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv6TrafficTimeseriesByTagResponse = TrafficTimeseriesResponse;
