<template>
<div>
  <a href="/Categorias">
<button class="btn">
  <div>
   
  </div>
</button>
  </a>
  <div>
    <h1>Juego Rapido</h1>

      <button @click="showAlert">Hell</button>
  

  </div>
</div>

</template>

<script>

export default {
   methods: {
    showAlert() {
   
            Swal.fire({
                    title: "Perdiste",
                                      confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
      

    },
  },
}
</script>
<style>

.btn
{
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    display: block;
    width: 240px;
    padding: 40px;
    margin: 0 auto;
    border: 0;
    cursor: pointer;
    border-radius: 2px;
    transform: translateY(-50%);
    box-shadow: 0 10px 20px -5px #94a6af;
    overflow: hidden;
}

.btn:before, .btn:after
{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.btn:before
{
    transform: scale(1);
    background-image: url('https://himalayasingh.github.io/button-hover-effect-1/img/bg.jpg');
    background-size: cover;
    transition: 0.3s ease transform;
    z-index: 1;
}

.btn:after
{
    background-color: #000;
    opacity: 0.16;
    z-index: 2;
}

.btn div
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
}

.btn div:before, .btn div:after
{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: #fff;
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    padding: 25px 0;
    transition: 0.3s ease all;
}

.btn div:before
{
    content: "JUEGA";
    letter-spacing: 0;
    opacity: 1;
    transform: scale(1);
}

.btn div:after
{
    content: "AHORA";
    letter-spacing: -10px;
    transform: scale(0);
    opacity: 0;
}

.btn:hover:before
{
    transform: scale(1.3);
}

.btn:hover div:before
{
    letter-spacing: 3px;
    opacity: 0;
    transform: scale(4);
}

.btn:hover div:after
{
    letter-spacing: 0;
    opacity: 1;
    transform: scale(1);
}
</style>
