/**
 *
 * Base Demo (before/after globals + skip/only)
 *
 * @group demo1
 * @group demo
 */

// Imports
import { myBeverage } from "./utils/utils";

describe("my beverage", () => {
	beforeAll(() => {
		console.log("beforeAll");
		// Abrir conexion con server
	});
	afterAll(() => {
		console.log("afterAll");
		// Cerrar conexion con server
	});
	beforeEach(() => {
		console.log("beforeEach");
		// Inicializar algo de los componentes
	});
	afterEach(() => {
		console.log("afterEach");
		// Limpiar el árbol
	});
	test("is delicious", () => {
		console.log("test1");
		expect(myBeverage.delicious).toBeTruthy();
	});

	test("is not sour", () => {
		console.log("test2");
		expect(myBeverage.sour).toBeFalsy();
	});

	// test.skip("is not sour", () => {
	// 	console.log("test2");
	// 	expect(myBeverage.sour).toBeFalsy();
	// });

	// test.only("is not sour", () => {
	// 	console.log("test2");
	// 	expect(myBeverage.sour).toBeFalsy();
	// });
});
