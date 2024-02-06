import Ipv6AdressController from "./address";
import Ipv6AllocationController from "./allocation";
import Ipv6SubnetController from "./subnet";
import Ipv6TrafficController from "./traffic";

export default class Ipv6Controller {
  /**
   * Retrieve information about IPv6 addresses.
   */
  public readonly address = new Ipv6AdressController();

  /**
   * Manage IPv6 allocations.
   */
  public readonly allocation = new Ipv6AllocationController();

  /**
   * Retrieve information about IPv6 subnets.
   */
  public readonly subnet = new Ipv6SubnetController();

  /**
   * Retrieve information about IPv6 traffic.
   */
  public readonly traffic = new Ipv6TrafficController();
}
