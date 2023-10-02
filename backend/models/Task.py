from datetime import datetime
from sqlalchemy import String
from sqlalchemy.orm import Mapped, exc
from sqlalchemy.orm import mapped_column
from models.Base import Base


class Task(Base):
    __tablename__ = "task"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(50))
    color: Mapped[str] = mapped_column(String(20))
    resolved: Mapped[bool] = mapped_column(default=False)

    def as_dict(self):
        try:
            return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        except:
            raise ValueError

    # def __repr__(self) -> str:
    #     return f"Task(id={self.id!r}, title={self.title!r}, date={self.date!r}, resolved={self.resolved!r})"
