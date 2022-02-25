/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
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

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
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
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const DnsResolverPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsResolverPatch",
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

export const DnsResolverListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsResolverListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DnsResolver"
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

export const IpConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IpConfiguration",
    modelProperties: {
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      privateIpAddress: {
        serializedName: "privateIpAddress",
        type: {
          name: "String"
        }
      },
      privateIpAllocationMethod: {
        defaultValue: "Dynamic",
        serializedName: "privateIpAllocationMethod",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InboundEndpointPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InboundEndpointPatch",
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

export const InboundEndpointListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InboundEndpointListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InboundEndpoint"
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

export const OutboundEndpointPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEndpointPatch",
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

export const OutboundEndpointListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEndpointListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OutboundEndpoint"
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

export const DnsForwardingRulesetPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsForwardingRulesetPatch",
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

export const DnsForwardingRulesetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsForwardingRulesetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DnsForwardingRuleset"
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

export const TargetDnsServer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetDnsServer",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      },
      port: {
        defaultValue: 53,
        serializedName: "port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ForwardingRulePatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ForwardingRulePatch",
    modelProperties: {
      targetDnsServers: {
        serializedName: "properties.targetDnsServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TargetDnsServer"
            }
          }
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      forwardingRuleState: {
        serializedName: "properties.forwardingRuleState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ForwardingRuleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ForwardingRuleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ForwardingRule"
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

export const VirtualNetworkLinkPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkLinkPatch",
    modelProperties: {
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const VirtualNetworkLinkListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkLinkListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkLink"
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

export const SubResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
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

export const VirtualNetworkDnsForwardingRulesetListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkDnsForwardingRulesetListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkDnsForwardingRuleset"
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

export const VirtualNetworkDnsForwardingRuleset: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkDnsForwardingRuleset",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      virtualNetworkLink: {
        serializedName: "properties.virtualNetworkLink",
        type: {
          name: "Composite",
          className: "SubResource"
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

export const DnsResolver: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsResolver",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      virtualNetwork: {
        serializedName: "properties.virtualNetwork",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      dnsResolverState: {
        serializedName: "properties.dnsResolverState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGuid: {
        serializedName: "properties.resourceGuid",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InboundEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InboundEndpoint",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      ipConfigurations: {
        serializedName: "properties.ipConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpConfiguration"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGuid: {
        serializedName: "properties.resourceGuid",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OutboundEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEndpoint",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      subnet: {
        serializedName: "properties.subnet",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGuid: {
        serializedName: "properties.resourceGuid",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DnsForwardingRuleset: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DnsForwardingRuleset",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      dnsResolverOutboundEndpoints: {
        serializedName: "properties.dnsResolverOutboundEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SubResource"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGuid: {
        serializedName: "properties.resourceGuid",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ForwardingRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ForwardingRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      domainName: {
        serializedName: "properties.domainName",
        type: {
          name: "String"
        }
      },
      targetDnsServers: {
        serializedName: "properties.targetDnsServers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TargetDnsServer"
            }
          }
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      forwardingRuleState: {
        serializedName: "properties.forwardingRuleState",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkLink",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      virtualNetwork: {
        serializedName: "properties.virtualNetwork",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
