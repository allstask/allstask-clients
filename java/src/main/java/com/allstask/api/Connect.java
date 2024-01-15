// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.exceptions.ApiException;
import com.allstask.models.ConnectedAccount;
import com.allstask.models.ConnectedAccountsResponse;
import com.allstask.models.CreateConnectedAccountRequest;
import com.allstask.models.CreateOnboardingLinkRequest;
import com.allstask.models.OnboardingLinkResponse;

import okhttp3.HttpUrl;

import java.io.IOException;

public class Connect {
    private final AllstaskHttpClient client;

    public Connect(AllstaskHttpClient client) {
        this.client = client;
    }

    /** List all connected accounts for this platform. */
    public ConnectedAccountsResponse listConnectedAccounts() throws IOException, ApiException {

        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/connected-accounts");
        return this.client.executeRequest(
                "GET", url.build(), null, null, ConnectedAccountsResponse.class);
    }

    /**
     * Create a new connected account (Express flow). Returns the account and an onboarding link for
     * the user to complete setup.
     */
    public ConnectedAccount createConnectedAccount(
            final CreateConnectedAccountRequest createConnectedAccountRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/connected-accounts");
        return this.client.executeRequest(
                "POST", url.build(), null, createConnectedAccountRequest, ConnectedAccount.class);
    }

    /** Retrieve a connected account by ID. */
    public ConnectedAccount getConnectedAccount(final String id) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/connected-accounts/%s", id));
        return this.client.executeRequest("GET", url.build(), null, null, ConnectedAccount.class);
    }

    /** Revoke a connected account. All associated tokens are invalidated. */
    public void disconnectAccount(final String id) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/connected-accounts/%s", id));
        this.client.executeRequest("DELETE", url.build(), null, null, null);
    }

    /**
     * Generate a new onboarding link for a connected account. Any existing unused link is
     * invalidated. The link expires after a configured duration.
     */
    public OnboardingLinkResponse createOnboardingLink(
            final String id, final CreateOnboardingLinkRequest createOnboardingLinkRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/connected-accounts/%s/onboarding", id));
        return this.client.executeRequest(
                "POST",
                url.build(),
                null,
                createOnboardingLinkRequest,
                OnboardingLinkResponse.class);
    }
}
