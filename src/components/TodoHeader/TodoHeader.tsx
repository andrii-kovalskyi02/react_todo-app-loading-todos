export const TodoHeader: React.FC = () => {
  return (
    <header className="todoapp__header">
      <button type="button" className="todoapp__toggle-all active" />

      <form>
        <input
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};