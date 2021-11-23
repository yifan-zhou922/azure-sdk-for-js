/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RoleAssignmentSchedules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleAssignmentSchedule,
  RoleAssignmentSchedulesListForScopeNextOptionalParams,
  RoleAssignmentSchedulesListForScopeOptionalParams,
  RoleAssignmentSchedulesGetOptionalParams,
  RoleAssignmentSchedulesGetResponse,
  RoleAssignmentSchedulesListForScopeResponse,
  RoleAssignmentSchedulesListForScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleAssignmentSchedules operations. */
export class RoleAssignmentSchedulesImpl implements RoleAssignmentSchedules {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleAssignmentSchedules class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets role assignment schedules for a resource scope.
   * @param scope The scope of the role assignments schedules.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleAssignmentSchedulesListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignmentSchedule> {
    const iter = this.listForScopePagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listForScopePagingPage(scope, options);
      }
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    options?: RoleAssignmentSchedulesListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignmentSchedule[]> {
    let result = await this._listForScope(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    options?: RoleAssignmentSchedulesListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignmentSchedule> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get the specified role assignment schedule for a resource scope
   * @param scope The scope of the role assignment schedule.
   * @param roleAssignmentScheduleName The name (guid) of the role assignment schedule to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentScheduleName: string,
    options?: RoleAssignmentSchedulesGetOptionalParams
  ): Promise<RoleAssignmentSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleName, options },
      getOperationSpec
    );
  }

  /**
   * Gets role assignment schedules for a resource scope.
   * @param scope The scope of the role assignments schedules.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleAssignmentSchedulesListForScopeOptionalParams
  ): Promise<RoleAssignmentSchedulesListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role assignments schedules.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleAssignmentSchedulesListForScopeNextOptionalParams
  ): Promise<RoleAssignmentSchedulesListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentSchedules/{roleAssignmentScheduleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleAssignmentSchedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
