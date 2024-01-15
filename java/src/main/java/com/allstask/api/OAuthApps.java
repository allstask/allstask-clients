// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.exceptions.ApiException;
import com.allstask.models.CreateOAuthAppRequest;
import com.allstask.models.OAuthApp;
import com.allstask.models.OAuthAppWithSecret;
import com.allstask.models.OAuthAppsResponse;
import com.allstask.models.RotatedSecret;

import okhttp3.HttpUrl;

import java.io.IOException;

public class OAuthApps {
    private final AllstaskHttpClient client;

    public OAuthApps(AllstaskHttpClient client) {
        this.client = client;
    }

    /** List all OAuth applications registered for this platform. */
    public OAuthAppsResponse listOauthApps() throws IOException, ApiException {

        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/oauth-apps");
        return this.client.executeRequest("GET", url.build(), null, null, OAuthAppsResponse.class);
    }

    /**
     * Register a new OAuth application. Returns the app with its client secret (only shown once).
     */
    public OAuthAppWithSecret createOauthApp(final CreateOAuthAppRequest createOAuthAppRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/oauth-apps");
        return this.client.executeRequest(
                "POST", url.build(), null, createOAuthAppRequest, OAuthAppWithSecret.class);
    }

    /** Retrieve an OAuth application by ID. */
    public OAuthApp getOauthApp(final String id) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client.newUrlBuilder().encodedPath(String.format("/api/v1/oauth-apps/%s", id));
        return this.client.executeRequest("GET", url.build(), null, null, OAuthApp.class);
    }

    /** Delete an OAuth application and revoke all associated tokens. */
    public void deleteOauthApp(final String id) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client.newUrlBuilder().encodedPath(String.format("/api/v1/oauth-apps/%s", id));
        this.client.executeRequest("DELETE", url.build(), null, null, null);
    }

    /** Generate a new client secret for an OAuth app. The old secret is immediately invalidated. */
    public RotatedSecret rotateClientSecret(final String id) throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/oauth-apps/%s/rotate", id));
        return this.client.executeRequest("POST", url.build(), null, null, RotatedSecret.class);
    }
}
