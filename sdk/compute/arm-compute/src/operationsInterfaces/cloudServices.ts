import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CloudService,
  CloudServicesListAllOptionalParams,
  CloudServicesListOptionalParams,
  CloudServicesCreateOrUpdateOptionalParams,
  CloudServicesCreateOrUpdateResponse,
  CloudServicesUpdateOptionalParams,
  CloudServicesUpdateResponse,
  CloudServicesDeleteOptionalParams,
  CloudServicesGetOptionalParams,
  CloudServicesGetResponse,
  CloudServicesGetInstanceViewOptionalParams,
  CloudServicesGetInstanceViewResponse,
  CloudServicesStartOptionalParams,
  CloudServicesPowerOffOptionalParams,
  CloudServicesRestartOptionalParams,
  CloudServicesReimageOptionalParams,
  CloudServicesRebuildOptionalParams,
  CloudServicesDeleteInstancesOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudServices. */
export interface CloudServices {
  /**
   * Gets a list of all cloud services in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of Cloud Services. Do this till nextLink
   * is null to fetch all the Cloud Services.
   * @param options The options parameters.
   */
  listAll(
    options?: CloudServicesListAllOptionalParams
  ): PagedAsyncIterableIterator<CloudService>;
  /**
   * Gets a list of all cloud services under a resource group. Use nextLink property in the response to
   * get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud Services.
   * @param resourceGroupName Name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: CloudServicesListOptionalParams
  ): PagedAsyncIterableIterator<CloudService>;
  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud service
   * creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CloudServicesCreateOrUpdateResponse>,
      CloudServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud service
   * creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesCreateOrUpdateOptionalParams
  ): Promise<CloudServicesCreateOrUpdateResponse>;
  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CloudServicesUpdateResponse>,
      CloudServicesUpdateResponse
    >
  >;
  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateOptionalParams
  ): Promise<CloudServicesUpdateResponse>;
  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Display information about a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesGetOptionalParams
  ): Promise<CloudServicesGetResponse>;
  /**
   * Gets the status of a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesGetInstanceViewOptionalParams
  ): Promise<CloudServicesGetInstanceViewResponse>;
  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesStartOptionalParams
  ): Promise<void>;
  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged for
   * the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginPowerOff(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesPowerOffOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged for
   * the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginPowerOffAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesPowerOffOptionalParams
  ): Promise<void>;
  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRestartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRestartOptionalParams
  ): Promise<void>;
  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker
   * roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginReimage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesReimageOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or worker
   * roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginReimageAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesReimageOptionalParams
  ): Promise<void>;
  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and
   * initializes the storage resources that are used by them. If you do not want to initialize storage
   * resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginRebuild(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRebuildOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles and
   * initializes the storage resources that are used by them. If you do not want to initialize storage
   * resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginRebuildAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesRebuildOptionalParams
  ): Promise<void>;
  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginDeleteInstances(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteInstancesOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  beginDeleteInstancesAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesDeleteInstancesOptionalParams
  ): Promise<void>;
}
