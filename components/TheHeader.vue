<template>
    <header>
        <div class="pc__header d-flex align-items-center justify-content-between">
            <img src="@/assets/img/headerlogo.svg" alt="">

            <div>
                <a href="">ЗАКАЗ КУРЬЕРА</a>
                <a href="">О КОМПАНИИ</a>
            </div>

            <div class="dropdown" v-if="logOn">
                <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Александр Иванов
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Личный кабинет</a>
                    <a class="dropdown-item" href="#">Выход</a>
                </div>
            </div>

            <div v-else>
                <a href="">ВОЙТИ</a>
                <a href="">РЕГИСТРАЦИЯ</a>
            </div>

        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            logOn: false,
        }
    }
}
</script>
<style scoped>
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
</style>