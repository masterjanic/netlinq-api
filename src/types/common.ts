export interface OptionalTrafficRequest {
  /**
   * The start of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  traffic_from?: string;

  /**
   * The end of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  traffic_to?: string;
}

export interface OptionalVlanTrafficRequest {
  /**
   * The start of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  from?: string;

  /**
   * The end of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  to?: string;
}

export interface TrafficRequest {
  /**
   * The start of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  traffic_from: string;

  /**
   * The end of the time range to get traffic data for.
   *
   * @example 2021-01-01T00:00:00Z
   * @example 1h
   */
  traffic_to: string;
}

export interface TrafficResponse {
  traffic: {
    interval_from: string;
    interval_to: string;
    bytes_in: number;
    bytes_out: number;
  };
}

export interface TrafficSumResponse {
  data: {
    traffic_from: string;
    traffic_to: string;
    bytes_in: number;
    bytes_out: number;
  };
}

export interface TrafficTimeseriesResponse {
  data: {
    bytes_in: Array<{
      time: string;
      sum: number | null;
    }>;
    bytes_out: Array<{
      time: string;
      sum: number | null;
    }>;
    traffic_from: string;
    traffic_to: string;
    group_by_interval: number;
  };
}
