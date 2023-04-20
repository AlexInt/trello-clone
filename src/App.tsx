import React from 'react';
import { APPContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Card } from './Card';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
// interface State {
//   count: number
// }
//
// type Action =
//   | {
//       type: 'increment'
//     }
//   | {
//       type: 'decrement'
//     }
//
// const counterReducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1 }
//     default:
//       throw new Error()
//   }
// }

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <APPContainer>
      {lists.map(list => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </APPContainer>
  );
}

export default App;
