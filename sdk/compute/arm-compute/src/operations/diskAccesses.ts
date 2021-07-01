import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DiskAccesses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DiskAccess,
  DiskAccessesListByResourceGroupNextOptionalParams,
  DiskAccessesListByResourceGroupOptionalParams,
  DiskAccessesListNextOptionalParams,
  DiskAccessesListOptionalParams,
  PrivateEndpointConnection,
  DiskAccessesListPrivateEndpointConnectionsNextOptionalParams,
  DiskAccessesListPrivateEndpointConnectionsOptionalParams,
  DiskAccessesCreateOrUpdateOptionalParams,
  DiskAccessesCreateOrUpdateResponse,
  DiskAccessUpdate,
  DiskAccessesUpdateOptionalParams,
  DiskAccessesUpdateResponse,
  DiskAccessesGetOptionalParams,
  DiskAccessesGetResponse,
  DiskAccessesDeleteOptionalParams,
  DiskAccessesListByResourceGroupResponse,
  DiskAccessesListResponse,
  DiskAccessesGetPrivateLinkResourcesOptionalParams,
  DiskAccessesGetPrivateLinkResourcesResponse,
  DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams,
  DiskAccessesUpdateAPrivateEndpointConnectionResponse,
  DiskAccessesGetAPrivateEndpointConnectionOptionalParams,
  DiskAccessesGetAPrivateEndpointConnectionResponse,
  DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams,
  DiskAccessesListPrivateEndpointConnectionsResponse,
  DiskAccessesListByResourceGroupNextResponse,
  DiskAccessesListNextResponse,
  DiskAccessesListPrivateEndpointConnectionsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DiskAccesses. */
export class DiskAccessesImpl implements DiskAccesses {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class DiskAccesses class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the disk access resources under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DiskAccess> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DiskAccess[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DiskAccess> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the disk access resources under a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DiskAccessesListOptionalParams
  ): PagedAsyncIterableIterator<DiskAccess> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: DiskAccessesListOptionalParams
  ): AsyncIterableIterator<DiskAccess[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: DiskAccessesListOptionalParams
  ): AsyncIterableIterator<DiskAccess> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List information about private endpoint connections under a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  public listPrivateEndpointConnections(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listPrivateEndpointConnectionsPagingAll(
      resourceGroupName,
      diskAccessName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPrivateEndpointConnectionsPagingPage(
          resourceGroupName,
          diskAccessName,
          options
        );
      }
    };
  }

  private async *listPrivateEndpointConnectionsPagingPage(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result = await this._listPrivateEndpointConnections(
      resourceGroupName,
      diskAccessName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listPrivateEndpointConnectionsNext(
        resourceGroupName,
        diskAccessName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPrivateEndpointConnectionsPagingAll(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listPrivateEndpointConnectionsPagingPage(
      resourceGroupName,
      diskAccessName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Put disk access operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskAccessesCreateOrUpdateResponse>,
      DiskAccessesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskAccessesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, diskAccessName, diskAccess, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates or updates a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Put disk access operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccess,
    options?: DiskAccessesCreateOrUpdateOptionalParams
  ): Promise<DiskAccessesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      diskAccessName,
      diskAccess,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates (patches) a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Patch disk access operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccessUpdate,
    options?: DiskAccessesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskAccessesUpdateResponse>,
      DiskAccessesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskAccessesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, diskAccessName, diskAccess, options },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Updates (patches) a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param diskAccess disk access object supplied in the body of the Patch disk access operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    diskAccess: DiskAccessUpdate,
    options?: DiskAccessesUpdateOptionalParams
  ): Promise<DiskAccessesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      diskAccessName,
      diskAccess,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DiskAccessesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskAccessName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, diskAccessName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      diskAccessName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the disk access resources under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DiskAccessesListByResourceGroupOptionalParams
  ): Promise<DiskAccessesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the disk access resources under a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DiskAccessesListOptionalParams
  ): Promise<DiskAccessesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

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
  ): Promise<DiskAccessesGetPrivateLinkResourcesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskAccessName, options },
      getPrivateLinkResourcesOperationSpec
    );
  }

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
  async beginUpdateAPrivateEndpointConnection(
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
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskAccessesUpdateAPrivateEndpointConnectionResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        privateEndpointConnection,
        options
      },
      updateAPrivateEndpointConnectionOperationSpec,
      sendOperation
    );
  }

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
  async beginUpdateAPrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: DiskAccessesUpdateAPrivateEndpointConnectionOptionalParams
  ): Promise<DiskAccessesUpdateAPrivateEndpointConnectionResponse> {
    const poller = await this.beginUpdateAPrivateEndpointConnection(
      resourceGroupName,
      diskAccessName,
      privateEndpointConnectionName,
      privateEndpointConnection,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DiskAccessesGetAPrivateEndpointConnectionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        options
      },
      getAPrivateEndpointConnectionOperationSpec
    );
  }

  /**
   * Deletes a private endpoint connection under a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  async beginDeleteAPrivateEndpointConnection(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        diskAccessName,
        privateEndpointConnectionName,
        options
      },
      deleteAPrivateEndpointConnectionOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a private endpoint connection under a disk access resource.
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param privateEndpointConnectionName The name of the private endpoint connection
   * @param options The options parameters.
   */
  async beginDeleteAPrivateEndpointConnectionAndWait(
    resourceGroupName: string,
    diskAccessName: string,
    privateEndpointConnectionName: string,
    options?: DiskAccessesDeleteAPrivateEndpointConnectionOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteAPrivateEndpointConnection(
      resourceGroupName,
      diskAccessName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List information about private endpoint connections under a disk access resource
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param options The options parameters.
   */
  private _listPrivateEndpointConnections(
    resourceGroupName: string,
    diskAccessName: string,
    options?: DiskAccessesListPrivateEndpointConnectionsOptionalParams
  ): Promise<DiskAccessesListPrivateEndpointConnectionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskAccessName, options },
      listPrivateEndpointConnectionsOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DiskAccessesListByResourceGroupNextOptionalParams
  ): Promise<DiskAccessesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DiskAccessesListNextOptionalParams
  ): Promise<DiskAccessesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListPrivateEndpointConnectionsNext
   * @param resourceGroupName The name of the resource group.
   * @param diskAccessName The name of the disk access resource that is being created. The name can't be
   *                       changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z,
   *                       0-9 and _. The maximum name length is 80 characters.
   * @param nextLink The nextLink from the previous successful call to the ListPrivateEndpointConnections
   *                 method.
   * @param options The options parameters.
   */
  private _listPrivateEndpointConnectionsNext(
    resourceGroupName: string,
    diskAccessName: string,
    nextLink: string,
    options?: DiskAccessesListPrivateEndpointConnectionsNextOptionalParams
  ): Promise<DiskAccessesListPrivateEndpointConnectionsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, diskAccessName, nextLink, options },
      listPrivateEndpointConnectionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccess
    },
    201: {
      bodyMapper: Mappers.DiskAccess
    },
    202: {
      bodyMapper: Mappers.DiskAccess
    },
    204: {
      bodyMapper: Mappers.DiskAccess
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.diskAccess,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccess
    },
    201: {
      bodyMapper: Mappers.DiskAccess
    },
    202: {
      bodyMapper: Mappers.DiskAccess
    },
    204: {
      bodyMapper: Mappers.DiskAccess
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.diskAccess1,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccess
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccessList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskAccesses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccessList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getPrivateLinkResourcesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAPrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.privateEndpointConnection,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAPrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAPrivateEndpointConnectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateEndpointConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskAccesses/{diskAccessName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccessList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskAccessList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateEndpointConnectionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.diskAccessName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
