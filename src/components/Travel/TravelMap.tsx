"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import type { TravelTrip } from "@/types/travel";
import "leaflet/dist/leaflet.css";

type TravelMapProps = {
    trips: TravelTrip[];
};

const TravelMap = ({ trips }: TravelMapProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstance.current || trips.length === 0) {
            return;
        }

        let cancelled = false;

        (async () => {
            const L = (await import("leaflet")).default;
            if (cancelled || !mapRef.current) return;

            const map = L.map(mapRef.current, {
                scrollWheelZoom: false,
                attributionControl: true,
            });

            L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    maxZoom: 19,
                }
            ).addTo(map);

            const pinIcon = L.divIcon({
                className: "",
                html: `<div style="
                    width: 18px;
                    height: 18px;
                    background: #2b6cb0;
                    border: 2px solid #fff;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    box-shadow: 0 1px 4px rgba(0,0,0,0.35);
                "></div>`,
                iconSize: [18, 18],
                iconAnchor: [9, 18],
                popupAnchor: [0, -16],
            });

            const bounds = L.latLngBounds([]);

            trips.forEach((trip) => {
                if (
                    typeof trip.lat !== "number" ||
                    typeof trip.lng !== "number"
                ) {
                    return;
                }

                const slug = trip.slug?.current;
                const marker = L.marker([trip.lat, trip.lng], {
                    icon: pinIcon,
                }).addTo(map);

                const popupHtml = slug
                    ? `<a href="/travel/${slug}" style="font-weight:600;color:#1a202c;text-decoration:none;">${trip.mapLabel}</a><br/><span style="color:#718096;font-size:12px;">${trip.title} · ${trip.year}</span>`
                    : `<strong>${trip.mapLabel}</strong>`;

                marker.bindPopup(popupHtml);
                marker.bindTooltip(trip.mapLabel, {
                    permanent: false,
                    direction: "top",
                    offset: [0, -12],
                });

                bounds.extend([trip.lat, trip.lng]);
            });

            if (bounds.isValid()) {
                map.fitBounds(bounds.pad(0.35));
            } else {
                map.setView([48.5, 10], 4);
            }

            mapInstance.current = map;
        })();

        return () => {
            cancelled = true;
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, [trips]);

    if (!trips.length) return null;

    return (
        <div className='mb-10 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700'>
            <div
                ref={mapRef}
                className='h-[320px] w-full sm:h-[420px]'
                aria-label='Travel map'
            />
        </div>
    );
};

export default TravelMap;
