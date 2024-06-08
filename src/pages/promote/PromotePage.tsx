import React from 'react'
import Promote from '../../components/promote/Promote'
import PromoteImage from '../../components/promote/PromoteImage'
export default function PromotePage() {
  return (
    <div  className='w-full min-h-screen bg-promotebg py-14'>
      <Promote />
      <PromoteImage />
    </div>
  )
}
