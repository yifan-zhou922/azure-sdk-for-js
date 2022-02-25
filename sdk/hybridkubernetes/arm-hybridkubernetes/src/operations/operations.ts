/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConnectedKubernetesClient } from "../connectedKubernetesClient";
import {
  Operation,
  OperationsGetNextOptionalParams,
  OperationsGetOptionalParams,
  OperationsGetResponse,
  OperationsGetNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: ConnectedKubernetesClient;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: ConnectedKubernetesClient) {
    this.client = client;
  }

  /**
   * Lists all of the available API operations for Connected Cluster resource.
   * @param options The options parameters.
   */
  public list(
    options?: OperationsGetOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.getPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getPagingPage(options);
      }
    };
  }

  private async *getPagingPage(
    options?: OperationsGetOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._get(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getPagingAll(
    options?: OperationsGetOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.getPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available API operations for Connected Cluster resource.
   * @param options The options parameters.
   */
  private _get(
    options?: OperationsGetOptionalParams
  ): Promise<OperationsGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * GetNext
   * @param nextLink The nextLink from the previous successful call to the Get method.
   * @param options The options parameters.
   */
  private _getNext(
    nextLink: string,
    options?: OperationsGetNextOptionalParams
  ): Promise<OperationsGetNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Kubernetes/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
