import React, { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L, { Icon } from "leaflet";

/* ================= CONFIGURACIÓN ================= */

const CENTER: [number, number] = [41.4031, 2.1589];
const ZOOM = 15;

/* ================= ICONO ================= */

function usePinIcon(): Icon {
    return L.icon({
        iconUrl: "/img/r2d2.jpg",   // 👈 AQUÍ
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -28],
      });
    }

/* ================= CONTROL DEL MAPA (CLAVE) ================= */

function MapSetup() {
  const map = useMap();

  useEffect(() => {
    // ✅ CENTER + ZOOM (FIJOS)
    map.setView(CENTER, ZOOM, { animate: false });

    // ✅ DESACTIVAR SCROLL ZOOM (FORMA SEGURA)
    map.scrollWheelZoom.disable();

    // (opcional) también puedes bloquear zoom táctil
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
  }, [map]);

  return null;
}

/* ================= PUNTOS ================= */

const points: { id: string; pos: [number, number]; label: string }[] = [
  { id: "1", pos: [41.4042, 2.1574], label: "Santa Rosa" },
  { id: "2", pos: [41.4025, 2.1602], label: "Planeta" },
  { id: "3", pos: [41.4018, 2.1568], label: "Aulestia" },
  { id: "4", pos: [41.4049, 2.1595], label: "Uni" },
  { id: "5", pos: [41.4030, 2.1611], label: "Store" },
];

/* ================= COMPONENTE ================= */

export function ContactMap() {
  const pinIcon = usePinIcon();

  return (
    <div className="h-40 rounded-2xl overflow-hidden border border-border">
      <MapContainer className="w-full h-full">
        <MapSetup />

        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />

        {points.map((p) => (
          <Marker
            key={p.id}
            position={p.pos}
            {...({ icon: pinIcon } as any)}
          >
            <Popup>
              <span className="font-semibold">{p.label}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
