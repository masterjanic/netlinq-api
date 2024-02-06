import Ipv6TrafficSumController from "@/controllers/ipv4/traffic/sum";
import Ipv6TrafficTimeseriesController from "@/controllers/ipv4/traffic/timeseries";

export default class Ipv6TrafficController {
  /**
   * Retrieve the sum of traffic for a given subnet, IP or tag.
   */
  public readonly sum = new Ipv6TrafficSumController();

  /**
   * Retrieve the timeseries of traffic for a given subnet, IP or tag.
   */
  public readonly timeseries = new Ipv6TrafficTimeseriesController();
}
