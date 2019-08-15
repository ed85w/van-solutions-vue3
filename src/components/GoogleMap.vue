<template>
  <div>
    <GmapMap
      :center="{lat: 53.783418, lng: -1.579818}"
      :zoom="14"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker ref="myMarker"
      :position="{lat: 53.783418, lng: -1.579818}" 
      />

    </GmapMap>
  </div>
</template>
