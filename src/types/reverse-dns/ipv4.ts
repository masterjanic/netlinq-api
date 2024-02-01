export interface PostReverseDnsIpv4ByIpRequest {
  /**
   * The IPv4 address to set the reverse DNS record for.
   * Must follow the IPv4 address format.
   *
   * @example 192.168.1.1
   */
  ip: string;

  /**
   * The reverse DNS record to set for the IPv4 address.
   * Must be a valid fully qualified domain name (FQDN).
   *
   * @example host.example.com
   */
  rdns: string;
}

export interface PostReverseDnsIpv4ByIpResponse {
  data: {
    message: string;
  };
}
