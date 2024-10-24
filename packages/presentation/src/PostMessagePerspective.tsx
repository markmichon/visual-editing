import type {ClientPerspective} from '@sanity/client'
import {memo, useEffect, type FC} from 'react'
import type {VisualEditingConnection} from './types'

export interface PostMessagePerspectiveProps {
  comlink: VisualEditingConnection
  perspective: ClientPerspective
}

const PostMessagePerspective: FC<PostMessagePerspectiveProps> = (props) => {
  const {comlink, perspective} = props

  // Return the perspective when requested
  useEffect(() => {
    return comlink.on('visual-editing/fetch-perspective', () => ({
      perspective,
    }))
  }, [comlink, perspective])

  // Dispatch a perspective message when the perspective changes
  useEffect(() => {
    comlink.post({
      type: 'presentation/perspective',
      data: {perspective},
    })
  }, [comlink, perspective])

  return null
}

export default memo(PostMessagePerspective)