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
 * This sample demonstrates how to Creates a database
 *
 * @summary Creates a database
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2021-08-01/examples/RedisEnterpriseDatabasesCreate.json
 */
import {
  Database,
  RedisEnterpriseManagementClient
} from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";

async function redisEnterpriseDatabasesCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const parameters: Database = {
    clientProtocol: "Encrypted",
    clusteringPolicy: "EnterpriseCluster",
    evictionPolicy: "AllKeysLRU",
    modules: [
      { name: "RedisBloom", args: "ERROR_RATE 0.00 INITIAL_SIZE 400" },
      { name: "RedisTimeSeries", args: "RETENTION_POLICY 20" },
      { name: "RediSearch" }
    ],
    persistence: { aofEnabled: true, aofFrequency: "1s" },
    port: 10000
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.databases.beginCreateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    parameters
  );
  console.log(result);
}

redisEnterpriseDatabasesCreate().catch(console.error);
