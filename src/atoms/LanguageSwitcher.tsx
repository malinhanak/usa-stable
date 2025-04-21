import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { useLanguage } from "src/context/LanguageContext";

const LANGUAGES = [
  { code: "sv", label: "Svenska" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fi", label: "Suomi" },
];

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-2 py-1 border rounded">
        {LANGUAGES.find((l) => l.code === lang)?.label}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white shadow p-2 rounded">
        {LANGUAGES.map((l) => (
          <DropdownMenu.Item
            key={l.code}
            onSelect={() => setLang(l.code)}
            className={`cursor-pointer px-2 py-1 rounded ${lang === l.code ? "bg-gray-200" : ""}`}
          >
            {l.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
