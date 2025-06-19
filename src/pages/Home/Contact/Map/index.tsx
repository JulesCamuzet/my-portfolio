import React, { useContext, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

import { themeContext } from '../../../../contexts/theme'
import { Theme } from '../../../../hoc/Theme/types'
import useVisible from '../../../../hooks/useVisible'
import { StyledMapContainer, StyledWrapper } from './styles'
import Text from '../../../../components/Text'
import Title from '../../../../components/Title'

const Map = () => {
  const { theme } = useContext(themeContext)

  const mapRef = useRef<null | mapboxgl.Map>(null)
  const mapContainerRef = useRef<null | HTMLDivElement>(null)

  const { isVisible } = useVisible({ elementRef: mapContainerRef })

  const getMapStyle = (theme: Theme) => {
    return theme === 'dark'
      ? 'mapbox://styles/juleau14/cmc34mosm01py01s55j3p1yw9'
      : 'mapbox://styles/juleau14/cmc342dge01ng01qw91rrblm8'
  }

  useEffect(() => {
    if (
      mapContainerRef !== null &&
      mapContainerRef.current !== null &&
      isVisible
    ) {
      mapboxgl.accessToken = process.env.MAPBOX_TOKEN
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [0, 0],
        zoom: 1.5,
        style: 'mapbox://styles/juleau14/cmc342dge01ng01qw91rrblm8',
        pitch: 0,
        bearing: 0,
      })

      mapRef.current.on('load', () => {
        mapRef.current!.flyTo({
          center: [1.093867, 49.44302],
          zoom: 16,
          pitch: 60,
          bearing: 130,
          speed: 1.6,
          curve: 1.5,
          easing: (t) => t,
        })
      })

      return () => {
        mapRef.current?.remove()
      }
    }
  }, [mapContainerRef, isVisible])

  useEffect(() => {
    if (mapRef.current && isVisible) {
      mapRef.current.setStyle(getMapStyle(theme))

      mapRef.current.once('style.load', () => {
        mapRef.current!.flyTo({
          center: [1.093867, 49.44302],
          zoom: 16,
          pitch: 60,
          bearing: 130,
          speed: 0.8,
          curve: 1.5,
          easing: (t) => t,
        })
      })
    }
  }, [theme, isVisible])

  return (
    <StyledWrapper>
      <Title type='h3'>Based in Rouen, France...</Title>
      <StyledMapContainer ref={mapContainerRef}></StyledMapContainer>
    </StyledWrapper>
  )
}

export default Map
