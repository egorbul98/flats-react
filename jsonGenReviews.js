[
  '{{repeat(225)}}',
  {
    id:'{{index()}}',
    complexId:'{{integer(0,24)}}',
    about:function (tags) {
      var values = ["complex", "developer"];
      return values[tags.integer(0, values.length - 1)];
    },
    name: '{{firstName()}} {{surname()}}',
    text: '{{lorem(1, "paragraphs")}}',
    date: '{{date(new Date(2019, 0, 1), new Date(), "YYYY-MM-dd:mm:ss")}}'
    
  }
]