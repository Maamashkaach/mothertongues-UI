/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type L1 = string;
export type L2 = string;
/**
 * An enumeration.
 */
export type SearchAlgorithms = "weighted_levenstein" | "liblevenstein_automata";
export type Insertioncost = number;
export type Deletioncost = number;
export type Insertionatbeginningcost = number;
export type Deletionatendcost = number;
export type Substitutioncostspath = string;
export type Defaultsubstitutioncost = number;
/**
 * An enumeration.
 */
export type StemmerEnum = "snowball_english" | "none";
export type Lower = boolean;
/**
 * An enumeration.
 */
export type NormalizationEnum = "NFC" | "NFD" | "NFKC" | "NKFD" | "none";
export type RemovePunctuation = string;
export type ReplaceRules = {
  [k: string]: string;
}[];
export type Alphabet = string[] | string;
export type DisplayField = string;
export type CompareField = string;
export type SortingField = string;
export type OptionalFieldName = string;
export type Role = string;
export type Name = string;
export type Credits = Contributor[];
export type Build = string;

export interface ExportLanguageConfiguration {
  L1?: L1;
  L2?: L2;
  l1_search_strategy?: SearchAlgorithms & string;
  l2_search_strategy?: SearchAlgorithms & string;
  l1_search_config?: WeightedLevensteinConfig;
  l2_search_config?: WeightedLevensteinConfig;
  l1_stemmer?: StemmerEnum & string;
  l2_stemmer?: StemmerEnum & string;
  l1_normalization_transducer?: RestrictedTransducer;
  l2_normalization_transducer?: RestrictedTransducer;
  alphabet?: Alphabet;
  display_field?: DisplayField;
  compare_field?: CompareField;
  sorting_field?: SortingField;
  optional_field_name?: OptionalFieldName;
  credits?: Credits;
  build?: Build;
  [k: string]: unknown;
}
export interface WeightedLevensteinConfig {
  insertionCost?: Insertioncost;
  deletionCost?: Deletioncost;
  insertionAtBeginningCost?: Insertionatbeginningcost;
  deletionAtEndCost?: Deletionatendcost;
  substitutionCosts?: Substitutioncosts;
  substitutionCostsPath?: Substitutioncostspath;
  defaultSubstitutionCost?: Defaultsubstitutioncost;
}
export interface Substitutioncosts {
  [k: string]: {
    [k: string]: number;
  };
}
export interface RestrictedTransducer {
  lower?: Lower;
  unicode_normalization?: NormalizationEnum & string;
  remove_punctuation?: RemovePunctuation;
  replace_rules?: ReplaceRules;
}
export interface Contributor {
  role: Role;
  name: Name;
}