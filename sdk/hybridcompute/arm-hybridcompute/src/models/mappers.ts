/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MachineProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineProperties",
    modelProperties: {
      locationData: {
        serializedName: "locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "OSProfile"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastStatusChange: {
        serializedName: "lastStatusChange",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      errorDetails: {
        serializedName: "errorDetails",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      agentVersion: {
        serializedName: "agentVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      vmId: {
        serializedName: "vmId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      machineFqdn: {
        serializedName: "machineFqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientPublicKey: {
        serializedName: "clientPublicKey",
        type: {
          name: "String"
        }
      },
      osName: {
        serializedName: "osName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      osVersion: {
        serializedName: "osVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      vmUuid: {
        serializedName: "vmUuid",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensions: {
        serializedName: "extensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineExtensionInstanceView"
            }
          }
        }
      },
      osSku: {
        serializedName: "osSku",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      domainName: {
        serializedName: "domainName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      adFqdn: {
        serializedName: "adFqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      dnsFqdn: {
        serializedName: "dnsFqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateLinkScopeResourceId: {
        serializedName: "privateLinkScopeResourceId",
        type: {
          name: "String"
        }
      },
      parentClusterResourceId: {
        serializedName: "parentClusterResourceId",
        type: {
          name: "String"
        }
      },
      detectedProperties: {
        serializedName: "detectedProperties",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const LocationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LocationData",
    modelProperties: {
      name: {
        constraints: {
          MaxLength: 256
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      countryOrRegion: {
        serializedName: "countryOrRegion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OSProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OSProfile",
    modelProperties: {
      computerName: {
        serializedName: "computerName",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineExtensionInstanceView: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionInstanceView",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "MachineExtensionInstanceViewStatus"
        }
      }
    }
  }
};

export const MachineExtensionInstanceViewStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionInstanceViewStatus",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      level: {
        serializedName: "level",
        type: {
          name: "String"
        }
      },
      displayStatus: {
        serializedName: "displayStatus",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "SystemAssigned",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Machine"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineExtensionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionProperties",
    modelProperties: {
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      protectedSettings: {
        serializedName: "protectedSettings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      instanceView: {
        serializedName: "instanceView",
        type: {
          name: "Composite",
          className: "MachineExtensionInstanceView"
        }
      }
    }
  }
};

export const MachineExtensionUpdateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionUpdateProperties",
    modelProperties: {
      forceUpdateTag: {
        serializedName: "forceUpdateTag",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      typeHandlerVersion: {
        serializedName: "typeHandlerVersion",
        type: {
          name: "String"
        }
      },
      autoUpgradeMinorVersion: {
        serializedName: "autoUpgradeMinorVersion",
        type: {
          name: "Boolean"
        }
      },
      settings: {
        serializedName: "settings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      protectedSettings: {
        serializedName: "protectedSettings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ResourceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const MachineExtensionsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MachineExtension"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineExtensionUpgrade: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionUpgrade",
    modelProperties: {
      extensionTargets: {
        serializedName: "extensionTargets",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ExtensionTargetProperties" }
          }
        }
      }
    }
  }
};

export const ExtensionTargetProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionTargetProperties",
    modelProperties: {
      targetVersion: {
        serializedName: "targetVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationValue"
            }
          }
        }
      }
    }
  }
};

export const OperationValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationValue",
    modelProperties: {
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationValueDisplay"
        }
      }
    }
  }
};

export const OperationValueDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationValueDisplay",
    modelProperties: {
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HybridComputePrivateLinkScopeListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridComputePrivateLinkScopeListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HybridComputePrivateLinkScope"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HybridComputePrivateLinkScopeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridComputePrivateLinkScopeProperties",
    modelProperties: {
      publicNetworkAccess: {
        defaultValue: "Disabled",
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateLinkScopeId: {
        serializedName: "privateLinkScopeId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkScopesResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkScopesResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const TagsResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsResource",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "requiredZoneNames",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PrivateEndpointConnectionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpointProperty"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionStateProperty"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointProperty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointProperty",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionStateProperty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionStateProperty",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkScopeValidationDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkScopeValidationDetails",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        defaultValue: "Disabled",
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      connectionDetails: {
        serializedName: "connectionDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectionDetail"
            }
          }
        }
      }
    }
  }
};

export const ConnectionDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectionDetail",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateIpAddress: {
        serializedName: "privateIpAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      linkIdentifier: {
        serializedName: "linkIdentifier",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      memberName: {
        serializedName: "memberName",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MachineUpdateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineUpdateProperties",
    modelProperties: {
      locationData: {
        serializedName: "locationData",
        type: {
          name: "Composite",
          className: "LocationData"
        }
      },
      parentClusterResourceId: {
        serializedName: "parentClusterResourceId",
        type: {
          name: "String"
        }
      },
      privateLinkScopeResourceId: {
        serializedName: "privateLinkScopeResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const MachineExtensionUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtensionUpdate",
    modelProperties: {
      ...ResourceUpdate.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MachineExtensionUpdateProperties"
        }
      }
    }
  }
};

export const MachineUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineUpdate",
    modelProperties: {
      ...ResourceUpdate.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MachineUpdateProperties"
        }
      }
    }
  }
};

export const HybridComputePrivateLinkScope: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HybridComputePrivateLinkScope",
    modelProperties: {
      ...PrivateLinkScopesResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "HybridComputePrivateLinkScopeProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const Machine: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Machine",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MachineProperties"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const MachineExtension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MachineExtension",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MachineExtensionProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkResourceProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnectionProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};
