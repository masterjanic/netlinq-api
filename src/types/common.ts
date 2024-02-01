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
    /**
     * The start of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    interval_from: string;
    /**
     * The end of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    interval_to: string;
    /**
     * The total amount of bytes in for the given time range.
     */
    bytes_in: number;
    /**
     * The total amount of bytes out for the given time range.
     */
    bytes_out: number;
  };
}

export interface TrafficSumResponse {
  data: {
    /**
     * The start of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    traffic_from: string;
    /**
     * The end of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    traffic_to: string;
    /**
     * The total amount of bytes in for the given time range.
     */
    bytes_in: number;
    /**
     * The total amount of bytes out for the given time range.
     */
    bytes_out: number;
  };
}

export interface TrafficTimeseriesResponse {
  data: {
    /**
     * An array of objects containing the time and the total amount of bytes in for the given time range.
     */
    bytes_in: Array<{
      /**
       * The time of this traffic data point.
       *
       * @example 2021-01-01T00:00:00Z
       */
      time: string;
      /**
       * The number of bytes in for this traffic data point.
       */
      sum: number | null;
    }>;
    /**
     * An array of objects containing the time and the total amount of bytes out for the given time range.
     */
    bytes_out: Array<{
      /**
       * The time of this traffic data point.
       *
       * @example 2021-01-01T00:00:00Z
       */
      time: string;
      /**
       * The number of bytes out for this traffic data point.
       */
      sum: number | null;
    }>;
    /**
     * The start of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    traffic_from: string;
    /**
     * The end of the time range for the traffic data.
     *
     * @example 2021-01-01T00:00:00Z
     * @example 1h
     */
    traffic_to: string;
    group_by_interval: number;
  };
}
