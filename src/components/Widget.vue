<template>
    <p :style="{color: color}">{{text}}</p>
</template>

<script>
    export default{
        name: 'Widget',
        props: {
          text: String,
          color: String
        }
    }
</script>

