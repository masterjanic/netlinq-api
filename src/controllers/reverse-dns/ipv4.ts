import NetlinqRequest from "@/lib/netlinq-request";
import type {
  PostReverseDnsIpv4ByIpRequest,
  PostReverseDnsIpv4ByIpResponse,
} from "@/types/reverse-dns/ipv4";

export default class ReverseDnsIpv4Controller {
  /**
   * Set the rDNS of a single IPv4 address by its IP.
   */
  public setByIp({ ip, rdns }: PostReverseDnsIpv4ByIpRequest) {
    return NetlinqRequest.call<PostReverseDnsIpv4ByIpResponse>({
      url: `/rdns/by-ip`,
      method: "POST",
      params: { ip, rdns },
    });
  }
}
