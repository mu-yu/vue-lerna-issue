# reproduce reactivity lost in external components

## reproduce steps
1. run `lerna bootstrap && lerna link` to install all dependencies
2. run `lerna run build` to build all packages
3. cd to `packages/dashbaord/dist` and run `npx serve` to serve the dashboard
4. open `http://localhost:3000` in browser and click the button, the count will NOT be updated in view.
5. click the tittle will update the count in view.
