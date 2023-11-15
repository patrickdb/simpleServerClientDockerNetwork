# Use the official OpenJDK image as a base image
FROM openjdk:21

# Set the working directory in the container
WORKDIR /app

# Copy the executable JAR file into the container
COPY target/server-0.0.1-SNAPSHOT.war /app/server-0.0.1-SNAPSHOT.war

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.war"]
