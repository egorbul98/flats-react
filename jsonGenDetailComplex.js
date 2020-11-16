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
    reviews: {
      aboutComplex: [
        '{{repeat(3,5)}}',
        {
          name: '{{firstName()}} {{surname()}}',
          text: '{{lorem(1, "paragraphs")}}',
          date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
        }
      ],
      aboutDeveloper: [
        '{{repeat(3,5)}}',
        {
          name: '{{firstName()}} {{surname()}}',
          text: '{{lorem(1, "paragraphs")}}',
          date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
        }
      ]
    },
    complexLike: [
      '{{repeat(3,5)}}',
      {
        id: "{{integer(1, 25)}}",
        name: '{{firstName()}}',
        address: 'Приморский район, Мебельная улица, 19к2',
        imgSrc: "/img/complexesImages/img-{{integer(1, 8)}}.jpg"
      }
    ]

    //'{{lorem(1, "paragraphs")}}',
    //'{{lorem(1, "words")}}'
  }
]