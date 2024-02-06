import Ipv4TrafficSumController from "@/controllers/ipv4/traffic/sum";
import Ipv4TrafficTimeseriesController from "@/controllers/ipv4/traffic/timeseries";

export default class Ipv4TrafficController {
  /**
   * Retrieve the sum of traffic for a given subnet, IP or tag.
   */
  public readonly sum = new Ipv4TrafficSumController();

  /**
   * Retrieve the timeseries of traffic for a given subnet, IP or tag.
   */
  public readonly timeseries = new Ipv4TrafficTimeseriesController();
}
