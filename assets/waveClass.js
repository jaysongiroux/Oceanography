function getValues(){
    let period = document.getElementById("wave_period").value
    let depth = document.getElementById("Depth").value
    let gav = document.getElementById("gav_acc").value
    let precision = document.getElementById("precision").value
    return period, depth, gav, precision
}

function waveClass(){
    let period = document.getElementById("wave_period").value;
    let depth = document.getElementById("Depth").value;
    //gravity acceleration
    let g = 9.8
    //decimal places
    let prec = 5
    let waveLength = document.getElementById("wave_Length").value;

    // let waveNumber = 2*Math.PI/waveLength;
    // let amp = waveHeight/2;
    // let angularFreq = 2*Math.PI/period;
    // let angularFreq2 = 2*Math.PI*freq;


    //key:
    //depth: h
    //waveLength = lambda
    //waveNumber = k
    //wave height = H
    //amplitude = A
    // period = T
    //freq = italic f
    //ang freq = fancy w
    //wave speed = c

    // DEEP
    if(depth>waveLength/2)
    {
        window.console.log("deep");
        let classcn = "deep";
        document.getElementById("RDout").innerText = classcn;
        let waveNumber = 2*Math.PI/waveLength;
        let waveSpeed = Math.sqrt(g/waveNumber);
        let period = Math.sqrt((2*Math.PI*waveLength)/g);
        let angFreq = 2*Math.PI/period;

        waveNumber = waveNumber.toFixed(prec);
        waveSpeed = parseFloat(waveSpeed).toFixed(prec);
        angFreq = angFreq.toFixed(prec);
        document.getElementById("AFout").innerText = angFreq;
        document.getElementById("WNout").innerText = waveNumber;
        document.getElementById("PVout").innerText = waveSpeed;

        document.getElementById("deep").style.display = "block";
        document.getElementById("shallow").style.display = "none";
        document.getElementById("trans").style.display = "none";
    }
    // shallow
    else if(depth < waveLength/20)
    {
        window.console.log("shallow");
        let classcn = "shallow";
        document.getElementById("RDout").innerText = classcn;
        let waveNumber = 2*Math.PI/waveLength;
        let waveSpeed = Math.sqrt(g*depth);
        let period = waveLength/waveSpeed;
        let angFreq = 2*Math.PI / period;

        waveNumber = waveNumber.toFixed(prec);
        waveSpeed = parseFloat(waveSpeed).toFixed(prec);
        angFreq = angFreq.toFixed(prec);

        document.getElementById("AFout").innerText = angFreq;
        document.getElementById("WNout").innerText = waveNumber;
        document.getElementById("PVout").innerText = waveSpeed;

        document.getElementById("deep").style.display = "none";
        document.getElementById("shallow").style.display = "block";
        document.getElementById("trans").style.display = "none";

    }
    //trans
    else if(depth <waveLength/2 && depth > waveLength/20) {
        window.console.log("trans");
        let classcn = "trans";
        document.getElementById("RDout").innerText = classcn;
        let waveNumber = 2 * Math.PI / waveLength;
        let w2 = g * waveNumber * Math.tanh(waveNumber * depth);
        let angFreq = 2 * Math.PI / period;
        // let waveLength = 2*Math.PI/waveNumber;
        let waveSpeed = Math.sqrt((g / waveNumber) * Math.tanh(waveNumber * depth))

        waveNumber = waveNumber.toFixed(prec);
        waveSpeed = parseFloat(waveSpeed).toFixed(prec);
        angFreq = angFreq.toFixed(prec);

        document.getElementById("AFout").innerText = angFreq;
        document.getElementById("WNout").innerText = waveNumber;
        document.getElementById("PVout").innerText = waveSpeed;

        document.getElementById("deep").style.display = "none";
        document.getElementById("shallow").style.display = "none";
        document.getElementById("trans").style.display = "block";
    }

}