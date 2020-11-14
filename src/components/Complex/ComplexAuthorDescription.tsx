import React from 'react';

type PropsTypes = {
  
}

const ComplexAuthorDescription : React.FC < PropsTypes > = ({}) => {

  return (
    <section className="blog" id="blog">
    <div className="blog__wrapper">
      <h2 className="blog__title">Авторское описание ЖК</h2>
      <div className="blog__header">
        {/* <picture>
          <source type="image/webp" srcset="img/author_photo.webp">

          <img className="blog__avatar" src="img/author_photo.jpg" alt="Аватар" width="80" height="80">
        </picture> */}
        <div className="blog__box">
          <b className="blog__author">Александр Иванов</b>
          <small className="blog__author-description">автор сайта....</small>
        </div>
        <p className="blog__description">
          Если вы жить не можете без Красной площади и ГУМа,
          но собственная квартира в центре Москвы вам пока не
          по карману, выход есть – берите квартиру в Подмосковье.
          Жильё там чем дальше от МКАД, тем дешевле, поэтому в целях
          экономии можете забраться куда-нибудь вообще далеко.
          Например, на расстояние 25 километров к северо-востоку от Кольцевой,
          в ЖК “Лукино-Варино” от компании “СУ-22”. Тогда вы будете жить практически
          в собственном городе, но ещё и сможете регулярно ездить в столицу – ну чем не сказка?
        </p>
      </div>
      {/* <picture>
        <source type="image/webp" srcset="img/photo_1.webp">

        <img className="blog__image" src="img/photo_1.jpg" alt="фото ЖК" width="320" height="180">
      </picture> */}

      <p className="blog__description">
        Но с чем-с чем, а вот уж с местом в “Лукино-Варино” никаких проблем точно нет!
        Наверное, первое, на что обращаешь внимание, когда здесь оказываешься, это просторы дворовых пространств.
        Благодаря им в большом ЖК, целом микрорайоне с большими же домами, совершенно не чувствуешь себя, как в
        каком-нибудь “муравейнике”.
        Внешний вид зданий комплекса тоже следует скорее похвалить, чем поругать.
        Да, есть среди них самые обычные корпуса с клинкерным кирпичом разных оттенков коричневого в облицовке,
        но есть и более интересные и яркие здания, в которых какой-то цвет (синий, зелёный, оранжевый) словно
        осыпается сверху.
        Разве что архитектуру отметить, в общем, не за что. Но это явно застройщик намеренно решил сделать её не
        вычурной,
        а простой, чтобы она никак не отразилась на планировках.
      </p>
      <b className="blog__note">30 гектар, 52 здания и СУ-22</b>
      <p className="blog__description">
        “Лукино-Варино” – жилой комплекс сказочно большого масштаба,
        в сказочном лесном окружении и даже с почти сказочным названием (есть в нём что-то от молочных рек и кисельных
        берегов).
        Понятно, что современный рынок недвижимости – место серьёзное, но когда оказываешься здесь, да ещё и видишь,
        какие низкие здесь цены на квартиры,
        сразу чувствуешь себя ребёнком, попавшим в любимую сказку.
        И из этой сказки совершенно не хочется выбираться.
      </p>
      {/* <picture>
        <source type="image/webp" srcset="img/photo_2.webp">

        <img className="blog__image" src="img/photo_2.jpg" alt="фото ЖК" width="320" height="180">
      </picture> */}

      <p className="blog__description hidden">
        Но с чем-с чем, а вот уж с местом в “Лукино-Варино” никаких проблем точно нет!
        Наверное, первое, на что обращаешь внимание, когда здесь оказываешься, это просторы дворовых пространств.
        Благодаря им в большом ЖК, целом микрорайоне с большими же домами, совершенно не чувствуешь себя, как в
        каком-нибудь “муравейнике”.
        Внешний вид зданий комплекса тоже следует скорее похвалить, чем поругать.
        Да, есть среди них самые обычные корпуса с клинкерным кирпичом разных оттенков коричневого в облицовке,
        но есть и более интересные и яркие здания, в которых какой-то цвет (синий, зелёный, оранжевый) словно
        осыпается сверху.
        Разве что архитектуру отметить, в общем, не за что. Но это явно застройщик намеренно решил сделать её не
        вычурной,
        а простой, чтобы она никак не отразилась на планировках.
      </p>
      <b className="blog__note hidden">30 гектар, 52 здания и СУ-22</b>
      <p className="blog__description hidden">
        “Лукино-Варино” – жилой комплекс сказочно большого масштаба,
        в сказочном лесном окружении и даже с почти сказочным названием (есть в нём что-то от молочных рек и кисельных
        берегов).
        Понятно, что современный рынок недвижимости – место серьёзное, но когда оказываешься здесь, да ещё и видишь,
        какие низкие здесь цены на квартиры,
        сразу чувствуешь себя ребёнком, попавшим в любимую сказку.
        И из этой сказки совершенно не хочется выбираться.
      </p>
      <button type="button" className="blog__show-btn show__btn">Читать полностью</button>
    </div>
  </section>
  
    )
}

export default React.memo(ComplexAuthorDescription);

   