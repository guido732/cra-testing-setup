# Setup para testing usando Create React App

Éste setup usa `Jest + React Testing Library + Puppeteer + Jest Runner Groups` e incluye ejemplos de uso para los tests.

Basado en la siguiente charla introductoria: [Introducción a Testing en React](https://slides.com/guido732/intro-testing-jest-rtl-cra-puppeteer/fullscreen)

## Scripts customizados

### `yarn test`

Inicia el setup de tests para el grupo creado en los tests de ejemplo. Modificar `--group=demo` por el grupo personalizado que se esté utilizando en el set de tests que se desee ejecutar

### `yarn test-cov`

Igual que el script anterior pero recolecta el `code coverage` y cierra los tests, sin quedar en watch mode para observar futuros cambios en tests.

---

# Create React App testing setup

This setup uses `Jest + React Testing Library + Puppeteer + Jest Runner Groups` and includes some examples of tests and usage.

Based on the following introductory talk [Introduction to Testing with React](https://slides.com/guido732/intro-testing-jest-rtl-cra-puppeteer/fullscreen)

## Customized Scripts

### `yarn test`

Initializes the testing setup for the default group used in the test examples. Modify `--group=demo` for any custom group you are using in your own tests.

### `yarn test-cov`

Same as the previous script, but gathers `code coverage` and exits watch mode for jest, without listening to further changes on the files.
