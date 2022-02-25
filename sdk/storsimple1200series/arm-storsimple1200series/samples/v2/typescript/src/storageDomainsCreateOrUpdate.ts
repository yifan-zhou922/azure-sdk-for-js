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
 * This sample demonstrates how to Creates or updates the storage domain.
 *
 * @summary Creates or updates the storage domain.
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/StorageDomainsCreateOrUpdate.json
 */
import {
  StorageDomain,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

async function storageDomainsCreateOrUpdate() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const storageDomainName = "sd-fs-HSDK-4XY4FI2IVG";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const storageDomain: StorageDomain = {
    name: "sd-fs-HSDK-4XY4FI2IVG",
    encryptionStatus: "Disabled",
    storageAccountCredentialIds: [
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/storageAccountCredentials/sacforsdktest"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.storageDomains.beginCreateOrUpdateAndWait(
    storageDomainName,
    resourceGroupName,
    managerName,
    storageDomain
  );
  console.log(result);
}

storageDomainsCreateOrUpdate().catch(console.error);
