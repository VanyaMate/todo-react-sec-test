import { ComponentPropsWithoutRef, FC, memo, useEffect } from 'react';
import classNames from 'classnames';
import css from './TodoWindow.module.scss';
import {
    loadTodosEffect, todoAdding, todoLoading,
    todoProcess,
} from '../../../model/todo/todo.model.ts';
import { TodoHeader } from './TodoHeader/TodoHeader.tsx';
import { TodoList } from './TodoList/TodoList.tsx';
import { useStore } from '@vanyamate/sec-react';


export type TodoWindowProps =
    {}
    & ComponentPropsWithoutRef<'main'>;

export const TodoWindow: FC<TodoWindowProps> = memo(function TodoWindow (props) {
    const { className, ...other } = props;
    const pending                 = useStore(todoProcess);
    const adding                  = useStore(todoAdding);
    const loading                 = useStore(todoLoading);

    useEffect(() => {
        loadTodosEffect();
    }, []);

    return (
        <main
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            <h2>Process: { pending.toString() }</h2>
            <h2>Adding: { adding.toString() }</h2>
            <h2>Loading: { loading.toString() }</h2>
            <TodoHeader/>
            <TodoList/>
        </main>
    );
});