import type { StructuredText } from 'datocms-structured-text-utils';
import type { BlogPostRecord, DocPageRecord, ImageRecord, QuoteRecord } from './types';
export declare const paragraph: StructuredText;
export declare const heading: StructuredText;
export declare const structuredTextWithBlocksAndLinks: StructuredText<QuoteRecord, DocPageRecord>;
export declare const full: StructuredText<ImageRecord | BlogPostRecord>;
