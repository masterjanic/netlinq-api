export interface PostReverseDnsIpv6ByIpRequest {
  /**
   * The IPv6 address to set the reverse DNS record for.
   * Must follow the IPv6 address format.
   *
   * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   */
  ip: string;

  /**
   * The reverse DNS record to set for the IPv6 address.
   * Must be a valid fully qualified domain name (FQDN).
   *
   * @example host.example.com
   */
  rdns: string;
}

export interface PostReverseDnsIpv6ByIpResponse {
  data: {
    message: string;
  };
}
