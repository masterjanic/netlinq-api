import VlanTrafficController from "~/controllers/vlan/traffic";
import NetlinqRequest from "~/lib/netlinq-request";
import { type GetVlansResponse } from "~/types/vlan";

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
