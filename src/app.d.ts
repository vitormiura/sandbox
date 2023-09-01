import { PrismaClient } from '@prisma/client';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	let __prisma: PrismaClient;
	declare namespace Lucia {
		type Auth = import('$lib/lucia').Auth;
		type UserAttributes = {
			username: string;
			name: string;
		};
	}
}

export {};
