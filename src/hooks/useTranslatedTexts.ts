import { useEffect, useState } from "react";

import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useLanguage } from "src/context/LanguageContext";

interface Texts {
  [key: string]: string;
}

export const useTranslatedTexts = () => {
  const db = getFirestore();
  const { lang } = useLanguage();
  const [texts, setTexts] = useState<Texts>({});

  useEffect(() => {
    const fetchTexts = async () => {
      const snapshot = await getDocs(collection(db, "texts"));
      const data: Texts = {};

      snapshot.forEach((doc) => {
        const docData = doc.data();
        const key = docData.key;
        data[key] = docData[lang] || docData["sv"];
      });

      setTexts(data);
    };

    fetchTexts();
  }, [lang]); //

  return texts;
};
