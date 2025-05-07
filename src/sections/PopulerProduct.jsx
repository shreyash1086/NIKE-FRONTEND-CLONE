import { products } from "../constants"
import PopulerProductCard from "../components/PopulerProductCard"
const PopulerProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold capitalize">Our <span className="text-coral-red">Popular</span> products</h2>
        <p className="max-w-lg mt-2 font-montserrat text-slate-gray">Explore our latest collection of shoes—find the perfect pair
         to elevate your style and comfort. Happy shopping!</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1sm-gap-6 gap-14">
        {products.map((product)=>(
          <PopulerProductCard key={product.name}{...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopulerProduct