<template>
    <footer>
        <div class="footer__body">
            <div class="d-flex justify-content-center align-items-center">
                <img src="@/assets/img/footerlogo.svg" alt="">
                <a href="">ЗАКАЗ КУРЬЕРА</a>
                <a href="">FAQ</a>
                <a href="">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                <a href="">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</a>
            </div>

            <div class="text-center">
                <span>ТОО «Нейтрон», г. Алматы, пр-кт Республики 13, Почтовый индекс A15X3C5 (050013), +7 700 557 57 09,
                    БИН 210840016943</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer__body span {
    font-family: var(--jur);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
}

.footer__body a {
    font-family: var(--jur);
    font-weight: 600;
    font-size: 20px;
    line-height: 106%;
    color: #fff;
    margin-right: 57px;
}

.footer__body a:nth-child(5) {
    margin-right: 0;
}

.footer__body a:nth-child(2) {
    margin-left: 95px;
}

footer {
    padding: 0 18px 18px;
}

.footer__body {
    background: #167EE7;
    border-radius: 20px;
    width: 100%;
    padding: 21px 0;
}
</style>