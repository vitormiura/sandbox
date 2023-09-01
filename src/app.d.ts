import { PrismaClient } from '@prisma/client';
/// <reference types="lucia" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	let __prisma: PrismaClient;
	declare namespace Lucia {
		type Auth = import('$lib/lucia').Auth;
		type UserAttributes = {
			id: string;
			username: string;
			name: string;
		};
		type DatabaseSessionAttributes = object;
	}
}

export {};
