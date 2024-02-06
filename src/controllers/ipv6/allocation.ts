import NetlinqRequest from "@/lib/netlinq-request";
import {
  type DeleteUnassignIpv6AllocationByExternalTypeAndIdRequest,
  type DeleteUnassignIpv6AllocationByExternalTypeAndIdResponse,
  type DeleteUnassignIpv6AllocationByIpRequest,
  type DeleteUnassignIpv6AllocationByIpResponse,
  type PostAssignIpv6AllocationByIdRequest,
  type PostAssignIpv6AllocationByIdResponse,
  type PostAssignIpv6AllocationByIpRequest,
  type PostAssignIpv6AllocationByIpResponse,
  type PostAssignIpv6AllocationByTagRequest,
  type PostAssignIpv6AllocationByTagResponse,
} from "@/types/ipv6/allocation";

export default class Ipv6AllocationController {
  /**
   * Assign any free addresses by subnet tag.
   *
   * @todo Currently, this endpoint is not working in the API.
   */
  public assignByTag({
    subnettag,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv6AllocationByTagRequest) {
    return NetlinqRequest.call<PostAssignIpv6AllocationByTagResponse>({
      url: "/allocation6/by-tag",
      method: "POST",
      params: { subnettag, external_id, external_type, external_name },
    });
  }

  /**
   * Assign a specific IPv6 address by IP.
   *
   * @todo Currently, this endpoint is not working in the API.
   */
  public assignByIp({
    ip,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv6AllocationByIpRequest) {
    return NetlinqRequest.call<PostAssignIpv6AllocationByIpResponse>({
      url: "/allocation6/by-ip",
      method: "POST",
      params: { ip, external_id, external_type, external_name },
    });
  }

  /**
   * Assign a specific IPv6 address by its address id.
   *
   * @todo Currently, this endpoint is not working in the API.
   */
  public assignById({
    address,
    external_id,
    external_type,
    external_name,
  }: PostAssignIpv6AllocationByIdRequest) {
    return NetlinqRequest.call<PostAssignIpv6AllocationByIdResponse>({
      url: "/allocation6/by-id",
      method: "POST",
      params: { address, external_id, external_type, external_name },
    });
  }

  /**
   * Unassign multiple IPv6 addresses by their external type and external id.
   */
  public unassignByExternalTypeAndId({
    external_type,
    external_id,
  }: DeleteUnassignIpv6AllocationByExternalTypeAndIdRequest) {
    return NetlinqRequest.call<DeleteUnassignIpv6AllocationByExternalTypeAndIdResponse>(
      {
        url: "/allocation6/by-external-type-and-id",
        method: "DELETE",
        params: { external_type, external_id },
      },
    );
  }

  /**
   * Unassign a specific IPv6 address by IP.
   */
  public unassignByIp({ ip }: DeleteUnassignIpv6AllocationByIpRequest) {
    return NetlinqRequest.call<DeleteUnassignIpv6AllocationByIpResponse>({
      url: "/allocation6/by-ip",
      method: "DELETE",
      params: { ip },
    });
  }
}
