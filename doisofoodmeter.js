function footToMeter(foot)
{
    let meter = 0.305 * foot
    alert ("foot qua meter "  + meter)
}


function meterToFoot(meter)
    {
        let   foot = 3.279 * meter 
        alert ("meter qua foot " + foot)
    }
    footToMeter(+prompt("Nhập vào số muốn đổi từ food qua meter"))
    meterToFoot(+prompt("Nhập vào số muốn đổi từ meter qua food"))