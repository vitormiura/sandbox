import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';
import { sveltekit } from 'lucia/middleware';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			userId: data.id,
			username: data.username,
			name: data.name
		};
	}
});

export type Auth = typeof auth;
