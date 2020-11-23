import {ReactComponent as SvgFeatureSale} from '../assets/img/icon-feature_sale.svg';
import {ReactComponent as SvgFeatureDeal} from '../assets/img/icon-feature_deal.svg';
import {ReactComponent as SvgFeatureGift} from '../assets/img/icon-feature_gift.svg';
import {ReactComponent as SvgFeatureDecor} from '../assets/img/icon-feature_decor.svg';
import { ReactComponent as SvgFeatureBus } from '../assets/img/icon-bus.svg';

// const urlDataServ = "http://localhost:3004"
export const urlDataServ = "https://json-server-egor.herokuapp.com"


// Данные для фильтров
export const area = ["Район 1", "Район 2", "Район 3", "Район 4"]
export const metroMOS = ['Лихоборы', 'Котельники', 'Рассказовка', 'Ростокино', 'Измайловская', 'Сокольники']
export const metroSP = ['Автово', 'Комендантский пр.', 'Василеостровская', 'Беговая', 'Озерки', 'Звенигородская']
export const deadline = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028]

export const name = ['ЖК "Новое мурино"', 'ЖК "Старое мурино"', 'ЖК "Mandy"', 'ЖК "Kelli"', 'ЖК "Столичный"', 'ЖК "Северные высоты"']
export const developer = ['ООО «Инвест Строй»', 'ООО «Сбер Строй»', 'ООО «AnarcoBuild»', 'ООО «SenmeiBuild»', 'ООО «Lovepad»']
export const rooms = ["1-комнатная кв.", "2-комнатная кв.", "3-комнатная кв.", "Студия"]
export const propertiesTypes = ['Личный', 'Коллективный', 'Смешанный']
export const finish = ['Чистовая', 'Черновая', 'Готовая', 'Без отделки']

export const bank = ['АльфаБанк', 'Сбербанк', 'Тинькофф']
export const payment = ["Оплата 1", "Оплата 2", "Оплата 3", "Оплата 4"]

// Данные для сортировки
export const sortNames = [{ name: "recomend", title: "Рекомендуемые" }, { name: "cost", title: "По цене" }, { name: "costSquare", title: "По цене за м2" }, { name: "deadline", title: "По сроку сдачи" }];

// advantages

export const advantages = [
  {
    name: "sale",
    icon: SvgFeatureSale,
    desc: "Скидка партнерам",
    className:"sale",
    classNameHint:"sale"
  },
  {
    name: "safe",
    icon: SvgFeatureDeal,
    desc: "Безопасная сделка",
    className: "deal",
    classNameHint: "deal"
  },
  {
    name: "gift",
    icon: SvgFeatureGift,
    desc: "Приемка в подарок",
    className: "gift",
    classNameHint: "gift"
  },
  {
    name: "decor",
    icon: SvgFeatureDecor,
    desc: "Сертификат на отделку",
    className: "decor",
    classNameHint: "decor"
  },
  {
    name: "conditions",
    icon: SvgFeatureBus,
    desc: "Специальные условия для иногородних",
    className: "conditions",
    classNameHint: "conditions"
  },
];