<template>
  <div>
    <h1>Juego Rapido</h1>

      <button @click="showAlert">Hell</button>
  

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