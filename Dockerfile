# This should be for a basic node application
FROM node 
MAINTAINER Jay Looney

# Some metadata
LABEL Description="Containerized botnet application."

# Copy the app from this directory into the container
ADD [".", "/"]

#RUN ["apt-get", "update"]
#RUN ["apt-get", "upgrade", "-y"]

#RUN apt-get update && apt-get install -y nodejs npm
RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 80
