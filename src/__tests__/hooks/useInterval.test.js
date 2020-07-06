import { useState } from 'react';

import useInterval from '../../hooks/useInterval';
import { supressWarning, mountHook, wait } from '../../hooks-test-utils';

const INTERVAL_TIME = 100;

function useHook() {
    const [users, setUsers] = useState([]);
    useInterval(() => {
        setUsers([...users, { id: Math.random(), name: 'leo' }]);
    }, INTERVAL_TIME);

    return { users };
}

describe('useInterval', () => {
    supressWarning();

    it('works', async () => {
        const hook = mountHook(useHook);

        expect(hook.data.users).toHaveLength(0);
        await wait(INTERVAL_TIME + 2);
        expect(hook.data.users).toHaveLength(1);
        await wait(INTERVAL_TIME + 2);
        expect(hook.data.users).toHaveLength(2);

        hook.wrapper.unmount();
    });
});