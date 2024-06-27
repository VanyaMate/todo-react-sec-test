import { ComponentPropsWithoutRef, FC, memo } from 'react';
import classNames from 'classnames';
import { useStore } from '@vanyamate/sec-react';
import css from './RemoveTodoButton.module.scss';
import {
    removeTodoEffect,
    todoStatus,
} from '../../../../model/todo/todo.model.ts';


export type RemoveTodoButtonProps =
    {
        todoId: string;
    }
    & ComponentPropsWithoutRef<'button'>;

export const RemoveTodoButton: FC<RemoveTodoButtonProps> = memo(function RemoveTodoButton (props) {
    const { todoId, ...other } = props;
    const status               = useStore(todoStatus);

    return (
        <button
            { ...other }
            onClick={ () => removeTodoEffect(todoId) }
            className={ classNames(css.container, { [css.pending]: status[todoId] }) }
        >
            Удалить
        </button>
    );
});