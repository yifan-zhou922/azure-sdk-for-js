/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MonitoringSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  MonitoringSettingsGetOptionalParams,
  MonitoringSettingsGetResponse,
  MonitoringSettingResource,
  MonitoringSettingsUpdatePutOptionalParams,
  MonitoringSettingsUpdatePutResponse,
  MonitoringSettingsUpdatePatchOptionalParams,
  MonitoringSettingsUpdatePatchResponse
} from "../models";

/** Class containing MonitoringSettings operations. */
export class MonitoringSettingsImpl implements MonitoringSettings {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class MonitoringSettings class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Get the Monitoring Setting and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: MonitoringSettingsGetOptionalParams
  ): Promise<MonitoringSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      getOperationSpec
    );
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdatePut(
    resourceGroupName: string,
    serviceName: string,
    monitoringSettingResource: MonitoringSettingResource,
    options?: MonitoringSettingsUpdatePutOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MonitoringSettingsUpdatePutResponse>,
      MonitoringSettingsUpdatePutResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MonitoringSettingsUpdatePutResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serviceName, monitoringSettingResource, options },
      updatePutOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdatePutAndWait(
    resourceGroupName: string,
    serviceName: string,
    monitoringSettingResource: MonitoringSettingResource,
    options?: MonitoringSettingsUpdatePutOptionalParams
  ): Promise<MonitoringSettingsUpdatePutResponse> {
    const poller = await this.beginUpdatePut(
      resourceGroupName,
      serviceName,
      monitoringSettingResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdatePatch(
    resourceGroupName: string,
    serviceName: string,
    monitoringSettingResource: MonitoringSettingResource,
    options?: MonitoringSettingsUpdatePatchOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MonitoringSettingsUpdatePatchResponse>,
      MonitoringSettingsUpdatePatchResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MonitoringSettingsUpdatePatchResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serviceName, monitoringSettingResource, options },
      updatePatchOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Update the Monitoring Setting.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param monitoringSettingResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdatePatchAndWait(
    resourceGroupName: string,
    serviceName: string,
    monitoringSettingResource: MonitoringSettingResource,
    options?: MonitoringSettingsUpdatePatchOptionalParams
  ): Promise<MonitoringSettingsUpdatePatchResponse> {
    const poller = await this.beginUpdatePatch(
      resourceGroupName,
      serviceName,
      monitoringSettingResource,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updatePutOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    201: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    202: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    204: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.monitoringSettingResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updatePatchOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/monitoringSettings/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    201: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    202: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    204: {
      bodyMapper: Mappers.MonitoringSettingResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.monitoringSettingResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
