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
  /**
   * The internal id of the IPv6 address.
   */
  id: number;
  /**
   * The IPv6 address of this data.
   * Follows the IPv4 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;
  /**
   * The subnet of this IPv6 address.
   */
  subnet6: {
    /**
     * The network part of this IPv6 subnet.
     *
     * @example 192.168.0.0
     */
    network: string;
    /**
     * The CIDR of this IPv6 subnet.
     *
     * @example 24
     */
    cidr: number;
    /**
     * The VLAN number assigned to the IPv6 subnet.
     *
     * @example 252
     */
    vlan_tag: number;
    /**
     * The gateway of the IPv6 subnet.
     *
     * @example 192.168.0.1
     */
    gateway: string;
    /**
     * Since IPv6 does not have a broadcast address, this field is always null.
     */
    broadcast: null;
    /**
     * The tags assigned to the IPv6 subnet.
     *
     * @example ["my-first-tag", "my-second-tag"]
     */
    tags: string[];
  };
  /**
   * Whether the IPv6 address is free or not.
   *
   * @example 1 - Free
   * @example 0 - Not free
   */
  free: 1 | 0;
  /**
   * The allocation that uses this IPv6 address.
   */
  used_by: {
    /**
     * The internal id of the allocation that uses this IPv6 address.
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
