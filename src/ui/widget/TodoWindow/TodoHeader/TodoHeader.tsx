import {
    ComponentPropsWithoutRef,
    FC,
    FormEvent,
    memo,
    useRef,
} from 'react';
import classNames from 'classnames';
import css from './TodoHeader.module.scss';
import { useStore } from '@vanyamate/sec-react';
import {
    addTodoEffect,
    todoAdding,
} from '../../../../model/todo/todo.model.ts';


export type TodoHeaderProps =
    {}
    & ComponentPropsWithoutRef<'form'>;

export const TodoHeader: FC<TodoHeaderProps> = memo(function TodoHeader (props) {
    const { className, ...other } = props;
    const input                   = useRef<HTMLInputElement | null>(null);
    const adding                  = useStore(todoAdding);

    const onSubmit = function (event: FormEvent) {
        event.preventDefault();
        if (input.current && input.current?.value) {
            addTodoEffect({ title: input.current?.value })
                .then(() => {
                    if (input.current) {
                        input.current!.value = '';
                    }
                });
        }
    };

    return (
        <form
            { ...other }
            className={ classNames(css.container, { [css.pending]: adding }, [ className ]) }
            onSubmit={ onSubmit }
        >
            <div className={ css.form }>
                <label
                    htmlFor={ 'create-todo-input' }
                    className={ css.label }
                >
                    Заголовок
                </label>
                <input
                    id={ 'create-todo-input' }
                    ref={ input }
                    className={ css.input }
                />
            </div>
            <button type={ 'submit' } className={ css.button }>Создать</button>
        </form>
    );
});