import { type OptionalTrafficRequest, type TrafficResponse } from "../common";

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
  /**
   * The internal id of the IPv4 address.
   */
  id: number;
  /**
   * The IPv4 address of this data.
   * Follows the IPv4 address format.
   *
   * @example 192.168.0.1
   */
  ip: string;
  /**
   * The subnet of this IPv4 address.
   */
  subnet: {
    /**
     * The network part of this IPv4 subnet.
     *
     * @example 192.168.0.0
     */
    network: string;
    /**
     * The CIDR of this IPv4 subnet.
     *
     * @example 24
     */
    cidr: number;
    /**
     * The dotted decimal representation of the IPv4 subnet.
     *
     * @example 255.255.0.0
     */
    dotted_decimal: string;
    /**
     * The VLAN number assigned to the IPv4 subnet.
     *
     * @example 252
     */
    vlan_tag: number;
    /**
     * The gateway of the IPv4 subnet.
     *
     * @example 192.168.0.1
     */
    gateway: string;
    /**
     * The broadcast address of the IPv4 subnet.
     *
     * @example 192.168.0.2
     */
    broadcast: string;
    /**
     * The tags assigned to the IPv4 subnet.
     *
     * @example ["my-first-tag", "my-second-tag"]
     */
    tags: string[];
  };
  /**
   * Whether the IPv4 address is free or not.
   *
   * @example 1 - Free
   * @example 0 - Not free
   */
  free: 1 | 0;
  /**
   * The allocation that uses this IPv4 address.
   */
  used_by: {
    /**
     * The internal id of the allocation that uses this IPv4 address.
     */
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
