/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Logger } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  LoggerContract,
  LoggerListByServiceNextOptionalParams,
  LoggerListByServiceOptionalParams,
  LoggerListByServiceResponse,
  LoggerGetEntityTagOptionalParams,
  LoggerGetEntityTagResponse,
  LoggerGetOptionalParams,
  LoggerGetResponse,
  LoggerCreateOrUpdateOptionalParams,
  LoggerCreateOrUpdateResponse,
  LoggerUpdateContract,
  LoggerUpdateOptionalParams,
  LoggerUpdateResponse,
  LoggerDeleteOptionalParams,
  LoggerListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Logger operations. */
export class LoggerImpl implements Logger {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class Logger class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of loggers in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: LoggerListByServiceOptionalParams
  ): PagedAsyncIterableIterator<LoggerContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: LoggerListByServiceOptionalParams
  ): AsyncIterableIterator<LoggerContract[]> {
    let result = await this._listByService(
      resourceGroupName,
      serviceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: LoggerListByServiceOptionalParams
  ): AsyncIterableIterator<LoggerContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of loggers in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: LoggerListByServiceOptionalParams
  ): Promise<LoggerListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    loggerId: string,
    options?: LoggerGetEntityTagOptionalParams
  ): Promise<LoggerGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, loggerId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets the details of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    loggerId: string,
    options?: LoggerGetOptionalParams
  ): Promise<LoggerGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, loggerId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or Updates a logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    loggerId: string,
    parameters: LoggerContract,
    options?: LoggerCreateOrUpdateOptionalParams
  ): Promise<LoggerCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, loggerId, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates an existing logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    loggerId: string,
    ifMatch: string,
    parameters: LoggerUpdateContract,
    options?: LoggerUpdateOptionalParams
  ): Promise<LoggerUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        loggerId,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes the specified logger.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    loggerId: string,
    ifMatch: string,
    options?: LoggerDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, loggerId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: LoggerListByServiceNextOptionalParams
  ): Promise<LoggerListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoggerCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.LoggerGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.loggerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.loggerId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters40,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.loggerId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LoggerContract,
      headersMapper: Mappers.LoggerUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters41,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.loggerId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/loggers/{loggerId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.loggerId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoggerCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
