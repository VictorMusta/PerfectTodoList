from sqlalchemy import UUID, String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.Base import Base
import uuid


class Task(Base):
    __tablename__ = "task"
    id_task: Mapped[str] = mapped_column(
        UUID(as_uuid=False), unique=True, primary_key=True, default=uuid.uuid4
    )
    title: Mapped[str] = mapped_column(String(50))
    color: Mapped[str] = mapped_column(String(20), default="Yellow")
    resolved: Mapped[bool] = mapped_column(default=False)

    def as_dict(self) -> dict:
        try:
            res = {c.name: getattr(self, c.name) for c in self.__table__.columns}
            return res
        except Exception as e:
            raise ValueError from e
