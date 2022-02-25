/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BigDataPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  BigDataPoolResourceInfo,
  BigDataPoolsListByWorkspaceNextOptionalParams,
  BigDataPoolsListByWorkspaceOptionalParams,
  BigDataPoolsGetOptionalParams,
  BigDataPoolsGetResponse,
  BigDataPoolPatchInfo,
  BigDataPoolsUpdateOptionalParams,
  BigDataPoolsUpdateResponse,
  BigDataPoolsCreateOrUpdateOptionalParams,
  BigDataPoolsCreateOrUpdateResponse,
  BigDataPoolsDeleteOptionalParams,
  BigDataPoolsDeleteResponse,
  BigDataPoolsListByWorkspaceResponse,
  BigDataPoolsListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BigDataPools operations. */
export class BigDataPoolsImpl implements BigDataPools {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class BigDataPools class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * List Big Data pools in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: BigDataPoolsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<BigDataPoolResourceInfo> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: BigDataPoolsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<BigDataPoolResourceInfo[]> {
    let result = await this._listByWorkspace(
      resourceGroupName,
      workspaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: BigDataPoolsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<BigDataPoolResourceInfo> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    options?: BigDataPoolsGetOptionalParams
  ): Promise<BigDataPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bigDataPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Patch a Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolPatchInfo The updated Big Data pool properties
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    bigDataPoolPatchInfo: BigDataPoolPatchInfo,
    options?: BigDataPoolsUpdateOptionalParams
  ): Promise<BigDataPoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        bigDataPoolPatchInfo,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Create a new Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolInfo The Big Data pool to create.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    bigDataPoolInfo: BigDataPoolResourceInfo,
    options?: BigDataPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BigDataPoolsCreateOrUpdateResponse>,
      BigDataPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BigDataPoolsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        workspaceName,
        bigDataPoolName,
        bigDataPoolInfo,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Create a new Big Data pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param bigDataPoolInfo The Big Data pool to create.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    bigDataPoolInfo: BigDataPoolResourceInfo,
    options?: BigDataPoolsCreateOrUpdateOptionalParams
  ): Promise<BigDataPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      bigDataPoolName,
      bigDataPoolInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Big Data pool from the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    options?: BigDataPoolsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BigDataPoolsDeleteResponse>,
      BigDataPoolsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BigDataPoolsDeleteResponse> => {
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
      { resourceGroupName, workspaceName, bigDataPoolName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Delete a Big Data pool from the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bigDataPoolName Big Data pool name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    bigDataPoolName: string,
    options?: BigDataPoolsDeleteOptionalParams
  ): Promise<BigDataPoolsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      bigDataPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List Big Data pools in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: BigDataPoolsListByWorkspaceOptionalParams
  ): Promise<BigDataPoolsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: BigDataPoolsListByWorkspaceNextOptionalParams
  ): Promise<BigDataPoolsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.bigDataPoolPatchInfo,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    201: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    202: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    204: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.bigDataPoolInfo,
  queryParameters: [Parameters.apiVersion1, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    201: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    202: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    204: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bigDataPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
