function roadRider(speed,area){
        let motorway=130;
        let interstate=90;
        let city=50;
        let residential=20;

        let status=[`speeding`,`excessive speeding`,`reckless driving`,];
    debugger
        switch(area){
            case `city`:
                if(speed<=city){
                    console.log(`Driving ${speed} km/h in a ${city} zone`);
                }else{
                    if(speed-city<21){
                        console.log(`The speed is ${speed-city} km/h faster than the allowed speed of ${city} - ${status[0]}`);
                    }else if(speed-city>20&&speed-city<41){
                        console.log(`The speed is ${speed-city} km/h faster than the allowed speed of ${city} - ${status[1]}`);
                    }else if(speed-city>40){
                        console.log(`The speed is ${speed-city} km/h faster than the allowed speed of ${city} - ${status[2]}`);
                    }
                    
                }
                break;
                case `motorway`:
                if(speed<=motorway){
                    console.log(`Driving ${speed} km/h in a ${motorway} zone`);
                }else{
                    if(speed-motorway<21){
                        console.log(`The speed is ${speed-motorway} km/h faster than the allowed speed of ${motorway} - ${status[0]}`);
                    }else if(speed-motorway>20&&speed-motorway<41){
                        console.log(`The speed is ${speed-motorway} km/h faster than the allowed speed of ${motorway} - ${status[1]}`);
                    }else if(speed-motorway>40){
                        console.log(`The speed is ${speed-motorway} km/h faster than the allowed speed of ${motorway} - ${status[2]}`);
                    }
                    
                }
                break;
                case `interstate`:
                if(speed<=interstate){
                    console.log(`Driving ${speed} km/h in a ${interstate} zone`);
                }else{
                    if(speed-interstate<21){
                        console.log(`The speed is ${speed-interstate} km/h faster than the allowed speed of ${interstate} - ${status[0]}`);
                    }else if(speed-interstate>20&&speed-interstate<41){
                        console.log(`The speed is ${speed-interstate} km/h faster than the allowed speed of ${interstate} - ${status[1]}`);
                    }else if(speed-interstate>40){
                        console.log(`The speed is ${speed-interstate} km/h faster than the allowed speed of ${interstate} - ${status[2]}`);
                    }
                    
                }
                break;
                case `residential`:
                if(speed<=residential){
                    console.log(`Driving ${speed} km/h in a ${residential} zone`);
                }else{
                    if(speed-residential<21){
                        console.log(`The speed is ${speed-residential} km/h faster than the allowed speed of ${residential} - ${status[0]}`);
                    }else if(speed-residential>20&&speed-residential<41){
                        console.log(`The speed is ${speed-residential} km/h faster than the allowed speed of ${residential} - ${status[1]}`);
                    }else if(speed-residential>40){
                        console.log(`The speed is ${speed-residential} km/h faster than the allowed speed of ${residential} - ${status[2]}`);
                    }
                    
                }
                break;
        }
}
roadRider(500, 'interstate')