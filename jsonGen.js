[
  '{{repeat(25)}}',
  {
    "id": '{{index()}}',
    "region": function (tags) {
      var values = ['MOS', 'SP'];
      return values[tags.integer(0, values.length - 1)];
    },
    "tel": "+7 {{phone()}}",
    "name": function (tags) {
      var values = ['Новое мурино', 'Старое мурино', 'Mandy', "Kelli", "Столичный", "Северные высоты"];
      return 'ЖК "' + values[tags.integer(0, values.length - 1)] + '"';
    },
    "developer": function (tags) {
      var values = ['ООО «Инвест Строй»', 'ООО «Сбер Строй»', 'ООО «AnarcoBuild»', 'ООО «SenmeiBuild»', 'ООО «Lovepad»'];
      return values[tags.integer(0, values.length - 1)];
    },
    "description": '{{lorem(1, "paragraphs")}}',
    "metro": function (tags) {
      var values = ['Лихоборы', 'Котельники', 'Рассказовка', 'Ростокино', 'Измайловская', 'Сокольники'];
      return values[tags.integer(0, values.length - 1)];
    },
    "deadline": [
      '{{repeat(5,7)}}',
      {
        "corpus": "{{integer(1, 4)}}",
        "year": "{{integer(2021, 2029)}}"
      }
    ],
    
    "metroDistance": '{{integer(5, 32)}}',
    "area": "Район {{integer(1, 4)}}",
    "coords": ['{{floating(59.96366228831886, 59.96366228831899)}}', '{{floating(30.33065350936121, 30.33065350936150)}}'],
    "address": "Большой проспект Васильевского острова '{{index()}}'",
    "images": ["/img/complexesImages/img-{{integer(1, 8)}}.jpg", "/img/complexesImages/img-{{integer(1, 8)}}.jpg", "/img/complexesImages/img-{{integer(1, 8)}}.jpg"],
    "totalFloor": '{{integer(9, 17)}}',
    
    "bank": function (tags) {
      var values = ['АльфаБанк', 'Сбербанк', 'Тинькофф'];
      return values[tags.integer(0, values.length - 1)];
    },
    "finish": function (tags) {
      var values = ['Чистовая', 'Черновая', 'Готовая', 'Без отделки'];
      return values[tags.integer(0, values.length - 1)];
    },

    "propertiesTypes": function (tags) {
      var values = ['Личный', 'Коллективный', 'Смешанный'];
      return values[tags.integer(0, values.length - 1)];
    },
    "payment": 'Оплата {{integer(1, 4)}}',
    "recomend": '{{integer(1, 10)}}'
  }
]