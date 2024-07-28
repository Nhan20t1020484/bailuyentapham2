// // function tich (a,b,c){
// //     alert ("Tích 3 số là " + a*b*c)

// // }
// // let a = +prompt ("nhập a")
// // let b = +prompt ("nhập b")
// // let c = +prompt ("nhập c")

// // tich(a,b,c);

// function tich (a,b,c){
// return a*b*c
// }
// console.log(tich(5,6,3));
// Sô nguyên tố
// function isPrime(number)
// {
//     let So=0
//     if (number<2)
//         alert("Không phải là số nguyên tố")
//     else {
//         for(let i=2;i<=number;i++)
//             if (number%i == 0)
//                 So++
//     }
//     if (So == 1)
//         alert("Là số nguyên tố")
//     else {
//         alert("Không phải là số nguyên tố")
//     }
// }
// isPrime(+prompt("Nhập vào số bất kì"))

// function footToMeter(foot)
// {
//     let meter = 0.305 * foot
//     alert ("foot qua meter "  + meter)
// }


// function meterToFoot(meter)
//     {
//         let   foot = 3.279 * meter 
//         alert ("meter qua foot " + foot)
//     }
//     footToMeter(+prompt("Nhập vào số muốn đổi từ food qua meter"))
//     meterToFoot(+prompt("Nhập vào số muốn đổi từ meter qua food"))

// function alertMessage(){
//     alert ("Xin chao")
// }
// alertMessage()

// function doiso(a){
//     alert(a+1)
// }
// doiso(+prompt("Nhập số:"))

// function mothaiba (a,b){
//     if (a>b)
//         alert ("Số thứ nhất lớn hơn số thứ hai")
//     else
//         alert (a+b)
// }
// let so =+prompt ("Nhập số thứ nhất")
// let so2 =+prompt ("Nhập số thứ hai")
// mothaiba(so,so2)
let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

function check_star(star) {
    let index_star1 = 0;
    let result = "";
    for (let i = 0; i < star1.length; i++) {
        if (star == star1[i]) {
            index_star1 = i;
            for(let j = 0; j < star2.length; j++) {
                if (index_star1 == j) {
                    result = star2[j];
                    return result;
                } else {
                    result = "Không tìm thấy chòm sao"
                }
            }
        } else {
            result = "Không tìm thấy sao";
        }
    }
    return("Không tìm thấy chòm sao")

}
let star = prompt("Nhập vào ngôi sao: ")
document.write(check_star(star));


