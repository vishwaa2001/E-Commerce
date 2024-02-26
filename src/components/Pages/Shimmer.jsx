import React from 'react'

function Shimmer() {
    var items=[7,9,9,3,4,5,6,4,,9,6,5,1,2,3,4,1,2,]
  return (
    
  <div className='flex flex-wrap gap-14  p-16 mx-16'>
      {items.map((list,index) => {
        return (
          
          <div key={index} className='border w-[300px] h-[70vh]  bg-slate-200 rounded-md shadow-2xl'>
            
          </div>
         )
       }
       )}
     </div>
    
  )
}

export default Shimmer