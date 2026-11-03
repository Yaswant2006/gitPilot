package gitpilot.backend.services.ai;

public final class RagSettings {
     /** How many code chunks to fetch from the vector database per question. */
    public static final int TOP_K_CHUNKS = 8;

    /** Metadata key stored on each embedded document (must match {@link gitPilot.backend.service.indexing.CodeChunker}). */
    public static final String METADATA_REPO_ID = "repoId";
}