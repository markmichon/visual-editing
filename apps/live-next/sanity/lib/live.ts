import {defineLive} from '@sanity/next-loader'
import {client} from './client'
import {token} from './token'

export const {sanityFetch, SanityLive, verifyPreviewSecret} = defineLive({
  client,
  previewDraftsToken: token,
  liveDraftsToken: token,
})