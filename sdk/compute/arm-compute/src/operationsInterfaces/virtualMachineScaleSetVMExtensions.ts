import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSetVMExtension,
  VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse,
  VirtualMachineScaleSetVMExtensionUpdate,
  VirtualMachineScaleSetVMExtensionsUpdateOptionalParams,
  VirtualMachineScaleSetVMExtensionsUpdateResponse,
  VirtualMachineScaleSetVMExtensionsDeleteOptionalParams,
  VirtualMachineScaleSetVMExtensionsGetOptionalParams,
  VirtualMachineScaleSetVMExtensionsGetResponse,
  VirtualMachineScaleSetVMExtensionsListOptionalParams,
  VirtualMachineScaleSetVMExtensionsListResponse
} from "../models";

/** Interface representing a VirtualMachineScaleSetVMExtensions. */
export interface VirtualMachineScaleSetVMExtensions {
  /**
   * The operation to create or update the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineScaleSetVMExtension,
    options?: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse
      >,
      VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Create Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineScaleSetVMExtension,
    options?: VirtualMachineScaleSetVMExtensionsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMExtensionsCreateOrUpdateResponse>;
  /**
   * The operation to update the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineScaleSetVMExtensionUpdate,
    options?: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetVMExtensionsUpdateResponse>,
      VirtualMachineScaleSetVMExtensionsUpdateResponse
    >
  >;
  /**
   * The operation to update the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param extensionParameters Parameters supplied to the Update Virtual Machine Extension operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    extensionParameters: VirtualMachineScaleSetVMExtensionUpdate,
    options?: VirtualMachineScaleSetVMExtensionsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMExtensionsUpdateResponse>;
  /**
   * The operation to delete the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    options?: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    options?: VirtualMachineScaleSetVMExtensionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the VMSS VM extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param vmExtensionName The name of the virtual machine extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    vmExtensionName: string,
    options?: VirtualMachineScaleSetVMExtensionsGetOptionalParams
  ): Promise<VirtualMachineScaleSetVMExtensionsGetResponse>;
  /**
   * The operation to get all extensions of an instance in Virtual Machine Scaleset.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMExtensionsListOptionalParams
  ): Promise<VirtualMachineScaleSetVMExtensionsListResponse>;
}
