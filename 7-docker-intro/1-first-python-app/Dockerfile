# syntax=docker/dockerfile:1

# FROM ... 
FROM python:3.13.1-slim-bookworm

# default dir for all commands
WORKDIR /app

# COPY files (requirements.txt, index.py)
# COPY <source> <dest>

# /!\ ORDER to handle CACHE 
# copy host ./requirements vers image /app/requirements.txt
COPY requirements.txt .
# exec le pip install
RUN pip install -r requirements.txt

# copy code then
COPY index.py .

# Indicate ports to expose (no effects, just FYI)
# EXPOSE 80

# CMD (how to start app)
CMD ["python", "index.py"] 
