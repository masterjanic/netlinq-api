import NetlinqRequest from "@/lib/netlinq-request";
import {
  type GetVlanTraffic95thPercentileRequest,
  type GetVlanTraffic95thPercentileResponse,
  type GetVlanTrafficSumRequest,
  type GetVlanTrafficSumResponse,
  type GetVlanTrafficTimeseriesRequest,
  type GetVlanTrafficTimeseriesResponse,
} from "@/types/vlan/traffic";

// TODO: Add jsdoc
export default class VlanTrafficController {
  public getSum({ vlan_id, from, to }: GetVlanTrafficSumRequest) {
    return NetlinqRequest.call<GetVlanTrafficSumResponse>({
      url: `/vlan/${vlan_id}/traffic/sum`,
      method: "GET",
      params: { from, to },
    });
  }

  public getTimeseries({ vlan_id, from, to }: GetVlanTrafficTimeseriesRequest) {
    return NetlinqRequest.call<GetVlanTrafficTimeseriesResponse>({
      url: `/vlan/${vlan_id}/traffic/timeseries`,
      method: "GET",
      params: { from, to },
    });
  }

  public get95thPercentile({
    vlan_id,
    from,
    to,
  }: GetVlanTraffic95thPercentileRequest) {
    return NetlinqRequest.call<GetVlanTraffic95thPercentileResponse>({
      url: `/vlan/${vlan_id}/traffic/95th_percentile`,
      method: "GET",
      params: { from, to },
    });
  }
}
