import useUsers from '../../hooks/useUsers';
import { supressWarning, mountHook } from '../../hooks-test-utils';

describe('useUsers', () => {
  supressWarning();

  it('works', () => {
    const hook = mountHook(useUsers);

    expect(hook.data.users).toHaveLength(0);
    hook.data.addUser({ id: 1111, name: 'leo' });
    expect(hook.data.users).toHaveLength(1);
    hook.data.addUser({ id: 2222, name: 'leo2' });
    expect(hook.data.users).toHaveLength(2);

    hook.wrapper.unmount();
  });
});