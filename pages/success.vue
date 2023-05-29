<template>
    <div class="success">
        <div class="text-center">
            <h1>ВЫ УСПЕШНО<br> РАЗМЕСТИЛИ ЗАКАЗ!</h1>
            <div class="d-flex justify-content-center">
                <p>Статус заказа вы можете увидеть в «Личном кабинете»</p>
            </div>
            <NuxtLink to="/profile">ЛИЧНЫЙ КАБИНЕТ</NuxtLink>
        </div>
    </div>
</template>
<script setup>

useSeoMeta({
    title: 'JustDelivery | Оплата прошла успешно',
    ogTitle: 'JustDelivery |  Оплата прошла успешно',
    description: 'Просто доставляем',
    ogDescription: 'Просто доставляем',
})
</script>

<style scoped>
.success a {
    border: 3px solid #000000;
    padding: 19px 1.51vw;

    font-family: var(--jur);
    font-style: normal;
    font-weight: 700;
    font-size: 2.5vw;
    line-height: 106%;
    color: #000;
    transition: all .3s ease;
}

.success a:hover {
    background: #000;
    color: #fff;
    text-decoration: none;
}

.success p {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 500;
    font-size: 1.875vw;
    line-height: 106%;
    color: #000;
    max-width: 537px;
    margin-top: 50px;
    margin-bottom: 60px;
}

.success h1 {
    font-family: var(--tab);
    font-style: normal;
    font-weight: 500;
    font-size: 2.5vw;
    line-height: 106%;
    color: #000;
}

.success {
    padding: 9.75vw 16.146vw 3.75vw;
}

@media (max-width: 1024px) {
    .success {
        padding: 15.75vw 16.146vw 3.75vw;
    }
}

@media (max-width: 768px) {
    .success {
        padding: 20.75vw 16.146vw 3.75vw;
    }

    .success p {
        font-size: 16px;
    }

    .success h1 {
        font-size: 20px;
    }

    .success a {
        font-size: 20px;
        padding: 10px 15px;
    }
}
</style>