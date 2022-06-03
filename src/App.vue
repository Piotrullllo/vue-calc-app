<template>
  <Display :displayedNumber="displayedNumber" :toggleMemory="toggleMemory"/>
  <Keypad @btnInfo="btnClick" />
</template>

<script>
import Display from './components/Display'
import Keypad from './components/Keypad'

export default {
  name: 'App',
  components: {
    Display,
    Keypad
  },
  data() {
      return{
        currentNumber: "0",
        displayedNumber: "0",
        equalsPressed: false,
        previousNumber: undefined,
        operand: undefined,
        memoryNumber: 0,
        toggleMemory: false
      }
  },
  methods: {
    btnClick(text, func){
      switch (func){
        case 'number': 
          if(this.currentNumber[0] === "0" && this.currentNumber[1] !== ".")this.currentNumber = this.currentNumber.slice(0, 0);
          if(text == "00" && this.currentNumber == "")this.currentNumber = "0";
          else this.currentNumber += text;
          this.equalsPressed = false;
          this.displayedNumber = this.currentNumber;
          break;
        case 'backspace':
          if(this.displayedNumber.length > 1)this.displayedNumber = this.displayedNumber.slice(0, -1);
          else this.displayedNumber = "0";
          if(this.displayedNumber === "-")this.displayedNumber = "0";
          this.previousNumber = undefined;
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'point':
          if(this.displayedNumber === "00" )this.displayedNumber = "0"
          if(this.displayedNumber.indexOf(text) !== -1)break;
          this.displayedNumber += text;
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'power':
          let powerOf = parseFloat(this.displayedNumber)**2;
          this.displayedNumber = `${powerOf}`;
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'root':
          let rootOf = parseFloat(this.displayedNumber)**(1/2);
          this.displayedNumber = `${rootOf}`;
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'change':
          if(this.displayedNumber[0] !== "-" && this.displayedNumber !== "0")this.displayedNumber = "-" + this.displayedNumber;
          else if(this.displayedNumber[0] === "-") this.displayedNumber = this.displayedNumber.slice(1);
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'AC':
          this.memoryNumber = 0;
          this.toggleMemory = false;
        case 'C':
          this.currentNumber = "0";
          this.previousNumber = undefined;
          this.operand = undefined;
          this.equalsPressed = false;
          this.displayedNumber = this.currentNumber;
          break;
        case 'percent':
          this.displayedNumber = `${Number(this.displayedNumber)/100}`;
          this.equalsPressed = false;
          this.currentNumber = this.displayedNumber;
          break;
        case 'memory':
          if(text === "M+")this.memoryNumber += parseFloat(this.displayedNumber);
          if(text === "M-")this.memoryNumber -= parseFloat(this.displayedNumber);
          if(text === "MR"){
            if(this.displayedNumber == `${this.memoryNumber}`) this.memoryNumber = 0;
            else this.displayedNumber = `${this.memoryNumber}`
            this.currentNumber = this.displayedNumber;
          };
          if(this.memoryNumber != 0)this.toggleMemory = true;
          else this.toggleMemory = false;
          this.equalsPressed = false;
          this.displayedNumber = this.currentNumber;
          break;
        case 'operand':
          if(this.previousNumber === undefined)this.previousNumber = this.currentNumber;
          else if(!this.equalsPressed) this.previousNumber = doTheMath(this.previousNumber, this.operand, this.currentNumber);
          this.equalsPressed = false;
          this.operand = text;
          this.currentNumber = "0";
          this.displayedNumber = this.previousNumber;
          break;
        case 'equals':
          this.previousNumber = doTheMath(this.previousNumber, this.operand, this.currentNumber);
          this.equalsPressed = true;
          this.displayedNumber = this.previousNumber;
          break;
      }
    }
  }
}

const doTheMath = (a, mode, b) => {
  let calculation;
  switch (mode){
    case "+":
      calculation = parseFloat(a)+parseFloat(b);
      break;
    case '-':
      calculation = parseFloat(a)-parseFloat(b);
      break;
    case '/':
      if(b === "0"){
        alert("Error: Cannot divide by zero!");
        calculation = "0";
      }
      else calculation = parseFloat(a)/parseFloat(b);
      break;
    case '*':
      calculation = parseFloat(a)*parseFloat(b);
      break;
    case undefined:
      calculation = parseFloat(b);
  }
  return `${calculation}`;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #2c3e50;
  color: white;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 15px;
  width: 450px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
