const components = ["Button","LED","Buzzer"];
const sensor = {
    name: "Sensor A",
    voltage : 5,
    active: true
};

function describeSensor(name, voltage){
    return name + " operates at "+ voltage + " volts."
}

console.log(describeSensor(sensor.name, sensor.voltage));

