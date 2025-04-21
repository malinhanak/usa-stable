import { useTranslatedTexts } from "src/hooks/useTranslatedTexts";
import styles from "src/pages/styles.module.css";

const Home = () => {
  const text = useTranslatedTexts();
  return (
    <section className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>{text["homepage_title"]}</h1>
      <p
        className={styles.pageText}
        style={{ fontStyle: "italic", fontSize: "12px" }}
      >
        Allt innehåll på denna sida är en del av det online RPG-forumspel som
        spelas på VHF – Virtual Horse Forum. Alla bilder som visas på sidan är
        antingen skapade av oss, fotograferade av våra egna team, målade av våra
        konstnärer, eller genererade via AI, och används med tillstånd.
      </p>
      <p
        className={styles.pageText}
        style={{ fontStyle: "italic", fontSize: "12px" }}
      >
        Vi respekterar upphovsrätt och strävar efter att ge korrekt erkännande
        för alla verk som används. Om du hittar något innehåll som du anser
        bryter mot upphovsrätten, vänligen kontakta oss så att vi kan åtgärda
        det.
      </p>
      <p
        className={styles.pageText}
        style={{ fontStyle: "italic", fontSize: "12px" }}
      >
        För att delta i vårt spel eller utforska fler fantastiska stallar och
        hästar, besök vårt VHF Forum.
      </p>
      <h3 className={styles.pageSubTitle}>
        USA Stuteri – En Resa från Bjorsell till Idag
      </h3>
      <p className={styles.pageText}>
        Allt började i juni 2008 när jag grundade stallet Bjorsell. Under sina
        första år var Bjorsell ett mångsidigt stall där vi fokuserade på att
        utveckla hästar för alla discipliner. Men efter hand började en
        tydligare passion växa fram, och vi bestämde oss för att lägga större
        fokus på dressyr. Detta ledde så småningom till skapandet av USA
        Jumping, ett stuteri som specialiserade sig på hoppning och avkommor med
        hoppbegåvningar.
      </p>
      <p className={styles.pageText}>
        För att hålla liv i den ursprungliga visionen drev jag de två stallen
        parallellt under ett par månader. Men runt december och januari 2010
        föll allt på plats. Jag valde att slå ihop Bjorsell och USA Jumping till
        ett gemensamt stall – USA Stuteri. Trots sammanslagningen behöll vi de
        två gårdarna, som låg precis bredvid varandra, och fortsatte att
        fokusera på de två discipliner som alltid varit vår stolthet: dressyr
        och hoppning.
      </p>
      <p className={styles.pageText}>
        Idag är USA Stuteri en allround verksamhet där vi stolt håller liv i
        traditionen från både Bjorsell och USA Jumping. Hästarna tränas och
        tävlas inom både dressyr och hoppning, men alla avkommor bär på det
        gemensamma USA-prefixet som står för vår passion och vårt arv
      </p>
      <p className={styles.pageText}>
        Välkommen att följa vår resa, oavsett om du söker den ultimata
        dressyrhästen eller en hoppbegåvad stjärna – vi erbjuder det bästa av
        två världar!
      </p>
    </section>
  );
};

export default Home;
