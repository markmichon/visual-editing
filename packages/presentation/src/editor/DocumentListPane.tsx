import {Card, Code, ErrorBoundary, Flex, Label, Stack} from '@sanity/ui'
import {useCallback, useEffect, useMemo, useState, type ErrorInfo, type ReactElement} from 'react'
import {useTranslation} from 'sanity'
import {styled} from 'styled-components'
import {ErrorCard} from '../components/ErrorCard'
import {presentationLocaleNamespace} from '../i18n'
import {
  getPublishedId,
  PaneLayout,
  DocumentListPane as StructureDocumentListPane,
  StructureToolProvider,
  type PaneNode,
} from '../internals'
import type {
  MainDocumentState,
  PresentationSearchParams,
  StructureDocumentPaneParams,
} from '../types'
import {usePresentationTool} from '../usePresentationTool'
import {PresentationPaneRouterProvider} from './PresentationPaneRouterProvider'

const RootLayout = styled(PaneLayout)`
  height: 100%;
`

const Root = styled(Flex)`
  & > div {
    min-width: none !important;
    max-width: none !important;
  }
`

const WrappedCode = styled(Code)`
  white-space: pre-wrap;
`

export function DocumentListPane(props: {
  mainDocumentState?: MainDocumentState
  onStructureParams: (params: StructureDocumentPaneParams) => void
  searchParams: PresentationSearchParams
  refs: {_id: string; _type: string}[]
}): ReactElement {
  const {mainDocumentState, onStructureParams, searchParams, refs} = props

  const {t} = useTranslation(presentationLocaleNamespace)
  const {devMode} = usePresentationTool()

  const ids = useMemo(
    () =>
      refs
        .filter((r) => getPublishedId(r._id) !== mainDocumentState?.document?._id)
        .map((r) => r._id),
    [mainDocumentState, refs],
  )

  const pane: Extract<PaneNode, {type: 'documentList'}> = useMemo(
    () => ({
      id: '$root',
      options: {
        filter: '_id in $ids',
        params: {ids},
        // defaultOrdering: [{field: '_updatedAt', direction: 'desc'}],
      },
      schemaTypeName: '',
      title: t('document-list-pane.document-list.title'),
      type: 'documentList',
    }),
    [ids, t],
  )

  const [errorParams, setErrorParams] = useState<{
    info: ErrorInfo
    error: Error
  } | null>(null)

  const handleRetry = useCallback(() => setErrorParams(null), [])

  const [structureParams] = useState(() => ({}))

  // Reset error state when `refs` value schanges
  useEffect(() => setErrorParams(null), [refs])

  if (errorParams) {
    return (
      <ErrorCard flex={1} message={t('document-list-pane.error.text')} onRetry={handleRetry}>
        {devMode && (
          // show runtime error message in dev mode
          <Card overflow="auto" padding={3} radius={2} tone="critical">
            <Stack space={3}>
              <Label muted size={0}>
                {t('presentation-error.label')}
              </Label>
              <WrappedCode size={1}>{errorParams.error.message}</WrappedCode>
            </Stack>
          </Card>
        )}
      </ErrorCard>
    )
  }

  return (
    <ErrorBoundary onCatch={setErrorParams}>
      <RootLayout>
        <StructureToolProvider>
          <PresentationPaneRouterProvider
            onStructureParams={onStructureParams}
            structureParams={structureParams}
            searchParams={searchParams}
            refs={refs}
          >
            <Root direction="column" flex={1}>
              <StructureDocumentListPane index={0} itemId="$root" pane={pane} paneKey="$root" />
            </Root>
          </PresentationPaneRouterProvider>
        </StructureToolProvider>
      </RootLayout>
    </ErrorBoundary>
  )
}
