<template>


<object data="/AKASHNO.pdf" type="application/pdf" class="h-screen w-screen" >
    <p>It appears you don't have a PDF plugin for this browser.
    No biggie... you can <a href="../assets/AKASHNO.pdf" download>click here to
    download the PDF file.</a></p>
</object>

</template>

<script>
import pdf from 'vue3-pdf'
export default {
    name:'Resume',
    components:{
        pdf
    }
}
</script>

<style>

</style>