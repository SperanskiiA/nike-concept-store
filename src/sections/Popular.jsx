import { products } from '../constants'
import { ProductCard } from '../components'

const Popular = () => {
    return (
        <section className="max-container max-sm:mt-12 " id="products">
            <div className="flex flex-col justify-start gap-4">
                <h2 className="text-4xl font-bold font-palanquin">
                    Our <span className="text-coral-red">popular</span> products
                </h2>
                <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">
                    Expirience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design and value!
                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

export default Popular
