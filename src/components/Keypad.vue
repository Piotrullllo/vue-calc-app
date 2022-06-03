<template>
    <div >
        <Button @btnInfo="emitBtns" btnClass='big-btn' btnCode="192" btnType="change" text='+/-'/>
        <Button @btnInfo="emitBtns" btnClass='big-btn' btnCode="54" btnType="power" text='x²'/>
        <Button @btnInfo="emitBtns" btnClass='big-btn' btnCode="55" btnType="root" text='√'/>
        
        <Button @btnInfo="emitBtns" btnClass='medium-btn' btnCode="53" btnType="percent" text='%'/>
        <Button @btnInfo="emitBtns" btnClass='medium-btn' btnCode="77" btnType="memory" text='MR'/>
        <Button @btnInfo="emitBtns" btnClass='medium-btn' btnCode="188" btnType="memory" text='M-'/>
        <Button @btnInfo="emitBtns" btnClass='medium-btn' btnCode="190" btnType="memory" text='M+'/>

        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="8" btnType="backspace" text='->'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="103" btnType="number" text='7'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="104" btnType="number" text='8'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="105" btnType="number" text='9'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="111" btnType="operand" text='/'/>
       
        <Button @btnInfo="emitBtns" btnClass='red-btn' btnCode="46" btnType="C" text='C'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="100" btnType="number" text='4'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="101" btnType="number" text='5'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="102" btnType="number" text='6'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="106" btnType="operand" text='*'/>

        <Button @btnInfo="emitBtns" btnClass='red-btn' btnCode="27" btnType="AC" text='AC'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="97" btnType="number" text='1'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="98" btnType="number" text='2'/>
        <Button  @btnInfo="emitBtns" btnClass='small-btn' btnCode="99" btnType="number" text='3'/>
        <Button  @btnInfo="emitBtns" btnClass='small-btn' btnCode="109" btnType="operand" text='-'/>

        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="96" btnType="number" text='0'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnType="number" text='00'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="110" btnType="point" text='.'/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="13" btnType="equals" text='='/>
        <Button @btnInfo="emitBtns" btnClass='small-btn' btnCode="107" btnType="operand" text='+'/>
    </div>
</template>

<script>
    import Button from './Button'

    export default{
        name: "Keypad",
        components: {
            Button
        },
        methods: {
            emitBtns(text, type){
                this.$emit("btnInfo",text, type)
            }
        },  
        emits: ['btnInfo']
    }
</script>

<style scoped>
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 8px;
        margin-bottom: 20px;
    }
</style>