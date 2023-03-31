import React from 'react'

function Card(props) {
  return (
    <div className="container my-16 px-6 mx-auto">
      <section className="text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-12 text-center">
        Meet the <span className="text-blue-600">{props.position}</span> position candidates
        </h2>
        <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
            {props.data.map(data=>{
                return (
                    <div className="mb-6 lg:mb-0" key={data.name}>
                    <div className="relative block rounded-lg shadow-lg bg-white p-6">
                      <div className="lg:flex flex-row items-center">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 lg:pr-6">
                          <img
                              src={data.image}
                              alt="Trendy Pants and Shoes"
                              className="w-full rounded-md mb-6 lg:mb-0"
                              />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                          <h5 className="text-lg font-bold mb-2">{data.name}</h5>
                          <p className="text-gray-500 mb-4">{data.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })}
          </div>
          </section>
          </div>
          
  )
}

export default Card