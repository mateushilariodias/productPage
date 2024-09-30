'use client'

function OurCategories() {
  return (
    <section>
      <article className="py-16 text-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          <div className="relative h-64 flex items-center justify-center text-xl font-bold">
            <img 
              src="https://source.unsplash.com/random/800x600?story" 
              alt="Our Story" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Our Story</span>
            </div>
          </div>
          <div className="relative h-64 flex items-center justify-center text-xl font-bold">
            <img 
              src="https://source.unsplash.com/random/800x600?blog" 
              alt="Our Blog" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Our Blog</span>
            </div>
          </div>
        </div>
      </article>
      <article className="py-16 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          <div className="relative h-48 flex items-center justify-center text-lg">
            <img 
              src="https://source.unsplash.com/random/800x600?accessories" 
              alt="Accessories" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Accessories</span>
            </div>
          </div>
          <div className="relative h-48 flex items-center justify-center text-lg">
            <img 
              src="https://source.unsplash.com/random/800x600?shoes" 
              alt="Shoes" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Shoes</span>
            </div>
          </div>
          <div className="relative h-48 flex items-center justify-center text-lg">
            <img 
              src="https://source.unsplash.com/random/800x600?jackets" 
              alt="Jackets" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white">Jackets</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default OurCategories;