import { getData } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (() => {
    const rows = getData()
    return { rows }
}) satisfies PageServerLoad