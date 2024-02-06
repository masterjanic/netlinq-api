import { type OptionalVlanTrafficRequest } from "../common";

export interface GetVlanTrafficSumRequest extends OptionalVlanTrafficRequest {
  vlan_id: number;
}

export interface GetVlanTrafficSumResponse {
  from: string;
  to: string;
  traffic_in: number;
  traffic_out: number;
}

export interface GetVlanTrafficTimeseriesRequest
  extends OptionalVlanTrafficRequest {
  vlan_id: number;
}

export interface GetVlanTrafficTimeseriesResponse {
  traffic_in: Array<{
    time: string;
    sum: number | null;
  }>;
  traffic_out: Array<{
    time: string;
    sum: number | null;
  }>;
  from: string;
  to: string;
  group_by_interval: number;
}

export interface GetVlanTraffic95thPercentileRequest
  extends OptionalVlanTrafficRequest {
  vlan_id: number;
}

export interface GetVlanTraffic95thPercentileResponse {
  from: string;
  to: string;
  traffic_95th_percentile_bits_in: number;
  traffic_95th_percentile_bits_out: number;
}
