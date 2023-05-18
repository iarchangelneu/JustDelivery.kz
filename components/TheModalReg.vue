<template>
    <div class="modal fade" id="regModal" tabindex="-1" aria-labelledby="regModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" style="border-bottom: 0">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <img src="@/assets/img/modal1.png" class="img-fluid img1" alt="">
                    <div>
                        <h1>вы не зарегистрированы</h1>
                        <div class="d-flex justify-content-center">
                            <span>Для того, чтобы сделать заказ вам сначала нужно зарегистрироваться</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="/register">РЕГИСТРАЦИЯ</a>
                        </div>
                    </div>
                    <img src="@/assets/img/modal2.png" class="img-fluid img2" alt="">
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.modal-body a {
    padding: 19px 7.813vw;
    background: transparent;
    border: 3px solid #000000;
    border-radius: 0 !important;
    transition: all .3s ease;

    font-weight: 700;
    font-size: 2.5vw;
    line-height: 106%;
    font-family: var(--jur);
    color: #000;
    margin-top: 54px;
    display: block;
    max-width: 631px;
    z-index: 2;

}

.modal-body a:hover {
    text-decoration: none;
    background: #000;
    color: #fff;
}

.modal-body span {
    max-width: 537px;
    display: block;
    font-family: var(--jur);
    font-weight: 500;
    font-size: 1.875vw;
    line-height: 106%;
    color: #000;
    margin-top: 72px;
    z-index: 2;
}

.modal-body h1 {
    font-family: var(--tab);
    font-weight: 500;
    font-size: 2.5vw;
    line-height: 106%;
    color: #000;
    z-index: 2;
}

.modal-body {
    padding: 5.208vw 0 7.813vw;
    position: relative;
    border: 0;
}

.img1 {
    position: absolute;
    left: 0;
    top: 20%;
    z-index: 1;
}

.img2 {
    position: absolute;
    right: 0;
    top: 20%;
    z-index: 1;
}

@media (max-width: 1000px) {
    .modal-body a {
        padding: 19px 7.813vw;
        font-size: 32px;
    }

    .modal-body span {
        max-width: 537px;
        font-size: 22px;
    }

    .modal-body h1 {
        font-size: 27px;
    }

    .img1,
    .img2 {
        display: none;
    }
}

@media (max-width: 550px) {

    .modal-body a {
        padding: 19px 7.813vw;
        font-size: 25px;
        margin-top: 20px;
    }

    .modal-body span {
        max-width: 537px;
        font-size: 16px;
        margin-top: 20px;
    }

    .modal-body h1 {
        font-size: 20px;
    }

}

@media (max-width: 370px) {
    .modal-body a {
        padding: 12px 7.813vw;
        font-size: 20px;
        margin-top: 20px;
    }

    .modal-body span {
        max-width: 537px;
        font-size: 14px;
        margin-top: 20px;
    }

    .modal-body h1 {
        font-size: 18px;
    }
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 1039px;
        margin: 1.75rem auto;
        border: 0;
    }
}
</style>