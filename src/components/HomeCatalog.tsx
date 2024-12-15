import { HeaderArticles } from "./ArticleComponents/HeaderArticles"
import { CardsCatalog } from "./HomeCatalogComponents/CardsCatalog"
import image1 from "../assets/esteticaTest1.jpg";
import image2 from "../assets/esteticaTest2.jpg";
import image3 from "../assets/esteticaTest3.jpg";

const InfoHeaderArticles = {
    title: 'Bible Chat Features',
    description: 'Download the Bible Chat to explore features that will make your experience memorable.'
}

const productos = [
    {
        image: image1,
        title: 'producto 1',
        price: 100,
        description: 'este es el primer producto'
    },
    {
        image: image2,
        title: 'producto 2',
        price: 100,
        description: 'este es el segundo producto'
    },
    {
        image: image3,
        title: 'producto 3',
        price: 100,
        description: 'este es el tercer producto'
    },
]

export const HomeCatalog = () => {
    return (
        <section>
            <HeaderArticles
                description={InfoHeaderArticles.description}
                title={InfoHeaderArticles.title} />
            <div className="flex justify-around">
                <CardsCatalog
                    products={productos} />
            </div>
            <footer className="bg-white py-6 text-center">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-300 hover:text-black transition-colors duration-300 border border-transparent">
                    Ir a la tienda
                </button>
            </footer>

        </section>
    )
}
