// this file is @generated
package com.allstask;

import com.allstask.api.*;

import lombok.Getter;

import okhttp3.HttpUrl;

import java.util.Map;

/**
 * Main entry point for the Allstask Java SDK.
 *
 * <p>This class provides access to all Allstask API resources through a fluent interface.
 *
 * <p>Example usage:
 *
 * <pre>{@code
 * // Initialize with API key
 * Allstask allstask = new Allstask("your-api-key");
 *
 * // Or with custom options
 * AllstaskOptions options = new AllstaskOptions();
 * options.setServerUrl("https://custom.api.allstask.com");
 * Allstask allstask = new Allstask("your-api-key", options);
 *
 * // Access API resources
 * CustomerListResponse customers = allstask.getCustomer().listCustomers();
 * }</pre>
 */
@Getter
public class Allstask {

    private final AddOns addOns;

    private final BatchJobs batchJobs;

    private final CheckoutSessions checkoutSessions;

    private final Connect connect;

    private final Coupons coupons;

    private final CreditNotes creditNotes;

    private final CustomProperties customProperties;

    private final Customers customers;

    private final Events events;

    private final Features features;

    private final Invoices invoices;

    private final Metrics metrics;

    private final OAuth oAuth;

    private final OAuthApps oAuthApps;

    private final Plans plans;

    private final ProductFamilies productFamilies;

    private final Products products;

    private final Subscriptions subscriptions;

    private final Usage usage;

    /**
     * Create a new Allstask client with default options.
     *
     * @param apiKey Your Allstask API key
     */
    public Allstask(String apiKey) {
        this(apiKey, new AllstaskOptions());
    }

    /**
     * Create a new Allstask client with custom options.
     *
     * @param apiKey Your Allstask API key
     * @param options Configuration options for the client
     */
    public Allstask(String apiKey, AllstaskOptions options) {
        HttpUrl parsedUrl = HttpUrl.parse(options.getServerUrl());
        if (parsedUrl == null) {
            throw new IllegalArgumentException("Invalid server URL: " + options.getServerUrl());
        }

        Map<String, String> defaultHeaders =
                Map.of(
                        "User-Agent", "allstask-java/" + Version.VERSION,
                        "Authorization", "Bearer " + apiKey);

        AllstaskHttpClient httpClient =
                new AllstaskHttpClient(parsedUrl, defaultHeaders, options.getRetrySchedule());

        this.addOns = new AddOns(httpClient);

        this.batchJobs = new BatchJobs(httpClient);

        this.checkoutSessions = new CheckoutSessions(httpClient);

        this.connect = new Connect(httpClient);

        this.coupons = new Coupons(httpClient);

        this.creditNotes = new CreditNotes(httpClient);

        this.customProperties = new CustomProperties(httpClient);

        this.customers = new Customers(httpClient);

        this.events = new Events(httpClient);

        this.features = new Features(httpClient);

        this.invoices = new Invoices(httpClient);

        this.metrics = new Metrics(httpClient);

        this.oAuth = new OAuth(httpClient);

        this.oAuthApps = new OAuthApps(httpClient);

        this.plans = new Plans(httpClient);

        this.productFamilies = new ProductFamilies(httpClient);

        this.products = new Products(httpClient);

        this.subscriptions = new Subscriptions(httpClient);

        this.usage = new Usage(httpClient);
    }
}
