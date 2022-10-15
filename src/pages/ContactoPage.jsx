import React from 'react';

export const ContactoPage = () => {
  return (
    

  <section className="w-2/2 h-4/4 m-4 bg-blue-900 class flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400">
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:py-12 lg:col-span-2">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-300 py-10">
            Contacto
          </h2>
          
          <p className="max-w-xl text-lg text-gray-200 text-justify">
            Si desea contactarme. Por favor diligencie el siguiente formulario y en poco tiempo
            me contare. 
          </p>

       
        </div>

        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
          <form action="" className="space-y-4">
            <div>
              <label className="sr-only" for="name">Nombre</label>
              <input className="w-full p-3 text-sm text-blue-900 border-gray-400 rounded-lg" placeholder="Nombre" type="text" id="name" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" for="email">Email</label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Email"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" for="telefono">Phone</label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Telefono de Contacto"
                  type="tel"
                  id="telefono"
                />
              </div>
            </div>

            

            <div>
              <label className="sr-only" for="mensaje">Mensaje</label>
              <textarea
                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                placeholder="Mensaje"
                rows="8"
                id="mensaje"
              ></textarea>
            </div>

            <div className="mt-4">
              <button 
                type="submit"
                className="inline-flex items-center justify-center w-full px-12 py-3 text-white bg-blue-900 rounded-lg sm:w-auto"
              >
                <span className="font-medium">Enviar</span>

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  )
}
