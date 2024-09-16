import type {SanityDocumentBase} from '@sanity/mutate'
import {useCallback, useEffect, useState} from 'react'

import {getPublishedId} from '../../util/documents'
import {isEmptyActor, type OptimisticReducer, type OptimisticReducerAction} from './context'
import {useOptimisticActor} from './useOptimisticActor'

export function useOptimistic<T>(
  passthrough: T,
  reducer: OptimisticReducer<T> | Array<OptimisticReducer<T>>,
): T {
  const [state, setState] = useState<T>(passthrough)

  const actor = useOptimisticActor()

  const setStateFromAction = useCallback(
    (action: OptimisticReducerAction) => {
      const reducers = Array.isArray(reducer) ? reducer : [reducer]
      setState((prevState) => {
        return reducers.reduce(
          (acc, reducer) =>
            reducer(acc, {type: action.type, document: action.document, id: action.id}),
          prevState,
        )
      })
    },
    [reducer],
  )

  const setStateFromEvent = useCallback(
    (event: {id: string; document: SanityDocumentBase}) =>
      setStateFromAction({document: event.document, type: 'mutate', id: getPublishedId(event.id)}),
    [setStateFromAction],
  )

  useEffect(() => {
    // If the actor hasn't been set yet, we don't need to subscribe to mutations
    if (isEmptyActor(actor)) {
      const inFrame = window.self !== window.top || window.opener
      if (inFrame) {
        // eslint-disable-next-line no-console
        console.warn('useOptimisticMutate called with empty actor')
      }
      return
    }

    const subscription = actor.on('rebased.local', setStateFromEvent)

    return () => subscription.unsubscribe()
  }, [actor, setStateFromEvent])

  useEffect(() => {
    setState(passthrough)
  }, [passthrough])

  return isEmptyActor(actor) ? passthrough : state
}