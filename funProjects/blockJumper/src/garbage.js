const _createBox = ()=> {
    let xValue;
    let yValue;
    let newXBoxLocation = true;
    let newYBoxLocation = true;
    while(newXBoxLocation === true){
        
        xValue = _generateXValues();
        newXBoxLocation = xBoxLocations.every((element)=>{
            return _checkOverlap2(xValue, element)
            });
        
    }
    while(newYBoxLocation === true){
        
        yValue = _generateYValues();
        newYBoxLocation = yBoxLocations.every((element)=>{
            return _checkOverlap2(yValue, element)
            });
        
    }
    


     
    xBoxLocations.push(xValue);
    yBoxLocations.push(yValue);
    console.log(xBoxLocations);
    console.log(yBoxLocations);

    return (
        <Box 
        boxText = {'Box Color'}
        xValue = {xBoxLocations[xBoxLocations.length-1]} 
        yValue={yBoxLocations[yBoxLocations.length-1]} 
        color={_getRandomColor()} 
        boxWidth={boxWidth} 
        boxHeight={boxHeight}/>
    );
}

const _checkOverlap2 = (value, element) => {
    let safeRange = [(element - 60), (element + 60)];
    return (safeRange[0] <= value && value <= safeRange[1])
}

const _generateXValues = () => {
    return _getRandomArbitrary(0, (width-boxWidth));
}

const _generateYValues = () => {
    return _getRandomArbitrary(0,(height-(boxHeight+80)));
}