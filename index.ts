import { question } from "readline-sync";// imports question method

function main(): void
{
function isNumber(str:string):boolean{
    const Num= parseInt(str)
    const isNum: boolean= !isNaN(Num)
    return isNum
}

function isOperator(operator: string):boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
            default:
                return false;
    }
}

    const firstString: string= question('Enter first number:\n')
    const operator: string= question('Enter operator: \n')
    const secondString: string= question('Enter second number\n')

    const validInput :boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString)

    function calculate(firstNum: number, operator: Operator, secondtNum:number)
    {
        switch(operator){
            case '+':
                return firstNum + secondtNum;
            case '-':
                return firstNum - secondtNum;
            case '*':
                return firstNum * secondtNum;
            case '/':
                return firstNum / secondtNum;
        }
    }

    type Operator= '+'|'-'|'*'|'/';

    if (validInput){
        const firstNum: number= parseInt(firstString);
        const secondtNum: number= parseInt(secondString);
        const result= calculate(firstNum, operator as Operator, secondtNum)
        console.log(result)
    }
    else{
        console.log('\ninvalid input\n')
    }
}

main();