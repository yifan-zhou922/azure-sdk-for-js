import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  UpdateDomain,
  CloudServicesUpdateDomainListUpdateDomainsOptionalParams,
  CloudServicesUpdateDomainWalkUpdateDomainOptionalParams,
  CloudServicesUpdateDomainGetUpdateDomainOptionalParams,
  CloudServicesUpdateDomainGetUpdateDomainResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudServicesUpdateDomain. */
export interface CloudServicesUpdateDomain {
  /**
   * Gets a list of all update domains in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  listUpdateDomains(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsOptionalParams
  ): PagedAsyncIterableIterator<UpdateDomain>;
  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  beginWalkUpdateDomain(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainWalkUpdateDomainOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  beginWalkUpdateDomainAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainWalkUpdateDomainOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified update domain of a cloud service. Use nextLink property in the response to get
   * the next page of update domains. Do this till nextLink is null to fetch all the update domains.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  getUpdateDomain(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainGetUpdateDomainOptionalParams
  ): Promise<CloudServicesUpdateDomainGetUpdateDomainResponse>;
}
