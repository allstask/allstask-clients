// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.Utils;
import com.allstask.exceptions.ApiException;
import com.allstask.models.Feature;
import com.allstask.models.FeatureListResponse;

import okhttp3.HttpUrl;

import java.io.IOException;

public class Features {
    private final AllstaskHttpClient client;

    public Features(AllstaskHttpClient client) {
        this.client = client;
    }

    /** */
    public FeatureListResponse listFeatures() throws IOException, ApiException {

        return this.listFeatures(new FeaturesListFeaturesOptions());
    }

    /** */
    public FeatureListResponse listFeatures(final FeaturesListFeaturesOptions options)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/features");
        if (options.statuses != null) {
            Utils.addExplodedQueryParameter(url, "statuses", options.statuses);
        }
        if (options.productId != null) {
            url.addQueryParameter("product_id", Utils.serializeQueryParam(options.productId));
        }
        if (options.search != null) {
            url.addQueryParameter("search", options.search);
        }
        if (options.page != null) {
            url.addQueryParameter("page", Utils.serializeQueryParam(options.page));
        }
        if (options.perPage != null) {
            url.addQueryParameter("per_page", Utils.serializeQueryParam(options.perPage));
        }
        return this.client.executeRequest(
                "GET", url.build(), null, null, FeatureListResponse.class);
    }

    /** */
    public Feature getFeature(final String idOrCode) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/features/%s", idOrCode));
        return this.client.executeRequest("GET", url.build(), null, null, Feature.class);
    }
}
