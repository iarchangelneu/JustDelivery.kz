<template>
    <section>
        <div class="main">
            <div class="main__body">


                <img src="@/assets/img/mainlogo.png" alt="" class="img-fluid">

                <div class="d-flex justify-content-end">
                    <button>РАСЧИТАТЬ СТОИМОСТЬ</button>
                </div>
            </div>
        </div>

        <div class="order">
            <div class="order__body d-flex">

                <!-- <img src="@/assets/img/map.png" class="img-fluid" alt=""> -->
                <!-- <YandexMap map-type="hybrid" :coordinates="[32, 50]">

                </YandexMap> -->

                <component :is="comp" :coordinates="[32, 50]" :settings="settings">

                </component>


                <div class="order__details pl-4" style="z-index: 999">

                    <h2>Введите ваш адрес и адрес доставки, либо поставьте точки на карте</h2>

                    <div>
                        <label for="from_adres" class="mt-3">Откуда забрать</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src="@/assets/img/searchinp.svg"
                                        alt=""></span>
                            </div>
                            <input type="text" class="form-control" id="from_adres" placeholder="Введите адрес"
                                aria-label="Введите адрес" aria-describedby="basic-addon1">
                        </div>
                    </div>

                    <div>
                        <label for="to_adres" class="mt-2">Куда доставить</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src="@/assets/img/searchinp.svg"
                                        alt=""></span>
                            </div>
                            <input type="text" class="form-control" id="to_adres" placeholder="Введите адрес"
                                aria-label="Введите адрес" aria-describedby="basic-addon1">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="orderType" class="mt-2">Выберите тип доставки</label>
                        <select class="form-control" id="orderType" v-model="orderType">
                            <option disabled value="">Тип доставки</option>
                            <option>Документы</option>
                            <option>Вещи (до 2 кг)</option>
                            <option>Вещи (2–10 кг)</option>
                            <option>Крупногабаритный груз</option>
                        </select>
                    </div>
                    <h2 class="mt-4">Введите примерный вес и габариты</h2>

                    <div class="gabarites mt-3" v-if="orderType == 'Крупногабаритный груз'">

                        <div class="d-flex align-items-end">
                            <input type="number" name="weight" id="weight" placeholder="Вес груза">
                            <label for="weight" class="mb-0 pl-1">кг</label>
                        </div>

                        <div class="d-flex align-items-center mt-3">

                            <div class="d-flex align-items-end">
                                <input type="number" name="dlina" id="dlina" placeholder="Длина">
                                <label for="dlina" class="mb-0 pl-1">м</label>
                            </div>
                            <span>Х</span>
                            <div class="d-flex align-items-end">
                                <input type="number" name="shirina" id="shirina" placeholder="Ширина">
                                <label for="shirina" class="mb-0 pl-1">м</label>
                            </div>
                            <span>Х</span>
                            <div class="d-flex align-items-end">
                                <input type="number" name="visota" id="visota" placeholder="Высота">
                                <label for="visota" class="mb-0 pl-1">м</label>
                            </div>

                        </div>
                    </div>

                    <div class="mt-4">
                        <label for="comment">Комментарий к заказу</label>

                        <textarea name="comment" id="comment"></textarea>
                    </div>
                </div>
            </div>

            <div class="order__total d-flex justify-content-center mt-5">
                <div>
                    <h2 class="mb-4">Стоимость заказа: 1880 ₸</h2>
                    <h2>Примерное время доставки: ~30 минут</h2>

                    <div class="text-center mt-5">
                        <button>ПОДТВЕРДИТЬ ЗАКАЗ</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="plusi">
            <div class="d-flex align-items-center plusiall">
                <h1 class="mb-0 mt-0">Ближайший к вам курьер заберёт документы, товары или привезёт забытую вещь.</h1>
                <img src="@/assets/img/geo.svg" style="" alt="">
            </div>

            <div class="d-flex justify-content-between plusitext">
                <div>
                    <div class="text-center" style="max-width: 398px">
                        <h2>Быстро</h2>
                        <span>Можно легко и быстро заказать доставку документов прямо с телефона или ноута, в любое время
                            и с любой точки мира. Да и оформление заказа занимает не больше нескольких минут</span>
                    </div>
                </div>

                <div>
                    <div class="text-center" style="max-width: 370px">
                        <h2>безопасно</h2>
                        <span>Мы гарантируем высокий уровень безопасности и конфиденциальности данных и документов.
                            Так что вы можете быть уверены, что ничего не пропадёт и не попадёт не в те руки</span>
                    </div>
                </div>

                <div>
                    <div class="text-center" style="max-width: 384px">
                        <h2>Выгодно</h2>
                        <span>Заказ курьерской доставки на нашем сайте позволяет не тратить время на походы в офисы служб
                            доставки и экономит деньги на транспортировке документов, товаров и вещей</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="sliders">
            <Swiper :height="300" :modules="[SwiperAutoplay]" :slides-per-view="4" :loop="true" :autoplay="{
                delay: 1,
                disableOnInteraction: false,
            }" :speed='4000' ,>
                <SwiperSlide>
                    <img src="@/assets/img/st1.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st2.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st3.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st4.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st1.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st2.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st3.png" alt="">
                </SwiperSlide>
                <SwiperSlide>
                    <img src="@/assets/img/st4.png" alt="">
                </SwiperSlide>



            </Swiper>
            <div class="text-container">ПРОСТО ДОСТАВЛЯЕМ</div>
        </div>


        <div class="ride d-flex justify-content-between">

            <img src="@/assets/img/ride.png" class="img-fluid" alt="">

            <div class="ride__right">
                <div class="text-right mb-4">
                    <h1>поехали?</h1>
                </div>

                <p>Наша курьерская служба предоставляет услуги доставки документов, товаров и других вещей
                    в любую точку
                    города Алматы.</p>

                <p> Мы гарантируем своевременную и качественную доставку ваших посылок. Наши курьеры — профессионалы
                    своего
                    дела, которые действуют быстро и эффективно. Мы понимаем, как важна для вас каждая минута, поэтому
                    всегда придерживаемся сроков.</p>

                <p>Кроме того, у нас доступные цены и гибкая система скидок для постоянных клиентов.</p>
            </div>
        </div>

        <div class="waytoway">
            <div class="waytoway__body">
                <div class="d-flex">
                    <div class="w-25 upperblock">
                        <h1>1. расчёт стоимости</h1>
                        <p>Определите, сколько будет стоить доставка, учитывая размер и вес посылки, а также дальность
                            доставки</p>
                    </div>
                    <div class="w-25 upperblock">
                        <h1>2. оплата заказа</h1>
                        <p>Оплатите стоимость доставки с помощью банковской карты</p>
                    </div>
                    <div class="w-25 upperblock">
                        <h1>3. курьер приехал</h1>
                        <p>Курьер приедет в указанное место и, при необходимости, свяжется с отправителем, чтобы забрать
                            посылку</p>
                    </div>
                    <div class="w-25 upperblock upperblockimg">
                        <img src="@/assets/img/chel.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="d-flex">
                    <div class="w-25 bottomblock">
                        <h1>4. перевозка груза</h1>
                        <p>Курьер доставляет посылку на указанный адрес и может связываться с получателем для уточнения
                            деталей.</p>
                    </div>
                    <div class="w-50 bottomblock text-center">
                        <img src="@/assets/img/arms.png" class="img-fluid" alt="">
                    </div>
                    <div class="w-25 bottomblock">
                        <h1>5. получите посылку</h1>
                        <p>Курьер приедет в место доставки и передаст посылку получателю</p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button>РАССЧИТАТЬ СТОИМОСТЬ</button>
            </div>
        </div>

        <div class="faq d-flex justify-content-between align-items-end">
            <div class="faqimg">
                <img src="@/assets/img/faqchel.png" alt="">
            </div>
            <div class="faqright w-100">
                <div class="text-right">
                    <h1>FAQ</h1>
                </div>

                <div class="faqblock ml-4 mt-5">
                    <div class="faqitem">

                        <a data-toggle="collapse" href="#collapse0" role="button" aria-expanded="false"
                            aria-controls="collapse0">
                            <img src="@/assets/img/arrowfaq.svg" id="faqbtn0" class="mr-3" alt=""> Можно ли заказать
                            доставку в другой
                            город
                            или за границу?
                        </a>
                        <div class="collapse" id="collapse0">
                            <div class="card card-body">
                                Тут будет текст)0
                            </div>
                        </div>

                    </div>

                    <div class="faqitem">

                        <a data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false"
                            aria-controls="collapse1">
                            <img src="@/assets/img/arrowfaq.svg" id="faqbtn1" class="mr-3" alt=""> Вы можете доставить
                            крупногабаритные
                            грузы?
                        </a>
                        <div class="collapse" id="collapse1">
                            <div class="card card-body">
                                Тут будет текст)0
                            </div>
                        </div>

                    </div>

                    <div class="faqitem">

                        <a data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false"
                            aria-controls="collapse2">
                            <img src="@/assets/img/arrowfaq.svg" id="faqbtn2" class="mr-3" alt=""> Какие формы оплаты
                            вы принимаете?
                        </a>
                        <div class="collapse" id="collapse2">
                            <div class="card card-body">
                                Тут будет текст)0
                            </div>
                        </div>

                    </div>

                    <div class="faqitem">

                        <a data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false"
                            aria-controls="collapse3">
                            <img src="@/assets/img/arrowfaq.svg" id="faqbtn3" class="mr-3" alt=""> Какие гарантии
                            безопасности моего
                            груза вы предоставляете?
                        </a>
                        <div class="collapse" id="collapse3">
                            <div class="card card-body">
                                Мы обеспечиваем полную безопасность вашего груза в процессе доставки. Мы используем только
                                профессиональных курьеров с многолетним опытом работы и наша логистическая система позволяет
                                минимизировать риски потери или повреждения груза.
                            </div>
                        </div>

                    </div>

                    <div class="faqitem">

                        <a data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false"
                            aria-controls="collapse4">
                            <img src="@/assets/img/arrowfaq.svg" id="faqbtn4" class="mr-3" alt=""> Какие виды товаров
                            вы не доставляете?
                        </a>
                        <div class="collapse" id="collapse4">
                            <div class="card card-body">
                                Тут будет текст)0
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
export default {
    data() {
        return {

            orderType: 'Тип доставки',
        }
    },
    components: {
        YandexMap, YandexMarker,
    },
    mounted() {
        for (let i = 0; i < 5; i++) {
            $(`#collapse${i}`).on("show.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.add('buttonActive')
            });
            $(`#collapse${i}`).on("hide.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.remove('buttonActive')
            });
        }
    }
}
</script>
<script setup>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
useSeoMeta({
    title: 'JustDelivery | Главная',
    ogTitle: 'JustDelivery | Главная',
    description: 'Просто доставляем',
    ogDescription: 'Просто доставляем',
})
const comp = shallowRef(null)

const settings = [
    {
        innerWidth: 100,
    }
]

onMounted(async () => {
    comp.value = YandexMap
})
</script>

<style scoped>
.ymaps-2-1-79-map,
.ymaps-2-1-79-map ymaps,
.ymaps-2-1-79-map ymaps:before,
.ymaps-2-1-79-map ymaps:after {
    width: 740px;
    height: 678px;
}

.buttonActive {
    transform: rotate(90deg);
}

.faqblock a img {
    transition: all .3s ease;
}

.faqblock a {
    font-family: var(--jur);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    transition: all .3s ease;
}

.faqitem {
    margin-bottom: 52px;
}

.card {
    background-color: transparent;
    border: 0;
    font-family: var(--jur);
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #000;
}

.faqblock a:hover {
    text-decoration: none;
}

.faqblock {
    height: auto;
}

.faqright h1 {
    font-family: var(--tab);
    font-weight: 900;
    font-size: 64px;
    line-height: 106%;
    color: #000;
}

.faq {
    padding: 0 315px;
}

.faqimg {}

.waytoway button {
    border: 3px solid #000;
    padding: 19px 31px;
    background: transparent;
    margin-top: 96px;

    font-family: var(--jur);
    font-weight: 700;
    font-size: 48px;
    line-height: 106%;
    color: #000;
}

.upperblockimg {
    position: relative;
}

.upperblockimg img {
    position: absolute;
    top: -45%;
    bottom: 0;
    left: 0;
    right: 0;
}

.waytoway__body p {
    font-family: var(--jur);
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: 000;
    margin-top: 24px;
    margin-bottom: 0;
}

.waytoway__body h1 {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 36px;
    line-height: 110%;
    color: #000;
}

.upperblock {
    padding: 21px;
    border-right: 3px solid #000;
    border-bottom: 3px solid #000;
    height: 322px;
}

.bottomblock {
    border-right: 3px solid #000;
    padding: 21px;
    height: 322px;
}

.bottomblock:nth-child(3) {
    border-right: 0;
}

.upperblock:nth-child(4) {
    border-right: 0;
}

.waytoway__body {
    border: 3px solid #000000;
}

.waytoway {
    padding: 0 16.406vw 5vw;
}

.ride__right p {
    font-family: var(--jur);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #000;
}

.ride__right {
    margin-left: 6.771vw;
}



.ride h1 {
    font-family: var(--tab);
    font-weight: 900;
    font-size: 64px;
    line-height: 106%;
    color: #000000;

}

.ride {
    padding: 5vw 16.406vw 5vw 12.969vw;
}

.text-container {
    position: absolute;
    top: 40%;
    left: 0;
    z-index: 999;
    width: 100%;
    animation: move-text 12s linear infinite;

    font-family: var(--tab);
    font-style: normal;
    font-weight: 900;
    font-size: 128px;
    line-height: 106%;
    color: #FFFFFF;

    opacity: 0.8;
}


@keyframes move-text {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.sliders {
    position: relative;
    width: 100%;
    overflow-x: hidden;
}

.sliders img {
    width: 100%;
    height: 447px;
}

.plusi h2 {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 36px;
    line-height: 106%;
    color: #000;
    margin-bottom: 35px;
}

.plusi span {
    font-family: var(--jur);
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #000;

}

.plusi h1 {
    font-family: var(--jur);
    font-weight: 700;
    font-size: 36px;
    line-height: 130%;
    color: #000;
}

.plusiall {
    padding: 3.927vw 16.406vw 3.146vw;
}

.plusitext {
    padding: 0 15.573vw 3.646vw 15.208vw;
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

.main {
    height: 105vh;
    background-image: url('@/assets/img/mainbg.png');
    background-repeat: no-repeat;
    padding: 7.979vw 16.406vw 9.896vw;
}

.main__body button {
    border: 3px solid #FFFFFF;
    background: transparent;
    padding: 19px 32px;
    margin-top: 66px;

    font-weight: 700;
    font-size: 2.5vw;
    line-height: 106%;
    color: #FFFFFF;
    transition: all .3s ease;
}

.main__body button:hover {
    border: 3px solid #000;
    background: #000;
}
</style>