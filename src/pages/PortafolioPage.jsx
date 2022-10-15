import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    
    <section className="w-2/2 h-4/3 gap-8  bg-blue-100 justify-between p-8 -mt-6 text-center rounded-lg shadow-xl shadow-blue-100 py-2">
    
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900">
        Portafolio
      </h2>
    <div className="px-2 py-2 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-20"></div>
    
    </div>
      
      {proyectos.map((proyecto) => (
        <MyCard
          key={proyecto.id}
          url={proyecto.url}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          url_preview={proyecto.url_preview}
          url_github={proyecto.url_github}
        />
      ))}

  </section>
  )
}
