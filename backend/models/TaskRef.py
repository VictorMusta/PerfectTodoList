import uuid
from sqlalchemy import UUID, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from models.Base import Base


class TaskRef(Base):
    __tablename__ = "task_refs"
    id_task_ref: Mapped[str] = mapped_column(
        UUID(as_uuid=False), primary_key=True, default=uuid.uuid4
    )
    id_task: Mapped[str] = mapped_column(
        UUID(as_uuid=False), ForeignKey("task.id_task", ondelete="CASCADE")
    )
    id_list: Mapped[int] = mapped_column(Integer())

    def as_dict(self) -> dict:
        try:
            return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        except Exception as e:
            raise ValueError from e
