import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className="-z-10 text-6xl flex justify-center py-5 animate-spin text-blue-500  max-w-[200px] mx-auto ">
		<AiOutlineLoading3Quarters />
	</div>
  )
}

export default Loading