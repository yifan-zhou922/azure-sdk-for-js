/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AuthorizationPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClient } from "../customerInsightsManagementClient";
import {
  AuthorizationPolicyResourceFormat,
  AuthorizationPoliciesListByHubNextOptionalParams,
  AuthorizationPoliciesListByHubOptionalParams,
  AuthorizationPoliciesCreateOrUpdateOptionalParams,
  AuthorizationPoliciesCreateOrUpdateResponse,
  AuthorizationPoliciesGetOptionalParams,
  AuthorizationPoliciesGetResponse,
  AuthorizationPoliciesListByHubResponse,
  AuthorizationPoliciesRegeneratePrimaryKeyOptionalParams,
  AuthorizationPoliciesRegeneratePrimaryKeyResponse,
  AuthorizationPoliciesRegenerateSecondaryKeyOptionalParams,
  AuthorizationPoliciesRegenerateSecondaryKeyResponse,
  AuthorizationPoliciesListByHubNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AuthorizationPolicies operations. */
export class AuthorizationPoliciesImpl implements AuthorizationPolicies {
  private readonly client: CustomerInsightsManagementClient;

  /**
   * Initialize a new instance of the class AuthorizationPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: CustomerInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the authorization policies in a specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  public listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: AuthorizationPoliciesListByHubOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationPolicyResourceFormat> {
    const iter = this.listByHubPagingAll(resourceGroupName, hubName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByHubPagingPage(resourceGroupName, hubName, options);
      }
    };
  }

  private async *listByHubPagingPage(
    resourceGroupName: string,
    hubName: string,
    options?: AuthorizationPoliciesListByHubOptionalParams
  ): AsyncIterableIterator<AuthorizationPolicyResourceFormat[]> {
    let result = await this._listByHub(resourceGroupName, hubName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHubNext(
        resourceGroupName,
        hubName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHubPagingAll(
    resourceGroupName: string,
    hubName: string,
    options?: AuthorizationPoliciesListByHubOptionalParams
  ): AsyncIterableIterator<AuthorizationPolicyResourceFormat> {
    for await (const page of this.listByHubPagingPage(
      resourceGroupName,
      hubName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates an authorization policy or updates an existing authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param parameters Parameters supplied to the CreateOrUpdate authorization policy operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hubName: string,
    authorizationPolicyName: string,
    parameters: AuthorizationPolicyResourceFormat,
    options?: AuthorizationPoliciesCreateOrUpdateOptionalParams
  ): Promise<AuthorizationPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        authorizationPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets an authorization policy in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    authorizationPolicyName: string,
    options?: AuthorizationPoliciesGetOptionalParams
  ): Promise<AuthorizationPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, authorizationPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Gets all the authorization policies in a specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  private _listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: AuthorizationPoliciesListByHubOptionalParams
  ): Promise<AuthorizationPoliciesListByHubResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, options },
      listByHubOperationSpec
    );
  }

  /**
   * Regenerates the primary policy key of the specified authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The options parameters.
   */
  regeneratePrimaryKey(
    resourceGroupName: string,
    hubName: string,
    authorizationPolicyName: string,
    options?: AuthorizationPoliciesRegeneratePrimaryKeyOptionalParams
  ): Promise<AuthorizationPoliciesRegeneratePrimaryKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, authorizationPolicyName, options },
      regeneratePrimaryKeyOperationSpec
    );
  }

  /**
   * Regenerates the secondary policy key of the specified authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The options parameters.
   */
  regenerateSecondaryKey(
    resourceGroupName: string,
    hubName: string,
    authorizationPolicyName: string,
    options?: AuthorizationPoliciesRegenerateSecondaryKeyOptionalParams
  ): Promise<AuthorizationPoliciesRegenerateSecondaryKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, authorizationPolicyName, options },
      regenerateSecondaryKeyOperationSpec
    );
  }

  /**
   * ListByHubNext
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param nextLink The nextLink from the previous successful call to the ListByHub method.
   * @param options The options parameters.
   */
  private _listByHubNext(
    resourceGroupName: string,
    hubName: string,
    nextLink: string,
    options?: AuthorizationPoliciesListByHubNextOptionalParams
  ): Promise<AuthorizationPoliciesListByHubNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, nextLink, options },
      listByHubNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    },
    201: {
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.authorizationPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicyListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regeneratePrimaryKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regeneratePrimaryKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicy
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateSecondaryKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regenerateSecondaryKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicy
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicyListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
