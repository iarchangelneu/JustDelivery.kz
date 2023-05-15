<template>
    <footer>
        <div class="footer__body">
            <div class="d-flex justify-content-center align-items-center">
                <img src="@/assets/img/footerlogo.svg" class="img-fluid" alt="">
                <a href="/#orders">ЗАКАЗ КУРЬЕРА</a>
                <a href="/#faq">FAQ</a>
                <NuxtLink to="polytics">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</NuxtLink>
                <NuxtLink to="terms">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</NuxtLink>
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

@media (max-width: 1400px) {
    .footer__body a {
        font-size: 16px;
        margin-right: 20px;
    }
}

@media (max-width: 1180px) {
    .footer__body a:nth-child(2) {
        margin-left: 30px;
    }

    .footer__body a {
        font-size: 14px;
    }

    .footer__body span {
        font-size: 12px;
    }
}

@media (max-width: 1023px) {

    .footer__body div {
        flex-direction: column;
        justify-content: left !important;
        align-items: start !important;
        text-align: left !important;
    }

    .footer__body img {
        max-width: 52px;
    }

    .footer__body {
        padding: 21px;
    }

    .footer__body a:nth-child(2) {
        margin-left: 0;
        margin-top: 20px;
    }

    .footer__body a {
        font-size: 16px;
        margin-bottom: 20px;
    }
}

@media (max-width: 768px) {
    footer {
        padding: 0px 10px 10px;
    }
}
</style>