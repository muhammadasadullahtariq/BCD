FROM node
COPY ./ ./app/BCD
WORKDIR /app/BCD
RUN npm install
RUN npx react-native run-ios

