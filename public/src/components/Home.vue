<template>
    <div class="home">
        <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
        <my-tunes class="my-tunes"></my-tunes>
        <itunes class="itunes"></itunes>
    </div>
</template>

<script>
    import Itunes from "@/components/Itunes"
    import MyTunes from "@/components/Mytunes"
    
    
    export default {
        name: 'home',
        data() {
            return {

            }
        },
        components: {
            Itunes,
            MyTunes
        }
    }
</script>


<style>
    .my-tunes {
        display: block;
        min-height: 500px;
        min-width: 50%;
        background: rgb(106, 138, 106);
    }

    .itunes {
        display: block;
        background: rgb(194, 116, 116);
        min-height: 500px;
        min-width: 45%;
    }
</style>