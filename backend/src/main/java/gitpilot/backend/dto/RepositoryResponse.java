package gitpilot.backend.dto;

import java.time.Instant;
import java.util.UUID;

import gitpilot.backend.entity.IndexStatus;

public record RepositoryResponse(
        UUID id,
        Long githubRepoId,
        String owner,
        String name,
        String fullName,
        boolean isPrivate,
        String defaultBranch,
        String language,
        String htmlUrl,
        String description,
        IndexStatus indexStatus,
        Instant indexedAt,
        int chunkCount,
        int filesTotal,
        int filesProcessed,
        String errorMessage
) {
}
