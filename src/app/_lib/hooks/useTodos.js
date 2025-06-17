"use client";
import { useState } from "react";
import { fetchTodos } from "../api/todoApi";
import { useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTodos()
      .then((data) => {
        console.log(data.data);
        setTodos(data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { todos, loading, error };
}
