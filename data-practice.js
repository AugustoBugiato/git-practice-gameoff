const components = ["Switch", "Relay", "Sensor"];

console.log(components[0]);
console.log(components[1]);
console.log(components[2]);
console.log(components.length);


const component = {
  name: "Relay",
  voltage: 24,
  active: true
};

console.log(component.name);
console.log(component.voltage);
console.log(component.active);

function isVoltageSufficient(voltage, requiredVoltage) {
  return voltage >= requiredVoltage;
}

console.log(isVoltageSufficient(24, 12));
console.log(isVoltageSufficient(5, 12));
console.log(isVoltageSufficient(12, 12));

