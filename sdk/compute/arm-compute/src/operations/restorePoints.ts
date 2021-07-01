import { RestorePoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RestorePoint,
  RestorePointsCreateOptionalParams,
  RestorePointsCreateResponse,
  RestorePointsDeleteOptionalParams,
  RestorePointsGetOptionalParams,
  RestorePointsGetResponse
} from "../models";

/** Class representing a RestorePoints. */
export class RestorePointsImpl implements RestorePoints {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class RestorePoints class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RestorePointsCreateResponse>,
      RestorePointsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RestorePointsCreateResponse> => {
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        parameters,
        options
      },
      createOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams
  ): Promise<RestorePointsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      restorePointCollectionName,
      restorePointName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        options
      },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      restorePointCollectionName,
      restorePointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsGetOptionalParams
  ): Promise<RestorePointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        restorePointName,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    201: {
      bodyMapper: Mappers.RestorePoint
    },
    202: {
      bodyMapper: Mappers.RestorePoint
    },
    204: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters23,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{restorePointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.restorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
