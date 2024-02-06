import NetlinqRequest from "@/lib/netlinq-request";
import {
  type GetIpv4AdressByIpRequest,
  type GetIpv4AdressByIpResponse,
  type GetIpv4AdressByIpResponseWithTraffic,
  type GetIpv4ByExternalNameRequest,
  type GetIpv4ByExternalNameResponse,
  type GetIpv4ByExternalNameResponseWithTraffic,
  type GetIpv4ByExternalTypeAndIdRequest,
  type GetIpv4ByExternalTypeAndIdResponse,
  type GetIpv4ByExternalTypeAndIdResponseWithTraffic,
  type GetIpv4HistoryRequest,
  type GetIpv4HistoryResponse,
} from "@/types/ipv4/address";

export default class Ipv4AdressController {
  /**
   * Get a single IPv4 address by its IP.
   */
  public getByIp({ ip, traffic_from, traffic_to }: GetIpv4AdressByIpRequest) {
    const baseConfig = {
      url: "/address/by-ip",
      method: "GET",
    };

    if (!!traffic_from || !!traffic_to) {
      return NetlinqRequest.call<GetIpv4AdressByIpResponseWithTraffic>({
        ...baseConfig,
        params: { ip, traffic_from, traffic_to },
      });
    }

    return NetlinqRequest.call<GetIpv4AdressByIpResponse>({
      ...baseConfig,
      params: { ip },
    });
  }

  /**
   * Get the address history of a single IPv4 address by its IP.
   */
  public getHistory({ ip }: GetIpv4HistoryRequest) {
    return NetlinqRequest.call<GetIpv4HistoryResponse>({
      url: "/address/history",
      method: "GET",
      params: { ip },
    });
  }

  /**
   * Get multiple IPv4 addresses by their external type and external id.
   */
  public getByExternalTypeAndId({
    external_type,
    external_id,
    traffic_from,
    traffic_to,
  }: GetIpv4ByExternalTypeAndIdRequest) {
    const baseConfig = {
      url: "/address/by-external-type-and-id",
      method: "GET",
    };

    if (!!traffic_from || !!traffic_to) {
      return NetlinqRequest.call<GetIpv4ByExternalTypeAndIdResponseWithTraffic>(
        {
          ...baseConfig,
          params: { external_type, external_id, traffic_from, traffic_to },
        },
      );
    }

    return NetlinqRequest.call<GetIpv4ByExternalTypeAndIdResponse>({
      ...baseConfig,
      params: { external_type, external_id },
    });
  }

  /**
   * Get multiple IPv4 addresses by their external name.
   */
  public getByExternalName({
    external_name,
    traffic_from,
    traffic_to,
  }: GetIpv4ByExternalNameRequest) {
    const baseConfig = {
      url: "/address/by-external-name",
      method: "GET",
    };

    if (!!traffic_from || !!traffic_to) {
      return NetlinqRequest.call<GetIpv4ByExternalNameResponseWithTraffic>({
        ...baseConfig,
        params: { external_name, traffic_from, traffic_to },
      });
    }

    return NetlinqRequest.call<GetIpv4ByExternalNameResponse>({
      ...baseConfig,
      params: { external_name },
    });
  }
}
