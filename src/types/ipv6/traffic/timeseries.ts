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
  ip: string;
}

export type GetIpv6TrafficTimeseriesByIpResponse = TrafficTimeseriesResponse;

export interface GetIpv6TrafficTimeseriesByTagRequest
  extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv6TrafficTimeseriesByTagResponse = TrafficTimeseriesResponse;
