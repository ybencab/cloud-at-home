FROM python:3

RUN mkdir -p /home/server

WORKDIR /home/server

COPY ./requirements.txt .
COPY ./src .

RUN pip install -r requirements.txt

EXPOSE 8000

WORKDIR /home/server/src

CMD ["gunicorn", "--workers", "2", "--bind", "0.0.0.0:8000", "app:app"]
