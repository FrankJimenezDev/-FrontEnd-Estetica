import image1 from '../assets/esteticaTest1.jpg';
import image2 from '../assets/esteticaTest2.jpg';
import { Article } from '../interfaces/Article.interface';
import { Articles } from './ArticleComponents/Articles';

const articles: Article[] = [
  {
    title: 'Verse Finder',
    text: `Easily search for verses from the Old and New Testaments by entering any topic, concept, or keyword. The Verse Finder helps you quickly locate relevant scriptures and provides insightful context to deepen your understanding of the Bible's teachings. Easily search for verses from the Old and New Testaments by entering any topic, concept, or keyword. The Verse Finder helps you quickly locate relevant scriptures and provides insightful context to deepen your understanding of the Bible's teachings.`,
    image: image1
  },
  {
    title: 'Bible Trivia',
    text: `Challenge yourself with Bible Trivia and sharpen your biblical knowledge through engaging games. Test your memory on biblical events, characters, locations, and teachings. Challenge yourself with Bible Trivia and sharpen your biblical knowledge through engaging games.`,
    image: image2
  }
];

export const ArticlesComponent = () => {
  return (
    <section className="bg-white text-gray-900 container mx-auto py-16 px-4 md:px-16">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Bible Chat Features</h2>
        <p className="text-lg text-gray-600">
          Download the Bible Chat to explore features that will make your experience memorable.
        </p>
      </header>

      <Articles articles={articles} />
    </section>
  );
};
