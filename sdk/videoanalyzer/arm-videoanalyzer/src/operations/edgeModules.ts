/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EdgeModules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerManagementClient } from "../videoAnalyzerManagementClient";
import {
  EdgeModuleEntity,
  EdgeModulesListNextOptionalParams,
  EdgeModulesListOptionalParams,
  EdgeModulesListResponse,
  EdgeModulesGetOptionalParams,
  EdgeModulesGetResponse,
  EdgeModulesCreateOrUpdateOptionalParams,
  EdgeModulesCreateOrUpdateResponse,
  EdgeModulesDeleteOptionalParams,
  ListProvisioningTokenInput,
  EdgeModulesListProvisioningTokenOptionalParams,
  EdgeModulesListProvisioningTokenResponse,
  EdgeModulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EdgeModules operations. */
export class EdgeModulesImpl implements EdgeModules {
  private readonly client: VideoAnalyzerManagementClient;

  /**
   * Initialize a new instance of the class EdgeModules class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerManagementClient) {
    this.client = client;
  }

  /**
   * List all existing edge module resources, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: EdgeModulesListOptionalParams
  ): PagedAsyncIterableIterator<EdgeModuleEntity> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: EdgeModulesListOptionalParams
  ): AsyncIterableIterator<EdgeModuleEntity[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: EdgeModulesListOptionalParams
  ): AsyncIterableIterator<EdgeModuleEntity> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all existing edge module resources, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: EdgeModulesListOptionalParams
  ): Promise<EdgeModulesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Retrieves an existing edge module resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param edgeModuleName The Edge Module name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    edgeModuleName: string,
    options?: EdgeModulesGetOptionalParams
  ): Promise<EdgeModulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, edgeModuleName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new edge module or updates an existing one. An edge module resource enables a single
   * instance of an Azure Video Analyzer IoT edge module to interact with the Video Analyzer Account.
   * This is used for authorization and also to make sure that the particular edge module instance only
   * has access to the data it requires from the Azure Video Analyzer service. A new edge module resource
   * should be created for every new instance of an Azure Video Analyzer edge module deployed to you
   * Azure IoT edge environment. Edge module resources can be deleted if the specific module is not in
   * use anymore.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param edgeModuleName The Edge Module name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    edgeModuleName: string,
    parameters: EdgeModuleEntity,
    options?: EdgeModulesCreateOrUpdateOptionalParams
  ): Promise<EdgeModulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, edgeModuleName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an existing edge module resource. Deleting the edge module resource will prevent an Azure
   * Video Analyzer IoT edge module which was previously initiated with the module provisioning token
   * from communicating with the cloud.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param edgeModuleName The Edge Module name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    edgeModuleName: string,
    options?: EdgeModulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, edgeModuleName, options },
      deleteOperationSpec
    );
  }

  /**
   * Creates a new provisioning token. A provisioning token allows for a single instance of Azure Video
   * analyzer IoT edge module to be initialized and authorized to the cloud account. The provisioning
   * token itself is short lived and it is only used for the initial handshake between IoT edge module
   * and the cloud. After the initial handshake, the IoT edge module will agree on a set of
   * authentication keys which will be auto-rotated as long as the module is able to periodically connect
   * to the cloud. A new provisioning token can be generated for the same IoT edge module in case the
   * module state lost or reset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param edgeModuleName The Edge Module name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  listProvisioningToken(
    resourceGroupName: string,
    accountName: string,
    edgeModuleName: string,
    parameters: ListProvisioningTokenInput,
    options?: EdgeModulesListProvisioningTokenOptionalParams
  ): Promise<EdgeModulesListProvisioningTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, edgeModuleName, parameters, options },
      listProvisioningTokenOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: EdgeModulesListNextOptionalParams
  ): Promise<EdgeModulesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/edgeModules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EdgeModuleEntityCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/edgeModules/{edgeModuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EdgeModuleEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.edgeModuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/edgeModules/{edgeModuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EdgeModuleEntity
    },
    201: {
      bodyMapper: Mappers.EdgeModuleEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.edgeModuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/edgeModules/{edgeModuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.edgeModuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listProvisioningTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/edgeModules/{edgeModuleName}/listProvisioningToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EdgeModuleProvisioningToken
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.edgeModuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EdgeModuleEntityCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
