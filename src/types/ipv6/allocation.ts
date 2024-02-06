import { type Ipv6AddressResponse } from "./address";

export interface Ipv6AllocationResponse {
  id: number;
  ip: string;
  subnet6: Ipv6AddressResponse["subnet6"];
  free: boolean;
  used_by: {
    id: number;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    address6_id: number;
    external_type: string | null;
    external_id: number | null;
    external_name: string | null;
    comment: string | null;
    notification_email_ddos: string | null;
  };
}

export interface PostAssignIpv6AllocationByTagRequest {
  subnettag: string;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv6AllocationByTagResponse {
  data: Ipv6AllocationResponse;
}

export interface PostAssignIpv6AllocationByIpRequest {
  ip: string;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv6AllocationByIpResponse {
  data: Ipv6AllocationResponse;
}

export interface PostAssignIpv6AllocationByIdRequest {
  address: number;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv6AllocationByIdResponse {
  data: Ipv6AllocationResponse;
}

export interface DeleteUnassignIpv6AllocationByExternalTypeAndIdRequest {
  external_type: string;
  external_id: number;
}

export interface DeleteUnassignIpv6AllocationByExternalTypeAndIdResponse {
  message: string;
}

export interface DeleteUnassignIpv6AllocationByIpRequest {
  ip: string;
}

export interface DeleteUnassignIpv6AllocationByIpResponse {
  message: string;
}
