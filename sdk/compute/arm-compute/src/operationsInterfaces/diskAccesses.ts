import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DiskAccess,
  DiskAccessesListByResourceGroupOptionalParams,
  DiskAccessesListOptionalParams,
  PrivateEndpointConnection,
  DiskAccessesListPrivateEndpointConnectionsOptionalParams,
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesCreateOrUpdateResponse,
  DiskAccessUpdate,
  DiskAccessesUpdateOptionalParams,
  DiskAccessesUpdateResponse,
  DiskAccessesGetOptionalParams,
  DiskAccessesGetResponse,
  DiskAccessesDeleteOptionalParams,
  DiskAccessesGetPrivateLinkResourcesOptionalParams,
  DiskAccessesGetPrivateLinkResourcesResponse,
  DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
  DiskAccessesUpdateAPrivateEndpointConnectionResponse,
  DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetAPrivateEndpointConnectionResponse,
  DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DiskAccesses. */
export interface DiskAccesses {
  /**
   * Lists all the disk access resources under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DiskAccess>;
  /**
   * Lists all the disk access resources under a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DiskAccessesListOptionalParams
  ): PagedAsyncIterableIterator<DiskAccess>;
  /**
   * List information about private endpoint connections under a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  listPrivateEndpointConnections(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Creates or updates a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Put disk access operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskAccessesCreateOrUpdateResponse>,
      DiskAccessesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Put disk access operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams
  ): Promise<DiskAccessesCreateOrUpdateResponse>;
  /**
   * Updates (patches) a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Patch disk access operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccessUpdate,
    options?: DiskAccessesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskAccessesUpdateResponse>,
      DiskAccessesUpdateResponse
    >
  >;
  /**
   * Updates (patches) a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Patch disk access operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccessUpdate,
    options?: DiskAccessesUpdateOptionalParams
  ): Promise<DiskAccessesUpdateResponse>;
  /**
   * Gets information about a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetOptionalParams
  ): Promise<DiskAccessesGetResponse>;
  /**
   * Deletes a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the private link resources possible under disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  getPrivateLinkResources(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesGetPrivateLinkResourcesOptionalParams
  ): Promise<DiskAccessesGetPrivateLinkResourcesResponse>;
  /**
   * Approve or reject a private endpoint connection under disk access resource, this can't be used to
   * create a new private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection private endpoint connection object supplied in the body of the Put
   *                                  private endpoint connection operation.
   * @param options The options parameters.
   */
  beginUpdateAPrivateEndpointConnection(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskAccessesUpdateAPrivateEndpointConnectionResponse>,
      DiskAccessesUpdateAPrivateEndpointConnectionResponse
    >
  >;
  /**
   * Approve or reject a private endpoint connection under disk access resource, this can't be used to
   * create a new private endpoint connection.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param privateEndpointConnection private endpoint connection object supplied in the body of the Put
   *                                  private endpoint connection operation.
   * @param options The options parameters.
   */
  beginUpdateAPrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams
  ): Promise<DiskAccessesUpdateAPrivateEndpointConnectionResponse>;
  /**
   * Gets information about a private endpoint connection under a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  getAPrivateEndpointConnection(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesGetAPrivateEndpointConnectionOptionalParams
  ): Promise<DiskAccessesGetAPrivateEndpointConnectionResponse>;
  /**
   * Deletes a private endpoint connection under a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  beginDeleteAPrivateEndpointConnection(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a private endpoint connection under a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  beginDeleteAPrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams
  ): Promise<void>;
}
