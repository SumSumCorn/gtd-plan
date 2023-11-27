import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { fetchTodos } from '../../api';
import { MdOutlineCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
export default function Demo() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(2),
    queryKey: ['todos'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    // <QueryClientProvider client={queryClient}>
    <div>
      {todos?.map((todo) => {
        return (
          <div key={todo.id}>
            안녕하세요
            <span>{todo.star}</span>
            {todo.completed ? (
              <MdOutlineCheckBox size={30} />
            ) : (
              <MdCheckBoxOutlineBlank size={30} />
            )}
          </div>
        );
      })}
    </div>
    // </QueryClientProvider>
  );
}
