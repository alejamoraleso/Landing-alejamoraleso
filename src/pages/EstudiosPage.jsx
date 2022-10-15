import React from 'react'

export const EstudiosPage = () => {
  return (
<section className="w-full bg-blue class flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400 py-2">
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-24">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900">
        Estudios
      </h2>

    </div>

    <div
      className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10"
      >
      <div>
        <img
          alt="especializacion"
          src="https://us.123rf.com/450wm/macrovector/macrovector1701/macrovector170100664/70013488-de-dibujos-animados-estatuilla-femenina-de-la-misma-ingeniero-y-herramientas-de-intercambio-de-datos.jpg?ver=6"
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
            className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900">Esp. Tecnologica en Redes de Computadoras</p>
          <p className="mt-1 text-xs font-medium text-blue-900">
            Sena
          </p>
        </blockquote>
      </div>

      <div>
        <img
          alt="profesional"
          src="https://img.freepik.com/vector-premium/muchacha-linda-que-trabaja-ilustracion-icono-vector-historieta-computadora-concepto-icono-personas-tecnologia-vector-premium-aislado-estilo-plano-dibujos-animados_138676-1444.jpg?w=360 "
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
            className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900 py-4">Ingenieria de Sistemas </p>
          
          <p className="mt-1 text-xs font-medium text-blue-900">
            Universidad del Tolima
          </p>
          
        </blockquote>
      </div>

      <div>
        <img
          alt="ReactJs"
          src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900 py-4">Diplomado ReactJs</p>
          
          <p className="mt-1 text-xs font-medium text-blue-900">
            FIMLM - Universidad Tecnologica de Antioquia
          </p>
          
        </blockquote>
      </div>
      
      <div>
        <img
          alt="php"
          src="https://media.gettyimages.com/vectors/computer-monitor-icon-on-a-round-button-stickerseries-vector-id493973432?s=612x612"
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />
        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900">Desarrollo de Aplicaciones Web con PHP</p>
          <p className="mt-1 text-xs font-medium text-blue-900">
            Sena
          </p>

        </blockquote>
      </div>

      <div>
        <img
          alt="misiontic"
          src="https://www.devacademy.es/wp-content/uploads/2018/10/python-logo.png"
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />
        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900">Desarrollo de Aplicaciones Web con PHP</p>
          <p className="mt-1 text-xs font-medium text-blue-900">
            Mision Tic - Universidad de Caldas
          </p>

        </blockquote>
      </div>

      <div>
        <img
          alt="xroad"
          src="https://joinup.ec.europa.eu/sites/default/files/news/logo/2021-08/xtee_ikoon_lilla_rgb.png"
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />
        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl shadow-blue-400"
        >
          <p className="text-lg font-bold text-blue-900">Diplomado Interoperabilidad de Sistemas - XROAD</p>
          <p className="mt-1 text-xs font-medium text-blue-900">
            MinTic - Universidad Nacional de Colombia
          </p>

        </blockquote>
      </div>


    </div>
  </div>
</section>

  )
}
