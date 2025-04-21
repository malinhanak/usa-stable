import fiFlag from "src/assets/images/flags/finland_round_icon_64.png";
import deFlag from "src/assets/images/flags/germany_round_icon_64.png";
import seFlag from "src/assets/images/flags/sweden_round_icon_64.png";
import gbFlag from "src/assets/images/flags/united_kingdom_round_icon_64.png";
import { useLanguage } from "src/context/LanguageContext";

const LANGUAGES = [
  { code: "sv", label: seFlag },
  { code: "en", label: gbFlag },
  { code: "de", label: deFlag },
  { code: "fi", label: fiFlag },
];

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`text-2xl transition hover:scale-110 ${
            lang === l.code ? "opacity-100" : "opacity-50"
          }`}
          aria-label={`Switch to ${l.code}`}
        >
          <img src={l.label} alt={l.code} width="24px" />
        </button>
      ))}
    </div>
  );
};
