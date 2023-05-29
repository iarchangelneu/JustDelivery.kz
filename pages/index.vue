<template>
    <section>
        <div class="main">
            <div class="main__body">


                <img src="@/assets/img/mainlogo.png" alt="" class="img-fluid pcmain">
                <img src="@/assets/img/mobmain.png" class="img-fluid mobmain" alt="">

                <div class="d-flex justify-content-end">
                    <a href="#order">
                        <button>РАСЧИТАТЬ СТОИМОСТЬ</button>
                    </a>
                </div>
            </div>
            <a name='order'></a>
        </div>

        <TheMap></TheMap>

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
            <Swiper :height="300" :modules="[Autoplay]" :slides-per-view="4" :loop="true" :autoplay="{
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
        <div class="mobsliders">
            <img src="@/assets/img/mobsliders.png" class="img-fluid" alt="">
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
            <div class="waytoway__mob">

                <div class="wayto__item">
                    <h2>1. расчёт стоимости</h2>
                    <p>Определите, сколько будет стоить доставка, учитывая размер и вес посылки, а также дальность доставки
                    </p>
                </div>

                <div class="wayto__item">
                    <h2>2. оплата заказа</h2>
                    <p>Оплатите стоимость доставки с помощью банковской карты
                    </p>
                </div>

                <div class="wayto__item">
                    <h2>3. курьер приехал</h2>
                    <p>Курьер приедет в указанное место и, при необходимости, свяжется с отправителем, чтобы забрать посылку
                    </p>
                </div>

                <div class="wayto__item">
                    <h2>4. перевозка груза</h2>
                    <p>Курьер доставляет посылку на указанный адрес и может связываться с получателем для уточнения деталей.
                    </p>
                </div>

                <div class="wayto__item">
                    <h2>5. получите посылку</h2>
                    <p>Курьер приедет в место доставки и передаст посылку получателю
                    </p>
                </div>

            </div>
            <div class="text-center">
                <a href="#order">
                    <button>РАССЧИТАТЬ СТОИМОСТЬ</button>
                </a>
            </div>
        </div>
        <a name="faq"></a>
        <div class="faq d-flex justify-content-between align-items-end">
            <div class="faqimg">
                <img src="@/assets/img/faqchel.png" class="fat img-fluid" alt="">
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
                                Да, мы осуществляем доставку как по разным городам, так и за границу. Уточните адрес
                                доставки при оформлении заказа.
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
                                Да, мы предоставляем услуги доставки крупногабаритных грузов. Пожалуйста, свяжитесь с нашей
                                службой поддержки, чтобы уточнить детали и возможности доставки.
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
                                Мы принимаем только банковские карты в качестве формы оплаты. Вы можете использовать свою
                                кредитную или дебетовую карту для оплаты заказа.
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
                                Мы не доставляем определенные виды запрещенных товаров, такие как оружие, наркотики,
                                взрывчатые вещества и другие предметы, нарушающие законы и правила. Пожалуйста, ознакомьтесь
                                с нашим списком запрещенных товаров перед оформлением заказа.
                                Это краткие ответы на ваши вопросы. Ес
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
export default {

    data() {
        return {
            distance: null,
            price: '',
            orderType: '',
            weight: null,
            shirina: null,
            visota: null,
            dlina: null,
            adress1: '',
            adress2: ''
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    async mounted() {
        for (let i = 0; i < 5; i++) {
            $(`#collapse${i}`).on("show.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.add('buttonActive')
            });
            $(`#collapse${i}`).on("hide.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.remove('buttonActive')
            });
        }

        setTimeout(() => {
            this.showMap = true;
        }, 50);
    },

    methods: {
        onDistanceUpdate(newDistance) {
            this.distance = newDistance;
        },
        adress1Update(newAdress1) {
            this.adress1 = newAdress1
        },
        adress2Update(newAdress2) {
            this.adress2 = newAdress2
        },
        getPrice() {

            if (this.distance) {
                const distance = Math.floor(this.distance.value)
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

                    }
                    else {
                        alert('Введите габариты и вес посылки')
                    }
                }


                if (this.orderType === 'Документы') {

                    let price = distance * perMeter + min

                    this.price = price


                }
            }
            else {
                alert('Постройте маршрут')
            }

        },

    },

    setup() {
        return {
            modules: [Autoplay],
        };
    },

}
</script>
<script setup>

useSeoMeta({
    title: 'JustDelivery | Главная',
    ogTitle: 'JustDelivery | Главная',
    description: 'Просто доставляем',
    ogDescription: 'Просто доставляем',
})


const coordinates = [55, 33];
const controls = ['fullscreenControl'];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
</script>

<style scoped>
.mobsliders {
    display: none;
}

.mobmap {
    display: none;
}

.mobmain {
    display: none;
}

.waytoway__mob {
    display: none;
}

.wayto__item {
    border: 3px solid #000000;
    padding: 20px 15px;
    margin-bottom: 10px;
}

.wayto__item h2 {
    font-family: var(--tab);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: #000;
}

.wayto__item p {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #000;
}

.error {
    border-color: red !important;
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
    transition: all .3s ease;
}

.waytoway button:hover {
    background: #000;
    color: #fff;
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

    font-family: var(--jur);
    font-weight: 700;
    font-size: 2.5vw;
    line-height: 106%;
    color: #FFFFFF;
    transition: all .3s ease;
}

.main__body button:hover {
    background: #fff;
    color: #000;
}

@media (max-width: 1450px) {
    .main {
        padding: 8vw 150px;
    }

    .order {
        padding: 3.75vw 150px;
    }

    .plusiall {
        padding: 3.927vw 150px;
    }

    .plusitext {
        padding: 0 120px 3.646vw 120px;
    }

    .text-container {
        font-size: 80px;
    }

    .ride {
        padding: 5vw 150px 5vw 150px;
    }

    .waytoway {
        padding: 0 150px 5vw;
    }

    .faq {
        padding: 0 150px;
    }
}

@media (max-width: 1400px) {
    .main {
        padding: 8vw 60px;
        display: flex;
        align-items: center;
    }

    .order {
        padding: 3.75vw 60px;
    }

    .plusiall {
        padding: 3.927vw 60px;
    }

    .plusi h1 {
        font-size: 30px;
    }

    .sliders img {
        height: 345px;
    }

    .ride {
        padding: 5vw 40px 10vw 50px;
    }

    .waytoway {
        padding: 0 60px 5vw;
    }

    .faq {
        padding: 0 60px;
    }
}

@media (max-width: 1180px) {
    .order {
        padding: 3.75vw 30px;
    }

    .order__total button {
        font-size: 30px;
    }

    .plusiall {
        padding: 3.927vw 30px;
    }

    .plusitext {
        padding: 0 25px 3.646vw 40px;
    }

    .ride {
        padding: 5vw 30px 10vw 0px;
    }

    .ride h1 {
        font-size: 50px;
    }

    .ride__right p {
        font-size: 18px;
    }

    .waytoway {
        padding: 0 30px 5vw;
    }

    .waytoway__body h1 {
        font-size: 27px;
    }

    .waytoway__body p {
        font-size: 18px;
    }

    .waytoway button {
        font-size: 30px;
    }

    .faq {
        padding: 0 30px;
    }

    .faqright h1 {
        font-size: 50px;
    }

    .faqblock a {
        font-size: 18px;
    }

    .card {
        font-size: 16px;
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

    .plusi img {
        display: none;
    }

    .plusi h1 {
        font-size: 26px;
        margin-bottom: 20px !important;
        text-align: center;
    }

    .plusitext {
        flex-direction: column;
    }

    .plusitext div {
        max-width: 100% !important;
        text-align: left !important;
        margin-bottom: 20px;
    }

    .plusi h2 {
        margin-bottom: 10px;
        color: #167EE7;
    }

    .text-container {
        font-size: 60px;
    }

    .sliders img {
        height: 250px;
    }

    .ride img {
        display: none;
    }

    .ride__right div {
        text-align: left !important;
    }

    .waytoway__body {
        display: none;
    }

    .waytoway__mob {
        display: block;
    }

    .ride {
        padding: 5vw 30px 5vw 0px;
    }

    .waytoway button {
        margin-top: 20px;
    }

    .faq .fat {
        display: none;
    }

    .faqright div {
        text-align: left !important;
    }

    .faqitem {
        margin-bottom: 15px;
    }

    .faqblock {
        margin-left: 0 !important;
        margin-top: 20px !important;
    }

}

@media (max-width: 768px) {
    .mobmain {
        display: block;
    }

    .pcmain {
        display: none;
    }

    .main__body div {
        justify-content: left !important;
    }

    .main__body button {
        border: 2px solid #fff;
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 106%;
        padding: 11px 21px;
    }

    .main {
        padding: 0 30px;
        display: flex;
        align-items: center;
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

    .plusi {
        padding: 40px 10px 30px;
    }

    .plusiall {
        padding: 0 !important;
    }

    .plusi h1 {
        font-size: 20px;
        margin-bottom: 30px !important;
    }

    .plusi h2 {
        font-size: 24px;
    }

    .plusi span {
        font-size: 16px;
    }

    .plusitext {
        padding: 0 10px;
    }

    .sliders {
        display: none;
    }

    .mobsliders {
        display: block;
    }

    .ride {
        padding: 30px 10px;
    }

    .ride__right {
        margin-left: 0;
    }

    .ride h1 {
        font-size: 24px;
    }

    .ride__right p {
        font-size: 16px;
    }

    .waytoway {
        padding: 0 10px;
    }

    .wayto__item p {
        font-size: 15px;
    }

    .waytoway button {
        font-weight: 700;
        font-size: 24px;
        padding: 11px 0;
        width: 100%;
        border: 2px solid #000;
    }

    .waytoway .text-center {
        padding: 0 14px;
    }

    .faq {
        padding: 30px 10px 0;
    }

    .faqright h1 {
        font-size: 24px;

    }

    .faqblock a {
        font-size: 15px;
        font-weight: 600;
    }

    .faqblock {
        margin-left: 10px !important;
    }
}</style>