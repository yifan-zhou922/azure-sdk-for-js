/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StorageSyncServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftStorageSync } from "../microsoftStorageSync";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  StorageSyncService,
  StorageSyncServicesListByResourceGroupOptionalParams,
  StorageSyncServicesListBySubscriptionOptionalParams,
  CheckNameAvailabilityParameters,
  StorageSyncServicesCheckNameAvailabilityOptionalParams,
  StorageSyncServicesCheckNameAvailabilityResponse,
  StorageSyncServiceCreateParameters,
  StorageSyncServicesCreateOptionalParams,
  StorageSyncServicesCreateResponse,
  StorageSyncServicesGetOptionalParams,
  StorageSyncServicesGetResponse,
  StorageSyncServicesUpdateOptionalParams,
  StorageSyncServicesUpdateResponse,
  StorageSyncServicesDeleteOptionalParams,
  StorageSyncServicesDeleteResponse,
  StorageSyncServicesListByResourceGroupResponse,
  StorageSyncServicesListBySubscriptionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageSyncServices operations. */
export class StorageSyncServicesImpl implements StorageSyncServices {
  private readonly client: MicrosoftStorageSync;

  /**
   * Initialize a new instance of the class StorageSyncServices class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftStorageSync) {
    this.client = client;
  }

  /**
   * Get a StorageSyncService list by Resource group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: StorageSyncServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<StorageSyncService> {
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
    options?: StorageSyncServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<StorageSyncService[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: StorageSyncServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<StorageSyncService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a StorageSyncService list by subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: StorageSyncServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<StorageSyncService> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: StorageSyncServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<StorageSyncService[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: StorageSyncServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<StorageSyncService> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Check the give namespace name availability.
   * @param locationName The desired region for the name check.
   * @param parameters Parameters to check availability of the given namespace name
   * @param options The options parameters.
   */
  checkNameAvailability(
    locationName: string,
    parameters: CheckNameAvailabilityParameters,
    options?: StorageSyncServicesCheckNameAvailabilityOptionalParams
  ): Promise<StorageSyncServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { locationName, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Create a new StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param parameters Storage Sync Service resource name.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    storageSyncServiceName: string,
    parameters: StorageSyncServiceCreateParameters,
    options?: StorageSyncServicesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StorageSyncServicesCreateResponse>,
      StorageSyncServicesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageSyncServicesCreateResponse> => {
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
      { resourceGroupName, storageSyncServiceName, parameters, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create a new StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param parameters Storage Sync Service resource name.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    parameters: StorageSyncServiceCreateParameters,
    options?: StorageSyncServicesCreateOptionalParams
  ): Promise<StorageSyncServicesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      storageSyncServiceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: StorageSyncServicesGetOptionalParams
  ): Promise<StorageSyncServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageSyncServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Patch a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: StorageSyncServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StorageSyncServicesUpdateResponse>,
      StorageSyncServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageSyncServicesUpdateResponse> => {
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
      { resourceGroupName, storageSyncServiceName, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Patch a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: StorageSyncServicesUpdateOptionalParams
  ): Promise<StorageSyncServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: StorageSyncServicesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StorageSyncServicesDeleteResponse>,
      StorageSyncServicesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageSyncServicesDeleteResponse> => {
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
      { resourceGroupName, storageSyncServiceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete a given StorageSyncService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: StorageSyncServicesDeleteOptionalParams
  ): Promise<StorageSyncServicesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a StorageSyncService list by Resource group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: StorageSyncServicesListByResourceGroupOptionalParams
  ): Promise<StorageSyncServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a StorageSyncService list by subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: StorageSyncServicesListBySubscriptionOptionalParams
  ): Promise<StorageSyncServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/locations/{locationName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService
    },
    201: {
      bodyMapper: Mappers.StorageSyncService
    },
    202: {
      bodyMapper: Mappers.StorageSyncService
    },
    204: {
      bodyMapper: Mappers.StorageSyncService
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.StorageSyncService,
      headersMapper: Mappers.StorageSyncServicesUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.StorageSyncServicesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncServiceArray,
      headersMapper: Mappers.StorageSyncServicesListByResourceGroupHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/storageSyncServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageSyncServiceArray,
      headersMapper: Mappers.StorageSyncServicesListBySubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
