import Ipv4AdressController from "@/controllers/ipv4/address";
import Ipv4AllocationController from "@/controllers/ipv4/allocation";
import Ipv4SubnetController from "@/controllers/ipv4/subnet";
import Ipv4TrafficController from "@/controllers/ipv4/traffic";

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
