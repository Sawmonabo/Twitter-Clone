import { 
  authProviders, 
  configureWunderGraphApplication, 
  cors, 
  EnvironmentVariable, 
  introspect, 
  templates
} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const tweets = introspect.mongodb({
	apiNamespace: 'tweets',
	databaseURL: 'mongodb+srv://user:pass@cluster0.uvkwxgc.mongodb.net/TweetsCollection',
	introspection : {
		pollingIntervalSeconds: 5,
	},

});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	apis: [
		tweets
	],
	server,
	operations,
	codeGenerators: [
		{
			templates: [
				// use all the typescript react templates to generate a client
				...templates.typescript.all,
			],
			// create-react-app expects all code to be inside /src
			path: "../src/components/generated",
		},
	],
	cors: {
		...cors.allowAll,
		allowedOrigins:
			process.env.NODE_ENV === 'production'
				? [
						// change this before deploying to production to the actual domain where you're deploying your app
						'http://localhost:3000',
				  ]
				: ['http://localhost:3000'],
	},
	dotGraphQLConfig: {
		hasDotWunderGraphDirectory: false,
	},
	authentication: {
		cookieBased: {
		  providers: [
        authProviders.openIdConnect({
					id: 'auth0',
					issuer: new EnvironmentVariable('AUTH0_ISSUER'),
					clientId: new EnvironmentVariable('AUTH0_CLIENT_ID'),
					clientSecret: new EnvironmentVariable('AUTH0_CLIENT_SECRET')
        })
      ],
		  authorizedRedirectUris: ['http://localhost:3000/', 'http://127.0.0.1:3000/'],
		},
  },
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined,
	},
});
