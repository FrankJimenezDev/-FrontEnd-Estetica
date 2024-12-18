import { CardsCatalog } from "../../components/HomeCatalogComponents/CardsCatalog"
import image1 from "../../assets/esteticaTest1.jpg";
import { HeaderArticles } from "../../components/ArticleComponents/HeaderArticles";


const productos = [
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  }, {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
  {
    image: image1,
    title: 'producto 1',
    price: 100,
    description: 'este es el primer producto'
  },
]

const InfoHeaderArticles = {
  title: 'Bible Chat Features',
  description: 'Download the Bible Chat to explore features that will make your experience memorable.'
}

export const CatalogoPage = () => {
  return (
    <section className="flex flex-col mt-20 mb-20">
      <HeaderArticles
        title={InfoHeaderArticles.title}
        description={InfoHeaderArticles.description} />
      <section className="flex ml-10">
        <div className="w-[500px] mr-10">
          <h2 className="text-4xl font-bold mb-4">Filtro</h2>

          <label htmlFor="options" className="block text-sm font-medium text-gray-700 mb-2">Buscar un producto:</label>
          <input type="text" placeholder="Search" className="border border-gray-500 rounded-lg p-1 w-full" />

          <label htmlFor="options" className="block text-sm font-medium text-gray-700 mb-2">Filtrar por Etiqueta:</label>
          <select id="options" name="options" className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="opcion1">---</option>
            <option value="opcion2">Cara</option>
            <option value="opcion3">Cuerpo</option>
            <option value="opcion4">Lociones</option>
            <option value="opcion4">Cremas</option>
          </select>

          <label htmlFor="options" className="block text-sm font-medium text-gray-700 mb-2">Ordernar por:</label>
          <select id="options" name="options" className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="opcion1">---</option>
            <option value="opcion1">Precio mas barato</option>
            <option value="opcion2">Precio mas Caro</option>
          </select>
        </div>
        <div className="grid grid-cols-3 w-full justify-items-center">
          <CardsCatalog
            products={productos} />
        </div>
      </section>
    </section>
  )
}
