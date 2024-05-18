'use client'
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

type Props = {};

const page = (props: Props) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const onDropAccepted = () => {
    console.log('accepted')
  };
  const onDropRejected = () => {};

  return (
    <div className={cn(
      'relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
      {
        'ring-blue-900/25 bg-blue-900/10': isDragOver,
      }
    )}>
      <Dropzone
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
        accept={{
          "image/jpeg": [".jpeg"],
          "image/png": [".png"],
          "image/jpg": [".jpg"],
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default page;
