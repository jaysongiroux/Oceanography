function getValues(){
    let period = document.getElementById("wave_period").value
    let depth = document.getElementById("Depth").value
    let gav = document.getElementById("gav_acc").value
    let precision = document.getElementById("precision").value
    return period, depth, gav, precision
}

function waveClass(){
    let period = document.getElementById("wave_period").value
    let depth = document.getElementById("Depth").value
    let g = document.getElementById("gav_acc").value
    let prec = document.getElementById("precision").value

    //wave length = lambda = 2pi/waveNumber
    //wave number = k = 2pi/wavelength
    //tanh(2*pi*depth/x*(grav*period)/(2*pi))
    //todo: this is not working right. will come back to this.
    let result = Math.tanh(2*Math.PI*depth*(g*period)/(2*Math.PI));
    window.console.log(depth/result)

    if ((depth/result)<.05)
        window.console.log("shallow")
    else if((depth/result)<.5)
        window.console.log("trans")
    else
        window.console.log("deep")
    // let result = Planetcalc.Calculate2809( { "x0":depth, "formula":"tanh(2*" + Math.PI.toString() + "*"+ depth.toString() +"/x)*(" + g.toString() + "*" + period.toString() + "*" + period.toString()+ ")/(2*" + Math.PI.toString() + ")", "prec":0.01} );


}

//if ( (depth/tL) < 0.05)
// 	relativedepth.SetValue(names["shallow"]);
// else if ((depth/tL) < 0.5)
// 	relativedepth.SetValue(names["transitional"]);
// else
// 	relativedepth.SetValue(names["deep"]);
// };