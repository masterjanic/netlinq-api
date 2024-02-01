import {
  type OptionalTrafficRequest,
  type TrafficTimeseriesResponse,
} from "~/types/common";

export interface GetIpv4TrafficTimeseriesBySubnetRequest
  extends OptionalTrafficRequest {
  network: string;
  cidr: number;
}

export type GetIpv4TrafficTimeseriesBySubnetResponse =
  TrafficTimeseriesResponse;

export interface GetIpv4TrafficTimeseriesByIpRequest
  extends OptionalTrafficRequest {
  ip: string;
}

export type GetIpv4TrafficTimeseriesByIpResponse = TrafficTimeseriesResponse;

export interface GetIpv4TrafficTimeseriesByTagRequest
  extends OptionalTrafficRequest {
  subnettag: string;
}

export type GetIpv4TrafficTimeseriesByTagResponse = TrafficTimeseriesResponse;
