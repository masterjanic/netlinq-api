import NetlinqRequest from "../../lib/netlinq-request";
import {
  type GetIpv6AdressByIpRequest,
  type GetIpv6AdressByIpResponse,
  type GetIpv6ByExternalTypeAndIdRequest,
  type GetIpv6ByExternalTypeAndIdResponse,
  type GetIpv6HistoryRequest,
  type GetIpv6HistoryResponse,
} from "../../types/ipv6/address";

export default class Ipv6AdressController {
  /**
   * Get a single IPv6 address by its IP.
   */
  public getByIp({ ip }: GetIpv6AdressByIpRequest) {
    const baseConfig = {
      url: "/address6/by-ip",
      method: "GET",
    };

    return NetlinqRequest.call<GetIpv6AdressByIpResponse>({
      ...baseConfig,
      params: { ip },
    });
  }

  /**
   * Get the address history of a single IPv6 address by its IP.
   */
  public getHistory({ ip }: GetIpv6HistoryRequest) {
    return NetlinqRequest.call<GetIpv6HistoryResponse>({
      url: "/address6/history",
      method: "GET",
      params: { ip },
    });
  }

  /**
   * Get multiple IPv6 addresses by their external type and external id.
   */
  public getByExternalTypeAndId({
    external_type,
    external_id,
  }: GetIpv6ByExternalTypeAndIdRequest) {
    const baseConfig = {
      url: "/address6/by-external-type-and-id",
      method: "GET",
    };

    return NetlinqRequest.call<GetIpv6ByExternalTypeAndIdResponse>({
      ...baseConfig,
      params: { external_type, external_id },
    });
  }
}
