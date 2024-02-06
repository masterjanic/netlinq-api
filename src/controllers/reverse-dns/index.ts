import ReverseDnsIpv4Controller from "./ipv4";
import ReverseDnsIpv6Controller from "./ipv6";

export default class ReverseDnsController {
  /**
   * Manage rDNS records for IPv4 addresses.
   */
  public readonly ipv4 = new ReverseDnsIpv4Controller();

  /**
   * Manage rDNS records for IPv6 addresses.
   */
  public readonly ipv6 = new ReverseDnsIpv6Controller();
}
