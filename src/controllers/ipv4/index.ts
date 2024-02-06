import Ipv4AdressController from "./address";
import Ipv4AllocationController from "./allocation";
import Ipv4SubnetController from "./subnet";
import Ipv4TrafficController from "./traffic";

export default class Ipv4Controller {
  /**
   * Retrieve information about IPv4 addresses.
   */
  public readonly address = new Ipv4AdressController();

  /**
   * Manage IPv4 allocations.
   */
  public readonly allocation = new Ipv4AllocationController();

  /**
   * Retrieve information about IPv4 subnets.
   */
  public readonly subnet = new Ipv4SubnetController();

  /**
   * Retrieve information about IPv4 traffic.
   */
  public readonly traffic = new Ipv4TrafficController();
}
