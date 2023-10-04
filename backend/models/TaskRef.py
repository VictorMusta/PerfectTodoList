from sqlalchemy import Integer
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.Base import Base


class TaskRefs(Base):
    __tablename__ = "task_refs"
    idTaskRef: Mapped[int] = mapped_column(primary_key=True)
    idTask: Mapped[int] = mapped_column(Integer())
    idList: Mapped[int] = mapped_column(Integer())
    selected: Mapped[bool] = mapped_column(default=False)

    def as_dict(self):
        try:
            return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        except Exception as e:
            raise ValueError from e
