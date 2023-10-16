# Build stage
FROM node:alpine as build
ARG NEXT_PUBLIC_TEST_A
ARG NEXT_PUBLIC_TEST_B
ARG NEXT_PUBLIC_TEST_C
ARG NEXT_PUBLIC_TOS
ARG NEXT_PUBLIC_INTAKE_DB
ARG NEXT_PUBLIC_GOOGLE_ID
ARG NOTION_SECRET
ARG GEO_API_KEY
ENV NEXT_PUBLIC_TEST_A=$NEXT_PUBLIC_TEST_A
ENV NEXT_PUBLIC_TEST_B=$NEXT_PUBLIC_TEST_B
ENV NEXT_PUBLIC_TEST_C=$NEXT_PUBLIC_TEST_C
ENV NEXT_PUBLIC_TOS=$NEXT_PUBLIC_TOS
ENV NEXT_PUBLIC_INTAKE_DB=$NEXT_PUBLIC_INTAKE_DB
ENV NEXT_PUBLIC_GOOGLE_ID=$NEXT_PUBLIC_GOOGLE_ID
ENV NOTION_SECRET=$NOTION_SECRET
ENV GEO_API_KEY=$GEO_API_KEY
WORKDIR /app
COPY . .
RUN env
RUN npm install
RUN npm run build

# Production stage
FROM node:alpine
WORKDIR /app
COPY --from=build /app /app
ENTRYPOINT ["npm", "start"]