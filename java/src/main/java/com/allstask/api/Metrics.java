// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.Utils;
import com.allstask.exceptions.ApiException;
import com.allstask.models.CreateMetricRequest;
import com.allstask.models.Metric;
import com.allstask.models.MetricListResponse;
import com.allstask.models.UpdateMetricRequest;

import okhttp3.HttpUrl;

import java.io.IOException;

public class Metrics {
    private final AllstaskHttpClient client;

    public Metrics(AllstaskHttpClient client) {
        this.client = client;
    }

    /** */
    public MetricListResponse listMetrics() throws IOException, ApiException {

        return this.listMetrics(new MetricsListMetricsOptions());
    }

    /** */
    public MetricListResponse listMetrics(final MetricsListMetricsOptions options)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/metrics");
        if (options.productFamilyId != null) {
            url.addQueryParameter(
                    "product_family_id", Utils.serializeQueryParam(options.productFamilyId));
        }
        if (options.search != null) {
            url.addQueryParameter("search", options.search);
        }
        if (options.orderBy != null) {
            url.addQueryParameter("order_by", options.orderBy);
        }
        if (options.page != null) {
            url.addQueryParameter("page", Utils.serializeQueryParam(options.page));
        }
        if (options.perPage != null) {
            url.addQueryParameter("per_page", Utils.serializeQueryParam(options.perPage));
        }
        return this.client.executeRequest("GET", url.build(), null, null, MetricListResponse.class);
    }

    /** */
    public Metric createMetric(final CreateMetricRequest createMetricRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/metrics");
        return this.client.executeRequest(
                "POST", url.build(), null, createMetricRequest, Metric.class);
    }

    /** */
    public Metric getMetric(final String metricId) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/metrics/%s", metricId));
        return this.client.executeRequest("GET", url.build(), null, null, Metric.class);
    }

    /** Partially update metric fields. Code and aggregation_type are immutable. */
    public Metric updateMetric(final String metricId, final UpdateMetricRequest updateMetricRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/metrics/%s", metricId));
        return this.client.executeRequest(
                "PATCH", url.build(), null, updateMetricRequest, Metric.class);
    }

    /** */
    public void archiveMetric(final String metricId) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/metrics/%s/archive", metricId));
        this.client.executeRequest("POST", url.build(), null, null, null);
    }

    /** */
    public void unarchiveMetric(final String metricId) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/metrics/%s/unarchive", metricId));
        this.client.executeRequest("POST", url.build(), null, null, null);
    }
}
