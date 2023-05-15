<template>
    <div class="about">
        <div class="sps_za_design">
            <div class="about__title text-center">
                <h1>О компании</h1>
            </div>
            <div class="text-center">
                <img src="@/assets/img/companytitle.png" class="img-fluid" alt="">
            </div>
        </div>

        <div class="about__block">
            <div class="text-left">
                <h1 class="sps_za_design2">Наши ценности</h1>
            </div>
            <div class="about__body d-flex">
                <img src="@/assets/img/about.png" class="img-fluid" alt="">
                <div class="text-center">
                    <h1 class="sps_za_design3">Наши ценности</h1>
                </div>
                <div class="text-left ml-5">
                    <div class="mb-5">
                        <h1>просто</h1>
                        <p>Мы ценим простоту получения повседневных услуг, поэтому мы максимально упростили процесс заказа
                            курьера — всего несколько кликов и курьер у вас!</p>
                    </div>
                    <div class="mb-5">
                        <h1>качественно</h1>
                        <p>Мы уделяем большое внимание качеству нашей работы. Наши курьеры — профессионалы своего дела,
                            которые заботятся о сохранности вашего груза и готовы пройти дополнительный километр,
                            чтобы убедиться, что все идёт гладко.</p>
                    </div>
                    <div>
                        <h1>удобно</h1>
                        <p>Мы предлагаем наиболее удобный вариант заказа и оплаты. Мы также готовы предоставить
                            индивидуальные услуги и решить любые задачи, связанные с доставкой, напишите нам в jivo,
                            если есть вопросы.</p>
                    </div>
                </div>

            </div>
            <div class="text-center">
                <button>РАССЧИТАТЬ СТОИМОСТЬ</button>
            </div>
        </div>
    </div>
</template>
<script setup>
useSeoMeta({
    title: 'JustDelivery | О Компании',
    ogTitle: 'JustDelivery | О Компании',
    description: 'Просто доставляем О Компании',
    ogDescription: 'Просто доставляем О Компании',
})
</script>
<style scoped>
.sps_za_design3 {
    display: none;
}

.about__block button {
    margin-top: 72px;
    padding: 19px 32px;
    border: 3px solid #000000;
    background: transparent;

    font-family: var(--jur);
    font-weight: 700;
    font-size: 48px;
    line-height: 106%;
    color: #000;
    transition: all .3s ease;
}

.about__block button:hover {
    background: #000;
    color: #fff;
}

.about__body p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    font-family: var(--jur);
    color: #000;
    margin-top: 15px;
}

.about__body {
    margin-top: 72px;
}

.about__block {
    margin-top: 72px;
}

.about {
    padding: 9.75vw 16.146vw 3.75vw;
}

.about h1 {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: #000;
}

@media (max-width: 1500px) {
    .about {
        padding: 9.75vw 150px 3.75vw;
    }

    .about__body img {
        max-width: 50% !important;
    }
}

@media (max-width: 1250px) {
    .about__body img {
        max-width: 50% !important;
        height: 500px;
    }

    .about {
        padding: 9.75vw 60px 3.75vw;
    }
}

@media (max-width: 768px) {
    .about {
        padding: 15.75vw 0 3.75vw;
    }

    .about__body {
        display: block !important;
        margin-top: 0 !important;
    }

    .about__body img {
        width: 100%;
        height: auto;
        max-width: 100% !important;
    }

    .sps_za_design {
        padding: 20px 10px 10px;
    }

    .sps_za_design2 {
        display: none;
    }

    .sps_za_design3 {
        display: block;
        font-weight: 500 !important;
        font-size: 20px !important;
        line-height: 130% !important;
        color: #000 !important;
        margin-top: 10px;
    }

    .about__block {
        margin-top: 0;
    }

    .about h1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 106%;
        color: #167EE7;
    }

    .about__body p {
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    }

    .about__body .text-left div {
        margin-bottom: 20px !important;
    }

    .about__body .text-left {
        margin-left: 0 !important;
        padding: 0 10px;
    }

    .about__block button {
        margin-top: 40px;
        border: 2px solid #000;
        padding: 11px 0;
        width: 100%;
        font-weight: 700;
        font-size: 24px;
        line-height: 106%;
    }

    .about__block .text-center {
        padding: 0 32px;
    }

    .about__title h1 {
        color: #000;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
    }

    .about__title {
        text-align: left !important;
    }
}
</style>