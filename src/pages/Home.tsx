import { useTranslatedTexts } from "src/hooks/useTranslatedTexts";

const Home = () => {
  const text = useTranslatedTexts();
  return <h1 className="text-2xl font-bold">{text["homepage_title"]}</h1>;
};

export default Home;
