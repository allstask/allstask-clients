# Allstask Rust SDK

Official Rust SDK for the [Allstask](https://allstask.com) billing API.

## Installation

Add `allstask-rs` to your `Cargo.toml`:

```toml
[dependencies]
allstask-rs = "0.19"
```

## Quick Start

```rust
use allstask_rs::api::{Allstask, AllstaskOptions};

#[tokio::main]
async fn main() -> Result<(), allstask_rs::error::Error> {
    // Create a client with your API key
    let client = Allstask::new("your-api-key".to_string(), None);

    // List customers
    let customers = client.customers().list_customers(None).await?;
    println!("Found {} customers", customers.data.len());

    Ok(())
}
```

## Available APIs

The SDK provides access to the following Allstask API resources:

| Resource                     | Description                       |
| ---------------------------- | --------------------------------- |
| `client.customers()`         | Manage customers                  |
| `client.subscriptions()`     | Manage subscriptions              |
| `client.invoices()`          | Access invoices and download PDFs |
| `client.plans()`             | List available plans              |
| `client.product_families()`  | Manage product families           |
| `client.events()`            | Send usage events                 |
| `client.checkout_sessions()` | Create checkout sessions          |

## Examples

### Creating a Customer

```rust
use allstask_rs::api::Allstask;
use allstask_rs::models::CustomerCreateRequest;

let client = Allstask::new("your-api-key".to_string(), None);

let customer = client.customers().create_customer(CustomerCreateRequest {
    name: "Acme Corp".to_string(),
    alias: Some("acme".to_string()),
    email: Some("billing@acme.com".to_string()),
    ..Default::default()
}).await?;

println!("Created customer: {}", customer.id);
```

### Listing Customers with Pagination

```rust
use allstask_rs::api::{Allstask, CustomersListCustomersOptions};

let client = Allstask::new("your-api-key".to_string(), None);

let customers = client.customers().list_customers(Some(CustomersListCustomersOptions {
    page: Some(0),
    per_page: Some(10),
    search: Some("acme".to_string()),
    ..Default::default()
})).await?;

for customer in customers.data {
    println!("Customer: {} ({})", customer.name, customer.id);
}
```

### Downloading an Invoice PDF

```rust
use allstask_rs::api::Allstask;

let client = Allstask::new("your-api-key".to_string(), None);

let pdf_bytes = client.invoices()
    .download_invoice_pdf("invoice_id".to_string())
    .await?;

// Save to file
std::fs::write("invoice.pdf", &pdf_bytes)?;
```

### Sending Usage Events

```rust
use allstask_rs::api::Allstask;
use allstask_rs::models::{IngestEventsRequest, Event};
use std::collections::HashMap;

let client = Allstask::new("your-api-key".to_string(), None);

let mut properties = HashMap::new();
properties.insert("endpoint".to_string(), "/api/v1/users".to_string());
properties.insert("method".to_string(), "GET".to_string());

client.events().ingest_events(IngestEventsRequest {
    events: vec![Event {
        code: "api_call".to_string(),
        customer_id: "customer_id".to_string(),
        event_id: "unique_event_id".to_string(),
        timestamp: "2024-01-15T10:30:00Z".to_string(),
        properties: Some(properties),
    }],
    allow_backfilling: None,
}).await?;
```

## Configuration

### Custom Server URL

For self-hosted Allstask instances:

```rust
use allstask_rs::api::{Allstask, AllstaskOptions};

let options = AllstaskOptions {
    server_url: Some("https://your-allstask-instance.com".to_string()),
    ..Default::default()
};

let client = Allstask::new("your-api-key".to_string(), Some(options));
```

### Timeout and Retries

```rust
use allstask_rs::api::{Allstask, AllstaskOptions};
use std::time::Duration;

let options = AllstaskOptions {
    timeout: Some(Duration::from_secs(30)),
    num_retries: Some(3),
    ..Default::default()
};

let client = Allstask::new("your-api-key".to_string(), Some(options));
```

### Custom Retry Schedule

```rust
use allstask_rs::api::{Allstask, AllstaskOptions};
use std::time::Duration;

let options = AllstaskOptions {
    retry_schedule: Some(vec![
        Duration::from_millis(100),
        Duration::from_millis(500),
        Duration::from_secs(1),
    ]),
    ..Default::default()
};

let client = Allstask::new("your-api-key".to_string(), Some(options));
```

## Cargo Features

| Feature      | Description                          | Default |
| ------------ | ------------------------------------ | ------- |
| `rustls-tls` | Use rustls for TLS                   | Yes     |
| `native-tls` | Use native OS TLS (OpenSSL on Linux) | No      |
| `http1`      | HTTP/1.1 support                     | Yes     |
| `http2`      | HTTP/2 support                       | No      |

### Using Native TLS

```toml
[dependencies]
allstask-rs = { version = "0.25.0", default-features = false, features = ["native-tls", "http1"] }
```

## Error Handling

All API methods return `Result<T, allstask_rs::error::Error>`. The `Error` type provides detailed information about what went wrong:

```rust
use allstask_rs::api::Allstask;
use allstask_rs::error::Error;

let client = Allstask::new("your-api-key".to_string(), None);

match client.customers().get_customer("invalid-id".to_string()).await {
    Ok(customer) => println!("Found: {}", customer.name),
    Err(Error::Http(e)) => {
        println!("HTTP error {}: {}", e.status, e.body.message);
    }
    Err(e) => println!("Other error: {}", e),
}
```

## Thread Safety

The `Allstask` client is both `Send` and `Sync`, making it safe to share across threads:

```rust
use allstask_rs::api::Allstask;
use std::sync::Arc;

let client = Arc::new(Allstask::new("your-api-key".to_string(), None));

// Clone the Arc for use in different tasks
let client_clone = Arc::clone(&client);
tokio::spawn(async move {
    let customers = client_clone.customers().list_customers(None).await;
});
```

## License

MIT
