import NetlinqRequest from "@/lib/netlinq-request";
import {
  type GetIpv6TrafficTimeseriesByIpRequest,
  type GetIpv6TrafficTimeseriesByIpResponse,
  type GetIpv6TrafficTimeseriesBySubnetRequest,
  type GetIpv6TrafficTimeseriesBySubnetResponse,
  type GetIpv6TrafficTimeseriesByTagRequest,
  type GetIpv6TrafficTimeseriesByTagResponse,
} from "@/types/ipv6/traffic/timeseries";

// TODO: Add jsdoc
export default class Ipv6TrafficTimeseriesController {
  public getBySubnet({
    network,
    cidr,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficTimeseriesBySubnetRequest) {
    return NetlinqRequest.call<GetIpv6TrafficTimeseriesBySubnetResponse>({
      url: "/traffic6/timeseries/by-subnet",
      method: "GET",
      params: { network, cidr, traffic_from, traffic_to },
    });
  }

  public getByIp({
    ip,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficTimeseriesByIpRequest) {
    return NetlinqRequest.call<GetIpv6TrafficTimeseriesByIpResponse>({
      url: "/traffic6/timeseries/by-ip",
      method: "GET",
      params: { ip, traffic_from, traffic_to },
    });
  }

  public getByTag({
    subnettag,
    traffic_from,
    traffic_to,
  }: GetIpv6TrafficTimeseriesByTagRequest) {
    return NetlinqRequest.call<GetIpv6TrafficTimeseriesByTagResponse>({
      url: "/traffic6/timeseries/by-tag",
      method: "GET",
      params: { subnettag, traffic_from, traffic_to },
    });
  }
}
