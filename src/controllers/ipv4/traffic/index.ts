import Ipv4TrafficSumController from "./sum";
import Ipv4TrafficTimeseriesController from "./timeseries";

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
