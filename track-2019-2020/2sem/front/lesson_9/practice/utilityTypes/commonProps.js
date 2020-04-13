"use strict";
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
var ReadOnly;
(function (ReadOnly) {
    var todo = {
        title: 'Delete inactive users',
    };
    try {
        todo.title = 'Hello';
        console.log('ReadOnly: ' + todo.title); // this
    }
    catch (_a) {
        console.log('Cannot assign to "title" because it is a read-only property.'); // or this?
    }
})(ReadOnly || (ReadOnly = {}));
var Required;
(function (Required) {
    ;
    var obj = { a: 5 }; // OK
    var obj2 = { a: 5 }; // Error: property 'b' missing
    console.log("Required: " + obj2.a);
})(Required || (Required = {}));
