import { React, Immutable, getAppStore, appActions, BrowserSizeMode } from 'jimu-core'
import { wrapWidget, widgetRender, getInitState, mockTheme } from 'jimu-for-test'
import { fireEvent, waitFor } from '@testing-library/react'
import ShareWidget from '../src/runtime/widget'

const initState = getInitState().merge({
  appContext: { isRTL: false },
  appConfig: { widgets: [] as any }
})
getAppStore().dispatch(appActions.updateStoreState(initState))

describe('share popup test', function () {
  let render
  beforeAll(() => {
    window.locale = 'en-us'
    render = widgetRender(false, mockTheme as any)
  })

  it('show popup after click popupBtn', async () => {
    const config = Immutable({
      uiMode: 'POPUP',
      popup: {
        icon: '',
        items: ['embed', 'qrcode', 'email', 'facebook', 'twitter', 'pinterest', 'linkedin'],
        tooltip: ''
      },
      inline: {
        items: ['facebook', 'twitter', 'pinterest', 'linkedin', 'embed', 'qrcode', 'email', 'sharelink'],
        design: {
          direction: 'HORIZONTAL',
          hideLabel: false,
          btnRad: 0,
          btnColor: '',
          iconColor: '',
          size: 'default'
        }
      }
    })
    const props = {
      dispatch: jest.fn(),
      config,
      appInfo: { name: 'test share name' },
      appConfig: initState.appConfig,
      browserSizeMode: BrowserSizeMode.Small,
      isLiveViewMode: false
    }

    const widgetRef = { current: null }

    const Widget = wrapWidget(ShareWidget, { theme: mockTheme, ref: widgetRef } as any)
    const { queryByTestId } = render(<Widget widgetId='shareTest1' {...props} />)

    // click popupBtn
    const btn = queryByTestId('popupBtn')
    fireEvent.click(btn)

    // assert
    await waitFor(() => {
      const popperState = widgetRef.current.state.isPopupOpen
      // const popper = queryByTestId('mainPopper');
      expect(popperState).toBe(true)
    }, { timeout: 500 })
  })
})
