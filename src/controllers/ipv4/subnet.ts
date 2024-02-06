import NetlinqRequest from "../../lib/netlinq-request";
import { type GetSubnetsPlaintextResponse } from "../../types/ipv4/subnet";

export default class Ipv4SubnetController {
  /**
   * Get subnets as a plaintext list.
   */
  public getPlaintext() {
    return NetlinqRequest.call<GetSubnetsPlaintextResponse>({
      url: "/subnet/plaintext",
      method: "GET",
    });
  }
}
