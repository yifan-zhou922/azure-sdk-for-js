/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StartMenuItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  StartMenuItem,
  StartMenuItemsListNextOptionalParams,
  StartMenuItemsListOptionalParams,
  StartMenuItemsListResponse,
  StartMenuItemsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StartMenuItems operations. */
export class StartMenuItemsImpl implements StartMenuItems {
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class StartMenuItems class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * List start menu items in the given application group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: StartMenuItemsListOptionalParams
  ): PagedAsyncIterableIterator<StartMenuItem> {
    const iter = this.listPagingAll(
      resourceGroupName,
      applicationGroupName,
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
        return this.listPagingPage(
          resourceGroupName,
          applicationGroupName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: StartMenuItemsListOptionalParams
  ): AsyncIterableIterator<StartMenuItem[]> {
    let result = await this._list(
      resourceGroupName,
      applicationGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        applicationGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: StartMenuItemsListOptionalParams
  ): AsyncIterableIterator<StartMenuItem> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      applicationGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List start menu items in the given application group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: StartMenuItemsListOptionalParams
  ): Promise<StartMenuItemsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    applicationGroupName: string,
    nextLink: string,
    options?: StartMenuItemsListNextOptionalParams
  ): Promise<StartMenuItemsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/startMenuItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StartMenuItemList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StartMenuItemList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
