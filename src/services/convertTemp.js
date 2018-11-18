export const convertTemp = (temp, isChecked) => {
	
	// isChecked = false (Celsius)
	// isChecked = true (farenheit)

	return isChecked === true ? Math.ceil((temp - 273.15) * 9/5 + 32) : Math.ceil(temp - 273.15);
}
