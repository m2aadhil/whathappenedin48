import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import { villages, districtColors } from '../data/villages';
import type { Village } from '../data/villages';

// Import L for bounds — Leaflet must be lazy-loaded for SSR
let L: any = null;
if (typeof window !== 'undefined') {
  L = require('leaflet');
}

// ── Map bounds fitter ──────────────────
function MapBounds() {
  const map = useMap();
  useEffect(() => {
    if (villages.length > 0) {
      const bounds = L.latLngBounds(villages.map(v => [v.lat, v.lng]));
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [map]);
  return null;
}

// ── Legend ─────────────────────────────
function Legend() {
  const districts = [...new Set(villages.map(v => v.district))];
  return (
    <div style={{
      position: 'absolute',
      bottom: 20,
      left: 10,
      zIndex: 1000,
      background: 'rgba(26, 28, 32, 0.92)',
      padding: '12px 16px',
      borderRadius: '8px',
      fontSize: '12px',
      color: '#F6F4F0',
      fontFamily: 'Inter, sans-serif',
      maxHeight: '300px',
      overflowY: 'auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    }}>
      <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 13 }}>Districts</div>
      {districts.map(d => (
        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%',
            background: districtColors[d] || '#6F737A',
            display: 'inline-block',
            flexShrink: 0,
          }} />
          <span>{d}</span>
        </div>
      ))}
      <div style={{ marginTop: 8, fontSize: 11, color: '#A8ACB3' }}>
        {villages.length} villages shown
      </div>
    </div>
  );
}

// ── Stats bar ──────────────────────────
function StatsBar() {
  const totalPop = villages.reduce((sum, v) => sum + v.population1945, 0);
  const districtCount = new Set(villages.map(v => v.district)).size;
  
  return (
    <div style={{
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      zIndex: 1000,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {[
        { label: 'Villages Shown', value: villages.length },
        { label: 'Districts', value: districtCount },
        { label: '1945 Population', value: totalPop.toLocaleString() },
      ].map(stat => (
        <div key={stat.label} style={{
          background: 'rgba(26, 28, 32, 0.88)',
          padding: '8px 16px',
          borderRadius: '8px',
          color: '#F6F4F0',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#D4780A' }}>{stat.value}</div>
          <div style={{ color: '#A8ACB3', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Main component ─────────────────────
export default function VillageMap() {
  const [selectedVillage, setSelectedVillage] = useState<Village | null>(null);

  return (
    <div style={{ 
      width: '100%', 
      height: '600px', 
      borderRadius: '12px', 
      overflow: 'hidden',
      border: '1px solid var(--fog, #A8ACB3)',
      boxShadow: '0 4px 24px rgba(26,28,32,0.10)',
      position: 'relative',
    }}>
      <MapContainer
        center={[31.9, 35.0]}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map data: PalestineRemembered, Zochrot'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <MapBounds />

        {villages.map((village, i) => (
          <CircleMarker
            key={i}
            center={[village.lat, village.lng]}
            radius={Math.max(4, Math.min(12, Math.sqrt(village.population1945) / 15))}
            pathOptions={{
              fillColor: districtColors[village.district] || '#6F737A',
              fillOpacity: 0.85,
              color: '#F6F4F0',
              weight: 1,
              opacity: 0.8,
            }}
            eventHandlers={{
              click: () => setSelectedVillage(village),
            }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={0.95}
              permanent={false}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
                <strong>{village.name}</strong> ({village.nameAr})<br />
                <span style={{ color: '#6F737A' }}>
                  Pop. 1945: {village.population1945.toLocaleString()} | {village.district}
                </span>
              </div>
            </Tooltip>
          </CircleMarker>
        ))}

        <StatsBar />
        <Legend />
      </MapContainer>

      {/* Village detail panel */}
      {selectedVillage && (
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1001,
          background: 'rgba(26, 28, 32, 0.95)',
          padding: '16px 20px',
          borderRadius: '12px',
          color: '#F6F4F0',
          fontFamily: 'Inter, sans-serif',
          maxWidth: 300,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        }}>
          <button onClick={() => setSelectedVillage(null)}
            style={{
              position: 'absolute', top: 8, right: 12,
              background: 'none', border: 'none', color: '#A8ACB3',
              fontSize: 18, cursor: 'pointer', padding: 0,
            }}
          >×</button>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontFamily: 'Playfair Display, serif' }}>
            {selectedVillage.name}
          </h3>
          <p style={{ margin: '0 0 8px', fontSize: 13, color: '#A8ACB3' }}>{selectedVillage.nameAr}</p>
          <div style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div><span style={{ color: '#A8ACB3' }}>District:</span> {selectedVillage.district}</div>
            <div><span style={{ color: '#A8ACB3' }}>Population (1945):</span> {selectedVillage.population1945.toLocaleString()}</div>
            <div><span style={{ color: '#A8ACB3' }}>Depopulated:</span> {selectedVillage.dateDepopulated}</div>
            <div style={{ marginTop: 4, paddingTop: 8, borderTop: '1px solid #3A3F48', color: '#D4780A' }}>
              {selectedVillage.fate}
            </div>
          </div>
        </div>
      )}

      <div style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1000,
        fontSize: 10,
        color: '#A8ACB3',
        fontFamily: 'Inter, sans-serif',
        background: 'rgba(26,28,32,0.7)',
        padding: '4px 8px',
        borderRadius: '4px',
      }}>
        1948 destroyed Palestinian villages • Full dataset: 400–600 villages
      </div>
    </div>
  );
}
