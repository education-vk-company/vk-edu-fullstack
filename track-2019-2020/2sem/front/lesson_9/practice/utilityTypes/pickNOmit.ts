// pick
namespace Pick {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, 'title' | 'completed'>;

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    };
}

// omit
namespace Omit {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Omit<Todo, 'description'>;
    
    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    };
}