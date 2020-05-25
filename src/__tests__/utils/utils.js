const myBeverage = {
	delicious: true,
	sour: false,
};

const add = (a, b) => {
	return +a + +b;
};

const duplicateAddedValues = (a, b) => {
	// Función "integradora" que usa mi función anterior
	// Está aplicando mal el uso de la función sin que necesariamente la función de suma esté mal
	return add(a, b) + add(a, b);
};

export { myBeverage, add, duplicateAddedValues };
