// Partial
// namespace Parial {
//     interface Todo {
//         title: string;
//         description: string;
//     }

//     function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//         return { ...todo, ...fieldsToUpdate };
//     }
//     type TPartial = Partial<Todo>;
//     const todo1 = {
//         title: 'organize desk',
//         description: 'clear clutter',
//     };

//     const todo2 = updateTodo(todo1, {
//         description: 'throw out trash',
//     });

//     console.log(`Partial: ${todo2.title} ${todo2.description}`)
// }

// // Readonly

namespace ReadOnly {
    interface Todo {
        title: string;
    }

    const todo: Readonly<Todo> = {
        title: 'Delete inactive users',
    };
    try {
        todo.title = 'Hello';
        console.log('ReadOnly: ' + todo.title)  // this
    } catch {
        console.log('Cannot assign to "title" because it is a read-only property.')  // or this?
    }
}

namespace Required {
    interface Props {
        a?: number;
        b?: string;
    };

    const obj: Props = { a: 5 }; // OK
    
    const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing

    console.log(`Required: ${obj2.a}`)
}

// nonnullable
type T0 = NonNullable<string | number | undefined>;  // string | number
type T1 = NonNullable<string[] | null | undefined>;  // string[]