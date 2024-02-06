import {
  type OptionalTrafficRequest,
  type TrafficTimeseriesResponse,
} from "../../common";

export interface GetIpv4TrafficTimeseriesBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv4TrafficTimeseriesBySubnetResponse =
  TrafficTimeseriesResponse;

export interface GetIpv4TrafficTimeseriesByIpRequest
  extends OptionalTrafficRequest {
  /**
   * The IPv4 address to get the traffic data for.
   * Must follow the IPv4 address format.
   *
   * @example 192.168.1.1
   */
  ip: string;
}

export type GetIpv4TrafficTimeseriesByIpResponse = TrafficTimeseriesResponse;

export interface GetIpv4TrafficTimeseriesByTagRequest
  extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv4TrafficTimeseriesByTagResponse = TrafficTimeseriesResponse;
