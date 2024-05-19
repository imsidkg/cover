import {
    generateReactHelpers,
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import type { OurFileRouter } from '@/app/api/uploadthing/core'
   
export const {useUploadThing , uploadFiles} = generateReactHelpers<OurFileRouter>()