export interface GetVlansResponse {
  data: Array<{
    id: number;
    tag: number;
    comment: string;
  }>;
}
