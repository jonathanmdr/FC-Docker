FROM golang:rc-alpine AS builder

LABEL maintainer="Jonathan Henrique Medeiros"

WORKDIR /build

COPY . .

RUN go build *.go

FROM scratch

WORKDIR /app

COPY --from=builder /build/main .

ENTRYPOINT [ "./main" ]