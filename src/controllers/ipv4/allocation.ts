import NetlinqRequest from "~/lib/netlinq-request";
import {
  type DeleteUnassignIpv4AllocationByExternalTypeAndIdRequest,
  type DeleteUnassignIpv4AllocationByExternalTypeAndIdResponse,
  type DeleteUnassignIpv4AllocationByIpRequest,
  type DeleteUnassignIpv4AllocationByIpResponse,
  type PostAssignIpv4AllocationByIdRequest,
  type PostAssignIpv4AllocationByIdResponse,
  type PostAssignIpv4AllocationByIpRequest,
  type PostAssignIpv4AllocationByIpResponse,
  type PostAssignIpv4AllocationByTagRequest,
  type PostAssignIpv4AllocationByTagResponse,
} from "~/types/ipv4/allocation";

export default class Ipv4AllocationController {
  /**
   * Assign any free addresses by subnet tag.
   */
  public assignByTag({
    subnettag,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv4AllocationByTagRequest) {
    return NetlinqRequest.call<PostAssignIpv4AllocationByTagResponse>({
      url: "/allocation/by-tag",
      method: "POST",
      params: { subnettag, external_id, external_type, external_name },
    });
  }

  /**
   * Assign a specific IPv4 address by IP.
   */
  public assignByIp({
    ip,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv4AllocationByIpRequest) {
    return NetlinqRequest.call<PostAssignIpv4AllocationByIpResponse>({
      url: "/allocation/by-ip",
      method: "POST",
      params: { ip, external_id, external_type, external_name },
    });
  }

  /**
   * Assign a specific IPv4 address by its address id.
   */
  public assignById({
    address,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv4AllocationByIdRequest) {
    return NetlinqRequest.call<PostAssignIpv4AllocationByIdResponse>({
      url: "/allocation/by-id",
      method: "POST",
      params: { address, external_id, external_type, external_name },
    });
  }

  /**
   * Unassign multiple IPv4 addresses by their external type and external id.
   */
  public unassignByExternalTypeAndId({
    external_type,
    external_id,
  }: DeleteUnassignIpv4AllocationByExternalTypeAndIdRequest) {
    return NetlinqRequest.call<DeleteUnassignIpv4AllocationByExternalTypeAndIdResponse>(
      {
        url: "/allocation/by-external-type-and-id",
        method: "DELETE",
        params: { external_type, external_id },
      },
    );
  }

  /**
   * Unassign a specific IPv4 address by IP.
   */
  public unassignByIp({ ip }: DeleteUnassignIpv4AllocationByIpRequest) {
    return NetlinqRequest.call<DeleteUnassignIpv4AllocationByIpResponse>({
      url: "/allocation/by-ip",
      method: "DELETE",
      params: { ip },
    });
  }
}
