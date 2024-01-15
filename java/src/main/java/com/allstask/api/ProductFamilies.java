// this file is @generated
package com.allstask.api;

import com.allstask.AllstaskHttpClient;
import com.allstask.Utils;
import com.allstask.exceptions.ApiException;
import com.allstask.models.ProductFamily;
import com.allstask.models.ProductFamilyCreateRequest;
import com.allstask.models.ProductFamilyListResponse;

import okhttp3.HttpUrl;

import java.io.IOException;

public class ProductFamilies {
    private final AllstaskHttpClient client;

    public ProductFamilies(AllstaskHttpClient client) {
        this.client = client;
    }

    /** */
    public ProductFamilyListResponse listProductFamilies() throws IOException, ApiException {

        return this.listProductFamilies(new ProductFamiliesListProductFamiliesOptions());
    }

    /** */
    public ProductFamilyListResponse listProductFamilies(
            final ProductFamiliesListProductFamiliesOptions options)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/product_families");
        if (options.orderBy != null) {
            url.addQueryParameter("order_by", options.orderBy);
        }
        if (options.page != null) {
            url.addQueryParameter("page", Utils.serializeQueryParam(options.page));
        }
        if (options.perPage != null) {
            url.addQueryParameter("per_page", Utils.serializeQueryParam(options.perPage));
        }
        if (options.search != null) {
            url.addQueryParameter("search", options.search);
        }
        return this.client.executeRequest(
                "GET", url.build(), null, null, ProductFamilyListResponse.class);
    }

    /** */
    public ProductFamily createProductFamily(
            final ProductFamilyCreateRequest productFamilyCreateRequest)
            throws IOException, ApiException {
        HttpUrl.Builder url = this.client.newUrlBuilder().encodedPath("/api/v1/product_families");
        return this.client.executeRequest(
                "POST", url.build(), null, productFamilyCreateRequest, ProductFamily.class);
    }

    /** Retrieve a single product family by ID or alias. */
    public ProductFamily getProductFamilyByIdOrAlias(final String idOrAlias)
            throws IOException, ApiException {
        HttpUrl.Builder url =
                this.client
                        .newUrlBuilder()
                        .encodedPath(String.format("/api/v1/product_families/%s", idOrAlias));
        return this.client.executeRequest("GET", url.build(), null, null, ProductFamily.class);
    }
}
