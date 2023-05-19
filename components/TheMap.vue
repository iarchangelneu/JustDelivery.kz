<template>
    <div class="order">
        <h2 class="mobmap">Введите ваш адрес и адрес доставки, либо поставьте точки на карте</h2>
        <div class="order__body d-flex">
            <client-only>
                <div id="map"></div>

            </client-only>




            <div class="order__details pl-4" style="z-index: 999">

                <h2 class="pcmap">Введите ваш адрес и адрес доставки, либо поставьте точки на карте</h2>
                <div class="adresses">
                    <label for="adress1" class="mt-3">Откуда забрать</label>
                    <div>
                        <input type="text" id="address1" v-model="adressA" />
                        <div id="suggestions1"></div>
                    </div>
                    <label for="adress1" class="mt-4">Куда доставить</label>
                    <div>
                        <input type="text" id="address2" v-model="adressB" />
                        <div id="suggestions2"></div>
                    </div>
                </div>
                <div class="" id="result"></div>
                <div class="form-group">
                    <label for="orderType" class="mt-4">Выберите тип доставки</label>
                    <select class="form-control" id="orderType" v-model="orderType">
                        <option disabled value="">Тип доставки</option>
                        <option value="Документы">Документы</option>
                        <option value="Документы">Вещи (до 2 кг)</option>
                        <option value="Крупногабаритный груз">Вещи (2–10 кг)</option>
                        <option value="Крупногабаритный груз">Крупногабаритный груз</option>
                    </select>
                </div>


                <div class="gabarites mt-3" v-if="orderType == 'Крупногабаритный груз'">
                    <h2 class="mt-4">Введите примерный вес и габариты</h2>

                    <div class="d-flex align-items-end">
                        <input type="number" name="weight" v-model="weight" id="weight" placeholder="Вес груза">
                        <label for="weight" class="mb-0 pl-1">кг</label>
                    </div>

                    <div class="d-flex align-items-center mt-3">

                        <div class="d-flex align-items-end">
                            <input type="number" v-model="dlina" name="dlina" id="dlina" placeholder="Длина">
                            <label for="dlina" class="mb-0 pl-1">м</label>
                        </div>
                        <span>Х</span>
                        <div class="d-flex align-items-end">
                            <input type="number" v-model="shirina" name="shirina" id="shirina" placeholder="Ширина">
                            <label for="shirina" class="mb-0 pl-1">м</label>
                        </div>
                        <span>Х</span>
                        <div class="d-flex align-items-end">
                            <input type="number" v-model="visota" name="visota" id="visota" placeholder="Высота">
                            <label for="visota" class="mb-0 pl-1">м</label>
                        </div>

                    </div>
                </div>

                <div class="mt-4">
                    <label for="comment">Комментарий к заказу</label>

                    <textarea name="comment" id="comment" v-model="comment"></textarea>
                </div>
            </div>
        </div>

        <div class="order__total d-flex justify-content-center mt-5">
            <div>
                <h2 class="mb-4">Стоимость заказа: {{ Math.floor(price) + " ₸" }}</h2>
                <h2>Примерное время доставки: ~30 минут
                </h2>

                <div class="text-center mt-5">
                    <button @click="getPrice()" v-if="!readySend">РАСЧИТАТЬ СТОИМОСТЬ</button>
                    <button @click="sendOrder()" v-else>ОФОРМИТЬ ЗАКАЗ</button>
                </div>

            </div>
        </div>
    </div>
    <TheModalReg></TheModalReg>
</template>
<script>
import jwt_decode from "jwt-decode";
import global from '~/mixins/global';
import axios from 'axios'
import { makeMap } from '@vue/shared';
import { loadYmap } from 'vue-yandex-maps';
export default {
    mixins: [global],
    data() {
        return {
            distanceNew: null,
            adressA: '',
            adressB: '',
            orderType: '',
            price: null,
            weight: null,
            shirina: null,
            visota: null,
            dlina: null,
            readySend: false,
            comment: '',
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
        localStorage.setItem('address1', '')
        localStorage.setItem('address2', '')
        this.getDist()
        this.getAddress()


    },
    methods: {
        sendOrder() {
            const path = "https://justdelivery.kz/api/vision_pay";
            const order = "https://justdelivery.kz/api/add_order";
            if (this.price != '') {
                axios
                    .post(path, { cost: this.price, jwt_token: this.token })

                    .then((res) => {

                        console.log(res)

                        window.location.href = res.data.url

                    })
                    .catch((error) => {
                        console.error(error);
                    });

                axios
                    .post(order, { address_from: this.adressA, address_to: this.adressB, delivery_type: this.orderType, comment: this.comment, cost: this.price, delivery_time: '30', customer_email: this.userEmail })

                    .then((result) => {

                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            else {
                alert('Не удалось оформить заказ, обновите страницу и попробуйте снова')
            }
        },
        getDist() {
            setInterval(() => {
                this.distanceNew = localStorage.getItem('distance')
            }, 100);
        },
        getAddress() {
            setInterval(() => {
                this.adressA = localStorage.getItem('address1')
                this.adressB = localStorage.getItem('address2')
            }, 100);

        },
        getPrice() {
            if (this.isAuth == 'true') {
                if (this.distanceNew) {
                    const distance = Math.floor(this.distanceNew)
                    const weight = this.weight
                    const shirina = this.shirina
                    const visota = this.visota
                    const dlina = this.dlina

                    let volume = shirina * visota * dlina

                    /// Цены
                    const perMeter = 1
                    const perKg = 200
                    const perMetrCube = 20000
                    const min = 3000


                    if (this.orderType === 'Крупногабаритный груз') {

                        if (this.weight
                            && this.shirina
                            && this.visota
                            && this.dlina) {

                            let price = distance * perMeter + volume * perMetrCube + weight * perKg + min

                            this.price = price
                            this.readySend = true

                        }
                        else {
                            alert('Введите габариты и вес посылки')
                        }
                    }


                    if (this.orderType === 'Документы') {
                        const perMeterDoc = 0.4

                        let price = distance * perMeterDoc

                        if (price < 3000) {

                            this.price = 3000
                            this.readySend = true
                        }
                        else {
                            this.price = price
                            this.readySend = true
                        }


                    }
                }
                else {
                    alert('Постройте маршрут')
                }
            }
            else {
                $('#regModal').modal('show')
            }
        },

        init() {
            var map;
            var address1Input = document.getElementById('address1');
            var address2Input = document.getElementById('address2');
            var resultContainer = document.getElementById('result');

            var suggestView1 = new ymaps.SuggestView('address1');
            var suggestView2 = new ymaps.SuggestView('address2');

            var route;

            function calculateRoute() {
                var address1 = address1Input.value;
                var address2 = address2Input.value;
                if (address1 && address2) {
                    ymaps.geocode(address1)
                        .then(function (res1) {
                            var coordinates1 = res1.geoObjects.get(0).geometry.getCoordinates();
                            return ymaps.geocode(address2)
                                .then(function (res2) {
                                    var coordinates2 = res2.geoObjects.get(0).geometry.getCoordinates();
                                    return ymaps.route([coordinates1, coordinates2], {
                                        mapStateAutoApply: true,
                                        avoidTrafficJams: true
                                    });
                                });
                        })
                        .then(function (route) {
                            if (route) {
                                if (route.getPaths().getLength()) {
                                    var distance = route.getLength();
                                    var distanceKm = Math.floor(distance / 1000).toFixed(2)
                                    resultContainer.textContent = 'Расстояние между точками: ' + distanceKm + ' км';
                                    map.geoObjects.removeAll();
                                    map.geoObjects.add(route);
                                    localStorage.setItem('distance', Math.floor(distance))

                                } else {
                                    resultContainer.textContent = 'Маршрут не найден.';
                                }
                            }
                        })
                        .catch(function (error) {
                            resultContainer.textContent = 'Ошибка при построении маршрута: ' + error.message;
                        });
                } else {
                    resultContainer.textContent = 'Введите оба адреса';
                    map.geoObjects.removeAll();
                }

            }
            function handleInput() {
                calculateRoute();
            }

            function initializeMap(center) {
                map = new ymaps.Map('map', {
                    center: center,
                    zoom: 10,
                    controls: []
                });
                map.events.add('click', function (e) {
                    var coords = e.get('coords');
                    ymaps.geocode(coords)
                        .then(function (res) {
                            var address = res.geoObjects.get(0).getAddressLine();
                            if (!address1Input.value) {

                                address1Input.value = address;
                                localStorage.setItem('address1', address1Input.value)
                            } else if (!address2Input.value) {
                                address2Input.value = address;
                                localStorage.setItem('address2', address2Input.value)
                            } else {
                                address1Input.value = address;
                                address2Input.value = '';
                            }
                            calculateRoute();
                        })
                        .catch(function (error) {
                            console.error('Ошибка при определении адреса: ' + error);
                        });
                });
            }

            function handleGeolocationSuccess(position) {
                var userCoordinates = [position.coords.latitude, position.coords.longitude];
                ymaps.geocode(userCoordinates)
                    .then(function (res) {
                        var userAddress = res.geoObjects.get(0).getAddressLine();
                        initializeMap(userCoordinates);
                    })
                    .catch(function (error) {
                        console.error('Ошибка при определении местоположения: ' + error);
                        initializeMap([55.751574, 37.573856]); // Значение по умолчанию (Москва)
                    });
            }

            function handleGeolocationError(error) {
                console.error('Ошибка при определении местоположения: ' + error.message);
                initializeMap([55.751574, 37.573856]); // Значение по умолчанию (Москва)
            }

            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
            } else {
                console.error('Геолокация не поддерживается');
                initializeMap([55.751574, 37.573856]); // Значение по умолчанию (Москва)
            }

            address1Input.addEventListener('input', handleInput);
            address2Input.addEventListener('input', handleInput);
        },

    }
}
</script>
<style scoped>
.mobmap {
    display: none;
}

.adresses input {
    width: 100%;
    max-width: 520px;
    border-left: 2px solid #000 !important;
    padding-left: 5px !important;
}

#map,
.ymaps-2-1-79-map {
    width: 740px;
    height: 678px;
}

.order__total button {
    border: 3px solid #000;
    background: transparent;
    padding: 19px 73px;
    transition: all .3s ease;

    font-weight: 700;
    font-size: 48px;
    line-height: 106%;
    font-family: var(--jur);
    color: #000;
}

.order__total button:hover {
    background: #000;
    color: #fff;

}

.order__total h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 106%;
    font-family: var(--jur);
}

.gabarites span {
    font-family: var(--jur);
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #000;
    padding: 0 12px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
    /* <-- Apparently some margin are still there even though it's hidden */
}

.order__details label {
    font-family: var(--jur);
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #000;
}

.input-group-text {
    border: 2px solid #000000;
    background-color: transparent;
    border-right: 0;
    border-radius: 0;

}

.order__details textarea {
    width: 100%;
    max-width: 520px;
    height: 44px;
    border: 2px solid #000000;
    background: transparent;
}

.order__details input {
    max-width: 520px;
    height: 44px;
    border: 2px solid #000000;
    background: transparent;
    border-left: 0;
    font-family: var(--jur);
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    padding-left: 0;
    border-radius: 0;
}

.order__details .gabarites input {
    max-width: 125px;
    border-left: 2px solid #000;
    padding-left: 12px;
    border-radius: 0;
}

.order__details select {
    max-width: 234px;
    height: 44px;
    border: 2px solid #000000;
    border-radius: 0;
}

.order__details input::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #929292;
}

.order__details h2 {
    font-family: var(--jur);
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #000;
}

.order {
    padding: 3.75vw 16.406vw 5vw;
}

@media (max-width: 1450px) {
    .order {
        padding: 3.75vw 150px;
    }
}

@media (max-width: 1023px) {

    #map[data-v-6afeeec8],
    .ymaps-2-1-79-map[data-v-6afeeec8] {
        width: 100%;
        height: 678px;
    }
}

@media (max-width: 1400px) {
    .order {
        padding: 3.75vw 60px;
    }
}

@media (max-width: 1180px) {
    .order {
        padding: 3.75vw 30px;
    }

    .order__total button {
        font-size: 30px;
    }

}

@media (max-width: 1023px) {
    .order__body {
        flex-direction: column;
        justify-content: center;
    }

    .order__total h2 {
        font-size: 26px;
    }

    .order__details {
        padding-left: 0 !important;
    }

    .order__total {
        justify-content: left !important;
    }

    .order__details {
        margin-top: 50px;
    }
}

@media (max-width: 768px) {

    #map[data-v-6afeeec8][data-v-6afeeec8],
    .ymaps-2-1-79-map[data-v-6afeeec8][data-v-6afeeec8] {
        width: 100%;
        height: 350px;
    }

    .mobmap {
        display: block;
        font-family: var(--jur);
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        color: #000;
        padding-left: 10px;
    }

    .pcmap {
        display: none;
    }

    .order {
        padding: 20px 0px 0px;
    }

    .order__details {
        margin-top: 0;
        padding: 20px 10px !important;
    }

    .order__total {
        padding: 0 10px;
        margin-top: 0 !important;
    }

    .order__details label {
        font-size: 16px;
    }

    .order__details h2 {
        font-size: 16px;
    }

    .order__details .gabarites input {
        max-width: 105px;
        font-size: 16px;
    }

    .gabarites label {
        display: none;
    }

    .gabarites span {
        padding: 0 7px;
        font-size: 20px;
    }

    .order input::placeholder {
        font-size: 16px;
    }

    .order__total h2 {
        font-size: 20px;
    }

    .order__total div div {
        padding: 0 12px;
        margin-top: 30px !important;
    }

    .order__total button {
        font-size: 24px;
        padding: 11px;
        width: 100%;
        border: 2px solid #000;
    }

}
</style>