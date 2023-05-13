<template>
    <div class="profile">
        <div class="text-center">
            <h1>личный кабинет</h1>
        </div>
        <div class="profile__info d-flex justify-content-between align-items-baseline">
            <div class="acc">
                <div class="d-flex align-items-center mb-3">
                    <p class="mb-0">Email:</p>
                    <span>&nbsp;alexivanov@gmail.com</span>
                </div>
                <div class="d-flex align-items-center">
                    <p class="mb-0">Номер телефона:</p>
                    <span>&nbsp;Нет</span>
                </div>
            </div>
            <div class="name">
                <h2 class="mb-0 mt-0">Александр Иванов</h2>
            </div>
        </div>

        <div class="profile__body">
            <div class="profile__links">
                <div class="d-flex link">
                    <h3 @click="activeLink = 1">
                        Активные заказы
                        <div class="underline" :class="[{ 'hovered': activeLink == 1 }]"></div>
                    </h3>
                    <h3 @click="activeLink = 2">
                        История заказов
                        <div class="underline" :class="[{ 'hovered': activeLink == 2 }]"></div>
                    </h3>
                </div>
            </div>

            <div class="profile__body">
                <div class="active__orders">
                    <div class="order__body">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <small>1.</small>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <img src="@/assets/img/pointA.svg" alt="">
                                        <span>Улица Розыбакиева, 92</span>
                                    </div>
                                    <div class="d-flex align-items-center mt-4">
                                        <img src="@/assets/img/pointB.svg" alt="">
                                        <span>Улица Жумалиева, 159</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="mb-0">24.04.2023</p>
                                <p class="mb-0">15:20:38</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeLink: 1,
        }
    }
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
    border-bottom: 1px solid rgba(0, 0, 0, .3);
}

.underline {
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
</style>