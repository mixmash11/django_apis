import pytest
from .models import Todo

pytestmark = pytest.mark.django_db


@pytest.mark.django_db
class TestTodoModel:
    @pytest.mark.django_db
    @pytest.fixture()
    def todo_object(self):
        pytestmark = pytest.mark.django_db
        todo_entry = Todo.objects.create(title="test todo", body="todo body")
        return todo_entry.id

    @pytest.mark.django_db
    def test_title_content(self, todo_object):
        todo = Todo.objects.get(id=todo_object)
        assert todo.title == "test todo"

    @pytest.mark.django_db
    def test_body_content(self, todo_object):
        todo = Todo.objects.get(id=todo_object)
        assert todo.body == "todo body"
