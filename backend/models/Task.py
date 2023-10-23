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
            # TODO: No print -> logger
            print("res", res)
            return res  # TODO: Ton try englobe trop d'instructions, seule la ligne 19 peut raise un truc, sors le reste
        except Exception as e:  # TODO: Essaye de catch seulement les exceptions succeptibles d'être raise
            raise ValueError from e
