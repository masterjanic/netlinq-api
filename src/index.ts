import Ipv4Controller from "~/controllers/ipv4";
import Ipv6Controller from "~/controllers/ipv6";
import ReverseDnsController from "~/controllers/reverse-dns";
import VlanController from "~/controllers/vlan";
import NetlinqRequest from "~/lib/netlinq-request";
import type Options from "~/types/options";

export class NetlinqApi {
  private readonly options: Options;

  // TODO: Add rate limiting?
  constructor(options: Options) {
    this.options = options;

    NetlinqRequest.initialize(options);
  }

  /**
   * Everything related to IPv4 management.
   */
  public readonly ipv4 = new Ipv4Controller();

  /**
   * Everything related to IPv6 management.
   */
  public readonly ipv6 = new Ipv6Controller();

  /**
   * Everything related to reverse DNS management.
   */
  public readonly rDNS = new ReverseDnsController();

  /**
   * Everything related to VLAN management.
   */
  public readonly vlan = new VlanController();
}
