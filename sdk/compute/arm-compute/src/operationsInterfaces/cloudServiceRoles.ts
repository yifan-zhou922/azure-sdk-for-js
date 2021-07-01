import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CloudServiceRole,
  CloudServiceRolesListOptionalParams,
  CloudServiceRolesGetOptionalParams,
  CloudServiceRolesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CloudServiceRoles. */
export interface CloudServiceRoles {
  /**
   * Gets a list of all roles in a cloud service. Use nextLink property in the response to get the next
   * page of roles. Do this till nextLink is null to fetch all the roles.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): PagedAsyncIterableIterator<CloudServiceRole>;
  /**
   * Gets a role from a cloud service.
   * @param roleName Name of the role.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  get(
    roleName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesGetOptionalParams
  ): Promise<CloudServiceRolesGetResponse>;
}
