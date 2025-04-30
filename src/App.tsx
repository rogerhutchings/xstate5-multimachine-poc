import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { createBrowserInspector } from '@statelyai/inspect';

const { inspect } = createBrowserInspector();

const toggleMachineA = createMachine({
  id: 'toggleA',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } },
  },
});

const toggleMachineB = createMachine({
  id: 'toggleB',
  initial: 'off',
  states: {
    off: { on: { TOGGLE: 'on' } },
    on: { on: { TOGGLE: 'off' } },
  },
});

export default function App() {
  const [stateA, sendA] = useMachine(toggleMachineA, {
    inspect
  });
  const [stateB, sendB] = useMachine(toggleMachineB, {
    inspect
  });

  return (
    <div>
      <h1>XState 5 Multi-Machine Inspector PoC</h1>
      <div>
        <p>Toggle A is {String(stateA.value)}</p>
        <button onClick={() => sendA({ type: 'TOGGLE' })}>Toggle A</button>
      </div>
      <div>
        <p>Toggle B is {String(stateB.value)}</p>
        <button onClick={() => sendB({ type: 'TOGGLE' })}>Toggle B</button>
      </div>
    </div>
  );
}
