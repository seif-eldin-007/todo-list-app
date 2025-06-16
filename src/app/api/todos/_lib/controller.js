import Todo from "@/models/todo";
import {
  createTodoSchema,
  updateTodoSchema,
  deleteTodoSchema,
} from "./validation";
import connectToDatabase from "@/lib/database";
import { formatZodError } from "@/lib/validationUtils";

export async function GET_Todos() {
  try {
    await connectToDatabase();

    const todos = await Todo.find();

    return Response.json(
      {
        success: true,
        message:
          todos.length > 0 ? "Todos fetched successfully" : "No todos found",
        data: todos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Failed to fetch todos:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch todos",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function POST_Todo(req) {
  try {
    const body = await req.json();

    const result = createTodoSchema.safeParse(body);

    if (!result.success) {
      return Response.json(formatZodError(result.error), { status: 400 });
    }

    await connectToDatabase();
    const todo = await Todo.create(result.data);

    return Response.json(
      {
        success: true,
        message: "Todo created successfully",
        data: todo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Failed to create todo:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to create todo",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PATCH_Todo(req) {
  try {
    const body = await req.json();

    const result = updateTodoSchema.safeParse(body);

    if (!result.success) {
      return Response.json(formatZodError(result.error), { status: 400 });
    }

    const { id, ...updateData } = result.data;

    await connectToDatabase();

    const todo = await Todo.findByIdAndUpdate(id, updateData, { new: true });

    if (!todo) {
      return Response.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Todo updated successfully",
        data: todo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to update todo:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to update todo",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE_Todo(req) {
  try {
    const body = await req.json();

    const result = deleteTodoSchema.safeParse(body);

    if (!result.success) {
      return Response.json(formatZodError(result.error), { status: 400 });
    }

    const { id } = result.data;

    await connectToDatabase();
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return Response.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Todo deleted successfully",
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete todo:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to delete todo",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
