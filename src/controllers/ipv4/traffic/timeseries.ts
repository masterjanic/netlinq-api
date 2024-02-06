import NetlinqRequest from "@/lib/netlinq-request";
import {
  type GetIpv4TrafficTimeseriesByIpRequest,
  type GetIpv4TrafficTimeseriesByIpResponse,
  type GetIpv4TrafficTimeseriesBySubnetRequest,
  type GetIpv4TrafficTimeseriesBySubnetResponse,
  type GetIpv4TrafficTimeseriesByTagRequest,
  type GetIpv4TrafficTimeseriesByTagResponse,
} from "@/types/ipv4/traffic/timeseries";

// TODO: Add jsdoc
export default class Ipv4TrafficTimeseriesController {
  public getBySubnet({
    network,
    cidr,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficTimeseriesBySubnetRequest) {
    return NetlinqRequest.call<GetIpv4TrafficTimeseriesBySubnetResponse>({
      url: "/traffic/timeseries/by-subnet",
      method: "GET",
      params: { network, cidr, traffic_from, traffic_to },
    });
  }

  public getByIp({
    ip,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficTimeseriesByIpRequest) {
    return NetlinqRequest.call<GetIpv4TrafficTimeseriesByIpResponse>({
      url: "/traffic/timeseries/by-ip",
      method: "GET",
      params: { ip, traffic_from, traffic_to },
    });
  }

  public getByTag({
    subnettag,
    traffic_from,
    traffic_to,
  }: GetIpv4TrafficTimeseriesByTagRequest) {
    return NetlinqRequest.call<GetIpv4TrafficTimeseriesByTagResponse>({
      url: "/traffic/timeseries/by-tag",
      method: "GET",
      params: { subnettag, traffic_from, traffic_to },
    });
  }
}
