import { BaseChunker } from "./BaseChunker";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

interface TextSplitterChunkParams {
  chunkSize: number;
  chunkOverlap: number;
  keepSeparator: boolean;
}

const TEXT_SPLITTER_CHUNK_PARAMS: TextSplitterChunkParams = {
  chunkSize: 300,
  chunkOverlap: 0,
  keepSeparator: false,
};

class QnaPairChunker extends BaseChunker {
  constructor() {
    const text_splitter = new RecursiveCharacterTextSplitter(
      TEXT_SPLITTER_CHUNK_PARAMS
    );
    super(text_splitter);
  }
}

export { QnaPairChunker };
