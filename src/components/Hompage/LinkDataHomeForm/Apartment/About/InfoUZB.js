import React from "react";
import { Container, Typography, List, ListItem, Box } from "@mui/material";

function InfoUZB() {
  return (
    <Box marginTop={3}>
      <Typography paragraph>
        <b>Link Home</b> – bu ko‘chmas mulk, avtomobillar va boshqa aktivlarni
        avtomatik baholash uchun mo‘ljallangan onlayn platforma. Loyiha ustida
        qarib ikki yildan buyon ish olib borilmoqda. Mazkur platformaning
        maqsadi baholash jarayonini samarali, shaffof va ancha arzon qilishdir.
        Bizning platformamiz sun'iy intellekt texnologiyalariga asoslangan
        bo‘lib, aktivlarni tezkor va aniq baholash imkonini beradi, bu esa
        an’anaviy baholash usulida mavjud bo‘lgan qiyinchiliklarni bartaraf
        etadi.
      </Typography>

      {/* Section: Current Issues */}
      <Typography variant="h5" gutterBottom>
        Baholash jarayonidagi hozirgi qiyinchiliklar
      </Typography>

      <Typography>
        Bugungi kunda baholash jarayonida quyidagi qiyinchiliklarga duch
        kelishingiz mumkin:
      </Typography>
      <Box component="div">
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
        >
          <Typography variant="body1" sx={{ mr: 1 }}>
            •
          </Typography>
          <Typography variant="body1">
            Ko‘p vaqt talab etadi: Baholash bir necha soat yoki hatto kunlar
            davom etishi mumkin.
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
        >
          <Typography variant="body1" sx={{ mr: 1 }}>
            •
          </Typography>
          <Typography variant="body1">
            Subyektivlik: Baholovchi tajribasi yoki buyurtmachini
            qiziqishlaridan kelib chiqib subyektiv baho berilishi mumkin.
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
        >
          <Typography variant="body1" sx={{ mr: 1 }}>
            •
          </Typography>
          <Typography variant="body1">
            Narxning noaniqligi: An’anaviy baholash insondan sinchkovlik talab
            qilgani sababli narx aniq nazorat qilinmayapti.
          </Typography>
        </Box>
      </Box>

      <Typography paragraph>
        Link Home bu muammolarni bartaraf etish uchun avtomatlashtirilgan
        tizimni taklif etadi, natijada baholash jarayoni tezlashadi va
        xarajatlar sezilarli darajada kamayadi.
      </Typography>

      {/* Section: Importance of Digital Transformation */}
      <Typography variant="h5" gutterBottom>
        Raqamli transformatsiyaning ahamiyati
      </Typography>
      <Typography paragraph>
        Moliyaviy xizmatlar, xususan sug‘urta, ipoteka, avtokredit ajratish va
        boshqa bir qator jarayonlarni raqamlashtirish bugungi kunda muhim masala
        bo‘lib qolmoqda. Kun sayin tashkilotlarda ma’lumotlar ko‘payib,
        jarayonlarni avtomatlashtirishga talab va ehtiyoj oshmoqda, qoidalarga
        boʻysunadigan innovatsion yechim yarida bozorda raqobatbardosh
        xizmatlarni taklif qilishda asos bo‘lib xizmat qiladi.
      </Typography>

      {/* Section: How the Platform Works */}
      <Typography variant="h5" gutterBottom>
        Platforma qanday ishlaydi?
      </Typography>
      <Typography paragraph>
        Bizning platformamizdan foydalanish juda oson. Foydalanuvchilar ko‘chmas
        mulk yoki avtomobil haqidagi kerakli ma’lumotlarni kiritishadi va bir
        necha soniya ichida tizim ularga bozor qiymatini hisoblab beradi.
        Modelimiz so‘nggi ikki yil davomida yig‘ilgan ikki milliondan ortiq
        bozor kuzatuvlarini asosida ishlaydi va kun sayin takomillashib
        bormoqda.
      </Typography>
      <Typography paragraph>
        2023-yil iyul oyida Link Auto platformasini test rejimida ishga
        tushirdik va 95-97% aniqlik darajasiga erishdik. Hozirgi kunda Link Home
        va Link Auto platformalari birgalikda ishga tushirilgan va aniqlik
        darajasi 97% dan oshdi.
      </Typography>

      {/* Section: Areas of Application */}
      <Typography variant="h5" gutterBottom>
        Qo‘llanilish sohalari
      </Typography>
      <Box component="div" sx={{ mt: 2, pl:2 }}>
  <Typography variant="body1" sx={{ mb: 1 }}>
    1. Bank sohasida: Garov qiymatini tezkor aniqlash, aktivlarni samarali boshqarish, bankrotlik va sud ishlari, boshqa xizmatlar uchun risklarni boshqarish.
  </Typography>
  <Typography variant="body1" sx={{ mb: 1 }}>
    2. Sug‘urta sohasida: Ko‘chmas mulk va avtomobillarni sug‘urtalashda tezkor baholash jarayonlari.
  </Typography>
  <Typography variant="body1" sx={{ mb: 1 }}>
    3. Davlat sohasida: Ko‘chmas mulk solig‘ini hisoblash va shaharsozlikda qo‘llanilishi.
  </Typography>
  <Typography variant="body1" sx={{ mb: 1 }}>
    4. Investorlar uchun: Portfel investitsiyalarini baholash.
  </Typography>
  <Typography variant="body1" sx={{ mb: 1 }}>
    5. Ko‘chmas mulk bozori: Uy-joy oldi-sotdisi bilan shug‘ullanuvchi foydalanuvchilar va mijozlar uchun qiymatni tezkor hisoblash.
  </Typography>
</Box>


      {/* Section: Future Plans */}
      <Typography variant="h5" gutterBottom>
        Kelgusi rejalar
      </Typography>
      <Typography paragraph>
        Ayni paytda Link Home loyihasining dastlabki versiyasi – MVP – Toshkent
        shahri uchun xonadonlar (kvartiralar) uchun baholash imkoniyatini
        beradi. Keyingi bosqichda quyidagi qadamlar reja qilindi:
      </Typography>
      <Box component="div" sx={{ mt: 2, pl:2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          1. Bank sohasida: Garov qiymatini tezkor aniqlash, aktivlarni samarali
          boshqarish, bankrotlik va sud ishlari, boshqa xizmatlar uchun
          risklarni boshqarish.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          2. Sug‘urta sohasida: Ko‘chmas mulk va avtomobillarni sug‘urtalashda
          tezkor baholash jarayonlari.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          3. Davlat sohasida: Ko‘chmas mulk solig‘ini hisoblash va
          shaharsozlikda qo‘llanilishi.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          4. Investorlar uchun: Portfel investitsiyalarini baholash.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          5. Ko‘chmas mulk bozori: Uy-joy oldi-sotdisi bilan shug‘ullanuvchi
          foydalanuvchilar va mijozlar uchun qiymatni tezkor hisoblash.
        </Typography>
      </Box>

      {/* Section: Licensing */}
      <Typography variant="h5" gutterBottom>
        Litsenziya
      </Typography>
      <Typography paragraph>
        Hozirgi kunda Link Home platformasi chiqaradigan baholash natijalari
        faqat tavsiya sifatida qaralmoqda. Biroq, jamoamiz zaruriy sinov va
        sertifikatlashdan o‘tib, to‘liq litsenziyaga ega bo‘lishga tayyor va bu
        borada ish olib bormoqda.
      </Typography>
    </Box>
  );
}

export default InfoUZB;
