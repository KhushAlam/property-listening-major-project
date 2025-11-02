import React from 'react'

export default function About() {
  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20 mt-5 mb-5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="row">
                <div className="col-md-6"> <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80"
                alt="About Property Listing" height={400} width={500}
              />
              </div>
                <div className="col-md-6">
                                <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                About <span className="text-teal-600">Property Listening</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Welcome to <strong>Property Listening</strong> — your trusted platform to buy, sell, and rent real estate properties like
                <span className="text-teal-600 font-medium"> land, flats, and rooms</span> across cities. 
                Our goal is to make property transactions transparent, easy, and reliable for everyone.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking for your dream home or an investment opportunity, 
                we bring verified listings and trusted agents at your fingertips. 
                Experience the comfort of finding your perfect property with complete confidence.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="bg-white border rounded-xl shadow-sm px-4 py-2 text-gray-700 font-medium">
                  🏡 Verified Properties
                </div>
                <div className="bg-white border rounded-xl shadow-sm px-4 py-2 text-gray-700 font-medium">
                  💼 Trusted Agents
                </div>
                <div className="bg-white border rounded-xl shadow-sm px-4 py-2 text-gray-700 font-medium">
                  🌍 All-India Coverage
                </div>
              </div>

              <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md transition">
                Learn More
              </button>
            </div>
                </div>
            </div>
         
            

          </div> 
        {/* </div> */}
      </section>
    </>
  )
}
