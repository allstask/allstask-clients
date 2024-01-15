// this file is @generated
package com.allstask.api;

import com.allstask.models.BatchJobStatus;
import com.allstask.models.BatchJobType;

import lombok.Data;

import java.util.List;

@Data
public class BatchJobsListBatchJobsOptions {
    BatchJobType jobType;
    List<BatchJobStatus> status;

    /** Page number (0-indexed) */
    Integer page;

    /** Number of items per page */
    Integer perPage;
}
