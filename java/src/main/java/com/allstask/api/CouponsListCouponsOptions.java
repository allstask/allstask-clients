// this file is @generated
package com.allstask.api;

import com.allstask.models.CouponFilter;

import lombok.Data;

@Data
public class CouponsListCouponsOptions {
    String search;
    CouponFilter filter;

    /**
     * Sort order. Format: `column.direction`. Allowed columns: `code`, `created_at`, `expires_at`.
     * Direction: `asc` or `desc`. Default: `created_at.desc`.
     */
    String orderBy;

    /** Page number (0-indexed) */
    Integer page;

    /** Number of items per page */
    Integer perPage;
}
