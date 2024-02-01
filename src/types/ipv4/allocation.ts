import { type Ipv4AddressResponse } from "~/types/ipv4/address";

export interface Ipv4AllocationResponse {
  id: number;
  ip: string;
  subnet: Ipv4AddressResponse["subnet"];
  free: boolean;
  used_by: {
    id: number;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    address_id: number;
    external_type: string | null;
    external_id: number | null;
    external_name: string | null;
    comment: string | null;
    notification_email_ddos: string | null;
  };
}

export interface PostAssignIpv4AllocationByTagRequest {
  subnettag: string;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv4AllocationByTagResponse {
  data: Ipv4AllocationResponse;
}

export interface PostAssignIpv4AllocationByIpRequest {
  ip: string;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv4AllocationByIpResponse {
  data: Ipv4AllocationResponse;
}

export interface PostAssignIpv4AllocationByIdRequest {
  address: number;
  external_id: number;
  external_type: string;
  external_name?: string;
}

export interface PostAssignIpv4AllocationByIdResponse {
  data: Ipv4AllocationResponse;
}

export interface DeleteUnassignIpv4AllocationByExternalTypeAndIdRequest {
  external_type: string;
  external_id: number;
}

export interface DeleteUnassignIpv4AllocationByExternalTypeAndIdResponse {
  message: string;
}

export interface DeleteUnassignIpv4AllocationByIpRequest {
  ip: string;
}

export interface DeleteUnassignIpv4AllocationByIpResponse {
  message: string;
}
