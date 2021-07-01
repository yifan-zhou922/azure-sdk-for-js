import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SharedGalleryImageVersion,
  SharedGalleryImageVersionsListOptionalParams,
  SharedGalleryImageVersionsGetOptionalParams,
  SharedGalleryImageVersionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SharedGalleryImageVersions. */
export interface SharedGalleryImageVersions {
  /**
   * List shared gallery image versions by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImageVersionsListOptionalParams
  ): PagedAsyncIterableIterator<SharedGalleryImageVersion>;
  /**
   * Get a shared gallery image version by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: SharedGalleryImageVersionsGetOptionalParams
  ): Promise<SharedGalleryImageVersionsGetResponse>;
}
