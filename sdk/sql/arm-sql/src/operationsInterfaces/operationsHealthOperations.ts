/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationsHealth,
  OperationsHealthListByLocationOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OperationsHealthOperations. */
export interface OperationsHealthOperations {
  /**
   * Gets a service operation health status.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: OperationsHealthListByLocationOptionalParams
  ): PagedAsyncIterableIterator<OperationsHealth>;
}
