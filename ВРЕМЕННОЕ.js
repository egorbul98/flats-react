function initMap() {
  mapComplex = new ymaps.Map('map', {
    center: coordsCenter,
    zoom: 11,
    controls: [],
  }, {
    searchControlProvider: 'yandex#search',
    suppressMapOpenBlock: true
  });
  clusterer = new ymaps.Clusterer({
    preset: 'islands#invertedRedClusterIcons',
    groupByCoordinates: false,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false
  });
  clusterer.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('preset', 'islands#invertedGrayClusterIcons');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('preset', 'islands#invertedRedClusterIcons');
    });
  
  
  let geoObjects = getListPlacemarks(complexList);

  clusterer.add(geoObjects);
  mapComplex.geoObjects.add(clusterer);

  $('.map-filter__btn-show').on('click', function () {
    //ширина экрана
    let widthWindow = $(window).width();

    let separator = '; ';
      //Получаем именно тексты выбранных пунктов в select's
    let area = $('.map-filter__area').val().split(separator);
    let metro = $('.map-filter__metro').val().split(separator);
    let deadline = $('.map-filter__deadline').val().split(separator);
    let complex = $('.map-filter__complex').val().split(separator);
    let developer = $('.map-filter__developer').val().split(separator);

    let typeProperty = $('.map-filter__type-property').val().split(separator);
    let type = $('.map-filter__type').val().split(separator);
    let payment = $('.map-filter__payment').val().split(separator);
    let bank = $('.map-filter__bank').val().split(separator);
    let room = $('.map-filter__room').val().split(separator);

    let costFrom = parseInt($('.map-filter__cost-from').val());
    let costTo = parseInt($('.map-filter__cost-to').val());
    let squareFrom = parseInt($('.map-filter__square-from').val());
    let squareTo = parseInt($('.map-filter__square-to').val());
    
    let filter = {
      'area': area,
      'metro': metro,
      'deadline': deadline,
      'costFrom': costFrom,
      'costTo': costTo,
      'complex': complex,
      'developer': developer,
      'room': room,
      'typeProperty': typeProperty,
      'type': type,
      'squareFrom': squareFrom,
      'squareTo': squareTo,
      'payment': payment,
      'bank': bank
    } //Наш фильтр, с которым мы будем сравнивать объекты

    let filterList = getFilterListComplex(complexList, filter); //Возвращает отфильтрованный список комплексов (filter - объект, с которым будут сравниваться другие объекты)
    updateMapObjects(mapComplex, clusterer, filterList);

    if (widthWindow <= 768) { //если ширину меньше 768, то закрываем окно фильтра на карте
      $('.map-filter').removeClass('map-filter--active');
      $('.map-footer__btn-open-filter').removeClass('map-footer__btn-open-filter--active');
    }
  });

  let height = ($(window).height() - 50 - 80 +1 - 21);//нужная высота
  
  if ($(window).width() <= 768) {
    $('#map').css('height', height + 'px');
    $('.map-filter').css('height', (height + 21) + 'px');
    $('.map__complex-info').css('height', (height+50)+ 'px');
    mapComplex.container.fitToViewport();
  } else {
    
    $('#map').css('height',$('.map-wrapper').height());
    // $('.map-filter').css('height', 'auto');
    $('.map-filter').css('height', '1025px');
    $('.map__complex-info').css('height', 'auto');
    mapComplex.container.fitToViewport();
  }
  $(window).on('resize', function () {
    if ($(window).width() <= 768) {
      height = ($(window).height() - 50 - 80 +1 - 21);
      $('#map').css('height', height + 'px');
      $('.map-filter').css('height', (height + 21) + 'px');
      $('.map__complex-info').css('height', (height+50)+ 'px');
    } else {
      console.log('auto');
      
      $('#map').css('height',$('.map-wrapper').height());
      // $('.map-filter').css('height', 'auto');
      $('.map-filter').css('height', '1025px');
      $('.map__complex-info').css('height', 'auto');
    }
    mapComplex.container.fitToViewport();
    updateSizeComplexItemMap();
  });

}