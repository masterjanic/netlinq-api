export default interface Options {
  /**
   * The API key to use for requests. Can be obtained by contacting the [Synlinq](https://synlinq.de) support team.
   */
  apiKey: string;

  /**
   * The base url to use for requests.
   *
   * @default https://synlinq.de/api/v1
   */
  host?: string;
}
