// Query TypeMap
import '@sanity/client'

/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Shoe = {
  _id: string
  _type: 'shoe'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  media?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    imagePrompt?: string
    _type: 'image'
    _key: string
  }>
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  price?: number
  brandReference?: unknown
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type SanityAssistInstructionTask = {
  _type: 'sanity.assist.instructionTask'
  path?: string
  instructionKey?: string
  started?: string
  updated?: string
  info?: string
}

export type SanityAssistTaskStatus = {
  _type: 'sanity.assist.task.status'
  tasks?: Array<
    {
      _key: string
    } & SanityAssistInstructionTask
  >
}

export type SanityAssistSchemaTypeAnnotations = {
  _type: 'sanity.assist.schemaType.annotations'
  title?: string
  fields?: Array<
    {
      _key: string
    } & SanityAssistSchemaTypeField
  >
}

export type SanityAssistOutputType = {
  _type: 'sanity.assist.output.type'
  type?: string
}

export type SanityAssistOutputField = {
  _type: 'sanity.assist.output.field'
  path?: string
}

export type SanityAssistInstructionContext = {
  _type: 'sanity.assist.instruction.context'
  reference?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'assist.instruction.context'
  }
}

export type AssistInstructionContext = {
  _id: string
  _type: 'assist.instruction.context'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  context?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: null
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type SanityAssistInstructionUserInput = {
  _type: 'sanity.assist.instruction.userInput'
  message?: string
  description?: string
}

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<
    | {
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }
    | ({
        _key: string
      } & SanityAssistInstructionFieldRef)
    | ({
        _key: string
      } & SanityAssistInstructionContext)
    | ({
        _key: string
      } & SanityAssistInstructionUserInput)
  >
  style?: 'normal'
  listItem?: never
  markDefs?: null
  level?: number
  _type: 'block'
  _key: string
}>

export type SanityAssistInstructionFieldRef = {
  _type: 'sanity.assist.instruction.fieldRef'
  path?: string
}

export type SanityAssistInstruction = {
  _type: 'sanity.assist.instruction'
  prompt?: SanityAssistInstructionPrompt
  icon?: string
  title?: string
  userId?: string
  createdById?: string
  output?: Array<
    | ({
        _key: string
      } & SanityAssistOutputField)
    | ({
        _key: string
      } & SanityAssistOutputType)
  >
}

export type SanityAssistSchemaTypeField = {
  _type: 'sanity.assist.schemaType.field'
  path?: string
  instructions?: Array<
    {
      _key: string
    } & SanityAssistInstruction
  >
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Shoe
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug
  | SanityAssistInstructionTask
  | SanityAssistTaskStatus
  | SanityAssistSchemaTypeAnnotations
  | SanityAssistOutputType
  | SanityAssistOutputField
  | SanityAssistInstructionContext
  | AssistInstructionContext
  | SanityAssistInstructionUserInput
  | SanityAssistInstructionPrompt
  | SanityAssistInstructionFieldRef
  | SanityAssistInstruction
  | SanityAssistSchemaTypeField
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/queries.ts
// Variable: shoesList
// Query: *[_type == "shoe" && defined(slug.current)]{  title,  slug,  "price": string(price),  "media": media[0]{ alt, asset, crop, hotspot },  "brand": brandReference->{name, slug, logo{ alt, asset, crop, hotspot }},} | order(_updatedAt desc)
export type ShoesListResult = Array<{
  _id: string
  _originalId?: string
  title: string | null
  slug: Slug | null
  price: string | null
  media: {
    alt: string | null
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    } | null
    crop: SanityImageCrop | null
    hotspot: SanityImageHotspot | null
  } | null
  brand: null
}>
// Variable: shoe
// Query: *[_type == "shoe" && slug.current == $slug]{  title,  slug,  "price": string(price),  "media": media[]{ alt, asset, crop, hotspot },  "brand": brandReference->{name, slug, logo{ alt, asset, crop, hotspot }},  description,}[0]
export type ShoeResult = {
  title: string | null
  slug: Slug | null
  price: string | null
  media: Array<{
    alt: string | null
    asset: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    } | null
    crop: SanityImageCrop | null
    hotspot: SanityImageHotspot | null
  }> | null
  brand: null
  description: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }> | null
} | null

declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "shoe" && defined(slug.current)]{\n  title,\n  slug,\n  "price": string(price),\n  "media": media[0]{ alt, asset, crop, hotspot },\n  "brand": brandReference->{name, slug, logo{ alt, asset, crop, hotspot }},\n} | order(_updatedAt desc) ': ShoesListResult
    '*[_type == "shoe" && slug.current == $slug]{\n  title,\n  slug,\n  "price": string(price),\n  "media": media[]{ alt, asset, crop, hotspot },\n  "brand": brandReference->{name, slug, logo{ alt, asset, crop, hotspot }},\n  description,\n}[0]': ShoeResult
  }
}
