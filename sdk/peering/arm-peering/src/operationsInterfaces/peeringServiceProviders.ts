/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeeringServiceProvider,
  PeeringServiceProvidersListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PeeringServiceProviders. */
export interface PeeringServiceProviders {
  /**
   * Lists all of the available peering service locations for the specified kind of peering.
   * @param options The options parameters.
   */
  list(
    options?: PeeringServiceProvidersListOptionalParams
  ): PagedAsyncIterableIterator<PeeringServiceProvider>;
}
