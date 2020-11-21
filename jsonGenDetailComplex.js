[
  '{{repeat(25)}}',
  {
    complexId: '{{index()}}',
    rating: {
      child: '{{floating(4.7, 10.0)}}',
      infr: '{{floating(4.7, 10.0)}}',
      area: '{{floating(4.7, 10.0)}}',
      safe: '{{floating(4.7, 10.0)}}',
      transport: '{{floating(4.7, 10.0)}}',
      house: '{{floating(4.7, 10.0)}}'
    },
    authorDesc: {
      author: '{{firstName()}} {{surname()}}',
      smallDesc: '{{lorem(1, "paragraphs")}}',
      desc: [{
          tag: "header",
        value: '{{lorem(6, "words")}}'
        },{
          tag: "p",
          value: '{{lorem(3, "paragraphs")}}'
        },{
          tag: "header",
          value: '{{lorem(6, "words")}}'
        },{
          tag: "img",
          value: "/img/complexesImages/img-" + '{{integer(1, 8)}}' + ".jpg"
        },{
          tag: "header",
          value: '{{lorem(6, "words")}}'
        },{
          tag: "p",
          value: '{{lorem(2, "paragraphs")}}'
        }
      ],
    },
    documents:[
      '{{repeat(3,5)}}',
      {
        name:"Документ #" + '{{index()}}',
        weight: '{{integer(80, 132)}}' + "Кб",
        src: "/documents/doc.pdf"
      }
    ],
    videos:[
      '{{repeat(3,5)}}',
      {
        videoSrc:function (tags) {
          var values = ["2g811Eo7K8U", "evSn0cGIxfs", "l6pDOwNeTrg", "WVMI0q331Uc"];
          return values[tags.integer(0, values.length - 1)];
        },
        imgSrc: "/img/complexesImages/img-{{integer(1, 8)}}.jpg"
      }
    ],
    complexLike: [
      '{{repeat(3,5)}}',
      {
        id: "{{integer(1, 25)}}",
        name: '{{firstName()}}',
        address: 'Приморский район, Мебельная улица, 19к2',
        imgSrc: "/img/complexesImages/img-{{integer(1, 8)}}.jpg",
        "metro": function (tags) {
          var values = ['Лихоборы', 'Котельники', 'Рассказовка', 'Ростокино', 'Измайловская', 'Сокольники', 'Автово', 'Комендантский пр.', 'Василеостровская', 'Беговая', 'Озерки', 'Звенигородская'];
          return values[tags.integer(0, values.length - 1)];
        },
        "metroDistance": '{{integer(5, 32)}}',
      }
    ],
    "characteristics":[
      {
        title:"Дом",
        items:[
          {
            title:"Класс Жилья",
            value: function (tags) {
              var values = ["Эконом", "Евро"];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
              title:"Этажность",
              value: function (tags) {
              var values = ["1-21", "1-17", "1-13"];
              return values[tags.integer(0, values.length - 1)];
            } 
          },
          {
              title:"Технология строительства",
              value: "Кирпично-монолитный"
          },
          {
              title:"Облицовка фасада",
              value: "Фасад оштукатурен"
          },
          {
              title:"Кладовые",
              value: "Есть"
          },
          {
              title:"Лифты",
              value: "Есть"
          },
          {
              title:"Тип договора",
              value: "ДКП"
          }
        ]
      },
      {
        title:"Квартиры",
        items:[
          {
            title:"Отделка",
            value: function (tags) {
              var values = ['Чистовая', 'Готовая', 'Без отделки'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Количество квартир",
            value: '{{integer(150, 210)}}'
          },
          {
            title:"Планируемое число жителей",
            value: '{{integer(200, 310)}}'
          },
          {
            title:"Высота потолков, м",
            value: 3
          }
        ]
      },
      {
        title:"На территории ЖК",
        items:[
          {
            title:"Детский сад во дворе",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Школа во дворе",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Детская площадка",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Торговля и сервис",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Медицинские учреждения",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Благоустроенное место для прогулок",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          }
        ]
      },
      {
        title:"Для автовладельцев",
        items:[
          {
            title:"Количество машиномест",
            value: '{{integer(90, 138)}}'
          },
          {
            title:"В том числе платных",
            value: '{{integer(50, 138)}}'
          },
          {
            title:"Тип платной парковки",
            value: function (tags) {
              var values = ['Подземный', 'Наземный', 'Наземно-подземный'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Продумано движение во дворе",
            value: "Да"
          }
        ]
      },
      {
        title:"Безопасность",
        items:[
          {
            title:"Закрытый двор",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Охрана территории",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Видеонаблюдение",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          },
          {
            title:"Помещение для консьержа/диспетчерской",
            value: function (tags) {
              var values = ['Есть', 'Нет'];
              return values[tags.integer(0, values.length - 1)];
            }
          }
        ]
      }
    ]

    //'{{lorem(1, "paragraphs")}}',
    //'{{lorem(1, "words")}}'
  }
]