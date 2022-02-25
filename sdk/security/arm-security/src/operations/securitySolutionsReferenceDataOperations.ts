/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SecuritySolutionsReferenceDataOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SecuritySolutionsReferenceDataListOptionalParams,
  SecuritySolutionsReferenceDataListResponse,
  SecuritySolutionsReferenceDataListByHomeRegionOptionalParams,
  SecuritySolutionsReferenceDataListByHomeRegionResponse
} from "../models";

/** Class containing SecuritySolutionsReferenceDataOperations operations. */
export class SecuritySolutionsReferenceDataOperationsImpl
  implements SecuritySolutionsReferenceDataOperations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SecuritySolutionsReferenceDataOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of all supported Security Solutions for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: SecuritySolutionsReferenceDataListOptionalParams
  ): Promise<SecuritySolutionsReferenceDataListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets list of all supported Security Solutions for subscription and location.
   * @param options The options parameters.
   */
  listByHomeRegion(
    options?: SecuritySolutionsReferenceDataListByHomeRegionOptionalParams
  ): Promise<SecuritySolutionsReferenceDataListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listByHomeRegionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/securitySolutionsReferenceData",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionsReferenceDataList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHomeRegionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/securitySolutionsReferenceData",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionsReferenceDataList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
