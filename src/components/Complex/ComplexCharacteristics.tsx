import React from 'react';

type PropsTypes = {
  
}

const ComplexCharacteristics : React.FC < PropsTypes > = ({}) => {

  
  return (
    <section className="description" id="description">
    <div className="description__wrapper">
      <h2 className="description__title">Характеристики комплекса</h2>
      <b className="description__text">Весь комплекс<span className="description__text--deadline">Корпус 1 - 3 кв. 2020
          г.</span></b>
      <div className="description__table-wrapper">

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-house">Дом</th>
          </tr>
          <tr>
            <td className="table__data">Класс Жилья</td>
            <td className="table__conclusion">Эконом</td>
          </tr>
          <tr>
            <td className="table__data">Этажность:</td>
            <td className="table__conclusion">1-21</td>
          </tr>
          <tr>
            <td className="table__data">Технология строительства:</td>
            <td className="table__conclusion">Кирпично-монолитный</td>
          </tr>
          <tr>
            <td className="table__data">Облицовка фасада:</td>
            <td className="table__conclusion">Фасад оштукатурен</td>
          </tr>
          <tr>
            <td className="table__data">Кладовые:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Колясочные:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Лифты:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Тип договора:</td>
            <td className="table__conclusion">ДКП</td>
          </tr>
        </table>

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-flat">Квартиры</th>
          </tr>
          <tr>
            <td className="table__data">Отделка:</td>
            <td className="table__conclusion">Предчистовая</td>
          </tr>
          <tr>
            <td className="table__data">Количество квартир:</td>
            <td className="table__conclusion">191</td>
          </tr>
          <tr>
            <td className="table__data">Жилая площадь, кв. м:</td>
            <td className="table__conclusion">12 827</td>
          </tr>
          <tr>
            <td className="table__data">Планируемое число жителей:</td>
            <td className="table__conclusion">279</td>
          </tr>
          <tr>
            <td className="table__data">Высота потолков, м:</td>
            <td className="table__conclusion">3</td>
          </tr>
          <tr>
            <td className="table__data">Квартира с мебелью:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Элементы системы «Умный дом»:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Остекление окон:</td>
            <td className="table__conclusion">Окна ПВХ с двухкамерным стеклопакетом</td>
          </tr>
        </table>

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-territory">На территории ЖК</th>
          </tr>
          <tr>
            <td className="table__data">Детский сад во дворе:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Школа во дворе:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Другие объекты для детей:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Детская площадка:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Торговля и сервис:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Медицинские учреждения:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
          <tr>
            <td className="table__data">Благоустроенное место для прогулок:</td>
            <td className="table__conclusion">Нет</td>
          </tr>
        </table>

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-driver">Для автовладельцев</th>
          </tr>
          <tr>
            <td className="table__data">Количество машиномест:</td>
            <td className="table__conclusion">135</td>
          </tr>
          <tr>
            <td className="table__data">В том числе платных:</td>
            <td className="table__conclusion">135</td>
          </tr>
          <tr>
            <td className="table__data">Стоимость м/м, руб.:</td>
            <td className="table__conclusion">2 000 000</td>
          </tr>
          <tr>
            <td className="table__data">Тип платной парковки:</td>
            <td className="table__conclusion">Подземный</td>
          </tr>
          <tr>
            <td className="table__data">Продумано движение во дворе:</td>
            <td className="table__conclusion">Да</td>
          </tr>
        </table>

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-infrastructure">Инфраструктура в пешей доступности</th>
          </tr>
          <tr>
            <td className="table__data">Школа:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Детский сад:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Поликлиника:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Аптека:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Супермаркет:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Фитнес-центр:</td>
            <td className="table__conclusion">Да</td>
          </tr>
        </table>

        <table className="description__table table table--nojs">
          <tr>
            <th className="table__title table-safety">Безопасность</th>
          </tr>
          <tr>
            <td className="table__data">Закрытый двор: </td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Охрана территории:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Двор без машин:</td>
            <td className="table__conclusion">Да</td>
          </tr>
          <tr>
            <td className="table__data">Видеонаблюдение:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
          <tr>
            <td className="table__data">Помещение для консьержа/диспетчерской:</td>
            <td className="table__conclusion">Есть</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

    )
}

export default React.memo(ComplexCharacteristics);

   