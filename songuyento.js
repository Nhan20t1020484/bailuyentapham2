function isPrime(number)
{
    let So=0
    if (number<2)
        alert("Không phải là số nguyên tố")
    else {
        for(let i=2;i<=number;i++)
            if (number%i == 0)
                So++
    }
    if (So == 1)
        alert("Là số nguyên tố")
    else {
        alert("Không phải là số nguyên tố")
    }
}
isPrime(+prompt("Nhập vào số bất kì"))