<template>
    <div class="profile" v-if="isAuth == 'true'">
        <div class="text-center">
            <h1>личный кабинет</h1>
        </div>
        <div class="profile__info d-flex justify-content-between align-items-baseline">
            <div class="acc">
                <div class="d-flex align-items-center mb-3">
                    <p class="mb-0">Email:</p>
                    <span>&nbsp;{{ userEmail }}</span>
                </div>

            </div>
            <div class="name">
                <h2 class="mb-0 mt-0">{{ userName }}</h2>
            </div>
        </div>

        <div class="profile__body">
            <div class="profile__links">
                <div class="d-flex link">
                    <h3 @click="showBlock1">
                        Активные заказы
                        <div class="underline" :class="[{ 'hovered': block1Visible }]"></div>
                    </h3>
                    <h3 @click="showBlock2">
                        История заказов
                        <div class="underline" :class="[{ 'hovered': block2Visible }]"></div>
                    </h3>
                </div>
            </div>

            <div class="orders__body">
                <transition name='fade'>
                    <div class="active__orders" v-if="block1Visible">
                        <div class="order__body" v-for="(order, index) in orders" :key="order.order_id"
                            v-show="order.archived == 0">

                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <!-- <small> {{ index }}.</small> -->
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <img src="@/assets/img/pointA.svg" alt="">
                                            <span>{{ order.address_from }}</span>
                                        </div>
                                        <div class="d-flex align-items-center mt-4">
                                            <img src="@/assets/img/pointB.svg" alt="">
                                            <span>{{ order.address_to }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="mb-0">{{ order.created_at }}</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-end mt-5">

                                <div v-if="!timerStopped" class="d-flex align-items-center ml-3 mb-3">
                                    <small>&nbsp;</small>
                                    <img src="@/assets/img/timer.svg" alt="">
                                    <span>Поиск курьера (0:{{ timeLeft }})</span>
                                </div>
                                <div v-else class="d-flex align-items-center ml-3 mb-3">
                                    <small>&nbsp;</small>
                                    <img src="@/assets/img/kur.svg" alt="">
                                    <span>Курьер в пути к отправителю</span>
                                </div>

                                <div class="price">
                                    {{ Math.floor(order.cost) }} ₸
                                    <button @click="cancelOrder(order.order_id)">ОТМЕНИТЬ ЗАКАЗ</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>

                <transition name="fade">
                    <div class="active__orders" v-if="block2Visible">
                        <div class="order__body" v-for="(order, index) in orders" :key="order.order_id"
                            v-show="order.archived == 1">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <!-- <small>{{ index + 1 }}.</small> -->
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <img src="@/assets/img/pointA.svg" alt="">
                                            <span>{{ order.address_from }}</span>
                                        </div>
                                        <div class="d-flex align-items-center mt-4">
                                            <img src="@/assets/img/pointB.svg" alt="">
                                            <span>{{ order.address_to }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="mb-0">{{ order.created_at }}</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-5">

                                <div class="d-flex align-items-center ml-3">
                                    <small>&nbsp;</small>
                                    <img src="@/assets/img/canc.svg" alt="">
                                    <span class="cancel">Заказ Отменен</span>
                                </div>


                                <div class="price">
                                    {{ order.cost }} ₸
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="mobhr"></div>
        <div class="mobprof">

            <div>
                <a class="" data-toggle="collapse" href="#collapse0" role="button" aria-expanded="false"
                    aria-controls="collapse0">
                    Активные заказы
                    <img src="@/assets/img/arrowlc.svg" id="faqbtn0" class="ml-2" alt="">
                </a>
                <div class="collapse" id="collapse0">
                    <div class="card card-body" v-for="order in orders" :key="order.order_id" v-show="order.archived == 0">
                        <span class="mb-4 mt-4">{{ order.created_at }}</span>

                        <div class="d-flex align-items-center mb-4">
                            <img src="@/assets/img/pointA.svg" alt="">
                            <p class="mb-0 ml-3">{{ order.address_from }}</p>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <img src="@/assets/img/pointA.svg" alt="">
                            <p class="mb-0 ml-3">{{ order.address_to }}</p>
                        </div>
                        <div v-if="!timerStopped" class="d-flex align-items-center">
                            <img src="@/assets/img/timer.svg" alt="">
                            <span class="ml-3">Поиск курьера (0:{{ timeLeft }})</span>
                        </div>
                        <div v-else class="d-flex align-items-center">
                            <img src="@/assets/img/kur.svg" alt="">
                            <span class="ml-3">Курьер в пути к отправителю</span>
                        </div>
                        <div class="d-flex justify-content-end mt-4 price">
                            <small>{{ order.cost }} ₸</small>
                            <button @click="cancelOrder(order.order_id)">ОТМЕНИТЬ ЗАКАЗ</button>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <a class="" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false"
                    aria-controls="collapse1">
                    История заказов
                    <img src="@/assets/img/arrowlc.svg" id="faqbtn1" class="ml-2" alt="">
                </a>
                <div class="collapse" id="collapse1">
                    <div class="card card-body" v-for="(order, index) in orders" :key="order.order_id"
                        v-show="order.archived == 1">

                        <span class="mb-4 mt-4">{{ order.created_at }}</span>

                        <div class="d-flex align-items-center mb-4">
                            <img src="@/assets/img/pointA.svg" alt="">
                            <p class="mb-0 ml-3">{{ order.address_from }}</p>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <img src="@/assets/img/pointA.svg" alt="">
                            <p class="mb-0 ml-3">{{ order.address_to }}</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="@/assets/img/canc.svg" alt="">
                            <p class="cancel ml-4 mb-0">Заказ отменен</p>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <small>{{ order.cost }} ₸</small>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import global from '~/mixins/global';
export default {
    mixins: [global],
    data() {
        return {
            block1Visible: true,
            block2Visible: false,
            timerStopped: false,
            timeLeft: 0,
            timer: null,
            orders: [],
            counter: 0,
        }
    },
    computed: {
        indexedOrders() {
            let index = 1;
            const indexedOrders = {
                archived1: [],
                archived0: []
            };

            this.orders.forEach((order) => {
                if (order.archived === 1) {
                    indexedOrders.archived1.push({
                        ...order,
                        index: index++
                    });
                } else if (order.archived === 0) {
                    indexedOrders.archived0.push({
                        ...order,
                        index: index++
                    });
                }
            });

            return indexedOrders;
        }
    },

    methods: {

        showBlock1() {
            if (!this.block1Visible) {
                this.block1Visible = true;
                this.block2Visible = false;
            }
        },
        showBlock2() {
            if (!this.block2Visible) {
                this.block1Visible = false;
                this.block2Visible = true;
            }
        },
        getOrder() {
            const path = "https://justdelivery.kz/api/user_orders";

            axios
                .post(path, { email: this.userEmail })

                .then((res) => {
                    this.orders = res.data
                    console.log(res)

                })
                .catch((error) => {
                    console.error(error);
                    alert('Ошибка')
                });
        },
        cancelOrder(order) {
            const path = "https://justdelivery.kz/api/archive_order";

            axios
                .post(path, { order_id: order })

                .then((res) => {
                    if (res.data == 'Success') {
                        this.getOrder()
                    }

                })
                .catch((error) => {
                    console.error(error);
                    alert('Ошибка')
                });
        },
    },
    mounted() {
        console.log(this.filteredOrders)
        this.getOrder()
        if (this.isAuth == 'false') {
            window.location.href = '/register'
        }


        for (let i = 0; i < 2; i++) {
            $(`#collapse${i}`).on("show.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.add('buttonActive')
            });
            $(`#collapse${i}`).on("hide.bs.collapse", function () {
                document.querySelector(`#faqbtn${i}`).classList.remove('buttonActive')
            });
        }


        // Генерация случайного времени для остановки таймера
        const stopTime = Math.floor(Math.random() * (60 - 10 + 1) + 10) * 1000;

        // Таймер, отсчитывающий до 60 секунд
        this.timer = setInterval(() => {
            if (!this.timerStopped) {
                if (this.timeLeft < 60) {
                    this.timeLeft++;
                } else {
                    clearInterval(this.timer);
                    this.timerStopped = true;
                }
            }
        }, 1000);

        // Остановка таймера через сгенерированное случайное время
        setTimeout(() => {
            clearInterval(this.timer);
            this.timerStopped = true;
        }, stopTime);
    },
}

</script>
<script setup>
useSeoMeta({
    title: 'JustDelivery | Личный Кабинет',
    ogTitle: 'JustDelivery | Личный Кабинет',
    description: 'Просто доставляем Личный Кабинет',
    ogDescription: 'Просто доставляем Личный Кабинет',
})
</script>
<style scoped>
.buttonActive {
    transform: rotate(90deg);
}

#faqbtn1,
#faqbtn0 {
    transition: all .3s ease;
}

.card p {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #000;
}

.card small {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    font-family: var(--jur);
    color: #000;
}

.card span {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #000;
}

.mobhr {
    width: 100%;
    border: 1px solid #167EE7;
}

.mobprof {
    display: none;
    padding: 23px 0 10px;
}

.card {
    background-color: transparent !important;
    border: 0;
    border-radius: 0;
    padding: 0;
}

.card hr {

    width: 100%;
    height: 1px;
    opacity: 0.3;
    background: #000;
}

.mobprof a {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-family: var(--jur);
    color: #000;
}

.mobprof a:hover {
    text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.orders__body {
    position: relative;
}

.active__orders {
    transition: opacity .3s ease;
}

.active {
    display: block;
    opacity: 1;
}

.price {
    font-family: var(--jur);
    font-weight: 500;
    font-size: 48px;
    line-height: 130%;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
}

.price button {
    font-family: var(--jur);
    padding: 11px 29px;
    background: transparent;
    border: 3px solid #000000;

    font-weight: 700;
    font-size: 32px;
    line-height: 106%;
    color: #000;
    margin-top: 20px;
    transition: all .3s ease;
}

.price button:hover {
    background: #000;
    color: #fff;
}

.order__body p {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
    color: #000;
}

.order__body span {
    font-weight: 500;
    font-size: 32px;
    line-height: 130%;
    font-family: var(--jur);
    color: #000000;
    margin-left: 27px;
}

.complete {
    color: #0FC100 !important;
}

.cancel {
    color: #DB0000 !important;
}

.order__body small {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: #000;
    margin-right: 40px;
}

.order__body {
    padding: 45px 0;
    border-bottom: 1px solid #000000;
}

.order__body:LAST .underline {
    position: absolute;
    bottom: -1%;
    left: 0;
    z-index: 10000;
    width: 0;
    border-bottom: 3px solid #167EE7;
    transition: all .5s ease;
}

.hovered {
    width: 100%;
}

.profile__links h3 {
    font-family: var(--jur);
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #000;
    margin: 0;
    padding-bottom: 11px;
    cursor: pointer;
    position: relative;
}

.profile__links h3:nth-child(1) {
    margin-right: 54px;
}

.profile__links {
    border-bottom: 1px solid #000000;
    margin-top: 36px;
}

.name h2 {
    font-family: var(--jur);
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    color: #000;
}

.profile__info {
    margin-top: 72px;
}

.acc p,
.acc span {
    font-weight: 600;
    font-size: 32px;
    line-height: 106%;
    font-family: var(--jur);
    color: #000000;
}

.profile h1 {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: #000;
}

.profile {
    padding: 9.813vw 16.406vw 3.438vw;
}

@media (max-width: 1400px) {
    .profile {
        padding: 9.813vw 150px 3.438vw;
    }
}

@media (max-width: 1250px) {
    .profile {
        padding: 9.813vw 90px 3.438vw;
    }
}

@media (max-width: 1150px) {
    .profile__info {
        flex-direction: column-reverse;
    }

    .name h2 {
        margin-bottom: 15px !important;
    }
}

@media (max-width: 1023px) {
    .price button {
        font-size: 20px;
    }

    .profile {
        padding: 12.813vw 60px 3.438vw;
    }

    .order__body span {
        font-size: 27px;
    }

    .price {
        font-size: 38px;
    }

    .order__body span {
        font-size: 22px;
    }

    .name h2 {
        font-size: 38px;
    }

    .acc p,
    .acc span {
        font-size: 26px;
    }

    .profile h1 {
        font-size: 26px;
    }

    .profile__links h3 {
        font-size: 24px;
    }
}

@media (max-width: 768px) {
    .profile__body {
        display: none;
    }

    .mobprof {
        display: block;
    }

    .profile {
        padding: 20.813vw 10px 0;
    }

    .profile .text-center {
        text-align: left !important;
    }

    .profile h1 {
        font-size: 24px;
        margin-bottom: 0;
    }

    .profile__info {
        margin-top: 0px;
    }

    .name h2 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px !important;
    }

    .acc div {
        margin-bottom: 20px !important;
    }

    .acc p,
    .acc span {
        font-weight: 600;
        font-size: 16px;
    }
}
</style>