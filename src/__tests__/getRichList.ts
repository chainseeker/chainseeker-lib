
import { Chainseeker } from '../index';
const cs = new Chainseeker();

test('get rich list count', async () => {
	const count = await cs.getRichListCount();
	expect(count).toBeGreaterThan(0);
});

test('get rich list', async () => {
	const richList = await cs.getRichList(0, 100);
	expect(richList.length).toBeGreaterThan(0);
});

