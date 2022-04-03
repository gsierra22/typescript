import { question } from "readline-sync";// imports question method

function main(): void
{
    const firstString: string= question('Enter first numer:\n')
    console.log(firstString)
}

main();