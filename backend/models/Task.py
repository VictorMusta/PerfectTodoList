from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.Base import Base


class Task(Base):
    __tablename__ = "task"
    idTask: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(50))
    color: Mapped[str] = mapped_column(String(20))
    resolved: Mapped[bool] = mapped_column(default=False)

    def as_dict(self):
        try:
            return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        except Exception as e:
            raise ValueError from e
