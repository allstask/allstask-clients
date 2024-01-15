// This file is @generated
package com.allstask.models;

import com.fasterxml.jackson.annotation.JsonValue;
import com.allstask.Utils.ToQueryParam;

public enum BillingType implements ToQueryParam {
    ADVANCE("ADVANCE"),
    ARREARS("ARREARS");
    private final String value;

    BillingType(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return this.value;
    }

    @Override
    public String toQueryParam() {
        return this.value;
    }
}
