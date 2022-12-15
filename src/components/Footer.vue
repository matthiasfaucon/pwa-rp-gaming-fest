<template>
    <section>
        <div class="footer">
            <a href=""><img src="@/assets/facebook.png"/></a>
            <a href=""><img src="@/assets/instagram.png"/></a>
            <a href=""><img src="@/assets/twitter.png"/></a>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    background-color: var(--text_color-lt);
    height: 15vh;
}


.footer {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    width: 75%;
}

.footer a {
    display: flex;
    height: 100%;
    align-items: center;
}

.footer a img {
    height: 40%;
}
</style>