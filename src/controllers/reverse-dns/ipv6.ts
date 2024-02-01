import NetlinqRequest from "~/lib/netlinq-request";
import {
  type PostReverseDnsIpv6ByIpRequest,
  type PostReverseDnsIpv6ByIpResponse,
} from "~/types/reverse-dns/ipv6";

export default class ReverseDnsIpv6Controller {
  /**
   * Set the rDNS of a single IPv6 address by its IP.
   */
  public setByIp({ ip, rdns }: PostReverseDnsIpv6ByIpRequest) {
    return NetlinqRequest.call<PostReverseDnsIpv6ByIpResponse>({
      url: `/rdns6/by-ip`,
      method: "POST",
      params: { ip, rdns },
    });
  }
}
