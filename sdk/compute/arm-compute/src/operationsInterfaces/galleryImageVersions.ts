import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GalleryImageVersion,
  GalleryImageVersionsListByGalleryImageOptionalParams,
  GalleryImageVersionsCreateOrUpdateOptionalParams,
  GalleryImageVersionsCreateOrUpdateResponse,
  GalleryImageVersionUpdate,
  GalleryImageVersionsUpdateOptionalParams,
  GalleryImageVersionsUpdateResponse,
  GalleryImageVersionsGetOptionalParams,
  GalleryImageVersionsGetResponse,
  GalleryImageVersionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryImageVersions. */
export interface GalleryImageVersions {
  /**
   * List gallery image versions in a gallery image definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryImage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: GalleryImageVersionsListByGalleryImageOptionalParams
  ): PagedAsyncIterableIterator<GalleryImageVersion>;
  /**
   * Create or update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery image version
   *                            operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: GalleryImageVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsCreateOrUpdateResponse>,
      GalleryImageVersionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery image version
   *                            operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: GalleryImageVersionsCreateOrUpdateOptionalParams
  ): Promise<GalleryImageVersionsCreateOrUpdateResponse>;
  /**
   * Update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery image version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery image version operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: GalleryImageVersionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryImageVersionsUpdateResponse>,
      GalleryImageVersionsUpdateResponse
    >
  >;
  /**
   * Update a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery image version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery image version operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: GalleryImageVersionsUpdateOptionalParams
  ): Promise<GalleryImageVersionsUpdateResponse>;
  /**
   * Retrieves information about a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsGetOptionalParams
  ): Promise<GalleryImageVersionsGetResponse>;
  /**
   * Delete a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a gallery image version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery image definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery image version to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: GalleryImageVersionsDeleteOptionalParams
  ): Promise<void>;
}
