import NetlinqRequest from "~/lib/netlinq-request";
import {
  type GetIpv6TrafficSumByIpRequest,
  type GetIpv6TrafficSumByIpResponse,
  type GetIpv6TrafficSumBySubnetRequest,
  type GetIpv6TrafficSumBySubnetResponse,
  type GetIpv6TrafficSumByTagRequest,
  type GetIpv6TrafficSumByTagResponse,
} from "~/types/ipv6/traffic/sum";

// TODO: Add jsdoc
export default class Ipv6TrafficSumController {
  public getBySubnet({
    network,
    cidr,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficSumBySubnetRequest) {
    return NetlinqRequest.call<GetIpv6TrafficSumBySubnetResponse>({
      url: "/traffic6/sum/by-subnet",
      method: "GET",
      params: { network, cidr, traffic_from, traffic_to },
    });
  }

  public getByIp({
    ip,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficSumByIpRequest) {
    return NetlinqRequest.call<GetIpv6TrafficSumByIpResponse>({
      url: "/traffic6/sum/by-ip",
      method: "GET",
      params: { ip, traffic_from, traffic_to },
    });
  }

  public getByTag({
    subnettag,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficSumByTagRequest) {
    return NetlinqRequest.call<GetIpv6TrafficSumByTagResponse>({
      url: "/traffic6/sum/by-tag",
      method: "GET",
      params: { subnettag, traffic_from, traffic_to },
    });
  }
}
