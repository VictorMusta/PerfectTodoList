PROTODIR = ./frontend/src/protos
FRONTPROTOSTUBSDIR = ./frontend/src/protos/protostubs/
BACKPROTOSTUBSDIR = ./backend/protos/protostubs/

main: protoc-gen
	docker compose up --build

protoc-gen: protoc-gen-back protoc-gen-front

createprotofiles:
	mkdir -p $(FRONTPROTOSTUBSDIR)
	mkdir -p $(BACKPROTOSTUBSDIR)
	mkdir -p $(PROTODIR)


protoc-gen-front: createprotofiles
	protoc -I=$(PROTODIR) $(PROTODIR)/*.proto --js_out=import_style=commonjs:$(FRONTPROTOSTUBSDIR) --grpc-web_out=import_style=typescript,mode=grpcwebtext:$(FRONTPROTOSTUBSDIR)

protoc-gen-back: createprotofiles
	python3 -m grpc_tools.protoc -I=$(PROTODIR) $(PROTODIR)/*.proto --python_out=$(BACKPROTOSTUBSDIR) --grpc_python_out=$(BACKPROTOSTUBSDIR)

