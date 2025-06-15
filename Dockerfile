#
FROM python:3.10-slim

WORKDIR /usr/src/app

#Copy all files from outside the containes, into the container
COPY . .








#Install the python/fastapi dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expo port 8000 to make the appication accesible
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
