/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AdaptiveApplicationControlsListOptionalParams,
  AdaptiveApplicationControlsListResponse,
  AdaptiveApplicationControlsGetOptionalParams,
  AdaptiveApplicationControlsGetResponse,
  AdaptiveApplicationControlGroup,
  AdaptiveApplicationControlsPutOptionalParams,
  AdaptiveApplicationControlsPutResponse,
  AdaptiveApplicationControlsDeleteOptionalParams
} from "../models";

/** Interface representing a AdaptiveApplicationControls. */
export interface AdaptiveApplicationControls {
  /**
   * Gets a list of application control machine groups for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: AdaptiveApplicationControlsListOptionalParams
  ): Promise<AdaptiveApplicationControlsListResponse>;
  /**
   * Gets an application control VM/server group.
   * @param groupName Name of an application control machine group
   * @param options The options parameters.
   */
  get(
    groupName: string,
    options?: AdaptiveApplicationControlsGetOptionalParams
  ): Promise<AdaptiveApplicationControlsGetResponse>;
  /**
   * Update an application control machine group
   * @param groupName Name of an application control machine group
   * @param body
   * @param options The options parameters.
   */
  put(
    groupName: string,
    body: AdaptiveApplicationControlGroup,
    options?: AdaptiveApplicationControlsPutOptionalParams
  ): Promise<AdaptiveApplicationControlsPutResponse>;
  /**
   * Delete an application control machine group
   * @param groupName Name of an application control machine group
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    options?: AdaptiveApplicationControlsDeleteOptionalParams
  ): Promise<void>;
}
