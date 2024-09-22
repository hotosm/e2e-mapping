---
title: Drone Tasking Manager
description: Collect base imagery.
---

:::tip[Summary]
- We need to collect basemap imagery that we can generate map features from.
- For example we can trace building footprints very accurately from
  high-resolution drone imagery (much better than satellite).
- Imagery will be collected collaboratively via Drone Tasking Manager
  (Drone TM), where an area is subdivided into tasks and users collect imagery 
  for each task.
- The collected imagery is stitched together into one large image.
:::

## Step 1: Create an Account

- Visit the [Drone TM](https://dronetm.org) website and create an account:
- Many login methods are supported, such as OpenStreetMap and Google account.

## Step 2: Create a Project

- Click on 'Add Project' at the top right.

### Basic Information

- Fill out the details as needed.

### Define Area Of Interest (AOI)

- Either draw the area, or upload a GeoJSON of the area you
  wish to map.

### Key Parameters

- Define your flight parameters.
- Notes here...

### Generate Tasks

- Generate your task areas based on the map area
  and provided parameters.

### Conditions for contributions

- Additional info.

## Step 3: Start Mapping

1. Lock the area you wish to map.
2. Download the flight plan for your area.
3. Load the flight plan onto your drone.
4. Start flying!
5. Mark the area as complete.

## Step 4: Upload the Collected Imagery

1. Download the images from your drone.

:::tip
This is a good time to do a basic sanity check of your collected
images.

First process the images with the QGIS plugin
[ImportPhotos](https://plugins.qgis.org/plugins/ImportPhotos)

You should be able to see the image locations on a map,
and view them by hovering your mouse.
:::

2. Upload the directory of images to DroneTM.

## Step 5: Create the final image

1. Now the images are uploaded to DroneTM, we can trigger
   processing in DroneTM, which uses Open Drone Map (ODM) underneath.
2. Once complete the final stitched image can be downloaded.

:::note
- From all collected imagery we need to produce what is called an ortho-mosaic.
- This is simply all collected images merged into a single image, with
  georeferencing so where know where the image is located on a map.
- The collected images from Drone TM must be pre-processed using the EXIF
  information on images (when and where the photo was taken).
:::

## Extra Resources

- Read more about ground sampling distance
[here](https://wingtra.com/ground-sample-distance/)
