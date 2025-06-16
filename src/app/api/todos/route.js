import {
  GET_Todos,
  POST_Todo,
  PATCH_Todo,
  DELETE_Todo,
} from "./_lib/controller";

export async function GET() {
  return await GET_Todos();
}

export async function POST(req) {
  return await POST_Todo(req);
}

export async function PATCH(req) {
  return await PATCH_Todo(req);
}

export async function DELETE(req) {
  return await DELETE_Todo(req);
}
