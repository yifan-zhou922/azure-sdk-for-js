/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AFDEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AFDEndpoint,
  AFDEndpointsListByProfileNextOptionalParams,
  AFDEndpointsListByProfileOptionalParams,
  Usage,
  AFDEndpointsListResourceUsageNextOptionalParams,
  AFDEndpointsListResourceUsageOptionalParams,
  AFDEndpointsListByProfileResponse,
  AFDEndpointsGetOptionalParams,
  AFDEndpointsGetResponse,
  AFDEndpointsCreateOptionalParams,
  AFDEndpointsCreateResponse,
  AFDEndpointUpdateParameters,
  AFDEndpointsUpdateOptionalParams,
  AFDEndpointsUpdateResponse,
  AFDEndpointsDeleteOptionalParams,
  AfdPurgeParameters,
  AFDEndpointsPurgeContentOptionalParams,
  AFDEndpointsListResourceUsageResponse,
  ValidateCustomDomainInput,
  AFDEndpointsValidateCustomDomainOptionalParams,
  AFDEndpointsValidateCustomDomainResponse,
  AFDEndpointsListByProfileNextResponse,
  AFDEndpointsListResourceUsageNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AFDEndpoints operations. */
export class AFDEndpointsImpl implements AFDEndpoints {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AFDEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists existing AzureFrontDoor endpoints.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AFDEndpointsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<AFDEndpoint> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
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
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: AFDEndpointsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDEndpoint[]> {
    let result = await this._listByProfile(
      resourceGroupName,
      profileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: AFDEndpointsListByProfileOptionalParams
  ): AsyncIterableIterator<AFDEndpoint> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsListResourceUsageOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listResourceUsagePagingAll(
      resourceGroupName,
      profileName,
      endpointName,
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
        return this.listResourceUsagePagingPage(
          resourceGroupName,
          profileName,
          endpointName,
          options
        );
      }
    };
  }

  private async *listResourceUsagePagingPage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listResourceUsage(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listResourceUsageNext(
        resourceGroupName,
        profileName,
        endpointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listResourceUsagePagingAll(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsListResourceUsageOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listResourceUsagePagingPage(
      resourceGroupName,
      profileName,
      endpointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists existing AzureFrontDoor endpoints.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: AFDEndpointsListByProfileOptionalParams
  ): Promise<AFDEndpointsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsGetOptionalParams
  ): Promise<AFDEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpoint: AFDEndpoint,
    options?: AFDEndpointsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDEndpointsCreateResponse>,
      AFDEndpointsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDEndpointsCreateResponse> => {
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
      { resourceGroupName, profileName, endpointName, endpoint, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates a new AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpoint: AFDEndpoint,
    options?: AFDEndpointsCreateOptionalParams
  ): Promise<AFDEndpointsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      endpointName,
      endpoint,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint. To
   * update origins, use the Update Origin operation. To update origin groups, use the Update Origin
   * group operation. To update domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpointUpdateProperties: AFDEndpointUpdateParameters,
    options?: AFDEndpointsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDEndpointsUpdateResponse>,
      AFDEndpointsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDEndpointsUpdateResponse> => {
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
        profileName,
        endpointName,
        endpointUpdateProperties,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Updates an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint. To
   * update origins, use the Update Origin operation. To update origin groups, use the Update Origin
   * group operation. To update domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    endpointUpdateProperties: AFDEndpointUpdateParameters,
    options?: AFDEndpointsUpdateOptionalParams
  ): Promise<AFDEndpointsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      endpointName,
      endpointUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsDeleteOptionalParams
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
      { resourceGroupName, profileName, endpointName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Deletes an existing AzureFrontDoor endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Removes a content from AzureFrontDoor.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contents The list of paths to the content and the list of linked domains to be purged. Path
   *                 can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a
   *                 wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.
   * @param options The options parameters.
   */
  async beginPurgeContent(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    contents: AfdPurgeParameters,
    options?: AFDEndpointsPurgeContentOptionalParams
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
      { resourceGroupName, profileName, endpointName, contents, options },
      purgeContentOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Removes a content from AzureFrontDoor.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contents The list of paths to the content and the list of linked domains to be purged. Path
   *                 can be a full URL, e.g. '/pictures/city.png' which removes a single file, or a directory with a
   *                 wildcard, e.g. '/pictures/*' which removes all folders and files in the directory.
   * @param options The options parameters.
   */
  async beginPurgeContentAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    contents: AfdPurgeParameters,
    options?: AFDEndpointsPurgeContentOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurgeContent(
      resourceGroupName,
      profileName,
      endpointName,
      contents,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Checks the quota and actual usage of endpoints under the given CDN profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listResourceUsage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: AFDEndpointsListResourceUsageOptionalParams
  ): Promise<AFDEndpointsListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      listResourceUsageOperationSpec
    );
  }

  /**
   * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainProperties Custom domain to be validated.
   * @param options The options parameters.
   */
  validateCustomDomain(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainProperties: ValidateCustomDomainInput,
    options?: AFDEndpointsValidateCustomDomainOptionalParams
  ): Promise<AFDEndpointsValidateCustomDomainResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainProperties,
        options
      },
      validateCustomDomainOperationSpec
    );
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: AFDEndpointsListByProfileNextOptionalParams
  ): Promise<AFDEndpointsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }

  /**
   * ListResourceUsageNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListResourceUsage method.
   * @param options The options parameters.
   */
  private _listResourceUsageNext(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    nextLink: string,
    options?: AFDEndpointsListResourceUsageNextOptionalParams
  ): Promise<AFDEndpointsListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, nextLink, options },
      listResourceUsageNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDEndpointListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDEndpoint
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AFDEndpoint
    },
    201: {
      bodyMapper: Mappers.AFDEndpoint
    },
    202: {
      bodyMapper: Mappers.AFDEndpoint
    },
    204: {
      bodyMapper: Mappers.AFDEndpoint
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.endpoint1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AFDEndpoint
    },
    201: {
      bodyMapper: Mappers.AFDEndpoint
    },
    202: {
      bodyMapper: Mappers.AFDEndpoint
    },
    204: {
      bodyMapper: Mappers.AFDEndpoint
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.endpointUpdateProperties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const purgeContentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/purge",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.contents,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listResourceUsageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/usages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateCustomDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/validateCustomDomain",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateCustomDomainOutput
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.customDomainProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDEndpointListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceUsageNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
