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

    const firstString: string= question('Enter first numer:\n')
    const operator: string= question('Enter operator: \n')
    const secondString: string= question('Enter second numer:\n')
    const op = isOperator(operator)

    console.log(op)

    const firstNum= isNumber(firstString)
    const secondNum= isNumber(secondString)

}

main();