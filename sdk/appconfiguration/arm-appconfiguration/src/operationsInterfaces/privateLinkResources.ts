/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByConfigurationStoreOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources that need to be created for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  listByConfigurationStore(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateLinkResourcesListByConfigurationStoreOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Gets a private link resource that need to be created for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param groupName The name of the private link resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    groupName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse>;
}
