[
  '{{repeat(5, 7)}}',
  {
    "id": '{{index()}}',
    "tel": "+7 {{phone()}}",
    "name": "ЖК \"{{firstName()}}\"",
    "developer": "ООО «{{company()}}»",
    "description": '{{lorem(1, "paragraphs")}}',
    "metro": "Девяткино",
    "metroDistance": '{{integer(5, 32)}}',
    "area": "Район {{integer(1, 50)}}",
    "img": "/img/complexesImages/img-{{integer(1, 8)}}.jpg",
    "coords": ['{{floating(59.96366228831886, 59.96366228831899)}}', '{{floating(30.33065350936121, 30.33065350936150)}}'],
    "minCost": '{{integer(2600000, 5600000)}}',
    "maxCost": '{{integer(12600000, 25600000)}}',
    "minSquare": '{{integer(16, 24)}}',
    "maxSquare": '{{integer(25, 83)}}',
    "minCostSquare": '{{floating(40, 78.4)}}',
    "maxCostSquare": '{{floating(100, 160)}}',
    "address": "Большой проспект Васильевского острова '{{index()}}'",
    "images": ["/img/complexesImages/img-{{integer(1, 8)}}.jpg", "/img/complexesImages/img-{{integer(1, 8)}}.jpg", "/img/complexesImages/img-{{integer(1, 8)}}.jpg"],
    "totalFloor": '{{integer(9, 17)}}',
  }
]