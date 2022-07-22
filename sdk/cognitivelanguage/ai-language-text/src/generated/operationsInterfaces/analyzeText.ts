/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AnalyzeTextJobsInput,
  AnalyzeTextSubmitJobOptionalParams,
  AnalyzeTextSubmitJobResponse,
  AnalyzeTextJobStatusOptionalParams,
  AnalyzeTextJobStatusResponse,
  AnalyzeTextCancelJobOptionalParams,
  AnalyzeTextCancelJobResponse
} from "../models";

/** Interface representing a AnalyzeText. */
export interface AnalyzeText {
  /**
   * Submit a collection of text documents for analysis. Specify one or more unique tasks to be executed
   * as a long-running operation.
   * @param body Collection of documents to analyze and one or more tasks to execute.
   * @param options The options parameters.
   */
  submitJob(
    body: AnalyzeTextJobsInput,
    options?: AnalyzeTextSubmitJobOptionalParams
  ): Promise<AnalyzeTextSubmitJobResponse>;
  /**
   * Get the status of an analysis job.  A job may consist of one or more tasks.  Once all tasks are
   * succeeded, the job will transition to the succeeded state and results will be available for each
   * task.
   * @param jobId Job ID
   * @param options The options parameters.
   */
  jobStatus(
    jobId: string,
    options?: AnalyzeTextJobStatusOptionalParams
  ): Promise<AnalyzeTextJobStatusResponse>;
  /**
   * Cancel a long-running Text Analysis job.
   * @param jobId Job ID
   * @param options The options parameters.
   */
  cancelJob(
    jobId: string,
    options?: AnalyzeTextCancelJobOptionalParams
  ): Promise<AnalyzeTextCancelJobResponse>;
}