PROTODIR = ./src/protos
PROTOSTUBSDIR = ./src/protos/protostubs/

toto:
	echo "hello world"

createprotofiles:
	mkdir -p $(PROTOSTUBSDIR)

protoc-gen: createprotofiles
	protoc -I=$(PROTODIR) $(PROTODIR)/*.proto --js_out=import_style=commonjs:$(PROTOSTUBSDIR) --grpc-web_out=import_style=typescript,mode=grpcwebtext:$(PROTOSTUBSDIR)