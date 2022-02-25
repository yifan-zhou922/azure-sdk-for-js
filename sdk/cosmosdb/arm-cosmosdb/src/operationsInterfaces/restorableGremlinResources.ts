/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GremlinDatabaseRestoreResource,
  RestorableGremlinResourcesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableGremlinResources. */
export interface RestorableGremlinResources {
  /**
   * Return a list of gremlin database and graphs combo that exist on the account at the given timestamp
   * and location. This helps in scenarios to validate what resources exist at given timestamp and
   * location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read'
   * permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  list(
    location: string,
    instanceId: string,
    options?: RestorableGremlinResourcesListOptionalParams
  ): PagedAsyncIterableIterator<GremlinDatabaseRestoreResource>;
}
