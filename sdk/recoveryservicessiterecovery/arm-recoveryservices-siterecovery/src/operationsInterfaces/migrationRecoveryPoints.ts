/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MigrationRecoveryPoint,
  MigrationRecoveryPointsListByReplicationMigrationItemsOptionalParams,
  MigrationRecoveryPointsGetOptionalParams,
  MigrationRecoveryPointsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MigrationRecoveryPoints. */
export interface MigrationRecoveryPoints {
  /**
   * Gets the recovery points for a migration item.
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param options The options parameters.
   */
  listByReplicationMigrationItems(
    fabricName: string,
    protectionContainerName: string,
    migrationItemName: string,
    options?: MigrationRecoveryPointsListByReplicationMigrationItemsOptionalParams
  ): PagedAsyncIterableIterator<MigrationRecoveryPoint>;
  /**
   * Gets a recovery point for a migration item.
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrationRecoveryPointName The migration recovery point name.
   * @param options The options parameters.
   */
  get(
    fabricName: string,
    protectionContainerName: string,
    migrationItemName: string,
    migrationRecoveryPointName: string,
    options?: MigrationRecoveryPointsGetOptionalParams
  ): Promise<MigrationRecoveryPointsGetResponse>;
}
