import { FC, memo } from 'react';
import { TodoWindow } from './ui/widget/TodoWindow/TodoWindow.tsx';


export const App: FC = memo(function App () {
    return (
        <TodoWindow/>
    );
});