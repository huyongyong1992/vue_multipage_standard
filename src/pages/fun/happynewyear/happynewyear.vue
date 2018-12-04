<template>
    <div>
        <div v-for="item in 299" :key="item" :class="`lights light-${item}`"></div>
        
        <div v-for="items in 7" :key="items+1000" :class="`merry-chrismas merry-chrismas-${items}`"></div>
        
        <footer>
            design by Young
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @import './happynewyear.less';
    footer{
        position: fixed;
        bottom: 10px;
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #ccc;
    }
</style>
