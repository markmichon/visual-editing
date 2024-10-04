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

export type Section = {
  _type: 'section'
  symbol?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'page.section'
  }
  headline?: string
  tagline?: string
  subline?: string
}

export type FeatureHighlight = {
  _type: 'featureHighlight'
  headline?: string
  description?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  ctas?: Array<{
    title?: string
    href?: string
    _type: 'cta'
    _key: string
  }>
  product?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'product'
  }
  style?: SectionStyle
}

export type FeaturedProducts = {
  _type: 'featuredProducts'
  headline?: string
  description?: string
  products?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'product'
  }>
  style?: SectionStyle
}

export type Intro = {
  _type: 'intro'
  headline?: string
  intro?: string
  style?: SectionStyle
}

export type Hero = {
  _type: 'hero'
  headline?: string
  tagline?: string
  subline?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  style?: SectionStyle
}

export type SiteSettings = {
  _id: string
  _type: 'siteSettings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  description?: string
  frontPage?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'page'
  }
  copyrightText?: string
}

export type Project = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  sections?: Array<
    | {
        headline?: string
        tagline?: string
        subline?: string
        image?: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        }
        style?: SectionStyle
        _type: 'hero'
        _key: string
      }
    | {
        headline?: string
        intro?: string
        style?: SectionStyle
        _type: 'intro'
        _key: string
      }
    | {
        headline?: string
        description?: string
        products?: Array<{
          _ref: string
          _type: 'reference'
          _weak?: boolean
          _key: string
          [internalGroqTypeReferenceTo]?: 'product'
        }>
        style?: SectionStyle
        _type: 'featuredProducts'
        _key: string
      }
    | {
        headline?: string
        description?: string
        image?: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        }
        ctas?: Array<{
          title?: string
          href?: string
          _type: 'cta'
          _key: string
        }>
        product?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'product'
        }
        style?: SectionStyle
        _type: 'featureHighlight'
        _key: string
      }
    | {
        symbol?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'page.section'
        }
        headline?: string
        tagline?: string
        subline?: string
        _type: 'section'
        _key: string
      }
  >
}

export type PageSection = {
  _id: string
  _type: 'page.section'
  _createdAt: string
  _updatedAt: string
  _rev: string
  headline?: string
  tagline?: string
  subline?: string
}

export type Product = {
  _id: string
  _type: 'product'
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
  brandReference?: unknown
  details?: {
    materials?: string
    collectionNotes?: Array<{
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
    performance?: Array<{
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
    ledLifespan?: string
    certifications?: Array<string>
  }
  variants?: Array<{
    title?: string
    price?: string
    sku?: string
    _type: 'variant'
    _key: string
  }>
}

export type SectionStyle = {
  _type: 'sectionStyle'
  variant?: 'default' | 'inverted'
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

export type DndTestPage = {
  _id: string
  _type: 'dndTestPage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  children?: Array<{
    title?: string
    children?: Array<{
      title?: string
      children?: Array<{
        title?: string
        _type: 'dndTestItemChildL2'
        _key: string
      }>
      _type: 'dndTestItemChildL1'
      _key: string
    }>
    _type: 'dndTestItem'
    _key: string
  }>
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Section
  | FeatureHighlight
  | FeaturedProducts
  | Intro
  | Hero
  | SiteSettings
  | Project
  | Page
  | PageSection
  | Product
  | SectionStyle
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug
  | DndTestPage
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/app/layout.tsx
// Variable: layoutQuery
// Query: *[_id == "siteSettings"][0]{  title,  description,  copyrightText}
export type LayoutQueryResult =
  | {
      title: null
      description: null
      copyrightText: null
    }
  | {
      title: string | null
      description: null
      copyrightText: null
    }
  | {
      title: string | null
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
      copyrightText: null
    }
  | {
      title: string | null
      description: string | null
      copyrightText: null
    }
  | {
      title: string | null
      description: string | null
      copyrightText: string | null
    }
  | null

// Source: ./src/app/page.tsx
// Variable: frontPageQuery
// Query: *[_id == "siteSettings"][0]{    frontPage->{      _type,      _id,      title,      sections[]{        ...,        symbol->{_type},        'headline': coalesce(headline, symbol->headline),        'tagline': coalesce(tagline, symbol->tagline),        'subline': coalesce(subline, symbol->subline),        'image': coalesce(image, symbol->image),        product->{          _type,          _id,          title,          slug,          "media": media[0]        },        products[]{          _key,          ...(@->{            _type,            _id,            title,            slug,            "media": media[0]          })        }      },      style    }  }.frontPage
export type FrontPageQueryResult = null | {
  _type: 'page'
  _id: string
  title: string | null
  sections: Array<
    | {
        headline: string | null
        description?: string
        products: Array<{
          _key: string
          _type: 'product'
          _id: string
          title: string | null
          slug: Slug | null
          media: {
            asset?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            alt?: string
            _type: 'image'
            _key: string
          } | null
        }> | null
        style?: SectionStyle
        _type: 'featuredProducts'
        _key: string
        symbol: null
        tagline: null
        subline: null
        image: null
        product: null
      }
    | {
        headline: string | null
        description?: string
        image: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        } | null
        ctas?: Array<{
          title?: string
          href?: string
          _type: 'cta'
          _key: string
        }>
        product: {
          _type: 'product'
          _id: string
          title: string | null
          slug: Slug | null
          media: {
            asset?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            alt?: string
            _type: 'image'
            _key: string
          } | null
        } | null
        style?: SectionStyle
        _type: 'featureHighlight'
        _key: string
        symbol: null
        tagline: null
        subline: null
        products: null
      }
    | {
        headline: string | null
        tagline: string | null
        subline: string | null
        image: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        } | null
        style?: SectionStyle
        _type: 'hero'
        _key: string
        symbol: null
        product: null
        products: null
      }
    | {
        headline: string | null
        intro?: string
        style?: SectionStyle
        _type: 'intro'
        _key: string
        symbol: null
        tagline: null
        subline: null
        image: null
        product: null
        products: null
      }
    | {
        symbol: {
          _type: 'page.section'
        } | null
        headline: string | null
        tagline: string | null
        subline: string | null
        _type: 'section'
        _key: string
        image: null
        product: null
        products: null
      }
  > | null
  style: null
}

// Source: ./src/app/dnd-sandbox/page.tsx
// Variable: dndPageQuery
// Query: *[_type == "dndTestPage"]{    _id,    title,    children  }[0]
export type DndPageQueryResult = {
  _id: string
  title: string | null
  children: Array<{
    title?: string
    children?: Array<{
      title?: string
      children?: Array<{
        title?: string
        _type: 'dndTestItemChildL2'
        _key: string
      }>
      _type: 'dndTestItemChildL1'
      _key: string
    }>
    _type: 'dndTestItem'
    _key: string
  }> | null
} | null

// Source: ./src/app/products/page.tsx
// Variable: productsPageQuery
// Query: *[_type == "product" && defined(slug.current)]{    _id,    title,    description,    slug,    "media": media[0]  }
export type ProductsPageQueryResult = Array<{
  _id: string
  title: string | null
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
  slug: Slug | null
  media: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
    _key: string
  } | null
}>

// Source: ./src/app/projects/page.tsx
// Variable: projectsPageQuery
// Query: *[_type == "project" && defined(slug.current)]
export type ProjectsPageQueryResult = Array<{
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
}>

// Source: ./src/app/product/[slug]/page.tsx
// Variable: productSlugsQuery
// Query: *[_type == "product" && defined(slug.current)]{"slug": slug.current}
export type ProductSlugsQueryResult = Array<{
  slug: string | null
}>
// Variable: productPageQuery
// Query: *[_type == "product" && slug.current == $slug][0]
export type ProductPageQueryResult = {
  _id: string
  _type: 'product'
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
  }>
  brandReference?: unknown
  details?: {
    materials?: string
    collectionNotes?: Array<{
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
    }>
    performance?: Array<{
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
    }>
    ledLifespan?: string
    certifications?: Array<string>
  }
  variants?: Array<{
    title?: string
    price?: string
    sku?: string
    _type: 'variant'
    _key: string
  }>
} | null

// Source: ./src/app/pages/[slug]/page.tsx
// Variable: pageQuery
// Query: *[_type == "page" && slug.current == $slug][0]{    _type,    _id,    title,    sections[]{      ...,      symbol->{_type},      'headline': coalesce(headline, symbol->headline),      'tagline': coalesce(tagline, symbol->tagline),      'subline': coalesce(subline, symbol->subline),      'image': coalesce(image, symbol->image),      product->{        _type,        _id,        title,        slug,        "media": media[0]      },      products[]{        _key,        ...(@->{          _type,          _id,          title,          slug,          "media": media[0]        })      }    },    style  }
export type PageQueryResult = {
  _type: 'page'
  _id: string
  title: string | null
  sections: Array<
    | {
        headline: string | null
        description?: string
        products: Array<{
          _key: string
          _type: 'product'
          _id: string
          title: string | null
          slug: Slug | null
          media: {
            asset?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            alt?: string
            _type: 'image'
            _key: string
          } | null
        }> | null
        style?: SectionStyle
        _type: 'featuredProducts'
        _key: string
        symbol: null
        tagline: null
        subline: null
        image: null
        product: null
      }
    | {
        headline: string | null
        description?: string
        image: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        } | null
        ctas?: Array<{
          title?: string
          href?: string
          _type: 'cta'
          _key: string
        }>
        product: {
          _type: 'product'
          _id: string
          title: string | null
          slug: Slug | null
          media: {
            asset?: {
              _ref: string
              _type: 'reference'
              _weak?: boolean
              [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            alt?: string
            _type: 'image'
            _key: string
          } | null
        } | null
        style?: SectionStyle
        _type: 'featureHighlight'
        _key: string
        symbol: null
        tagline: null
        subline: null
        products: null
      }
    | {
        headline: string | null
        tagline: string | null
        subline: string | null
        image: {
          asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
          }
          hotspot?: SanityImageHotspot
          crop?: SanityImageCrop
          _type: 'image'
        } | null
        style?: SectionStyle
        _type: 'hero'
        _key: string
        symbol: null
        product: null
        products: null
      }
    | {
        headline: string | null
        intro?: string
        style?: SectionStyle
        _type: 'intro'
        _key: string
        symbol: null
        tagline: null
        subline: null
        image: null
        product: null
        products: null
      }
    | {
        symbol: {
          _type: 'page.section'
        } | null
        headline: string | null
        tagline: string | null
        subline: string | null
        _type: 'section'
        _key: string
        image: null
        product: null
        products: null
      }
  > | null
  style: null
} | null
// Variable: pageSlugs
// Query: *[_type == "page" && defined(slug.current)]{"slug": slug.current}
export type PageSlugsResult = Array<{
  slug: string | null
}>

// Source: ./src/app/project/[slug]/page.tsx
// Variable: projectSlugsQuery
// Query: *[_type == "project" && defined(slug.current)]{"slug": slug.current}
export type ProjectSlugsQueryResult = Array<{
  slug: string | null
}>
// Variable: projectPageQuery
// Query: *[_type == "project" && slug.current == $slug][0]
export type ProjectPageQueryResult = {
  _id: string
  _type: 'project'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
} | null

declare module '@sanity/client' {
  interface SanityQueries {
    '\n  *[_id == "siteSettings"][0]{\n  title,\n  description,\n  copyrightText\n}': LayoutQueryResult
    "\n  *[_id == \"siteSettings\"][0]{\n    frontPage->{\n      _type,\n      _id,\n      title,\n      sections[]{\n        ...,\n        symbol->{_type},\n        'headline': coalesce(headline, symbol->headline),\n        'tagline': coalesce(tagline, symbol->tagline),\n        'subline': coalesce(subline, symbol->subline),\n        'image': coalesce(image, symbol->image),\n        product->{\n          _type,\n          _id,\n          title,\n          slug,\n          \"media\": media[0]\n        },\n        products[]{\n          _key,\n          ...(@->{\n            _type,\n            _id,\n            title,\n            slug,\n            \"media\": media[0]\n          })\n        }\n      },\n      style\n    }\n  }.frontPage\n": FrontPageQueryResult
    '\n  *[_type == "dndTestPage"]{\n    _id,\n    title,\n    children\n  }[0]\n': DndPageQueryResult
    '\n  *[_type == "product" && defined(slug.current)]{\n    _id,\n    title,\n    description,\n    slug,\n    "media": media[0]\n  }\n': ProductsPageQueryResult
    '*[_type == "project" && defined(slug.current)]': ProjectsPageQueryResult
    '*[_type == "product" && defined(slug.current)]{"slug": slug.current}': ProductSlugsQueryResult
    '*[_type == "product" && slug.current == $slug][0]': ProductPageQueryResult
    "\n  *[_type == \"page\" && slug.current == $slug][0]{\n    _type,\n    _id,\n    title,\n    sections[]{\n      ...,\n      symbol->{_type},\n      'headline': coalesce(headline, symbol->headline),\n      'tagline': coalesce(tagline, symbol->tagline),\n      'subline': coalesce(subline, symbol->subline),\n      'image': coalesce(image, symbol->image),\n      product->{\n        _type,\n        _id,\n        title,\n        slug,\n        \"media\": media[0]\n      },\n      products[]{\n        _key,\n        ...(@->{\n          _type,\n          _id,\n          title,\n          slug,\n          \"media\": media[0]\n        })\n      }\n    },\n    style\n  }\n": PageQueryResult
    '*[_type == "page" && defined(slug.current)]{"slug": slug.current}': PageSlugsResult
    '*[_type == "project" && defined(slug.current)]{"slug": slug.current}': ProjectSlugsQueryResult
    '*[_type == "project" && slug.current == $slug][0]': ProjectPageQueryResult
  }
}
