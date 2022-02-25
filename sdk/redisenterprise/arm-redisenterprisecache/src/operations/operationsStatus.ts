/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationsStatus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RedisEnterpriseManagementClient } from "../redisEnterpriseManagementClient";
import {
  OperationsStatusGetOptionalParams,
  OperationsStatusGetResponse
} from "../models";

/** Class containing OperationsStatus operations. */
export class OperationsStatusImpl implements OperationsStatus {
  private readonly client: RedisEnterpriseManagementClient;

  /**
   * Initialize a new instance of the class OperationsStatus class.
   * @param client Reference to the service client
   */
  constructor(client: RedisEnterpriseManagementClient) {
    this.client = client;
  }

  /**
   * Gets the status of operation.
   * @param location The region the operation is in.
   * @param operationId The operation's unique identifier.
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationsStatusGetOptionalParams
  ): Promise<OperationsStatusGetResponse> {
    return this.client.sendOperationRequest(
      { location, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/locations/{location}/operationsStatus/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
