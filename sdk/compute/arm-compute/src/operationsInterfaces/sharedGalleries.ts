import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SharedGallery,
  SharedGalleriesListOptionalParams,
  SharedGalleriesGetOptionalParams,
  SharedGalleriesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SharedGalleries. */
export interface SharedGalleries {
  /**
   * List shared galleries by subscription id or tenant id.
   * @param location Resource location.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: SharedGalleriesListOptionalParams
  ): PagedAsyncIterableIterator<SharedGallery>;
  /**
   * Get a shared gallery by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleriesGetOptionalParams
  ): Promise<SharedGalleriesGetResponse>;
}
