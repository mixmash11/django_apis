import pytest
from .models import Todo


@pytest.mark.django_db
class TestTodoModel:
    @pytest.fixture()
    def todo_object(self):
        todo_entry = Todo.objects.create(title="test todo", body="todo body")
        return todo_entry.id

    def test_title_content(self, todo_object):
        todo = Todo.objects.get(id=todo_object)
        assert todo.title == "test todo"

    def test_body_content(self, todo_object):
        todo = Todo.objects.get(id=todo_object)
        assert todo.body == "todo body"
