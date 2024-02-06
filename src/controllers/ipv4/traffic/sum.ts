import NetlinqRequest from "@/lib/netlinq-request";
import {
  type GetIpv4TrafficSumByIpRequest,
  type GetIpv4TrafficSumByIpResponse,
  type GetIpv4TrafficSumBySubnetRequest,
  type GetIpv4TrafficSumBySubnetResponse,
  type GetIpv4TrafficSumByTagRequest,
  type GetIpv4TrafficSumByTagResponse,
} from "@/types/ipv4/traffic/sum";

// TODO: Add jsdoc
export default class Ipv4TrafficSumController {
  public getBySubnet({
    network,
    cidr,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficSumBySubnetRequest) {
    return NetlinqRequest.call<GetIpv4TrafficSumBySubnetResponse>({
      url: "/traffic/sum/by-subnet",
      method: "GET",
      params: { network, cidr, traffic_from, traffic_to },
    });
  }

  public getByIp({
    ip,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficSumByIpRequest) {
    return NetlinqRequest.call<GetIpv4TrafficSumByIpResponse>({
      url: "/traffic/sum/by-ip",
      method: "GET",
      params: { ip, traffic_from, traffic_to },
    });
  }

  public getByTag({
    subnettag,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficSumByTagRequest) {
    return NetlinqRequest.call<GetIpv4TrafficSumByTagResponse>({
      url: "/traffic/sum/by-tag",
      method: "GET",
      params: { subnettag, traffic_from, traffic_to },
    });
  }
}
