/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ThreatIntelligenceInformationUnion,
  ThreatIntelligenceFilteringCriteria,
  ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams,
  ThreatIntelligenceIndicatorModelForRequestBody,
  ThreatIntelligenceIndicatorCreateIndicatorOptionalParams,
  ThreatIntelligenceIndicatorCreateIndicatorResponse,
  ThreatIntelligenceIndicatorGetOptionalParams,
  ThreatIntelligenceIndicatorGetResponse,
  ThreatIntelligenceIndicatorCreateOptionalParams,
  ThreatIntelligenceIndicatorCreateResponse,
  ThreatIntelligenceIndicatorDeleteOptionalParams,
  ThreatIntelligenceAppendTags,
  ThreatIntelligenceIndicatorAppendTagsOptionalParams,
  ThreatIntelligenceIndicatorReplaceTagsOptionalParams,
  ThreatIntelligenceIndicatorReplaceTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ThreatIntelligenceIndicator. */
export interface ThreatIntelligenceIndicator {
  /**
   * Query threat intelligence indicators as per filtering criteria.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceFilteringCriteria Filtering criteria for querying threat intelligence
   *                                            indicators.
   * @param options The options parameters.
   */
  listQueryIndicators(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceFilteringCriteria: ThreatIntelligenceFilteringCriteria,
    options?: ThreatIntelligenceIndicatorQueryIndicatorsOptionalParams
  ): PagedAsyncIterableIterator<ThreatIntelligenceInformationUnion>;
  /**
   * Create a new threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param threatIntelligenceProperties Properties of threat intelligence indicators to create and
   *                                     update.
   * @param options The options parameters.
   */
  createIndicator(
    resourceGroupName: string,
    workspaceName: string,
    threatIntelligenceProperties: ThreatIntelligenceIndicatorModelForRequestBody,
    options?: ThreatIntelligenceIndicatorCreateIndicatorOptionalParams
  ): Promise<ThreatIntelligenceIndicatorCreateIndicatorResponse>;
  /**
   * View a threat intelligence indicator by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ThreatIntelligenceIndicatorGetOptionalParams
  ): Promise<ThreatIntelligenceIndicatorGetResponse>;
  /**
   * Update a threat Intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceProperties Properties of threat intelligence indicators to create and
   *                                     update.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceProperties: ThreatIntelligenceIndicatorModelForRequestBody,
    options?: ThreatIntelligenceIndicatorCreateOptionalParams
  ): Promise<ThreatIntelligenceIndicatorCreateResponse>;
  /**
   * Delete a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ThreatIntelligenceIndicatorDeleteOptionalParams
  ): Promise<void>;
  /**
   * Append tags to a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceAppendTags The threat intelligence append tags request body
   * @param options The options parameters.
   */
  appendTags(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceAppendTags: ThreatIntelligenceAppendTags,
    options?: ThreatIntelligenceIndicatorAppendTagsOptionalParams
  ): Promise<void>;
  /**
   * Replace tags added to a threat intelligence indicator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param name Threat intelligence indicator name field.
   * @param threatIntelligenceReplaceTags Tags in the threat intelligence indicator to be replaced.
   * @param options The options parameters.
   */
  replaceTags(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    threatIntelligenceReplaceTags: ThreatIntelligenceIndicatorModelForRequestBody,
    options?: ThreatIntelligenceIndicatorReplaceTagsOptionalParams
  ): Promise<ThreatIntelligenceIndicatorReplaceTagsResponse>;
}
