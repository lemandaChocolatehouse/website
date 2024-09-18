
import ChoclateCards1 from '../HomeComponents/ChoclateCards1'


const AllProducts = () => {
  return (
    <div className='all-products w-full py-5 flex flex-col gap-9 items-center pb-9'>
      <h1 className='text-6xl font-bold text-[#833829]'>Related Products</h1>
      <ChoclateCards1/>
      
    </div>
  )
}

export default AllProducts