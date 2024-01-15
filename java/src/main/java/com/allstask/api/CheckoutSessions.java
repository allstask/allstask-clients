// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.Utils;
import com.allstask.exceptions.ApiException;
import com.allstask.models.CancelCheckoutSessionResponse;
import com.allstask.models.CreateCheckoutSessionRequest;
import com.allstask.models.CreateCheckoutSessionResponse;
import com.allstask.models.GetCheckoutSessionResponse;
import com.allstask.models.ListCheckoutSessionsResponse;

import okhttp3.HttpUrl;

import java.io.IOException;

public class CheckoutSessions {
    private final AllstaskHttpClient client;

    public CheckoutSessions(AllstaskHttpClient client) {
        this.client = client;
    }

    /** */
    public ListCheckoutSessionsResponse listCheckoutSessions() throws IOException, ApiException {

        return this.listCheckoutSessions(new CheckoutSessionsListCheckoutSessionsOptions());
    }

    /** */
    public ListCheckoutSessionsResponse listCheckoutSessions(
            final CheckoutSessionsListCheckoutSessionsOptions options)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/checkout-sessions");
        if (options.customerId != null) {
            url.addQueryParameter("customer_id", Utils.serializeQueryParam(options.customerId));
        }
        if (options.status != null) {
            url.addQueryParameter("status", Utils.serializeQueryParam(options.status));
        }
        return this.client.executeRequest(
                "GET", url.build(), null, null, ListCheckoutSessionsResponse.class);
    }

    /** */
    public CreateCheckoutSessionResponse createCheckoutSession(
            final CreateCheckoutSessionRequest createCheckoutSessionRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/checkout-sessions");
        return this.client.executeRequest(
                "POST",
                url.build(),
                null,
                createCheckoutSessionRequest,
                CreateCheckoutSessionResponse.class);
    }

    /** */
    public GetCheckoutSessionResponse getCheckoutSession(final String id)
            throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/checkout-sessions/%s", id));
        return this.client.executeRequest(
                "GET", url.build(), null, null, GetCheckoutSessionResponse.class);
    }

    /** */
    public CancelCheckoutSessionResponse cancelCheckoutSession(final String id)
            throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/checkout-sessions/%s/cancel", id));
        return this.client.executeRequest(
                "POST", url.build(), null, null, CancelCheckoutSessionResponse.class);
    }
}
