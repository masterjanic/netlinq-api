import NetlinqRequest from "~/lib/netlinq-request";
import { type GetSubnets6PlaintextResponse } from "~/types/ipv6/subnet";

export default class Ipv6SubnetController {
  /**
   * Get subnets as a plaintext list.
   */
  public getPlaintext() {
    return NetlinqRequest.call<GetSubnets6PlaintextResponse>({
      url: "/subnet6/plaintext",
      method: "GET",
    });
  }
}
