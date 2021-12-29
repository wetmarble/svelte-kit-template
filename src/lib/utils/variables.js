export const variables = {
	env: 				import.meta.env.VITE_ENV ?? 'development',
	apiDevPath: 		import.meta.env.VITE_API_DEVELOPMENT_PATH ?? 'http://localhost:8000',
	apiLivePath: 		import.meta.env.VITE_API_PRODUCTION_PATH,
	appName: 			import.meta.env.VITE_APP_NAME ?? 'Galaxy',
	currencyLocation: 	{symbol: "$", code: 'USA'},
	analyticsID: 		import.meta.env.VITE_APP_ANALYTICS,
}
