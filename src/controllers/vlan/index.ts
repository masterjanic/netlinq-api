import NetlinqRequest from "../../lib/netlinq-request";
import { type GetVlansResponse } from "../../types/vlan";
import VlanTrafficController from "./traffic";

export default class VlanController {
  /**
   * Retrieve all available VLANs.
   */
  public get() {
    return NetlinqRequest.call<GetVlansResponse>({
      url: "/vlan",
      method: "GET",
    });
  }

  public readonly traffic = new VlanTrafficController();
}
