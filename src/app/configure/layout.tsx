import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
   <MaxWidthWrapper className='flex-1 flex flex-col'>
    <Steps/>
    {children}
   </MaxWidthWrapper>
  )
}

export default layout