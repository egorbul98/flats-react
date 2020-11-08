[
  '{{repeat(50)}}',
  {
    "id": '{{index()}}',
      "square": "{{integer(16, 120)}}",
      "complexId": "{{integer(0, 8)}}",
      "cost": "{{integer(3000000, 30000000)}}",
      "finish": function (tags) {
        var values = ['Чистовая', 'Черновая', 'Готовая', 'Без отделки'];
        return values[tags.integer(0, values.length - 1)];
      },
      "floor": "{{integer(1, 15)}}",
      "num": "{{integer(1, 150)}}",
      "room": function (tags) {
        var values = ["1-комнатная кв.", "2-комнатная кв.", "3-комнатная кв.", "Студия"];
        return values[tags.integer(0, values.length - 1)];
      },
      "img": "img/analog_1.jpg",
      "corpus": "{{integer(1, 4)}}"
      

  }
]
    
    