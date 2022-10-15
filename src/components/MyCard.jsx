export const MyCard = ({ url, titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="w-2/3 h-2/3 bg-blue-900 px-6 py-8 rounded-2xl shadow-2xl">
      <img src={url} width="100" height="150" className="rounded-full mx-auto mb-6 shadow-2xl" />
      <h1 className="font-bold text-2xl mb-6 text-gray-300 ">{titulo}</h1>
      <h1 className="mb-6 text-gray-300 text-justify">{descripcion}</h1>
      <div>
      <a href={url_preview} target="_blank" className="bg-blue-700 mr-2 text-white px-4 py-2 rounded-3xl font-bold w-full">
        Vista Previa
      </a>
      </div>
      <p>.</p>
      <div>
      <a href={url_github} target="_blank" className="bg-blue-700 mr-2 text-white px-4 py-2 rounded-3xl font-bold">
        GitHub
      </a>
      </div>
    </div>
  );
};
