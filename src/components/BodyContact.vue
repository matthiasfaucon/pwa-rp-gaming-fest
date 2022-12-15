<template>
  <section>
    <div class="contenus">
      <div class="left">
        <div>
          <h1>Nous contacter</h1>
          <p>Bonjour aventurier, tu as un soucis... avec le site, l'organisation de l'événement ou bien tu as besoin de
            plus de détails.</p>
          <p>Ou bien tu veux simplement nous faire part de ton ressenti, de tes envies, ou bien encore de ta joie pour
            la création de cette événement.</p>
          <p>Alors surtout n'hésite pas, nous essaierons de répondre, au plus de demandes et nous nous ferons un réel
            plaisir de lire vos messages</p>
        </div>
        <button>
          <p>Nous contacter</p>
        </button>
      </div>
      <div class="right">
        <img src="@/assets/photos_site/contact.jpeg" />
      </div>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
</script>
  
  
<style scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: 77vh;
  padding: 2rem;
}

h1{
  margin-bottom: 1rem;
}

section div.contenus {
  display: flex;
  width: 95%;
}

section div .left {
  box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
  width: 50%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  row-gap: 2rem;
  flex-direction: column;
  border-radius: 10px 0 0 10px;
  text-align: justify;
}

section div .right {
  box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
  width: 50%;
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  border-radius: 0 10px 10px 0;
}

section div .right img{
  background-size: cover;
  border-radius: 0 10px 10px 0;
  height: 100%;
}

button {
  box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
  width: max-content;
  padding: 0.8rem;
  border-radius: 20px;
  outline: none;
  border: none;
  background: var(--main_color-lt);
  color: var(--second_text_color-lt);
}

button h2 {
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
}

@media screen and (max-width: 1024px){
  section div.contenus {
    display: flex;
    flex-direction: column;
    width: 80%; 
  }

  section div.contenus .right {
    display: none;
  }

  section div.contenus .left {
    display: flex;
    flex-direction: column;
    width: 100%; 
  }
}
</style>
  