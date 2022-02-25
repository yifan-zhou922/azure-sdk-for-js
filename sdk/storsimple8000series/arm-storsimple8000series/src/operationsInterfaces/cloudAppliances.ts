/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CloudApplianceConfiguration,
  CloudAppliancesListSupportedConfigurationsOptionalParams,
  CloudAppliance,
  CloudAppliancesProvisionOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudAppliances. */
export interface CloudAppliances {
  /**
   * Lists supported cloud appliance models and supported configurations.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listSupportedConfigurations(
    resourceGroupName: string,
    managerName: string,
    options?: CloudAppliancesListSupportedConfigurationsOptionalParams
  ): PagedAsyncIterableIterator<CloudApplianceConfiguration>;
  /**
   * Provisions cloud appliance.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The cloud appliance
   * @param options The options parameters.
   */
  beginProvision(
    resourceGroupName: string,
    managerName: string,
    parameters: CloudAppliance,
    options?: CloudAppliancesProvisionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Provisions cloud appliance.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The cloud appliance
   * @param options The options parameters.
   */
  beginProvisionAndWait(
    resourceGroupName: string,
    managerName: string,
    parameters: CloudAppliance,
    options?: CloudAppliancesProvisionOptionalParams
  ): Promise<void>;
}
