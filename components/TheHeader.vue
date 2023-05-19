<template>
    <header>
        <div class="pc__header d-flex align-items-center justify-content-between">
            <a href="/">
                <img src="@/assets/img/headerlogo.svg" alt="">
            </a>

            <div>
                <a href="/#order">ЗАКАЗ КУРЬЕРА</a>
                <NuxtLink to="/company">
                    О КОМПАНИИ
                </NuxtLink>
            </div>

            <div class="dropdown" v-if="isAuth == 'true'">
                <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    {{ userName }}
                </button>
                <div class="dropdown-menu">
                    <NuxtLink class="dropdown-item" to="/profile">Личный кабинет</NuxtLink>
                    <NuxtLink class="dropdown-item" @click="logOut()" style="cursor: pointer;">Выход</NuxtLink>
                </div>
            </div>

            <div v-else>
                <NuxtLink to="/login" style="margin-right:40px">
                    ВОЙТИ
                </NuxtLink>
                <NuxtLink to="/register">
                    РЕГИСТРАЦИЯ
                </NuxtLink>
            </div>

        </div>
        <div class="mobile__header">
            <div class="d-flex justify-content-between align-items-center pb-3">
                <a href="/">
                    <img src="@/assets/img/logomob.svg" class="pt-4" alt="">
                </a>

                <div>
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                    <ul class="menu__box">

                        <div class="">

                            <div class="menu__links" v-if="isAuth == 'true'">
                                <h1>{{ userName }}</h1>
                                <NuxtLink to="/profile" style="font-size: 16px;">Личный кабинет</NuxtLink>
                                <a @click="logOut()" class="mt-3" style="font-size: 16px; cursor: pointer;">Выйти</a>
                            </div>
                            <div class="menu__links" v-else>
                                <NuxtLink to="/login">ВОЙТИ</NuxtLink>
                                <NuxtLink to="/register">РЕГИСТРАЦИЯ</NuxtLink>
                            </div>
                        </div>
                        <div class="menu__contacts">
                            <a href="/#order" class="mb-4">ЗАКАЗ КУРЬЕРА</a>
                            <NuxtLink to="/company">О КОМПАНИИ</NuxtLink>

                        </div>

                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import global from '~/mixins/global';
export default {
    mixins: [global],
    data() {
        return {

        }
    },
    methods: {
        logOut() {
            localStorage.setItem('isLogin', false)
            localStorage.setItem('token', '')
            window.location.href = '/login'
        }
    }
}
</script>
<style scoped>
.mobile__header {
    display: none;
    position: fixed;
    width: 100%;
    padding: 0 20px 0 20px;
    z-index: 100000;
    background: #167EE7;
}

.mobile__header label {
    margin-bottom: 0;
}

.menu__links {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding-left: 20px;
}

.menu__links h1 {
    font-family: var(--jur);
    font-weight: 600;
    font-size: 20px;
    line-height: 106%;
    color: #fff;
    margin-bottom: 24px;
}

.mobile__header a {
    font-family: var(--sf);
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #fff;
}

.mobile__header span {
    color: #FFEC00;
}

.mobile__header a:hover {
    text-decoration: none;
    color: #fff;
}

.menu__links a {
    font-family: var(--jur);
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #fff;
    margin-bottom: 20px;
}

.menu__links a:nth-child(2) {
    margin-bottom: 0;
}

.menu__links a:hover {
    text-decoration: none;
    color: #fff;
}

#menu__toggle {
    opacity: 0;
}

.menu__contacts {
    padding-left: 20px;
    margin-top: 70px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #fff;
}

.menu__contacts h4 {
    font-family: var(--jur);
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
}

.helink {
    margin-bottom: 20px;
}

.menu__contacts a {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    font-family: var(--jur);
    color: #fff;
    text-transform: uppercase;
}

.menu__contacts a:hover {
    color: #fff;
}

.menu__btn {
    display: flex;
    /* используем flex для центрирования содержимого */
    align-items: center;
    /* центрируем содержимое кнопки */
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 100000000;
    color: #fff;
    position: relative;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
}

.menu__btn>span {
    background-color: #FFEC00;
}

.menu__btn>span::before {
    content: '';
    top: -8px;
}

.menu__btn>span::after {
    content: '';
    top: 8px;
}

.menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 65%;
    height: 100%;
    margin: 0;
    padding: 20px 0;
    list-style: none;
    text-align: left;
    background: #167EE7;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
    z-index: 100000;
}


/* элементы меню */
.menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: var(--jur);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    z-index: 100000;
}

.menu__item:hover {
    background-color: #CFD8DC;
}

#menu__toggle:checked~.menu__btn>span {
    transform: rotate(45deg);
}

#menu__toggle:checked~.menu__btn>span::before {
    top: 0;
    transform: rotate(0);
    background-color: #fff;
}

#menu__toggle:checked~.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
    background-color: #fff;
}

#menu__toggle:checked~.menu__box {
    visibility: visible;
    right: 0;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    transition-duration: .25s;
}

.menu__box {
    transition-duration: .25s;
    z-index: 100000;
}

.menu__item {
    transition-duration: .25s;
}

.dropdown button {
    background: transparent;
    border: 0;

    font-family: var(--jur);
    font-weight: 500;
    font-size: 24px;
    line-height: 106%;
    color: #fff;
}

.pc__header a {
    font-family: var(--jur);
    font-weight: 500;
    font-size: 24px;
    line-height: 106%;
    color: #fff;
    margin-right: 103px;
}

.dropdown-menu a {
    color: #000;
    font-size: 17px;
    border-bottom: 1px solid gray;
    padding: 12px;
}

.dropdown-menu a:nth-child(2) {
    border-bottom: 0;
}

.dropdown-menu {
    width: 100%;
}

.pc__header a:nth-child(2) {
    margin-right: 0;
}

.pc__header {
    padding: 2.083vw 16.406vw;
    position: fixed;
    width: 100%;
    background: #167EE7;
    z-index: 1000;
}

@media (max-width: 1450px) {
    .pc__header {
        padding: 2.083vw 150px;
    }
}

@media (max-width: 1400px) {
    .pc__header {
        padding: 2.083vw 60px;
    }
}

@media (max-width: 1180px) {
    .pc__header a {
        font-size: 16px;
    }
}

@media (max-width: 1023px) {
    .pc__header {
        padding: 2.083vw 30px;
    }

    .pc__header a {
        margin-right: 20px;
    }
}

@media (max-width: 768px) {
    .pc__header {
        display: none !important;
    }

    .mobile__header {
        display: block;
    }
}
</style>