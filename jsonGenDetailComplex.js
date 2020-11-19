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
    ]

    //'{{lorem(1, "paragraphs")}}',
    //'{{lorem(1, "words")}}'
  }
]