/// <reference types="google.maps" />
import {useCallback, useEffect, useState} from 'react';
import {
  APILoadingStatus,
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
} from '@vis.gl/react-google-maps';
import {ExternalLink, LocateFixed, MapPin} from 'lucide-react';

interface StudioMapProps {
  address: string;
  mapLocation: string;
  coordinates: google.maps.LatLngLiteral;
  brand: string;
}

function StudioMapInner({
  address,
  mapLocation,
  coordinates,
  brand,
}: StudioMapProps) {
  const map = useMap();
  const loadingStatus = useApiLoadingStatus();
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState<boolean>(true);

  useEffect(() => {
    if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (!map) return;
    map.panTo(coordinates);
    map.setZoom(17);
  }, [map, coordinates]);

  const handleRecenter = useCallback(() => {
    if (!map) return;
    map.panTo(coordinates);
    map.setZoom(17);
    setInfoOpen(true);
  }, [map, coordinates]);

  const coordQuery = `${coordinates.lat},${coordinates.lng}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    coordQuery
  )}`;

  if (
    loadingStatus === APILoadingStatus.FAILED ||
    loadingStatus === APILoadingStatus.AUTH_FAILURE
  ) {
    return (
      <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center bg-[#FAF6F1] p-8 text-center">
        <div className="w-11 h-11 rounded-full bg-[#F2EAE1] border border-[#E2D5C8] flex items-center justify-center mb-4">
          <MapPin className="w-5 h-5 text-[#9E6E64]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-[20px] text-[#4A332C]">
          Unable to load interactive map
        </h3>
        <p className="mt-2 text-[14px] text-[#614D45] max-w-md">
          {mapLocation} · {address}
        </p>
        <p className="mt-1 text-[12px] text-[#8A746B] tabular-nums">
          {coordinates.lat}, {coordinates.lng}
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13px] font-medium px-5 py-2.5 transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="relative w-full h-[360px] sm:h-[400px] lg:flex-1 lg:min-h-[380px]">
        <GoogleMap
          defaultCenter={coordinates}
          defaultZoom={17}
          mapId="DEMO_MAP_ID"
          gestureHandling="cooperative"
          mapTypeControl={false}
          streetViewControl={false}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{width: '100%', height: '100%'}}
        >
          <AdvancedMarker
            ref={markerRef}
            position={coordinates}
            onClick={() => setInfoOpen(true)}
            title={`${brand} — ${mapLocation}`}
          >
            <Pin
              background="#4A332C"
              borderColor="#3B2620"
              glyphColor="#FAF6F1"
              scale={1.15}
            />
          </AdvancedMarker>

          {infoOpen && marker && (
            <InfoWindow
              anchor={marker}
              maxWidth={280}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div className="p-1 text-[#3E2A24] font-sans">
                <p className="font-serif font-semibold text-[15px] text-[#4A332C]">
                  {brand}
                </p>
                <p className="mt-1 text-[12.5px] font-medium text-[#4A332C]">
                  {mapLocation}
                </p>
                <p className="mt-0.5 text-[12px] leading-[1.45] text-[#614D45]">
                  {address}
                </p>
                <p className="mt-1 text-[11px] text-[#8A746B] tabular-nums">
                  {coordinates.lat}, {coordinates.lng}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-[#9E6E64] hover:text-[#4A332C] underline"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      {/* Compact Studio Address & Controls Footer inside Map Card */}
      <div className="bg-[#FAF6F1] border-t border-[#E2D5C8] px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#9E6E64] tabular-nums">
            {mapLocation} · {coordinates.lat}, {coordinates.lng}
          </p>
          <p className="text-[13px] text-[#4A332C] truncate" title={address}>
            {address}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleRecenter}
            className="inline-flex items-center gap-1.5 border border-[#C9B7A7] hover:border-[#4A332C] bg-[#F2EAE1] text-[#4A332C] text-[12px] font-medium px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <LocateFixed className="w-3.5 h-3.5" />
            <span>Recenter</span>
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[12px] font-medium px-3 py-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function StudioMap({
  address,
  mapLocation,
  coordinates,
  brand,
}: StudioMapProps) {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '') as string;

  if (!apiKey) {
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${coordinates.lat},${coordinates.lng}`
    )}`;
    return (
      <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center bg-[#FAF6F1] p-8 text-center">
        <div className="w-11 h-11 rounded-full bg-[#F2EAE1] border border-[#E2D5C8] flex items-center justify-center mb-4">
          <MapPin className="w-5 h-5 text-[#9E6E64]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-[20px] text-[#4A332C]">
          {brand} Studio Location
        </h3>
        <p className="mt-2 text-[14px] font-medium text-[#4A332C]">
          {mapLocation}
        </p>
        <p className="mt-1 text-[13.5px] leading-[1.6] text-[#614D45] max-w-md">
          {address}
        </p>
        <p className="mt-1 text-[12px] text-[#8A746B] tabular-nums">
          {coordinates.lat}, {coordinates.lng}
        </p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13px] font-medium px-5 py-2.5 transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <APIProvider
      apiKey={apiKey}
      libraries={['marker']}
      language="en"
      region="IN"
    >
      <StudioMapInner
        address={address}
        mapLocation={mapLocation}
        coordinates={coordinates}
        brand={brand}
      />
    </APIProvider>
  );
}
