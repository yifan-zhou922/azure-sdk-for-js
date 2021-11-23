/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  DataExport as DataExportMapper,
  DataSource as DataSourceMapper,
  LinkedService as LinkedServiceMapper,
  LinkedStorageAccountsResource as LinkedStorageAccountsResourceMapper,
  StorageInsight as StorageInsightMapper,
  SavedSearch as SavedSearchMapper,
  WorkspacePurgeBody as WorkspacePurgeBodyMapper,
  Table as TableMapper,
  Cluster as ClusterMapper,
  ClusterPatch as ClusterPatchMapper,
  Workspace as WorkspaceMapper,
  WorkspacePatch as WorkspacePatchMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"),
      MaxLength: 63,
      MinLength: 4
    },
    serializedName: "workspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: DataExportMapper
};

export const dataExportName: OperationURLParameter = {
  parameterPath: "dataExportName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z][A-Za-z0-9-]+[A-Za-z0-9]$"),
      MaxLength: 63,
      MinLength: 4
    },
    serializedName: "dataExportName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const dataExportName1: OperationURLParameter = {
  parameterPath: "dataExportName",
  mapper: {
    serializedName: "dataExportName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: DataSourceMapper
};

export const dataSourceName: OperationURLParameter = {
  parameterPath: "dataSourceName",
  mapper: {
    serializedName: "dataSourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const intelligencePackName: OperationURLParameter = {
  parameterPath: "intelligencePackName",
  mapper: {
    serializedName: "intelligencePackName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: LinkedServiceMapper
};

export const linkedServiceName: OperationURLParameter = {
  parameterPath: "linkedServiceName",
  mapper: {
    serializedName: "linkedServiceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: LinkedStorageAccountsResourceMapper
};

export const dataSourceType: OperationURLParameter = {
  parameterPath: "dataSourceType",
  mapper: {
    serializedName: "dataSourceType",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["CustomLogs", "AzureWatson", "Query", "Alerts"]
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const asyncOperationId: OperationURLParameter = {
  parameterPath: "asyncOperationId",
  mapper: {
    serializedName: "asyncOperationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: StorageInsightMapper
};

export const storageInsightName: OperationURLParameter = {
  parameterPath: "storageInsightName",
  mapper: {
    serializedName: "storageInsightName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const savedSearchId: OperationURLParameter = {
  parameterPath: "savedSearchId",
  mapper: {
    serializedName: "savedSearchId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: SavedSearchMapper
};

export const gatewayId: OperationURLParameter = {
  parameterPath: "gatewayId",
  mapper: {
    serializedName: "gatewayId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: WorkspacePurgeBodyMapper
};

export const purgeId: OperationURLParameter = {
  parameterPath: "purgeId",
  mapper: {
    serializedName: "purgeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: TableMapper
};

export const tableName: OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    serializedName: "tableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterMapper
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"),
      MaxLength: 63,
      MinLength: 4
    },
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const clusterName1: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterPatchMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceMapper
};

export const force: OperationQueryParameter = {
  parameterPath: ["options", "force"],
  mapper: {
    serializedName: "force",
    type: {
      name: "Boolean"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspacePatchMapper
};
