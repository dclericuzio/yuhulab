// components/LeafletMap.tsx
'use client'

import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

// Dynamically import the map (to avoid SSR issues)
const Map = dynamic(() => import('./MapNoSSR'), { ssr: false })

export default function LeafletMap() {
  return <Map />
}
