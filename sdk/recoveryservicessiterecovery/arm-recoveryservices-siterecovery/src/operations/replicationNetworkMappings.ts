/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationNetworkMappings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  NetworkMapping,
  ReplicationNetworkMappingsListByReplicationNetworksNextOptionalParams,
  ReplicationNetworkMappingsListByReplicationNetworksOptionalParams,
  ReplicationNetworkMappingsListNextOptionalParams,
  ReplicationNetworkMappingsListOptionalParams,
  ReplicationNetworkMappingsListByReplicationNetworksResponse,
  ReplicationNetworkMappingsGetOptionalParams,
  ReplicationNetworkMappingsGetResponse,
  CreateNetworkMappingInput,
  ReplicationNetworkMappingsCreateOptionalParams,
  ReplicationNetworkMappingsCreateResponse,
  ReplicationNetworkMappingsDeleteOptionalParams,
  UpdateNetworkMappingInput,
  ReplicationNetworkMappingsUpdateOptionalParams,
  ReplicationNetworkMappingsUpdateResponse,
  ReplicationNetworkMappingsListResponse,
  ReplicationNetworkMappingsListByReplicationNetworksNextResponse,
  ReplicationNetworkMappingsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationNetworkMappings operations. */
export class ReplicationNetworkMappingsImpl
  implements ReplicationNetworkMappings {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationNetworkMappings class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all ASR network mappings for the specified network.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param options The options parameters.
   */
  public listByReplicationNetworks(
    fabricName: string,
    networkName: string,
    options?: ReplicationNetworkMappingsListByReplicationNetworksOptionalParams
  ): PagedAsyncIterableIterator<NetworkMapping> {
    const iter = this.listByReplicationNetworksPagingAll(
      fabricName,
      networkName,
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
        return this.listByReplicationNetworksPagingPage(
          fabricName,
          networkName,
          options
        );
      }
    };
  }

  private async *listByReplicationNetworksPagingPage(
    fabricName: string,
    networkName: string,
    options?: ReplicationNetworkMappingsListByReplicationNetworksOptionalParams
  ): AsyncIterableIterator<NetworkMapping[]> {
    let result = await this._listByReplicationNetworks(
      fabricName,
      networkName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByReplicationNetworksNext(
        fabricName,
        networkName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByReplicationNetworksPagingAll(
    fabricName: string,
    networkName: string,
    options?: ReplicationNetworkMappingsListByReplicationNetworksOptionalParams
  ): AsyncIterableIterator<NetworkMapping> {
    for await (const page of this.listByReplicationNetworksPagingPage(
      fabricName,
      networkName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all ASR network mappings in the vault.
   * @param options The options parameters.
   */
  public list(
    options?: ReplicationNetworkMappingsListOptionalParams
  ): PagedAsyncIterableIterator<NetworkMapping> {
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
    options?: ReplicationNetworkMappingsListOptionalParams
  ): AsyncIterableIterator<NetworkMapping[]> {
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
    options?: ReplicationNetworkMappingsListOptionalParams
  ): AsyncIterableIterator<NetworkMapping> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all ASR network mappings for the specified network.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param options The options parameters.
   */
  private _listByReplicationNetworks(
    fabricName: string,
    networkName: string,
    options?: ReplicationNetworkMappingsListByReplicationNetworksOptionalParams
  ): Promise<ReplicationNetworkMappingsListByReplicationNetworksResponse> {
    return this.client.sendOperationRequest(
      { fabricName, networkName, options },
      listByReplicationNetworksOperationSpec
    );
  }

  /**
   * Gets the details of an ASR network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param options The options parameters.
   */
  get(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    options?: ReplicationNetworkMappingsGetOptionalParams
  ): Promise<ReplicationNetworkMappingsGetResponse> {
    return this.client.sendOperationRequest(
      { fabricName, networkName, networkMappingName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to create an ASR network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Create network mapping input.
   * @param options The options parameters.
   */
  async beginCreate(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    input: CreateNetworkMappingInput,
    options?: ReplicationNetworkMappingsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationNetworkMappingsCreateResponse>,
      ReplicationNetworkMappingsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationNetworkMappingsCreateResponse> => {
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
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, networkName, networkMappingName, input, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to create an ASR network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Create network mapping input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    input: CreateNetworkMappingInput,
    options?: ReplicationNetworkMappingsCreateOptionalParams
  ): Promise<ReplicationNetworkMappingsCreateResponse> {
    const poller = await this.beginCreate(
      fabricName,
      networkName,
      networkMappingName,
      input,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName ARM Resource Name for network mapping.
   * @param options The options parameters.
   */
  async beginDelete(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    options?: ReplicationNetworkMappingsDeleteOptionalParams
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
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, networkName, networkMappingName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to delete a network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName ARM Resource Name for network mapping.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    options?: ReplicationNetworkMappingsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      fabricName,
      networkName,
      networkMappingName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update an ASR network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Update network mapping input.
   * @param options The options parameters.
   */
  async beginUpdate(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    input: UpdateNetworkMappingInput,
    options?: ReplicationNetworkMappingsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationNetworkMappingsUpdateResponse>,
      ReplicationNetworkMappingsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationNetworkMappingsUpdateResponse> => {
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
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { fabricName, networkName, networkMappingName, input, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to update an ASR network mapping.
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param networkMappingName Network mapping name.
   * @param input Update network mapping input.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    fabricName: string,
    networkName: string,
    networkMappingName: string,
    input: UpdateNetworkMappingInput,
    options?: ReplicationNetworkMappingsUpdateOptionalParams
  ): Promise<ReplicationNetworkMappingsUpdateResponse> {
    const poller = await this.beginUpdate(
      fabricName,
      networkName,
      networkMappingName,
      input,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all ASR network mappings in the vault.
   * @param options The options parameters.
   */
  private _list(
    options?: ReplicationNetworkMappingsListOptionalParams
  ): Promise<ReplicationNetworkMappingsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByReplicationNetworksNext
   * @param fabricName Primary fabric name.
   * @param networkName Primary network name.
   * @param nextLink The nextLink from the previous successful call to the ListByReplicationNetworks
   *                 method.
   * @param options The options parameters.
   */
  private _listByReplicationNetworksNext(
    fabricName: string,
    networkName: string,
    nextLink: string,
    options?: ReplicationNetworkMappingsListByReplicationNetworksNextOptionalParams
  ): Promise<ReplicationNetworkMappingsListByReplicationNetworksNextResponse> {
    return this.client.sendOperationRequest(
      { fabricName, networkName, nextLink, options },
      listByReplicationNetworksNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReplicationNetworkMappingsListNextOptionalParams
  ): Promise<ReplicationNetworkMappingsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationNetworksOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    },
    201: {
      bodyMapper: Mappers.NetworkMapping
    },
    202: {
      bodyMapper: Mappers.NetworkMapping
    },
    204: {
      bodyMapper: Mappers.NetworkMapping
    }
  },
  requestBody: Parameters.input1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMapping
    },
    201: {
      bodyMapper: Mappers.NetworkMapping
    },
    202: {
      bodyMapper: Mappers.NetworkMapping
    },
    204: {
      bodyMapper: Mappers.NetworkMapping
    }
  },
  requestBody: Parameters.input2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName,
    Parameters.networkMappingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworkMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationNetworksNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.networkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
