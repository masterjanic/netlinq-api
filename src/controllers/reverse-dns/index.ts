import ReverseDnsIpv4Controller from "@/controllers/reverse-dns/ipv4";
import ReverseDnsIpv6Controller from "@/controllers/reverse-dns/ipv6";

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
