import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  status: z.enum(["todo", "in-progress", "done"]),
});

export const updateTodoSchema = z.object({
  id: z.string().min(1, "Todo ID is required"),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  status: z.enum(["todo", "in-progress", "done"]),
});

export const deleteTodoSchema = z.object({
  id: z.string().min(1, "Todo ID is required"),
});
