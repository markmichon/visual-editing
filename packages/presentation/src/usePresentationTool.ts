import {useContext} from 'react'
import {PresentationContext, type PresentationContextValue} from './PresentationContext'

export function usePresentationTool(): PresentationContextValue {
  const presentation = useContext(PresentationContext)

  if (!presentation) {
    throw new Error('Presentation context is missing')
  }

  return presentation
}
