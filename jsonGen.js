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
    "advantages": function (tags) {
      
      var values = [["sale", "safe", "gift", "decor", "conditions"],["sale", "safe", "gift", "decor"],["sale", "safe", "gift"],["sale", "safe"],["sale", "conditions"],["sale", "decor", "conditions"],["safe", "decor", "conditions"]];
     
      return values[tags.integer(0, values.length - 1)];
    },
    "description": '{{lorem(1, "paragraphs")}}',
    "metro": function (tags) {
      var values = ['Лихоборы', 'Котельники', 'Рассказовка', 'Ростокино', 'Измайловская', 'Сокольники'];
      if(this.region == "SP"){
        values = ['Автово', 'Комендантский пр.', 'Василеостровская', 'Беговая', 'Озерки', 'Звенигородская'];
      }
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
    "coords": function (tags) {
      
      if(this.region == "SP"){
        return [tags.floating(59.78366228831886, 59.98366228831899), tags.floating(30.13065350936121, 30.53065350936150)];
      }
     return [tags.floating(55.52420858806455, 55.89920858806455), tags.floating(37.45571648313102, 37.90571648313102)];
   
  },
    
    "address": function (tags) {
      var value = "Землянной вал";
      if(this.region == "SP"){
        value = "Большой проспект Васильевского острова";
      };
      
      return value + " " +this.id;
    },
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


