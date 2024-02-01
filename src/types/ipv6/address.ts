export interface GetIpv6AdressByIpRequest {
  /**
   * The IPv6 address to get the address data for.
   * Must follow the IPv6 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;
}

export interface Ipv6AddressResponse {
  id: number;
  ip: string;
  subnet6: {
    network: string;
    cidr: number;
    vlan_tag: number;
    gateway: string;
    broadcast: null;
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

export interface GetIpv6AdressByIpResponse {
  data: Ipv6AddressResponse;
}

export interface GetIpv6HistoryRequest {
  /**
   * The IPv46 address to get the history data for.
   * Must follow the IPv6 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;
}

export type GetIpv6HistoryResponse = Array<{
  id: number;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  address6_id: number;
  external_type: string | null;
  external_id: number | null;
  external_name: string | null;
  comment: string | null;
  notification_email_ddos: string | null;
}>;

export interface GetIpv6ByExternalTypeAndIdRequest {
  external_type: string;
  external_id: number;
}

export interface GetIpv6ByExternalTypeAndIdResponse {
  data: Array<Ipv6AddressResponse>;
}
