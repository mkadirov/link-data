import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const InfoRUS = () => {
  return (
    <Box  sx={{ mt: 4 }}>
      {/* Main Introduction */}
      
      <Typography variant="body1" paragraph>
        Link Home — это инновационная онлайн-платформа для автоматической оценки недвижимости, автомобилей и других активов. Мы работаем над проектом уже два года, и наша цель — сделать процесс оценки активов более быстрым, прозрачным и доступным для всех. Платформа основана на технологиях искусственного интеллекта, что позволяет нам быстро и точно оценивать активы, устраняя субъективные и временные трудности, присущие традиционным методам оценки.
      </Typography>

      {/* Section: Текущие проблемы в процессе оценки */}
      <Typography variant="h5" gutterBottom>
        Текущие проблемы в процессе оценки
      </Typography>
      <Box sx={{ pl: 2, mb: 3 }}>
        <Typography variant="body1" paragraph>
          На сегодняшний день оценка активов сталкивается с рядом проблем:
        </Typography>
        <Typography variant="body1" paragraph>
          • Затраты времени: Оценка может занимать несколько часов или даже дней.
        </Typography>
        <Typography variant="body1" paragraph>
          • Субъективность: Оценка часто зависит от мнения оценщика и может быть непостоянной.
        </Typography>
        <Typography variant="body1" paragraph>
          • Высокая стоимость: Традиционная оценка требует тщательной работы и потому остаётся относительной дорогой услугой.
        </Typography>
        <Typography variant="body1" paragraph>
          Link Home решает эти проблемы, предлагая автоматизированную систему, которая ускоряет процесс оценки и снижает затраты.
        </Typography>
      </Box>

      {/* Section: Значение цифровой трансформации */}
      <Typography variant="h5" gutterBottom>
        Значение цифровой трансформации
      </Typography>
      <Typography variant="body1" paragraph>
        Цифровизация финансовых услуг, в частности, страхования, ипотеки, выделения автокредитов и ряда других процессов, остается сегодня важным вопросом. С каждым днем в организациях увеличивается количество информации, растет спрос и потребность в автоматизации процессов, и поэтому такие инновации в ближайшее время послужат основой для предложения конкурентоспособных услуг на рынке.
      </Typography>

      {/* Section: Как работает платформа? */}
      <Typography variant="h5" gutterBottom>
        Как работает платформа?
      </Typography>
      <Typography variant="body1" paragraph>
        Пользователям платформы Link Home нужно лишь ввести данные о недвижимости или автомобиле, и система автоматически рассчитает их рыночную стоимость в течение нескольких секунд. Мы использовали данные за последние два года, которые включают более двух миллионов наблюдений за рынком, для создания надежной модели машинного обучения.
      </Typography>
      <Typography variant="body1" paragraph>
        В июле 2023 года мы запустили платформу Link Auto в тестовом режиме с точностью 95-97%. На сегодня Link Home запущен с точностью выше 97%.
      </Typography>

      {/* Section: Области применения */}
      <Typography variant="h5" gutterBottom>
        Области применения
      </Typography>
      <Box sx={{ pl: 2, mb: 3 }}>
        <Typography variant="body1" paragraph>
          Наша платформа может быть использована в различных сферах, включая:
        </Typography>
        <Typography variant="body1" paragraph>
          1. Банковская сфера: Быстрая оценка залогов, эффективное управление активами, банкротство и судебные дела, подготовка аналитических отчетов, оценка рисков.
        </Typography>
        <Typography variant="body1" paragraph>
          2. Страхование: Быстрая оценка недвижимости и автомобилей для страховых случаев.
        </Typography>
        <Typography variant="body1" paragraph>
          3. Государственное управление: Расчет налогов на недвижимость, городское планирование.
        </Typography>
        <Typography variant="body1" paragraph>
          4. Инвестиции: Оценка портфельных инвестиций и анализ инвестиционных проектов.
        </Typography>
        <Typography variant="body1" paragraph>
          5. Рынок недвижимости: Предоставление пользователям точных данных о ценах на недвижимость и автомобили.
        </Typography>
      </Box>

      {/* Section: Будущие планы */}
      <Typography variant="h5" gutterBottom>
        Будущие планы
      </Typography>
      <Typography variant="body1" paragraph>
        Первоначально мы запускаем MVP для оценки квартир в Ташкенте. В дальнейшем мы планируем:
      </Typography>
      <Box sx={{ pl: 2, mb: 3 }}>
        <Typography variant="body1" paragraph>
          • Добавить другие типы недвижимости, включая коммерческую недвижимость и частные дома.
        </Typography>
        <Typography variant="body1" paragraph>
          • Расширить платформу на другие регионы Узбекистана.
        </Typography>
        <Typography variant="body1" paragraph>
          • Ввести функции прогнозирования цен.
        </Typography>
        <Typography variant="body1" paragraph>
          • Выйти на рынки Центральной Азии.
        </Typography>
      </Box>

      {/* Section: Лицензирование */}
      <Typography variant="h5" gutterBottom>
        Лицензирование
      </Typography>
      <Typography variant="body1" paragraph>
        На данный момент результаты оценки, предоставляемые платформой Link Home, носят рекомендательный характер. Однако наша команда готова пройти все необходимые процедуры для получения лицензии, чтобы наши отчеты имели юридическую силу.
      </Typography>
    </Box>
  );
};

export default InfoRUS;
