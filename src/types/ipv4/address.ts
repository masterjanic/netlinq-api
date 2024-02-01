import {
  type OptionalTrafficRequest,
  type TrafficResponse,
} from "~/types/common";

export interface GetIpv4AdressByIpRequest extends OptionalTrafficRequest {
  /**
   * The IPv4 address to get the address data for.
   * Must follow the IPv4 address format.
   *
   * @example 192.168.1.1
   */
  ip: string;
}

export interface Ipv4AddressResponse {
  id: number;
  ip: string;
  subnet: {
    network: string;
    cidr: number;
    dotted_decimal: string;
    vlan_tag: number;
    gateway: string;
    broadcast: string;
    tags: string[];
  };
  free: 1 | 0;
  used_by: {
    id: number;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    address_id: number;
    external_type: string | null;
    external_id: number | null;
    external_name: string | null;
    comment: string | null;
    notification_email_ddos: string | null;
  } | null;
}

export interface GetIpv4AdressByIpResponse {
  data: {
    address: Ipv4AddressResponse;
  };
}

export type GetIpv4AdressByIpResponseWithTraffic = GetIpv4AdressByIpResponse &
  TrafficResponse;

export interface GetIpv4HistoryRequest {
  /**
   * The IPv4 address to get the history data for.
   * Must follow the IPv4 address format.
   *
   * @example 192.168.1.1
   */
  ip: string;
}

export type GetIpv4HistoryResponse = Array<{
  id: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  address_id: number;
  external_type: string | null;
  external_id: number | null;
  external_name: string | null;
  comment: string | null;
  notification_email_ddos: string | null;
}>;

export interface GetIpv4ByExternalTypeAndIdRequest
  extends OptionalTrafficRequest {
  external_type: string;
  external_id: number;
}

export interface GetIpv4ByExternalTypeAndIdResponse {
  data: Array<Ipv4AddressResponse>;
}

export interface GetIpv4ByExternalTypeAndIdResponseWithTraffic {
  data: Array<Ipv4AddressResponse & TrafficResponse>;
}

export interface GetIpv4ByExternalNameRequest extends OptionalTrafficRequest {
  external_name: string;
}

export interface GetIpv4ByExternalNameResponse {
  data: Array<Ipv4AddressResponse>;
}

export interface GetIpv4ByExternalNameResponseWithTraffic {
  data: Array<Ipv4AddressResponse & TrafficResponse>;
}
