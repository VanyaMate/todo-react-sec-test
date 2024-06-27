import { ComponentPropsWithoutRef, FC, memo, useEffect } from 'react';
import classNames from 'classnames';
import css from './TodoWindow.module.scss';
import { loadTodosEffect } from '../../../model/todo/todo.model.ts';
import { TodoHeader } from './TodoHeader/TodoHeader.tsx';
import { TodoList } from './TodoList/TodoList.tsx';


export type TodoWindowProps =
    {}
    & ComponentPropsWithoutRef<'main'>;

export const TodoWindow: FC<TodoWindowProps> = memo(function TodoWindow (props) {
    const { className, ...other } = props;

    useEffect(() => {
        loadTodosEffect();
    }, []);

    return (
        <main
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            <TodoHeader/>
            <TodoList/>
        </main>
    );
});