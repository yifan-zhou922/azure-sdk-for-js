import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RequestRateByIntervalInput,
  LogAnalyticsExportRequestRateByIntervalOptionalParams,
  LogAnalyticsExportRequestRateByIntervalResponse,
  ThrottledRequestsInput,
  LogAnalyticsExportThrottledRequestsOptionalParams,
  LogAnalyticsExportThrottledRequestsResponse
} from "../models";

/** Interface representing a LogAnalytics. */
export interface LogAnalytics {
  /**
   * Export logs that show Api requests made by this subscription in the given time window to show
   * throttling activities.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
   * @param options The options parameters.
   */
  beginExportRequestRateByInterval(
    location: string,
    parameters: RequestRateByIntervalInput,
    options?: LogAnalyticsExportRequestRateByIntervalOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportRequestRateByIntervalResponse>,
      LogAnalyticsExportRequestRateByIntervalResponse
    >
  >;
  /**
   * Export logs that show Api requests made by this subscription in the given time window to show
   * throttling activities.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
   * @param options The options parameters.
   */
  beginExportRequestRateByIntervalAndWait(
    location: string,
    parameters: RequestRateByIntervalInput,
    options?: LogAnalyticsExportRequestRateByIntervalOptionalParams
  ): Promise<LogAnalyticsExportRequestRateByIntervalResponse>;
  /**
   * Export logs that show total throttled Api requests for this subscription in the given time window.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
   * @param options The options parameters.
   */
  beginExportThrottledRequests(
    location: string,
    parameters: ThrottledRequestsInput,
    options?: LogAnalyticsExportThrottledRequestsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportThrottledRequestsResponse>,
      LogAnalyticsExportThrottledRequestsResponse
    >
  >;
  /**
   * Export logs that show total throttled Api requests for this subscription in the given time window.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
   * @param options The options parameters.
   */
  beginExportThrottledRequestsAndWait(
    location: string,
    parameters: ThrottledRequestsInput,
    options?: LogAnalyticsExportThrottledRequestsOptionalParams
  ): Promise<LogAnalyticsExportThrottledRequestsResponse>;
}
