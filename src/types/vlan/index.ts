export interface GetVlansResponse {
  data: Array<{
    /**
     * The internal id of the VLAN.
     */
    id: number;
    /**
     * The VLAN number of the VLAN.
     *
     * @example 252
     */
    tag: number;
    /**
     * A comment added to the VLAN.
     *
     * @example My Company
     */
    comment: string;
  }>;
}
