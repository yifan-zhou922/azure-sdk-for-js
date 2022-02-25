/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Deletes a RedisEnterprise cache cluster.
 *
 * @summary Deletes a RedisEnterprise cache cluster.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2021-08-01/examples/RedisEnterpriseDelete.json
 */
import { RedisEnterpriseManagementClient } from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";

async function redisEnterpriseDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cache1";
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.redisEnterprise.beginDeleteAndWait(
    resourceGroupName,
    clusterName
  );
  console.log(result);
}

redisEnterpriseDelete().catch(console.error);
