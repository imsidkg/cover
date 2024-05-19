import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
   <MaxWidthWrapper className='flex-1 flex flex-col'>
    {children}
   </MaxWidthWrapper>
  )
}

export default layout