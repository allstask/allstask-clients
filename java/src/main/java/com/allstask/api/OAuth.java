// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.exceptions.ApiException;
import com.allstask.models.IntrospectionRequest;
import com.allstask.models.RevocationRequest;
import com.allstask.models.TokenIntrospectionResponse;
import com.allstask.models.TokenRequest;
import com.allstask.models.TokenResponse;

import okhttp3.HttpUrl;

import java.io.IOException;

public class OAuth {
    private final AllstaskHttpClient client;

    public OAuth(AllstaskHttpClient client) {
        this.client = client;
    }

    /** Token introspection endpoint (RFC 7662). Requires client credentials via HTTP Basic auth. */
    public TokenIntrospectionResponse introspectEndpoint(
            final IntrospectionRequest introspectionRequest) throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/oauth/introspect");
        return this.client.executeFormRequest(
                "POST", url.build(), null, introspectionRequest, TokenIntrospectionResponse.class);
    }

    /**
     * Token revocation endpoint (RFC 7009). Always returns 200 per spec. Requires client
     * credentials via HTTP Basic auth.
     */
    public void revokeEndpoint(final RevocationRequest revocationRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/oauth/revoke");
        this.client.executeFormRequest("POST", url.build(), null, revocationRequest, null);
    }

    /**
     * OAuth 2.0 token endpoint. Supports two grant types: - `authorization_code`: Exchange an
     * authorization code for tokens - `refresh_token`: Refresh an access token
     *
     * <p>Authenticate via HTTP Basic auth (`client_id:client_secret`) or body parameters.
     */
    public TokenResponse tokenEndpoint(final TokenRequest tokenRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/oauth/token");
        return this.client.executeFormRequest(
                "POST", url.build(), null, tokenRequest, TokenResponse.class);
    }
}
