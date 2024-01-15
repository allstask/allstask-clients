// This file is @generated
package com.allstask.models;

import com.fasterxml.jackson.annotation.JsonValue;
import com.allstask.Utils.ToQueryParam;

public enum ConnectionType implements ToQueryParam {
    STANDARD("standard"),
    EXPRESS("express");
    private final String value;

    ConnectionType(String value) {
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
