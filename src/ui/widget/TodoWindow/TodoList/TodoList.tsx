import { ComponentPropsWithoutRef, FC, memo } from 'react';
import classNames from 'classnames';
import css from './TodoList.module.scss';
import { useStore } from '@vanyamate/sec-react';
import { todoItems, todoLoading } from '../../../../model/todo/todo.model.ts';
import { TodoItem } from '../../../entity/todo/TodoItem/TodoItem.tsx';
import {
    RemoveTodoButton,
} from '../../../feature/todo/RemoveTodoButton/RemoveTodoButton.tsx';
import {
    UpdateTodoStatusSelection,
} from '../../../feature/todo/UpdateTodoStatusSelection/UpdateTodoStatusSelection.tsx';


export type TodoListProps =
    {}
    & ComponentPropsWithoutRef<'section'>;

export const TodoList: FC<TodoListProps> = memo(function TodoList (props) {
    const { className, ...other } = props;
    const items                   = useStore(todoItems);
    const loading                 = useStore(todoLoading);

    return (
        <section
            { ...other }
            className={ classNames(css.container, {}, [ className ]) }
        >
            <h2>Список</h2>
            {
                loading
                ? 'Загрузка...'
                : items.map((todo) => (
                    <TodoItem
                        key={ todo.id }
                        title={ todo.title }
                        prefix={
                            <RemoveTodoButton todoId={ todo.id }/>
                        }
                        postfix={
                            <UpdateTodoStatusSelection
                                todoId={ todo.id }
                                status={ todo.status }
                            />
                        }
                    />
                ))
            }
        </section>
    );
});