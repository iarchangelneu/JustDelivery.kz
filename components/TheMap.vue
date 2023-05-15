<template>
    <div id="map"></div>
</template>
<script>
import { makeMap } from '@vue/shared';
import { loadYmap } from 'vue-yandex-maps';
export default {
    data() {
        return {
            distance: null,
            pointA: [],
            pointB: [],
            adressA: '',
            adressB: ''
        }
    },
    components: {


    },
    async mounted() {
        const settings = {
            apiKey: 'e1123dd2-7120-43ba-a123-575d432f9366',
            lang: 'ru_RU',

        };
        await loadYmap(settings);
        ymaps.ready(this.init);
        this.emitDistance();

        this.getAdress()


    },
    methods: {
        emitDistance() {
            setInterval(() => {
                this.$emit('distance', this.distance)
                this.$emit('adress1', this.adressA)
                this.$emit('adress2', this.adressB)
            }, 100);

        },
        init() {
            // Стоимость за километр.
            var geolocation = ymaps.geolocation,
                myMap = new ymaps.Map('map', {
                    center: [60.906882, 30.067233],
                    zoom: 100,
                    controls: []
                }),


                // Создадим панель маршрутизации.
                routePanelControl = new ymaps.control.RoutePanel({
                    options: {
                        // Добавим заголовок панели.
                        showHeader: true,
                        title: 'Выберите маршрут'
                    }
                }),
                zoomControl = new ymaps.control.ZoomControl({
                    options: {
                        size: 'small',
                        float: 'none',
                        position: {
                            bottom: 145,
                            right: 10
                        }
                    }
                });
            // Пользователь сможет построить только автомобильный маршрут.
            routePanelControl.routePanel.options.set({
                types: { auto: true }
            });

            var trap = this.distance
            var first = []
            var second = []
            var test = ''
            // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
            /*routePanelControl.routePanel.state.set({
                fromEnabled: false,
                from: 'Москва, Льва Толстого 16'
             });*/

            myMap.controls.add(routePanelControl).add(zoomControl);



            // Получим ссылку на маршрут.
            routePanelControl.routePanel.getRouteAsync().then(function (route) {


                // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
                route.model.setParams({ results: 1 }, true);

                // Повесим обработчик на событие построения маршрута.
                route.model.events.add('requestsuccess', async function () {


                    var activeRoute = route.getActiveRoute();

                    if (activeRoute) {

                        // Получим протяженность маршрута.
                        var length = route.getActiveRoute().properties.get("distance")
                        // Получаем точку А и точку Б
                        var pointA = route.getActiveRoute().properties.get('boundedBy')[0]
                        var pointB = route.getActiveRoute().properties.get('boundedBy')[1]

                        // Выводим точку А
                        ymaps.geocode(pointA).then(function (result) {
                            var firstGeoObject = result.geoObjects.get(0);
                            var adress1 = firstGeoObject.getAddressLine()
                            sessionStorage.setItem('adress1', adress1)
                        });

                        // Выводим точку Б
                        ymaps.geocode(pointB).then(function (result) {
                            var secondGeoObject = result.geoObjects.get(1);
                            var adress2 = secondGeoObject.getAddressLine()
                            sessionStorage.setItem('adress2', adress2)
                        });
                        // Создадим макет содержимого балуна маршрута.
                        var balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<span>Расстояние: ' + length.text + '.</span><br/>');
                        // Зададим этот макет для содержимого балуна.
                        route.options.set('routeBalloonContentLayout', balloonContentLayout);
                        // Откроем балун.
                        activeRoute.balloon.open();
                        trap = length
                        first = pointA
                        second = pointB


                    }
                });

            });
            setInterval(() => {
                this.distance = trap
                this.pointA = first
                this.pointB = second
            }, 1000)



            // Сравним положение, вычисленное по ip пользователя и
            // положение, вычисленное средствами браузера.
            geolocation.get({
                provider: 'yandex',
                mapStateAutoApply: true
            }).then(function (result) {
                // Красным цветом пометим положение, вычисленное через ip.
                result.geoObjects.options.set('preset', 'islands#redCircleIcon');
                result.geoObjects.get(0).properties.set({
                    balloonContentBody: 'Мое местоположение'
                });
                myMap.geoObjects.add(result.geoObjects);
            });

            geolocation.get({
                provider: 'browser',
                mapStateAutoApply: true
            }).then(function (result) {
                // Синим цветом пометим положение, полученное через браузер.
                // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
                result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
                myMap.geoObjects.add(result.geoObjects);
            });
        },
        getAdress() {
            setTimeout(() => {
                this.adressA = sessionStorage.getItem('adress2')
                this.adressB = sessionStorage.getItem('adress1')
            }, 1000);
        }
    }
}
</script>
<style scoped>
#map,
.ymaps-2-1-79-map {
    width: 740px;
    height: 678px;
}

@media (max-width: 1023px) {

    #map[data-v-6afeeec8],
    .ymaps-2-1-79-map[data-v-6afeeec8] {
        width: 100%;
        height: 678px;
    }
}

@media (max-width: 768px) {

    #map[data-v-6afeeec8][data-v-6afeeec8],
    .ymaps-2-1-79-map[data-v-6afeeec8][data-v-6afeeec8] {
        width: 100%;
        height: 350px;
    }
}
</style>