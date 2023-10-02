import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerVision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly VisImages?: (VisImage | null)[] | null;
  readonly title: string;
  readonly credits_art?: (string | null)[] | null;
  readonly credits_music?: (string | null)[] | null;
  readonly credits_story?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVision = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vision, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly VisImages: AsyncCollection<VisImage>;
  readonly title: string;
  readonly credits_art?: (string | null)[] | null;
  readonly credits_music?: (string | null)[] | null;
  readonly credits_story?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vision = LazyLoading extends LazyLoadingDisabled ? EagerVision : LazyVision

export declare const Vision: (new (init: ModelInit<Vision>) => Vision) & {
  copyOf(source: Vision, mutator: (draft: MutableModel<Vision>) => MutableModel<Vision> | void): Vision;
}

type EagerVisImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VisImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly source: string;
  readonly code: string;
  readonly visionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVisImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VisImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly source: string;
  readonly code: string;
  readonly visionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VisImage = LazyLoading extends LazyLoadingDisabled ? EagerVisImage : LazyVisImage

export declare const VisImage: (new (init: ModelInit<VisImage>) => VisImage) & {
  copyOf(source: VisImage, mutator: (draft: MutableModel<VisImage>) => MutableModel<VisImage> | void): VisImage;
}