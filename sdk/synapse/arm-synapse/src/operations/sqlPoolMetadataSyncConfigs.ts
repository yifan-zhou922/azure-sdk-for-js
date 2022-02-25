/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlPoolMetadataSyncConfigs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SqlPoolMetadataSyncConfigsGetOptionalParams,
  SqlPoolMetadataSyncConfigsGetResponse,
  MetadataSyncConfig,
  SqlPoolMetadataSyncConfigsCreateOptionalParams,
  SqlPoolMetadataSyncConfigsCreateResponse
} from "../models";

/** Class containing SqlPoolMetadataSyncConfigs operations. */
export class SqlPoolMetadataSyncConfigsImpl
  implements SqlPoolMetadataSyncConfigs {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolMetadataSyncConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get the metadata sync configuration for a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolMetadataSyncConfigsGetOptionalParams
  ): Promise<SqlPoolMetadataSyncConfigsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Set the metadata sync configuration for a SQL pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param metadataSyncConfiguration Metadata sync configuration
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    metadataSyncConfiguration: MetadataSyncConfig,
    options?: SqlPoolMetadataSyncConfigsCreateOptionalParams
  ): Promise<SqlPoolMetadataSyncConfigsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        metadataSyncConfiguration,
        options
      },
      createOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/metadataSync/config",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetadataSyncConfig
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/metadataSync/config",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MetadataSyncConfig
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.metadataSyncConfiguration,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
