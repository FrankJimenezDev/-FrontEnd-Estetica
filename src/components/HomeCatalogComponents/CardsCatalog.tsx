import { productsI } from "../../interfaces/CardCatalog.interface";

export const CardsCatalog: React.FC<productsI> = ({ products }) => {
  return products.map((product, idx) => (
    <article key={idx} className="flex justify-center items-start min-h-300 pt-8">
      <div className="max-w-[300px] mx-auto min-h-[400px] min-w-[300px]">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-2xl border border-gray-200 w-full">

          <header className="relative mx-4 mt-4 overflow-hidden bg-white rounded-t-2xl h-64">
            <img
              src={product.image}
              alt="Apple AirPods in a stylish setting"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </header>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-sans text-base font-medium text-blue-gray-900 antialiased">
                {product.title}
              </h1>
              <p className="font-sans text-base font-medium text-blue-gray-900 antialiased">
                ${product.price}
              </p>
            </div>
            <p className="font-sans text-sm font-normal text-gray-700 opacity-75 antialiased">
              {product.description}
            </p>
          </div>
          <footer className="p-4 pt-0">
            <button
              className="align-middle font-sans font-bold text-center uppercase transition-all text-xs py-2 px-5 rounded-full bg-black text-white shadow-lg hover:bg-gray-300 hover:text-black hover:scale-105 focus:shadow-inner active:opacity-90 block w-full"
              type="button"
            >
              Add to Cart
            </button>
          </footer>
        </div>
      </div>
    </article>
  ))
};
