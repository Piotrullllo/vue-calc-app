<template>
    <button @click="$emit('btnInfo', this.text, this.btnType)" :class="btnClass">{{text}}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            btnClass: String,
            btnCode: String,
            btnType: String,
            text: String
        },
        mounted() {
            window.addEventListener('keyup', e => {
                e.preventDefault();
                if(this.btnCode == e.keyCode){     
                    this.$emit('btnInfo', this.text, this.btnType);
                }
            })
        },
        emits: ['btnInfo']
    }
</script>

<style scoped>
    button{
        font-size: 24px;
        border: 1px solid #333;
        color: white;
        border-radius: 5px;
        margin: 5px;
        text-align: center;
    }
    .small-btn, .medium-btn, .big-btn{
        background-color: rgba(255,255,255,0.3);
        transition: background .15s;
    }
    .small-btn:hover, .medium-btn:hover, .big-btn:hover, .active{
        background-color: rgba(255,255,255,0.6);
    }
    .red-btn{
        background-color: rgba(255,0,0,0.4);
        transition: background .15s;
    }
    .red-btn:hover{
        background-color: rgba(255,0,0,0.8);
    }
    .small-btn, .red-btn{
        width: 17%;
        padding: 10px 0;
    }
    .medium-btn{
        width: 22%;
        padding: 6px 0;
    }
    .big-btn{
        width: 30%;
        padding: 6px 0;
    }
</style>