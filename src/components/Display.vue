<template>
    <form @submit="onSubmit" class="display-form">
    <Widget :color="toggleMemory ? 'White' : '#2c3e50'" :text="'Memory'"/>
        <input v-model="this.displayedNumber" type="String" readonly>
    </form>
</template>

<script>
    import Widget from './Widget'

    export default{
    name: "Display",
    props: {
        displayedNumber: String,
        toggleMemory: Boolean,
        operand: String
    },
    components: {
        Widget
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
    form{
        margin: 20px 0;
        text-align: right;
    }
    input{
        margin-top: -5px;
        border-radius: 4px;
        padding: 4px 5px;
        width: 400px;
        font-size: 30px;
        text-align: right;
        -moz-appearance: textfield;
    }
    input:focus{
        outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>