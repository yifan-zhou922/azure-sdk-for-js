/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessReviewInstanceMyDecisions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewDecision,
  AccessReviewInstanceMyDecisionsListNextOptionalParams,
  AccessReviewInstanceMyDecisionsListOptionalParams,
  AccessReviewInstanceMyDecisionsListResponse,
  AccessReviewInstanceMyDecisionsGetByIdOptionalParams,
  AccessReviewInstanceMyDecisionsGetByIdResponse,
  AccessReviewDecisionProperties,
  AccessReviewInstanceMyDecisionsPatchOptionalParams,
  AccessReviewInstanceMyDecisionsPatchResponse,
  AccessReviewInstanceMyDecisionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewInstanceMyDecisions operations. */
export class AccessReviewInstanceMyDecisionsImpl
  implements AccessReviewInstanceMyDecisions {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewInstanceMyDecisions class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get my access review instance decisions.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  public list(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceMyDecisionsListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewDecision> {
    const iter = this.listPagingAll(scheduleDefinitionId, id, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(scheduleDefinitionId, id, options);
      }
    };
  }

  private async *listPagingPage(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceMyDecisionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewDecision[]> {
    let result = await this._list(scheduleDefinitionId, id, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        scheduleDefinitionId,
        id,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceMyDecisionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewDecision> {
    for await (const page of this.listPagingPage(
      scheduleDefinitionId,
      id,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get my access review instance decisions.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  private _list(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceMyDecisionsListOptionalParams
  ): Promise<AccessReviewInstanceMyDecisionsListResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      listOperationSpec
    );
  }

  /**
   * Get my single access review instance decision.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param decisionId The id of the decision record.
   * @param options The options parameters.
   */
  getById(
    scheduleDefinitionId: string,
    id: string,
    decisionId: string,
    options?: AccessReviewInstanceMyDecisionsGetByIdOptionalParams
  ): Promise<AccessReviewInstanceMyDecisionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, decisionId, options },
      getByIdOperationSpec
    );
  }

  /**
   * Record a decision.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param decisionId The id of the decision record.
   * @param properties Access review decision properties to patch.
   * @param options The options parameters.
   */
  patch(
    scheduleDefinitionId: string,
    id: string,
    decisionId: string,
    properties: AccessReviewDecisionProperties,
    options?: AccessReviewInstanceMyDecisionsPatchOptionalParams
  ): Promise<AccessReviewInstanceMyDecisionsPatchResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, decisionId, properties, options },
      patchOperationSpec
    );
  }

  /**
   * ListNext
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scheduleDefinitionId: string,
    id: string,
    nextLink: string,
    options?: AccessReviewInstanceMyDecisionsListNextOptionalParams
  ): Promise<AccessReviewInstanceMyDecisionsListNextResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/decisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecisionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/decisions/{decisionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecision
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.decisionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const patchOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/decisions/{decisionId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecision
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  requestBody: Parameters.properties2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.decisionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecisionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
