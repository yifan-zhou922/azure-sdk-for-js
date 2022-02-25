/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PurviewManagementClient } from "../purviewManagementClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByAccountNextOptionalParams,
  PrivateLinkResourcesListByAccountOptionalParams,
  PrivateLinkResourcesListByAccountResponse,
  PrivateLinkResourcesGetByGroupIdOptionalParams,
  PrivateLinkResourcesGetByGroupIdResponse,
  PrivateLinkResourcesListByAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: PurviewManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: PurviewManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of privately linkable resources for an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  public listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByAccountPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listByAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByAccountOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of privately linkable resources for an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  private _listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByAccountOptionalParams
  ): Promise<PrivateLinkResourcesListByAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByAccountOperationSpec
    );
  }

  /**
   * Gets a privately linkable resources for an account with given group identifier
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param groupId The group identifier.
   * @param options The options parameters.
   */
  getByGroupId(
    resourceGroupName: string,
    accountName: string,
    groupId: string,
    options?: PrivateLinkResourcesGetByGroupIdOptionalParams
  ): Promise<PrivateLinkResourcesGetByGroupIdResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, groupId, options },
      getByGroupIdOperationSpec
    );
  }

  /**
   * ListByAccountNext
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param nextLink The nextLink from the previous successful call to the ListByAccount method.
   * @param options The options parameters.
   */
  private _listByAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: PrivateLinkResourcesListByAccountNextOptionalParams
  ): Promise<PrivateLinkResourcesListByAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByGroupIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateLinkResources/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponseModel
    }
  },
  queryParameters: [Parameters.apiVersion],
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
