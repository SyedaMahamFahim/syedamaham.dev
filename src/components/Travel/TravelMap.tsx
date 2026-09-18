"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import type { TravelMapPin } from "@/types/travel";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

type TravelMapProps = {
    trips: TravelMapPin[];
    /** Base path for popup links, e.g. "/travel" or "/travel-preview" */
    linkBase?: string;
};

const TravelMap = ({ trips, linkBase = "/travel" }: TravelMapProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstance.current || trips.length === 0) {
            return;
        }

        let cancelled = false;

        (async () => {
            const L = (await import("leaflet")).default;
            await import("leaflet.markercluster");
            if (cancelled || !mapRef.current) return;

            const map = L.map(mapRef.current, {
                scrollWheelZoom: false,
                attributionControl: true,
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }).addTo(map);

            const pinIcon = L.divIcon({
                className: "travel-map-pin",
                html: `<div class="travel-map-pin__dot"></div>`,
                iconSize: [22, 22],
                iconAnchor: [11, 22],
                popupAnchor: [0, -18],
            });

            const clusterGroup = (L as any).markerClusterGroup({
                showCoverageOnHover: false,
                maxClusterRadius: 55,
                spiderfyOnMaxZoom: true,
                iconCreateFunction: (cluster: any) => {
                    const count = cluster.getChildCount();
                    let sizeClass = "travel-cluster--small";
                    if (count >= 20) sizeClass = "travel-cluster--large";
                    else if (count >= 8) sizeClass = "travel-cluster--medium";

                    return L.divIcon({
                        html: `<div><span>${count}</span></div>`,
                        className: `travel-cluster ${sizeClass}`,
                        iconSize: L.point(42, 42),
                    });
                },
            });

            const bounds = L.latLngBounds([]);

            trips.forEach((trip) => {
                if (
                    typeof trip.lat !== "number" ||
                    typeof trip.lng !== "number"
                ) {
                    return;
                }

                const marker = L.marker([trip.lat, trip.lng], {
                    icon: pinIcon,
                });

                const popupHtml = `
                  <a class="travel-map-card" href="${linkBase}/${trip.slug}">
                    <img
                      class="travel-map-card__image"
                      src="${trip.coverImage}"
                      alt="${trip.mapLabel}"
                      loading="lazy"
                    />
                    <span class="travel-map-card__title">${trip.mapLabel}</span>
                    <span class="travel-map-card__date">${trip.title} · ${trip.month}</span>
                  </a>
                `;

                marker.bindPopup(popupHtml, {
                    className: "travel-map-popup",
                    maxWidth: 220,
                    minWidth: 180,
                    closeButton: true,
                });

                clusterGroup.addLayer(marker);
                bounds.extend([trip.lat, trip.lng]);
            });

            map.addLayer(clusterGroup);

            if (bounds.isValid()) {
                map.fitBounds(bounds.pad(0.45));
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
    }, [trips, linkBase]);

    if (!trips.length) return null;

    return (
        <div className='travel-map-wrap relative z-0 mb-10 overflow-hidden rounded-sm border border-gray-200 dark:border-gray-700'>
            <div
                ref={mapRef}
                className='h-[320px] w-full sm:h-[420px]'
                aria-label='Travel map'
            />
        </div>
    );
};

export default TravelMap;
