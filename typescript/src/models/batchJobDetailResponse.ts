// this file is @generated
/* eslint @typescript-eslint/no-explicit-any: 0 */
import {
    BatchJobId,
    BatchJobIdSerializer,
} from './batchJobId';
import {
    BatchJobStatus,
    BatchJobStatusSerializer,
} from './batchJobStatus';
import {
    BatchJobType,
    BatchJobTypeSerializer,
} from './batchJobType';

export interface BatchJobDetailResponse {
    completedAt?: Date | null;
    createdAt: Date;
    createdBy: string;
    errorCsvUrl?: string | null;
    failedItems: number;
    failureCount: number;
    hasErrorCsv: boolean;
    hasOutput: boolean;
    id: BatchJobId;
    inputFileName?: string | null;
    inputFileUrl?: string | null;
    jobType: BatchJobType;
    outputUrl?: string | null;
    processedItems: number;
    status: BatchJobStatus;
    totalItems?: number | null;
    }

export const BatchJobDetailResponseSerializer = {
    _fromJsonObject(object: any): BatchJobDetailResponse {
        return {
            completedAt: new Date(object['completed_at']),
            createdAt: new Date(object['created_at']),
            createdBy: object['created_by'],
            errorCsvUrl: object['error_csv_url'],
            failedItems: object['failed_items'],
            failureCount: object['failure_count'],
            hasErrorCsv: object['has_error_csv'],
            hasOutput: object['has_output'],
            id: BatchJobIdSerializer._fromJsonObject(object['id']),
            inputFileName: object['input_file_name'],
            inputFileUrl: object['input_file_url'],
            jobType: BatchJobTypeSerializer._fromJsonObject(object['job_type']),
            outputUrl: object['output_url'],
            processedItems: object['processed_items'],
            status: BatchJobStatusSerializer._fromJsonObject(object['status']),
            totalItems: object['total_items'],
            };
    },

    _toJsonObject(self: BatchJobDetailResponse): any {
        return {
            'completed_at': self.completedAt,
            'created_at': self.createdAt,
            'created_by': self.createdBy,
            'error_csv_url': self.errorCsvUrl,
            'failed_items': self.failedItems,
            'failure_count': self.failureCount,
            'has_error_csv': self.hasErrorCsv,
            'has_output': self.hasOutput,
            'id': BatchJobIdSerializer._toJsonObject(self.id),
            'input_file_name': self.inputFileName,
            'input_file_url': self.inputFileUrl,
            'job_type': BatchJobTypeSerializer._toJsonObject(self.jobType),
            'output_url': self.outputUrl,
            'processed_items': self.processedItems,
            'status': BatchJobStatusSerializer._toJsonObject(self.status),
            'total_items': self.totalItems,
            };
    }
}