import Imagecarousel from "../Components/Imagecarousel";

import mb1 from "../Images/gallery/MineBikers1.jpg";
import mb2 from "../Images/gallery/MineBikers2.jpg";
import mb3 from "../Images/gallery/MineBikers3.jpg";
import mb4 from "../Images/gallery/MineBikers4.jpg";
import mb5 from "../Images/gallery/MineBikers5.jpg";
import mb6 from "../Images/gallery/MineBikers6.jpg";
import mb7 from "../Images/gallery/MineBikers7.jpg";
import mb8 from "../Images/gallery/MineBikers8.jpg";
import mb9 from "../Images/gallery/MineBikers9.jpg";
import mb10 from "../Images/gallery/MineBikers10.jpg";
import mb11 from "../Images/gallery/MineBikers11.jpg";
import mb12 from "../Images/gallery/MineBikers12.jpg";
import mb13 from "../Images/gallery/MineBikers13.jpg";
import mb14 from "../Images/gallery/MineBikers14.jpg";
import mb15 from "../Images/gallery/MineBikers15.jpg";
import mb16 from "../Images/gallery/MineBikers16.jpg";
import mb17 from "../Images/gallery/MineBikers17.jpg";
import mb18 from "../Images/gallery/MineBikers18.jpg";
import mb19 from "../Images/gallery/MineBikers19.jpg";
import mb20 from "../Images/gallery/MineBikers20.jpg";
import mb21 from "../Images/gallery/MineBikers21.jpg";
import mb22 from "../Images/gallery/MineBikers22.jpg";
import mb23 from "../Images/gallery/MineBikers23.jpg";
import mb24 from "../Images/gallery/MineBikers24.jpg";
import mb25 from "../Images/gallery/MineBikers25.jpg";
import mb26 from "../Images/gallery/MineBikers26.jpg";
import mb27 from "../Images/gallery/MineBikers27.jpg";
import mb28 from "../Images/gallery/MineBikers28.jpg";
import mb29 from "../Images/gallery/MineBikers29.jpg";
import mb30 from "../Images/gallery/MineBikers30.jpg";

const images = [
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  mb7,
  mb8,
  mb9,
  mb10,
  mb11,
  mb12,
  mb13,
  mb14,
  mb15,
  mb16,
  mb17,
  mb18,
  mb19,
  mb20,
  mb21,
  mb22,
  mb23,
  mb24,
  mb25,
  mb26,
  mb27,
  mb28,
  mb29,
  mb30,
];

const texts = [
  "Odottamassa jögevatreffin paraatiin lähtöä vuonna 2010.",
  "Kompakti teltta on kätevä!",
  "Virolaista tienhoitoa Mustveen ja Jögevan väliltä joskus vanhaan hyvään aikaan. Kartalla tässä näkyi asfalttitie",
  "Kiiregrilli luo tunnelmaa.",
  "Rannarootsi odottaa grilliin pääsyä.",
  "Tuusulanjärven rannalla grillailemassa vuonna 2020.",
  "Jägalan vesiputous ja kuppi kuumaa saa motoristin hartaaksi.",
  "Ajotauko porottavan auringon alla.",
  "Pyörät parkissa, melkein kaikki sitä parasta merkkiä.",
  "Kiluleib munaga, ihan parasta herkkua etelänaapurista.",
  "Nykyinen pressa nuorena jäsenenä vuoden 2000 treffissä. Kyllä, prätkällä ulkoilmabaariin ajaminen oli ihan ok tuolloin.",
  "Blackbirdin takakumi sileäksi burniksessa, paikalliset tykkäsivät kovasti ja osa tuli ihmettelemään jälkiä.",
  "Nuori jäsen, nykyinen SGT näyttää peukkua kaatosateessa joskus 2000-luvun alkuvuosina, vaikka uimahommiksi telttailu menikin.",
  "Vuonna 2000 oltiin, jos ei komeita niin ainakin melko nuoria.",
  "Kaljaa, majoneesia ja tupakkia. Siinäpä ne tärkeimmät.",
  "Jögevatreffin esiintymislava.",
  "Lippu ja lippuvalo, kahteen Suzukiin köytettynä tottakai.",
  "Vuoden 2022 ryhmäkuva. Tarkoitus oli hankkia mustat hupparit vaaleilla teksteillä, mutta jossain vaiheessa tieto katkesi ja päädyimme klu-klux-klanin väreihin.",
  "Lauisen kyläkaupalla eväitä hakemassa.",
  "Vuonna 2022 pistäydyimme paluumatkalla neuvostoaikaisissa ohjussiiloissa. Tie perille oli kamala, paikka kyllä varsin mielenkiintoinen.",
  "Kun pyörä porsii matkalla niin veljeskansa auttaa.",
  "Lauttaan pääsyä odottamassa, sade kuuluu välillä asiaan.",
  "Yöllistä tunnelmaa telttamajoituksessa.",
  "Saappaita ja sukkia kuivattelemassa ennen laivaan ajoa Tallinnassa.",
  "Kun ilmatieteenlaitos lupaa sadetta seitsemän prosentin todennäköisyydella menee koko viikonloppu yleensä uimahommiksi.",
  "Jögevatreffillä alkaa olemaan perinteitä, vanhimmilla kerholaisillakin alkaa olemaan kaksikymmentä reissua plakkarissa.",
  "Sataa sataa lorisee, yksi ymmärsi sentään ottaa teltan päälle pressun suojaksi.",
  "Ilmeestä päätellen on toivoa paremmasta säästä.",
  "Roadcaptainin henkilökohtainen suojavaruste, näillä festareilla paljonkin perinteistä kesäkumia hyödyllisempi",
  "GSX 750 F & DR 800, näilläkin lähes loppuunajetuilla häksättimillä käytiin aikanaan useasti Jögevassa.",
];

export default function Gallery() {
  return (
    <div>
      <Imagecarousel images={images} texts={texts} />
    </div>
  );
}
