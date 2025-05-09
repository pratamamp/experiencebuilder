/** @jsx jsx */
import {
  React,
  jsx,
  type DataSource,
  DataSourceComponent,
  DataSourceStatus,
  type IMDataSourceInfo,
  type ImmutableArray
} from 'jimu-core'
import { type LrsLayer, isDefined } from 'widgets/shared-code/lrs'

export interface AttributeSetDataSourceManagerProps {
  events?: ImmutableArray<LrsLayer>
  dataSourcesReady: (boolean) => void
}

export function AttributeSetDataSourceManager (props: AttributeSetDataSourceManagerProps) {
  const { events, dataSourcesReady } = props
  const [lrsEvents, setLrsEvents] = React.useState<ImmutableArray<LrsLayer>>(events ?? null)
  const [eventDsReady, setEventDsReady] = React.useState<boolean[]>([])

  React.useEffect(() => {
    if (events && events.length > 0) {
      setLrsEvents(events)
      const setDsReadyFalse: boolean[] = Array(events.length).fill(false)
      setEventDsReady(setDsReadyFalse)
    } else {
      // Even though there are no events, we will notify caller that everything is ready.
      // This way, the pickers are not disabled and users will see that no events are
      // available on the attribute pane.
      setLrsEvents(null)
      setEventDsReady([])
      dataSourcesReady(true)
    }
  }, [dataSourcesReady, events])

  const updateDsReady = React.useCallback((index: number, value: boolean) => {
    const updatedDsReady = eventDsReady
    updatedDsReady[index] = value
    setEventDsReady(updatedDsReady)
    dataSourcesReady(updatedDsReady.every(value => value))
  }, [dataSourcesReady, eventDsReady])

  const handleEventDsCreated = React.useCallback((ds: DataSource, index) => {
    updateDsReady(index, true)
  }, [updateDsReady])

  const handleEventDsInfoChange = React.useCallback((info: IMDataSourceInfo, index) => {
    if (info) {
      const { status, instanceStatus } = info
      if (instanceStatus === DataSourceStatus.NotCreated ||
          instanceStatus === DataSourceStatus.CreateError ||
          status === DataSourceStatus.LoadError ||
          status === DataSourceStatus.NotReady) {
        updateDsReady(index, false)
      } else {
        updateDsReady(index, true)
      }
    }
  }, [updateDsReady])

  const handleEventDsCreateFailed = React.useCallback((index) => {
    updateDsReady(index, false)
  }, [updateDsReady])

  return (
    <div>
      {isDefined(lrsEvents) && (
        lrsEvents.map((event, index) => {
          return (
            <DataSourceComponent
              key={index}
              useDataSource={event.useDataSource}
              onDataSourceInfoChange={(e) => { handleEventDsInfoChange(e, index) }}
              onCreateDataSourceFailed={(e) => { handleEventDsCreateFailed(index) }}
              onDataSourceCreated={(e) => { handleEventDsCreated(e, index) }}
            />
          )
        })
      )}
    </div>
  )
}
