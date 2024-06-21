import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import { string } from 'zod';
import DesignPreview from './DesignPreview';

interface pageProps {
    searchParams : 
    {
        [key : string] : string | string[] | undefined
}
}

const page = async({searchParams} :pageProps) => {
    const {  id } = searchParams;


    if(!id || typeof id !== 'string'){
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where : {
            id
        }
    })


  return (
    <div>
        <DesignPreview/>
    </div>
  )
}

export default page