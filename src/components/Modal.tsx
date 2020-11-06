import React from 'react';

type PropsTypes = {}

const Modal : React.FC < PropsTypes > = ({}) => {

    return (
      <div>

<section className="map-modal">
    <div className="map-margin"></div>
    <div className="map-wrapper">

      <div className="map-filter">
        <div className="map-modal__close"><span className="close"><img src="img/arrow-left-grey.svg" alt="img"/>Показать
            списком</span></div>
        <h3 className="map-modal__title">Новостройки на карте <span className="city">Санкт-Петербурга</span></h3>
        <hr className="hr"/>

        <form action="" className="map-filter__form">

          <div className="map-filter__form-inner">
            <div className="map-filter-field">
              <span className="map-filter-field__name">Район:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='area' className="select map-filter__area map-filter__input"
                   placeholder="Район:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='area' value="1" /><span className="check"></span><span className="text">Район
                      1</span></label>
                  <label>
                    <input readOnly type="checkbox" name='area' value="2" /><span className="check"></span><span className="text">Район
                      2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='area' value="3" /><span className="check"></span><span className="text">Район
                      3</span></label>
                </div>
              </div>

            </div>


            <div className="map-filter-field">
              <span className="map-filter-field__name">Метро:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='metro' className="select map-filter__metro map-filter__input"
                   placeholder="Метро:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='metro' value="1" /><span className="check"></span><span className="text">Метро
                      1</span></label>
                  <label>
                    <input readOnly type="checkbox" name='metro' value="2" /><span className="check"></span><span className="text">Метро
                      2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='metro' value="3" /><span className="check"></span><span className="text">Метро
                      3</span></label>
                </div>
              </div>

            </div>

            <div className="map-filter-field">
              <span className="map-filter-field__name">Срок сдачи:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='deadline' className="select map-filter__deadline map-filter__input"
                   placeholder="Срок сдачи:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='deadline' value="2019" /><span className="check"></span><span
                      className="text">2019</span></label>
                  <label>
                    <input readOnly type="checkbox" name='deadline' value="2020" /><span className="check"></span><span
                      className="text">2020</span></label>
                  <label>
                    <input readOnly type="checkbox" name='deadline' value="2021" /><span className="check"></span><span
                      className="text">2021</span></label>
                  <label>
                    <input readOnly type="checkbox" name='deadline' value="2022" /><span className="check"></span><span
                      className="text">2022</span></label>
                </div>
              </div>
            </div>

            <div className="map-filter-field map-filter-field-cost">
              <span className="map-filter-field__name map-filter-field__name-cost">Стоимость:</span>
              <div className="map-filter-field-cost__wrap">
                <input readOnly type="text" className='map-filter__cost-from map-filter__input' name=" cost-from" id="cost-from"
                  placeholder="от"/>
                <input readOnly type=" text" className='map-filter__cost-to map-filter__input' name="cost-to" id="cost-to"
                  placeholder="до"/>
              </div>
            </div>

            <div className="map-filter-field">
              <span className="map-filter-field__name">Комплекс:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='complex' className="select map-filter__complex map-filter__input"
                   placeholder="Комплекс:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='complex' value="1" /><span className="check"></span><span className="text">ЖК
                      "Большое Мурино"</span></label>
                  <label>
                    <input readOnly type="checkbox" name='complex' value="2" /><span className="check"></span><span className="text">ЖК
                      "Среднее Мурино"</span></label>
                  <label>
                    <input readOnly type="checkbox" name='complex' value="3" /><span className="check"></span><span className="text">ЖК
                      "Старое Мурино"</span></label>
                  <label>
                    <input readOnly type="checkbox" name='complex' value="4" /><span className="check"></span><span className="text">ЖК
                      "Новое Мурино"</span></label>
                  <label>
                    <input readOnly type="checkbox" name='complex' value="5" /><span className="check"></span><span className="text">ЖК
                      "Сложное Мурино"</span></label>
                  <label>
                    <input readOnly type="checkbox" name='complex' value="6" /><span className="check"></span><span className="text">ЖК
                      "Простое Мурино"</span></label>
                </div>
              </div>
            </div>


            <div className="map-filter-field">
              <span className="map-filter-field__name">Застройщик:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='developer' className="select map-filter__developer map-filter__input"
                   placeholder="Застройщик:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='developer' value="1" /><span className="check"></span><span
                      className="text">ООО «Инвест-Строй»</span></label>
                  <label>
                    <input readOnly type="checkbox" name='developer' value="2" /><span className="check"></span><span
                      className="text">ООО «Инвест-Строй» 2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='developer' value="3" /><span className="check"></span><span
                      className="text">ООО «Инвест-Строй» 3</span></label>
                  <label>
                    <input readOnly type="checkbox" name='developer' value="4" /><span className="check"></span><span
                      className="text">ООО «Инвест-Строй» 4</span></label>
                </div>
              </div>
            </div>


            <div className="map-filter-field">
              <span className="map-filter-field__name">Тип квартиры:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='room' className="select map-filter__room map-filter__input"
                   placeholder="Тип квартиры:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='room' value="1" /><span className="check"></span><span className="text">1
                      ккв</span></label>
                  <label>
                    <input readOnly type="checkbox" name='room' value="2" /><span className="check"></span><span className="text">2
                      ккв</span></label>
                  <label>
                    <input readOnly type="checkbox" name='room' value="3" /><span className="check"></span><span className="text">3
                      ккв</span></label>
                  <label>
                    <input readOnly type="checkbox" name='room' value="4" /><span className="check"></span><span
                      className="text">Студия</span></label>
                </div>
              </div>
            </div>


            <div className="map-filter-field">
              <span className="map-filter-field__name">Тип собственности:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='type-property'
                  className="select map-filter__type-property map-filter__input" 
                  placeholder="Тип собственности:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='type-property' value="1" /><span className="check"></span><span
                      className="text">Тип собственности 1</span></label>
                  <label>
                    <input readOnly type="checkbox" name='type-property' value="2" /><span className="check"></span><span
                      className="text">Тип собственности 2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='type-property' value="3" /><span className="check"></span><span
                      className="text">Тип собственности 3</span></label>
                  <label>
                    <input readOnly type="checkbox" name='type-property' value="4" /><span className="check"></span><span
                      className="text">Тип собственности 4</span></label>
                </div>
              </div>
            </div>


            <div className="map-filter-field">
              <span className="map-filter-field__name">Отделка:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='type' className="select map-filter__type map-filter__input"
                   placeholder="Отделка:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='type' value="1" /><span className="check"></span><span className="text">С
                      отделкой</span></label>
                  <label>
                    <input readOnly type="checkbox" name='type' value="2" /><span className="check"></span><span className="text">Без
                      отделки</span></label>
                </div>
              </div>
            </div>

            <div className="map-filter-field map-filter-field-square">
              <span className="map-filter-field__name map-filter-field__name-square">Площадь:</span>
              <div className="map-filter-field-cost__wrap">
                <input readOnly type="text" className='map-filter__square-from map-filter__input' name=" square-from"
                  id="square-from" placeholder="от"/>
                <input readOnly type=" text" className='map-filter__square-to map-filter__input' name="square-to" id="square-to"
                  placeholder="до"/>
              </div>
            </div>

            <div className="map-filter-field">
              <span className="map-filter-field__name">Банк:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='bank' className="select map-filter__bank map-filter__input"
                   placeholder="Банк:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='bank' value="1" /><span className="check"></span><span className="text">Банк
                      1</span></label>
                  <label>
                    <input readOnly type="checkbox" name='bank' value="2" /><span className="check"></span><span className="text">Банк
                      2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='bank' value="3" /><span className="check"></span><span className="text">Банк
                      3</span></label>
                  <label>
                    <input readOnly type="checkbox" name='bank' value="4" /><span className="check"></span><span className="text">Банк
                      4</span></label>
                </div>
              </div>
            </div>

            <div className="map-filter-field">
              <span className="map-filter-field__name">Оплата:</span>
              <div className="map-filter-field__select-arrow">
                <svg viewBox="0 0 284.929 284.929">
                  <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                  L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                  c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                  c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
                </svg>
              </div>
              <div className="select-input">
                <input readOnly type="text" value="" name='payment' className="select map-filter__payment map-filter__input"
                   placeholder="Оплата:"/>
                <div className="checkboxes">
                  <label>
                    <input readOnly type="checkbox" name='payment' value="1" /><span className="check"></span><span
                      className="text">Оплата 1</span></label>
                  <label>
                    <input readOnly type="checkbox" name='payment' value="2" /><span className="check"></span><span
                      className="text">Оплата 2</span></label>
                  <label>
                    <input readOnly type="checkbox" name='payment' value="3" /><span className="check"></span><span
                      className="text">Оплата 3</span></label>
                  <label>
                    <input readOnly type="checkbox" name='payment' value="4" /><span className="check"></span><span
                      className="text">Оплата 4</span></label>
                </div>
              </div>
            </div>
          </div>

          <button type='button' className='map-filter__btn-show pink__btn'>Показать объекты</button>
          <button type="reset" className="map-filter__btn-reset pink__btn">Сбросить все фильтры <img
              src="img/modal-close-red.svg" alt=""/></button>

        </form>
      </div>
      <div className="map__complex-info complex-info">
        <div className="complex-info__close"><span className="close"><img src="img/arrow-left-grey.svg" alt="img"/><span
              className="go-to-filter">Назад к
              фильтру</span><span className="go-to-map">Назад к
              карте</span></span></div>
        <div className="map__complex-info-inner">
          <div className="catalog-complex__item">
            <div className="catalog-complex__item-header">
              <div className="catalog-complex__slider">
                <div className="catalog-complex__slide">
                  <img className='lazy' data-src="img/img-video-1.jpg" src="img/content-item-img.png" alt="img"/>
                  <div className="catalog-complex__slide-icons">
                    <img src="img/slide-heart.svg" alt="img"/>
                    <img src="img/slide-build.svg" alt="img"/>
                  </div>
                </div>
                <div className="catalog-complex__slide">
                  <img className='lazy' data-src="img/analog_1.jpg" src="img/content-item-img.png" alt=""/>
                  <div className="catalog-complex__slide-icons">
                    <img src="img/slide-heart.svg" alt="img"/>
                    <img src="img/slide-build.svg" alt="img"/>
                  </div>
                </div>
              </div>
              <div className="catalog-complex__slider-counter">1/3</div>
              <div className="catalog-complex__buttons-wrap catalog-complex__item-header-buttons">
                <button type='button' className="catalog-complex__btn-more pink__btn">Подробнее</button>
                <button type='button' className="catalog-complex__btn-show-map pink__btn"><img src="img/placeholder-red.svg"
                    alt=""/>На карте</button>
              </div>

              <ul className="complex-advantages__features-list">
                <li className="complex-advantages__features-item complex-advantages__features-item--sale">
                  <div className="complex-advantages__features-item-box">
                    <svg width="13" height="14">
                      <use xlinkHref="#icon-feature_sale"></use>
                    </svg>
                  </div>
                  <span className="complex-advantages__features-hint complex-advantages__features-hint--sale">Скидка
                    партнерам</span>
                </li>

                <li className="complex-advantages__features-item complex-advantages__features-item--deal">
                  <div className="complex-advantages__features-item-box">
                    <svg width="14" height="14">
                      <use xlinkHref="#icon-feature_deal"></use>
                    </svg>
                  </div>
                  <span
                    className="complex-advantages__features-hint complex-advantages__features-hint--deal">Безопасная&nbsp;сделка</span>
                </li>
                <li className="complex-advantages__features-item complex-advantages__features-item--gift">
                  <div className="complex-advantages__features-item-box">
                    <svg width="13" height="10">
                      <use xlinkHref="#icon-feature_gift"></use>
                    </svg>
                  </div>
                  <span
                    className="complex-advantages__features-hint complex-advantages__features-hint--gift">Приемка&nbsp;в&nbsp;подарок</span>
                </li>
                <li className="complex-advantages__features-item complex-advantages__features-item--decor">
                  <div className="complex-advantages__features-item-box">
                    <svg width="12" height="17">
                      <use xlinkHref="#icon-feature_decor"></use>
                    </svg>
                  </div>
                  <span
                    className="complex-advantages__features-hint complex-advantages__features-hint--decor">Сертификат&nbsp;на&nbsp;отделку</span>
                </li>
                <li className="complex-advantages__features-item complex-advantages__features-item--conditions">
                  <div className="complex-advantages__features-item-box">
                    <svg width="18" height="13">
                      <use xlinkHref="#icon-bus"></use>
                    </svg>
                  </div>
                  <span
                    className="complex-advantages__features-hint complex-advantages__features-hint--gift">Специальные&nbsp;условия
                    для&nbsp;иногородних</span>
                </li>
              </ul>
            </div>
            <div className="catalog-complex__item-content">
              <div className="inner">
                <div className="complex">ЖК "Новое Мурино"</div>
                <div className="developer"><span className="text">ООО «Инвест-Строй»</span><img src="img/developer_logo.svg"
                    alt=""/></div>
              </div>
              <div className="catalog-complex__cost-block"><span className="cost-block__cost-from">2.4</span>-<span
                  className="cost-block__cost-to">7</span> млн. руб.</div>
              <div className="catalog-container-wrap">
                <div className="square-metr">78,6 тыс. - 107,2 тыс. руб/м2</div>
                <button type="button" className="btn-phone"><img className="img-phone" src="img/icon-phone.svg" alt=""/><span
                    className="text">+7 Показать телефон</span></button>
              </div>

              <div className="address">Всеволжский р-н, п. Мурино</div>
              <div className="metro"><img src="img/metro-el.svg" alt=""/><span className="metro__name">Девяткино</span><span
                  className="metro__distance">15 мин пешком</span></div>

              <div className="catalog-complex-info-wrap">
                <div className="flat-type studio">
                  <div className="flat-type__left-box">
                    Студия от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                      м<sup>2</sup></span>
                  </div>
                  <div className="flat-type__right-box">
                    <span className="flat-type__cost-from">2.4</span>
                    -<span className="flat-type__cost-to">2.8</span> млн. руб.
                  </div>
                </div>
                <div className="flat-type room">
                  <div className="flat-type__left-box">
                    1-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                      м<sup>2</sup></span>
                  </div>
                  <div className="flat-type__right-box">
                    <span className="flat-type__cost-from">2.4</span>
                    -<span className="flat-type__cost-to">2.8</span> млн. руб.
                  </div>
                </div>
                <div className="flat-type room">
                  <div className="flat-type__left-box">
                    2-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                      м<sup>2</sup></span>
                  </div>
                  <div className="flat-type__right-box">
                    <span className="flat-type__cost-from">2.4</span>
                    -<span className="flat-type__cost-to">2.8</span> млн. руб.
                  </div>
                </div>
                <div className="flat-type room">
                  <div className="flat-type__left-box">
                    3-комнатная кв. от <span className="flat-type__square"><span className="flat-type__square-value">26.5</span>
                      м<sup>2</sup></span>
                  </div>
                  <div className="flat-type__right-box">
                    <span className="flat-type__cost-from">2.4</span>
                    -<span className="flat-type__cost-to">2.8</span> млн. руб.
                  </div>
                </div>
              </div>
              <div className="catalog-complex__description">
                <p className="description">Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО
                  "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый
                  Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает
                  разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м
                  -
                  и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда
                  делся
                  старый - расскажем далее подробно. </p>
                <p className="description">Неподалёку от Санкт-Петербурга, в городе Кудрово Всеволожского района, ООО
                  "Отделстрой" возводит довольно масштабный жилой комплекс с загадочным и красивым названием "Новый
                  Оккервиль". Удачно расположившись на 50 га живописного берега одноимённой реки, комплекс привлекает
                  разнообразием планировок (да ещё каким, более 200 вариантов квартир) и близостью (ближе некуда, 300 м
                  -
                  и Питер) к Северной столице. Что ещё интересного будет в "Новом Оккервиле", что - не очень, и куда
                  делся
                  старый - расскажем далее подробно. </p>
              </div>

              <button type="button" className="btn-phone"><img className="img-phone" src="img/icon-phone.svg" alt=""/><span
                  className="text">+7 Показать телефон</span></button>

            </div>
          </div>
        </div>
      </div>
      <div id="map"></div>
      <div className="map-footer">
        <button type='button' className="map-footer__btn-open-filter"><img src="img/icon-filter.svg" alt=""/><span
            className="close">&#10006;</span>Фильтр
          </button>
          <button type='button' className="map-footer__btn-open-list"><img src="img/filter-list.svg" alt=""/>Списком</button>
      </div>
    </div>
  </section>

        
        <section className="mortgage mortgage__modal modal modal--closed">
        <div className="mortgage__wrapper modal__wrapper">
          <header className="modal__header">
            <button type='button' className="modal__header-btn-close">&#10006;</button>
            <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
            <div className="modal__estate">
              <div className="mortgage__title-img">
                <picture>
                  <source type="image/webp" srcSet="img/devSlider-img1.webp"/>
    
                  <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220"/>
                </picture>
                <div className="mortgage__title-wrapper">
                  <h2 className="modal__title">ЖК «Северные высоты»</h2>
                </div>
    
              </div>
    
              <div className="modal__description-box">
                <address className="modal__address">
                  <p className="modal__address-metro">Беговая, 21 мин. пешком</p>
                  <p className="modal__address-street">Приморский район, Мебельная улица, 19к2</p>
                </address>
                <div className="modal__info">
                  <p className="modal__info-name">ООО «Инвест-Строй»</p>
                  <span className="modal__info-divider"></span>
                  <p className="modal__info-type">Под ключ</p>
                  <a href="tel:8(800)1234556" className="modal__info-phone"><b>8 (800) 123 45 56</b></a>
                </div>
              </div>
            </div>
          </header>
    
          <div className="modal__title-box">
            <h3 className="modal__title">Подать заявки во все банки</h3>
            <button type='button' className="modal__close-btn"><img src="img/modal-close.svg" alt=""/></button>
          </div>
    
          <div className="modal__content mortgage">
            <form action="#" method="#" className="mortgage__form">
              <div className="mortgage__income">
                <label htmlFor="mortgage-income" className="mortgage__label">Месячный доход семьи</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__income-input" type="text" name="mortgage-income" id="mortgage-income"
                      placeholder="50 000" value="50000"/>
                    <input readOnly type="range" id='mortgage__income-range' className="mortgage__range" min="35000" max="100000"
                      value="50000" step="1000"/>
                  </div>
                  <span className="mortgage-field__val mortgage-income__rub">руб.</span>
                  <div className="mortgage-field-pins pins">
                    <div className="pins__item">35 000</div>
                    <div className="pins__item">50 000</div>
                    <div className="pins__item">65 000</div>
                    <div className="pins__item">80 000</div>
                    <div className="pins__item">100 000</div>
                  </div>
                </div>
    
              </div>
              <div className="mortgage__work">
                <label htmlFor="mortgage-work" className="mortgage__label">Общий трудовой стаж</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__work-input " type="text" name="mortgage-work" id="mortgage-work" placeholder="2"
                      value="2"/>
                    <input readOnly type="range" id='mortgage__work-range' className="mortgage__range" min="1" max="15" value="2"/>
                  </div>
                  <span className="mortgage-field__val mortgage-work__year">год</span>
                  <div className="mortgage-field-pins pins">
                    <div className="pins__item">1</div>
                    <div className="pins__item">3</div>
                    <div className="pins__item">5</div>
                    <div className="pins__item">7</div>
                    <div className="pins__item">9</div>
                    <div className="pins__item">11</div>
                    <div className="pins__item">13</div>
                    <div className="pins__item">15</div>
                  </div>
                </div>
    
              </div>
              <div className="mortgage__payment">
                <label htmlFor="mortgage-payment" className="mortgage__label">Первоначальный взнос</label>
                <div className="mortgage-field-wrapper">
                  <div className="mortgage-field">
                    <input readOnly className="mortgage__payment-input" type="text" name="mortgage-payment" id="mortgage-payment"
                      placeholder="500 000" value="500000"/>
                  </div>
                  <span className="mortgage-field__val mortgage-payment__rub">руб.</span>
                </div>
              </div>
    
              <div className="mortgage__capital">
                <p className="mortgage__capital-text">Наличие материнского капитала и субсидий</p>
                <div className="mortgage__capital-inner">
                  <input readOnly type="checkbox" id="mortgage-capital"></input>
                  <label htmlFor="mortgage-capital">Да</label>
                </div>
              </div>
              <div className="mortgage-footer">
                <div className="mortgage-chance-wrapper">
                  <div className="mortgage__chance">
                    <p className="mortgage__expectancy">Вероятность одобрения:</p>
                    <span className="mortgage__expectancy-value"><span className="mortgage__expectancy-value-wrap">65</span><span
                        className="mortgage__expectancy-percent">%</span></span>
                  </div>
    
                  <div className="mortgage__info">
                    <input readOnly type="text" required placeholder="Ваше имя"></input>
                    <input readOnly type="text" required placeholder="Ваш номер телефона"></input>
                  </div>
                </div>
    
                <div className="mortgage__info-box">
                  <b className="mortgage__security">Мы не передаем Ваши данные третьим лицам</b>
                  <small className="mortgage__form-invalid">Вы не заполнили поля «имя», «телефон»</small>
                </div>
              </div>
    
            </form>
          </div>
    
          <button type="submit" className="modal__btn pink__btn">Отправить</button>
    
        </div>
      </section>
    
      <section className="excursion excursion__modal modal modal--closed">
      
      <div className="excursion__wrapper modal__wrapper">
        <header className="modal__header">
          <button type='button' className="modal__header-btn-close">&#10006;</button>
          <a href="index.html"><img className="modal__logo" src="img/logo.svg" width="80" height="46" alt="Логотип"/></a>
          <div className="modal__estate">
            <div className="modal-header__title-img">
              <picture>
                <source type="image/webp" srcSet="img/devSlider-img1.webp"/>
  
                <img className="modal__img" src="img/devSlider-img1.jpg" alt="фотография ЖК" width="320" height="220"/>
              </picture>
              <div className="modal-header__title-wrapper">
                <h2 className="modal__title">ЖК «Северные высоты»</h2>
              </div>
            </div>
  
            <div className="modal__description-box">
              <address className="modal__address">
                <p className="modal__address-metro">Беговая, 21 мин. пешком</p>
                <p className="modal__address-street">Приморский район, Мебельная улица, 19к2</p>
              </address>
              <div className="modal__info">
                <p className="modal__info-name">ООО «Инвест-Строй»</p>
                <span className="modal__info-divider"></span>
                <p className="modal__info-type">Под ключ</p>
                <a href="tel:8(800)1234556" className="modal__info-phone"><b>8 (800) 123 45 56</b></a>
              </div>
            </div>
          </div>
        </header>
  
        <div className="modal__title-box">
          <h3 className="modal__title">Записаться на экскурсию</h3>
          <button type="button" className="modal-close-btn">
            <img className='modal__close-img' src="img/modal-close.svg" alt="закрыть"/>
          </button>
        </div>
  
        <p className="modal__text">Выберите удобную дату и время</p>
  
        <div className="modal__content">
          <div className="modal__content-left ">
            <div id="hasDatepicker">
            </div>
  
            <div className="excursion-field">
              <div className="excursion__select-arrow">
                <img src="img/arrow__down-input.svg"/>
              </div>
                  <select defaultValue="13" onChange={()=>console.log("select")} className='excursion__select-time' name="" id="excursion__select-time">
                <option value="9">9:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
              </select>
            </div>
          </div>
          <div className="modal__content-right">
            <form method="#" action="#" className="consultation__form">
              <div className="consultation__form-fields">
                <input readOnly className="excursion__form-input" type="text" placeholder="Ваше имя"/>
                <input readOnly className="excursion__form-input" type="text" placeholder="Ваш номер телефона"/>
              </div>
              <div className="date-info">
                <span className="date">19.09</span>
                <span className="time">13:00</span>
              </div>
  
              <input readOnly type="submit" className="modal__btn pink__btn" value="Записаться"/>
            </form>
  
          </div>
        </div>
      </div>
  
      
        </section>
    </div>
  )
}

export default Modal;