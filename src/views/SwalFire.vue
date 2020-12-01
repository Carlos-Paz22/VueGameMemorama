<template>
  <div>
    <h1>SwalFire</h1>

      <button @click="showAlert">Hell</button>
  

  </div>
</template>

<script>

export default {

    name: 'Prueba',
   methods: {
    showAlert() {
   
            Swal.fire({
                    title: "Perdiste",
                                      confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then( this.$router.push("/"))
              
      

    },
  },
}
</script>